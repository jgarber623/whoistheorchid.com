import * as crypto from 'node:crypto';
import * as process from 'node:process';
import { Sha256Signer } from 'activitypub-http-signatures';

import Follow from './lib/follow.js';

import { id as user } from '../../../src/_data/activitypub.js';

const { ACTOR_PRIVATE_KEY } = process.env;

const { headers, body: activity } = JSON.parse(process.argv[2]);

const jsonldContentType = 'application/ld+json; profile="https://www.w3.org/ns/activitystreams"';

const fetchObject = async id => {
  const response = await fetch(id, {
    headers: {
      accept: jsonldContentType
    }
  });

  return await response.json();
};

const handleFollowActivity = async followActivity => {
  const { actor } = followActivity;
  const { inbox: url } = await fetchObject(actor);

  const activity = {
    '@context': 'https://www.w3.org/ns/activitystreams',
    id: `${user}/${crypto.randomBytes(16).toString('hex')}`,
    type: 'Accept',
    actor: user,
    object: followActivity
  };

  await signAndSendActivity({ activity, url });

  Follow.create(actor);
};

const handleUndoActivity = async undoActivity => {
  const { actor, object } = undoActivity;

  if (actor !== object?.actor) {
    throw new Error('Undo Activity actor and embedded object actor do not match');
  }

  switch(object.type.toLowerCase()) {
    case 'follow':
      Follow.destroy(actor);
      break;
    default:
      throw new Error(`Received Undo Activity with object of unknown type: ${object.type}`);
  }
};

const signAndSendActivity = async ({ activity, url }) => {
  console.log('📤 Generating signature for Activity:', activity);

  const headers = {
    date: new Date().toUTCString(),
    digest: `sha-256=${crypto.createHash('sha256').update(JSON.stringify(activity)).digest('base64')}`,
    host: new URL(url).hostname
  };

  const method = 'POST';

  const signer = new Sha256Signer({
    publicKeyId: `${user}#main-key`,
    privateKey: ACTOR_PRIVATE_KEY
  });

  const signature = signer.sign({ url, method, headers });

  console.log('📤 Sending signed Activity to Inbox:', url);

  const response = await fetch(url, {
    method,
    headers: {
      ...headers,
      'content-type': jsonldContentType,
      signature
    },
    body: activity
  });

  console.log('Response status:', response.status);
  console.log('Response headers:', Object.fromEntries(...response.headers));
  console.log('Response body:', await response.json());

  return response;
};

console.log('📥 Received new payload to ActivityPub Inbox');
console.log('Payload headers:', headers);
console.log('Payload activity:', activity);

switch(activity.type.toLowerCase()) {
  case 'follow':
    handleFollowActivity(activity);
    break;
  case 'undo':
    handleUndoActivity(activity);
    break;
  default:
    throw new Error(`Received Activity of unknown type: ${activity.type}`);
}
