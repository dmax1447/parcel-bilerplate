const OPENWEATHER_API_KEY = '414fe36eeafe76808ed4273b65bfceb7';

import Observer from './observer';
import Person from './person';
import Singleton from './singleton';
import axios from 'axios';
axios.defaults.baseURL = '';

const initWeather = () => {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&APPID=${OPENWEATHER_API_KEY}`)
    .then(resp => {
      console.log(resp.data);
    })
}


const initObserver = () => {
  const observer = new Observer();
  const persons = [...document.querySelectorAll('.js-person')];
  persons.forEach(item => new Person(item, observer));
  window.observer = observer;
  window.person = Person;
  console.log(Person.instanceCounter);
}

const initSingleton = () => {
  const first = new Singleton('first')
  const second = new Singleton('second');
  const third = new Singleton('third');

  third.sayHello();
}


const init = () => {
  initObserver();
  // initSingleton();
}

init();

