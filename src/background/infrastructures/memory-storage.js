const db = {};

export default class MemoryStorage {
  set(name, value) {
    let data = JSON.stringify(value);
    if (typeof data === 'undefined') {
      throw new Error('value is not serializable');
    }
    db[name] = data;
  }

  get(name) {
    let data = db[name];
    if (!data) {
      return undefined;
    }
    return JSON.parse(data);
  }
}
