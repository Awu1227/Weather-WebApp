<template>
  <div id="main">
    <home-top />
    <now-weather />
    <button @click="handleClick">Fetch</button>
    <h1>
      我是首页，当前城市为{{ this.$store.state.city }}，location为{{
        this.$store.state.location
      }}
    </h1>
    <realtime />
    ,,,,,,,,,
  </div>
</template>

<script>
import Get from 'utils/request.js'
import Realtime from './Realtime.vue'
import HomeTop from './components/Home-top.vue'
import NowWeather from './components/Now-weather.vue'

export default {
  components: { Realtime, HomeTop, NowWeather },
  setup() {
    const handleClick = async () => {
      const options = {
        location: '101010100',
      }
      const data = await Get('/weather/now', options)
      console.log(data)
    }
    return {
      handleClick,
    }
  },
}
</script>

<style scoped>
#main {
  background-image: url(https://cdn.qweather.com/img/plugin/190516/bg/h5/darkd.png);
  background-repeat: no-repeat;
  background-color: rgb(49, 58, 68);
  background-position: center -23.4rem;
}
</style>
