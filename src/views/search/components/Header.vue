<template>
  <div>
    <div
      class="container border-2 h-20 bg-blue-400 flex justify-center relative"
    >
      <router-link to="/"><span class="back"></span></router-link>
      <div class="absolute top-2">
        <span class="span1">境内</span>
        <span class="span2">国际/港澳台</span>
      </div>
      <div class="search">
        <input
          type="text"
          class="search-input"
          placeholder="输入城市名、拼音或字母查询"
          v-model="keyword"
        />
      </div>
      <div class="search-content" v-show="keyword" ref="search">
        <ul>
          <li
            class="search-item border-bottom"
            v-for="item of list"
            :key="item"
            @click="handleCityClick(item)"
          >
            {{ item.name }}
          </li>
          <li class="search-item border-bottom" v-show="!list.length">
            没有找到该城市
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null,
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    },
  },
  methods: {
    handleCityClick(city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    },
  },
  mounted() {
    this.bs = new BetterScroll(this.$refs.search)
  },
}
</script>

<style scoped>
.back {
  position: absolute;
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  transform: rotateZ(45deg);
  left: 1rem;
  top: 0.8rem;
}
.span1 {
  @apply border-solid border border-white inline-block w-24 h-7 bg-white   text-blue-400 text-center float-left;
}
.span2 {
  @apply border-solid border border-white inline-block w-24 h-7 bg-blue-400   text-white text-center float-left;
}
.search {
  @apply absolute h-7 bg-blue-400 bottom-1;
  padding: 0 0.7rem;
  width: 100%;
}
.search-input {
  @apply h-6 text-center rounded-lg;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  color: #666;
  padding: 0 0.5rem;
}
.search-content {
  height: 156vw;
  z-index: 1;
  position: absolute;
  overflow: hidden;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}
.search-item {
  padding-left: 0.2rem;
  color: #666;
  background: #fff;
}
</style>
