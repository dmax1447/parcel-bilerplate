import axios from 'axios';
const YMAPS_API_KEY = 'b8c7161f-fd0f-46cf-acf8-b68102e4340c';

const mskCoord = [55.726874, 37.512641];
const vkoCoord = [55.604619, 37.286048];

const initMap = () => {
  const map = new ymaps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: 9
    }, {
      searchControlProvider: 'yandex#search'
    });

  axios.get('http://localhost:1234/public/points.json', {

  }).then((response) => {
    console.log(response, 'points');
  });

  // расстояние между точками по прямой
  const directDistance = ymaps.coordSystem.geo.getDistance(mskCoord, vkoCoord);
  console.log(directDistance, 'directDistance');

  // расстояние между точками по дорогам
  const points = [{type: 'wayPoint', point: mskCoord}, {type: 'wayPoint', point: vkoCoord}];
  ymaps.route(points)
    .then(route => {
      console.log(route.getLength(), 'road distance');
      map.geoObjects.add(route);

    })









}

ymaps.ready(initMap);

