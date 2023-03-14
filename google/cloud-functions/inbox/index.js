import { default as httpSignatureParser } from 'activitypub-http-signatures';
import { Octokit } from 'octokit';

const { GITHUB_ACCESS_TOKEN } = process.env;

const user = 'https://whoistheorchid.com/users/theorchid';

const fetchObject = async id => {
  const response = await fetch(id, {
    headers: {
      accept: 'application/ld+json; profile="https://www.w3.org/ns/activitystreams"'
    }
  });

  return await response.json();
};

export async function inbox(req, res) {
  console.log('📥 Received new Inbox request!');
  console.log('Headers:', req.headers);

  // Explicitly reset the URL using the non-standard X-Forwarded-Path header to
  // obtain the initial requested URL to Netlify. This value is hard-coded in
  // the site's `netlify.toml` configuration file.
  req.url = req.get('x-forwarded-path');

  // Explicitly reset the Host header since Netlify clobbers the inbound request
  // during the proxy rewrite and odds are good that signature validation will
  // need the proper value.
  req.headers.host = req.get('x-forwarded-host');

  const { headers, method, url } = req;

  if (method.toLowerCase() !== 'post') {
    return res.status(405).end();
  }

  if (!req.is(['application/activity+json', 'application/ld+json'])) {
    return res.status(415).end();
  }

  if (!req.get('signature')) {
    return res.status(401).end();
  }

  const body = JSON.parse(req.body.toString());

  console.log('Body:', body);

  if (body.actor === user) {
    return res.status(422).end();
  }

  try {
    const signature = httpSignatureParser.parse({ headers, method, url });

    const { publicKey } = await fetchObject(signature.keyId);

    if (!signature.verify(publicKey.publicKeyPem)) {
      return res.status(403).send('HTTP signature could not be verified');
    }
  } catch (error) {
    console.error(error);

    return res.status(500).end();
  }

  const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

  await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
    owner: 'jgarber623',
    repo: 'whoistheorchid.com',
    event_type: 'process-activitypub-inbox',
    client_payload: { headers, body }
  });

  return res.status(202).end();
}
