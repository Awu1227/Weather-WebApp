<template>
  <ul class="list text-blue-400">
    <li class="item " v-for="item of letters" :key="item" :ref="setItemRef" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    props:{
      cities:Object
    },
    computed:{
      letters(){
        const letters = []
        for(let i in this.cities){
          letters.push(i)
        }
        return letters
      }
    },
    data(){
      return{
        touchStatus: false,
        itemRefs:[],
        startY: 0,
        timer: null
      }
    },
    methods: {
      handleLetterClick(e){
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart(){
        this.touchStatus = true
      },
      handleTouchMove(e){
        if(this.touchStatus){
          // 做节流处理
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(()=>{
          const touchY = e.touches[0].clientY - 80
          const index = Math.floor((touchY - this.startY) / 24)
          if(index >= 0 && index < this.letters.length) {
          this.$emit('change',this.letters[index])
          }
          },16)
        }
      },
      handleTouchEnd(){
        this.touchStatus = false
      },
      setItemRef(el) {
      if (el) {
        this.itemRefs.push(el)
      }
    }
    },
    beforeUpdate(){
      this.itemRefs = []
    },
    updated(){
      this.startY = this.itemRefs[0].offsetTop
    }
  }
</script>

<style scoped>
.list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 4.98rem;
  right: 0;
  bottom: 0;
  width: .9rem;
}
.item{
  text-align: center;
}
</style>