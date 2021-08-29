<template>
  <ul class="list text-blue-400">
    <li class="item " v-for="(item,key) of cities" :key="key" @click="handleLetterClick" >{{key}}</li>
  </ul>
</template>

<script>
  export default {
    props:{
      cities:Object
    },
    methods: {
      handleLetterClick(e){
        this.$emit('change',e.target.innerText)
      }
    },
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