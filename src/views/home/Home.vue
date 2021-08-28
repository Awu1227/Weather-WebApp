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
  <realtime/>
</template>

<script>
import Realtime from './Realtime.vue';
export default {
  components: { Realtime },
  setup() {},
};
</script>

<style scoped></style>
