const OWKEY = '414fe36eeafe76808ed4273b65bfceb7';

export default class Observer {
  constructor() {
    this.subsribersList = [];
    this.$btnNotify = document.querySelector('.js-notify');
    this.$message = document.querySelector('.js-observer-input');
    this.currentWeather = null;
    this.notify = this.notify.bind(this);
    this.onBtnNotifyClick = this.onBtnNotifyClick.bind(this);
    this.init();
  }

  init() {
    this.$btnNotify.addEventListener('click', this.onBtnNotifyClick);

    console.log('init Observer')
  }


  subscribe(subscriberId, callback) {
    console.log('adding subscriber:', subscriberId);
    this.subsribersList.push({
      subscriberId,
      callback
    })
  }

  unsubscribe(item) {
    console.log('remove subscriber: ', item)
    const idx = this.subsribersList.indexOf(el => el.id === item.id)
    this.subsribersList.splice(idx, 1)
  }

  onBtnNotifyClick() {
    const message = this.$message.value;
    this.notify(message);
  }

  notify(message) {
    this.subsribersList.forEach(item => item.callback(message))
  }
}




