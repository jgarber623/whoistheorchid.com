import actor from "./actor.js";

const { url } = actor;

export default [
  {
    name: "Website",
    type: "PropertyValue",
    value: `<a href="${url}" rel="me"><span class="invisible">https://</span>${url.hostname}</a>`,
  },
  {
    name: "Bandcamp",
    type: "PropertyValue",
    value: `<a href="https://theorchid.bandcamp.com/music" rel="me"><span class="invisible">https://</span>theorchid.bandcamp.com/music</a>`,
  },
];
