export default class Singleton {
  static instance = null;

  constructor(name) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.name = name;
    return Singleton.instance;
  }

  sayHello() {
    console.log(this.name);
  }
}
