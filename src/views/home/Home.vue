<template>
  <router-link to="/search"
    ><div class="top-2  w-40 bg-green-300">搜索页</div></router-link
  >
  <router-link to="/changeskin"
    ><div class="top-2  w-40 bg-yellow-200">换肤页</div></router-link
  >
  <router-link to="/setting"
    ><div class="top-2  w-40 bg-purple-300">设置页</div></router-link
  >
  <div>我是首页</div>
  <button @click="handleClick">Fetch</button>
</template>

<script>
import Get from 'utils/request.js'
export default {
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

<style scoped></style>
