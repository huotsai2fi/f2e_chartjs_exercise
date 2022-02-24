import 'dotenv/config';
import '@babel/polyfill';
import getWeatherData from './data/index.js';
import { lineChart } from './my_chart/index.js';

(async function () {
  const temperatureCtx = document
    .getElementById('temperature')
    .getContext('2d');

  const predictData = await getWeatherData(process.env.AUTH_STRING);

  const localData = predictData.location.find(
    (i) => i.locationName === '臺北市'
  );

  const taipei = {
    maxT: {
      startTime: localData.weatherElement
        .find((i) => i.elementName === 'MaxT')
        .time.map((i) => i.startTime),
      endTime: localData.weatherElement
        .find((i) => i.elementName === 'MaxT')
        .time.map((i) => i.endTime),
      value: localData.weatherElement
        .find((i) => i.elementName === 'MaxT')
        .time.map((i) => i.elementValue[0].value),
    },
    minT: {
      startTime: localData.weatherElement
        .find((i) => i.elementName === 'MinT')
        .time.map((i) => i.startTime),
      endTime: localData.weatherElement
        .find((i) => i.elementName === 'MinT')
        .time.map((i) => i.endTime),
      value: localData.weatherElement
        .find((i) => i.elementName === 'MinT')
        .time.map((i) => i.elementValue[0].value),
    },
  };

  const temperatureLineCart = lineChart(
    temperatureCtx,
    taipei.maxT.startTime,
    taipei.maxT.value,
    taipei.minT.value
  );
})();
