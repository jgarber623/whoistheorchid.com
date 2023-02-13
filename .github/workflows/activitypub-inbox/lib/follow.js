import * as fs from 'node:fs';

export default class Follow {
  static #dataFilePath = './src/_data/followers.json';

  static #readDataFileSync = () => {
    return new Set(JSON.parse(fs.readFileSync(this.#dataFilePath)));
  };

  static #writeDataFileSync = data => {
    return fs.writeFileSync(this.#dataFilePath, JSON.stringify(Array.from(data)));
  };

  static create(follower) {
    const followers = this.#readDataFileSync();

    followers.add(follower);

    this.#writeDataFileSync(followers);

    return followers;
  }

  static destroy(follower) {
    const followers = this.#readDataFileSync();

    followers.delete(follower);

    this.#writeDataFileSync(followers);

    return followers;
  }
}
