import axios from 'axios';

const initMap = () => {
  const map = new ymaps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: 9
    }, {
      searchControlProvider: 'yandex#search'
    });

    axios.get('/assets/data/points.json').then((response) => {
      console.log(response);
  });

}

ymaps.ready(initMap);


