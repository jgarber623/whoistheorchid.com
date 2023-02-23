const process = require('node:process');
const { Octokit } = require('octokit');

const { GITHUB_ACCESS_TOKEN } = process.env;

module.exports = {
  onSuccess: async () => {
    const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

    await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
      owner: 'jgarber623',
      repo: 'whoistheorchid.com',
      event_type: 'process-activitypub-outbox'
    });
  }
};
