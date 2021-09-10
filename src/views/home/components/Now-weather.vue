<template>
  <div class="main">
    <div class="temperature">28°</div>
    <div class="weather">
      <img
        src="	https://cdn.qweather.com/img/plugin/190516/icon/c/100d.png"
        alt=""
      />
      <span>晴</span>
    </div>
    <div class="air-quality">
      <span>良</span>
      <span class="qualitynum">88</span>
      <img
        src="https://cdn.qweather.com/img/plugin/190516/icon/h5/aqi-right.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.main {
  padding-left: 0.8rem;
  width: 100%;
  height: 14rem;
}
.temperature {
  margin-top: 6rem;
  font-size: 4rem;
  color: #fff;
}
.weather {
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: #fff;
}
.weather img {
  width: 2rem;
  height: 2rem;
}
.air-quality {
  margin-top: 0.6rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4.6rem;
  height: 1.6rem;
  font-size: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(121, 112, 112, 0.849);
}
.air-quality span {
  margin-left: 0.5rem;
}
.qualitynum {
  color: #a9a538;
}
.air-quality img {
  width: 0.6rem;
  height: 0.8rem;
  margin-right: 0.5rem;
}
</style>
