import * as process from 'node:process';
import { Octokit } from 'octokit';

const { GITHUB_ACCESS_TOKEN } = process.env;

export const onSuccess = async () => {
  const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

  await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
    owner: 'jgarber623',
    repo: 'whoistheorchid.com',
    event_type: 'process-activitypub-outbox'
  });
};
