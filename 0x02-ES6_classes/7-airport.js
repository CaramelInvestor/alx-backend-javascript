export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  str() {
    return `[object ${this._code}]`;
  }
}