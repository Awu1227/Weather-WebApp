const HeFengApi = {
  geoapi: 'https://geoapi.qweather.com/v2', // 地理信息API
  weather: 'https://devapi.qweather.com/v7/weather', // 城市天气API
  indices: 'https://devapi.qweather.com/v7/indices', // 天气指数API
  warning: 'https://devapi.qweather.com/v7/warning', // 灾害预警API
  air: 'https://devapi.qweather.com/v7/air', // 空气API
  historical: 'https://datasetapi.qweather.com/v7/historical', // 历史数据API
}

const baseUrl = base => HeFengApi[base]

console.log(baseUrl('geoapi'))
