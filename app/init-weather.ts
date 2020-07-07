export class Init {
  load() {
    if (localStorage.getItem('weather-items') === null || localStorage.getItem('weather-items') === undefined) {
      console.log('Weather items not found!!!');
      const weatherItems = {};
      localStorage.setItem('weather-items', JSON.stringify(weatherItems));
    } else {
      console.log('Loading weatherItems..');
    }
  }
}

import { WeatherItem } from './weather/weatherInterface';

export const WEATHER_ITEMS : WeatherItem[] = []