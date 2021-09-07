# ⛅Weather-WebApp
一款用于天气查询的WebApp

## 注意事项

代码提交步骤：

1. `git add .`
2. `git cz`

Vite 获取环境变量方式：

```js
const ENV = import.meta.env
console.log('ENV', ENV)
```

统一请求处理，封装 fetch 进行网络请求，示例代码：

```js
// 例如请求这个地址：https://devapi.qweather.com/v7/weather/now?location=101010100&key=你的KEY
// 看 vite 配置文件对地址的代理缩写，此示例为 /weather
const options = {
  location: '101010100',
}
Get('/weather/now', options)
```
