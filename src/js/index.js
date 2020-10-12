import Observer from './observer.js';


class Person {
  constructor(name) {
    this.name = name;
    this.$el = document.querySelector('.js-person-mary')
    this.$btnSubscribe = this.$el.querySelector('.js-subscribe');
    this.$btnUnsubscribe = this.$el.querySelector('.js-unsubscribe');
    this.$state = this.$el.querySelector('.js-state');
    console.log('init Mary', this);
    this.onMessageFromObserver = this.onMessageFromObserver.bind(this);
  }

  onMessageFromObserver(message) {
    console.log(`Hello from ${this.name}, received message: "${message}"`)
  }
}

const observer = new Observer();
const mary = new Person('Mary');

mary.$btnSubscribe.addEventListener('click', () => {
  observer.subscribe('mary', mary.onMessageFromObserver);
})

mary.$btnUnsubscribe.addEventListener('click', () => {
  observer.ubsubscribe('mary');
})

window.observer = observer;
window.mary = mary;
