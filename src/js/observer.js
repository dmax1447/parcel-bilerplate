export default class Observer {
  constructor() {
    this.subsribersList = [];
    this.$btnNotify = document.querySelector('.js-notify');
    this.notify = this.notify.bind(this);
    this.init();
  }

  init() {
    this.$btnNotify.addEventListener('click', this.notify);
    console.log('init Observer')
  }


  subscribe(subscriberId, callback) {
    console.log('adding subscriber:', subscriberId);
    this.subsribersList.push({
      subscriberId,
      callback
    })
  }

  unsubsribe(item) {
    const idx = this.subsribersList.indexOf(el => el.id === item.id)
    this.subsribersList.splice(idx, 1)
  }

  notify(payload) {
    console.log('start notify');
    this.subsribersList.forEach(item => item.callback(payload))
  }
}




