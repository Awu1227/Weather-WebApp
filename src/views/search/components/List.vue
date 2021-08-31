<template>
  <div class="list">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.$store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button" @click="handleCityClick(item)">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="setItemRef"
      >
        <div class="title">{{ key }}</div>
        <div class="itemlist">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  props: {
    hot: Array,
    cities: Object,
    letter: String,
  },
  data() {
    return {
      itemRef: [],
      toElement: [],
    }
  },
  methods: {
    setItemRef(el) {
      if (el) {
        this.itemRef.push(el)
      }
    },
    handleCityClick(city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    },
  },
  mounted() {
    this.bs = new BetterScroll('.list')
  },
  beforeUpdate() {
    this.itemRef = []
  },
  watch: {
    letter() {
      if (this.letter) {
        this.itemRef.forEach(element => {
          if (element.innerText.includes(this.letter)) {
            this.toElement = element
            // console.log(toElement);
          }
        })
        this.bs.scrollToElement(this.toElement)
      }
    },
  },
}
</script>

<style scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 4.98rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.title {
  background: #eee;
  padding: 0.2rem;
  color: #666;
  font-size: 0.2rem;
}
.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  text-align: center;
  padding: 0.1rem 0;
  margin: 0.4rem;
  border-radius: 0.06rem;
  border: 0.02rem solid #ccc;
}
.item {
  padding: 0.2rem;
}
</style>
