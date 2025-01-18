import manifest from "../../manifest.webmanifest.json" with { type: "json" };

const { description, name, start_url } = manifest;

const url = new URL(start_url);

const id = new URL("activitypub/actor", url);
const type = "Group";
const discoverable = true;

const attributionDomains = [url.hostname];
const preferredUsername = "theorchid";
const published = "2009-01-12T18:48:50Z";
const summary = `<p>${description}</p>`;

const icon = {
  mediaType: "image/png",
  type: "Image",
  url: new URL(manifest.icons[2].src, url),
};

const image = {
  mediaType: "image/jpeg",
  type: "Image",
  url: new URL("assets/images/cover.jpg", url),
};

const publicKey = {
  id: `${url}#main-key`,
  owner: url,
  publicKeyPem: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs5uQiGtTk52bLcvV8fQ0\npDbWT7E14biC8FAWQKM5RiAJO6jIRJnClP1P9WOnlatE0Byv7h3scEGNUlKcyWxk\nPvlzHnCTsVFrv8XNxZ/HbfnB2d3p/RkpiiMI8HwedndRMcRbNX2uYYqRg51CS2wl\n1AJm8CKkBXpnQ+7qLBrUxoLEPVxcZ+fu6Pb2ofZatREos8U0OBGb9ZBfR0Z0rQRM\nXEXMnCFCzIF6RCWkATxcCS7B30sdZeB7TXG9Rb4EIMlIEcdlCYNR+Y/oWjK4894p\nMRCncTGp0cOMB3ZniF/abkZphEUwk95oRzKzfqllus5ya8TK/JMD8GjjQVlMdyJm\nhQIDAQAB\n-----END PUBLIC KEY-----\n",
};

/* eslint-disable sort-keys */
export default {
  id,
  type,
  preferredUsername,
  name,
  summary,
  url,
  discoverable,
  published,
  attributionDomains,
  publicKey,
  icon,
  image,
};
/* eslint-enable sort-keys */
