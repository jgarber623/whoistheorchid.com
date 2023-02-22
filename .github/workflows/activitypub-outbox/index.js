import * as crypto from 'node:crypto';
import * as process from 'node:process';
import { Sha256Signer } from 'activitypub-http-signatures';

import activitypubConfig from '../../../src/_data/activitypub.js';

const { id: user, followers, outbox } = activitypubConfig;

const { ACTOR_PRIVATE_KEY } = process.env;

const jsonldContentType = 'application/ld+json; profile="https://www.w3.org/ns/activitystreams"';

const fetchObject = async id => {
  const response = await fetch(id, {
    headers: {
      accept: jsonldContentType
    }
  });

  return await response.json();
};

const signAndSendActivity = async ({ activity, url }) => {
  console.log('📤 Generating signature for Activity:', activity);

  const method = 'POST';

  const body = JSON.stringify(activity);

  const headers = {
    date: new Date().toUTCString(),
    digest: `sha-256=${crypto.createHash('sha256').update(body).digest('base64')}`,
    host: new URL(url).hostname
  };

  const signer = new Sha256Signer({
    headerNames: ['(request-target)'].concat(Object.keys(headers)),
    publicKeyId: `${user}#main-key`,
    privateKey: ACTOR_PRIVATE_KEY
  });

  const signature = signer.sign({ url, method, headers });

  const request = new Request(url, {
    method,
    headers: new Headers({
      ...headers,
      'content-type': jsonldContentType,
      signature
    }),
    body
  });

  console.log('📤 Sending signed Activity to Inbox:', url);
  console.log('Request headers:', Object.fromEntries(request.headers));
  console.log('Request body:', body);

  const response = await fetch(request);

  console.log('📥 Received response with status:', response.status);
  console.log('Response headers:', Object.fromEntries(response.headers));
  console.log('Response body:', await response.text());

  return response;
};

const { orderedItems: targets } = await fetchObject(followers);
const { orderedItems: activities } = await fetchObject(outbox);

for (const activity of activities) {
  for (const target of targets) {
    const { inbox } = await fetchObject(target);

    signAndSendActivity({ activity, inbox });
  }
}
