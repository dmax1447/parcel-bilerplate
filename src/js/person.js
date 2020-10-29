export  default class Person {
  static classId = 'super Person'
  static instanceList = [];
  static instanceCounter = 0;

  static updateStaticProperties(instance) {
    this.instanceCounter += 1;
    this.instanceList.push(instance);
  }


  constructor(container, observer) {
    this.$container = container;
    this.name = this.$container.dataset.name;
    this.$btnSubscribe = this.$container.querySelector('.js-subscribe');
    this.$btnUnsubscribe = this.$container.querySelector('.js-unsubscribe');
    this.$state = this.$container.querySelector('.js-state');
    this.onMessageFromObserver = this.onMessageFromObserver.bind(this);
    this.init();
    this.observer = observer;

    Person.updateStaticProperties(this);
  }


  onMessageFromObserver(message) {
    console.log(`Hello from ${this.name}, received message: "${message}"`)
    this.$state.textContent = ` ${message}` ;
  }

  init() {
    this.$btnSubscribe.addEventListener('click', () => {
      this.observer.subscribe(this.name, this.onMessageFromObserver);
    })
    this.$btnUnsubscribe.addEventListener('click', () => {
      this.observer.unsubscribe(this.name);
    })
  }
}
