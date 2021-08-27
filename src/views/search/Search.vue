<template>
<div>
  <Header></Header>
  <List></List>
  <Letters/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Letters from './components/Letters.vue'
export default {
  components:{
    Header,
    List,
    Letters
  },
  setup () {
    

    return {}
  }
}
</script>

<style  scoped>

</style>