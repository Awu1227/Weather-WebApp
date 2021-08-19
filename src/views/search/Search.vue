<template>
  <div class="container border-2 h-20 bg-blue-400 flex justify-center relative">
    <div class="absolute top-2">
      <span class="span1">境内</span>
      <span class="span2">国际/港澳台</span>
    </div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名、拼音或字母查询">
    </div>
  </div>

</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.span1 {
  @apply border-solid border border-white inline-block w-24 h-7 bg-white   text-blue-400 text-center float-left
}
.span2 {
  @apply border-solid border border-white inline-block w-24 h-7 bg-blue-400   text-white text-center float-left
}
.search {
  @apply absolute h-7 bg-blue-400 bottom-1;
  padding: 0 .7rem;
  width: 100%;
}
.search-input {
  @apply h-6 text-center rounded-lg ;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  color:#666;
  padding: 0 .5rem;
}
</style>
