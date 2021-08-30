<template>
<div>
  <Header :cities = "cities"></Header>
  <List :cities = "cities" :hot = "hotCities" :letter = "letter"></List>
  <Letters :cities = "cities" @change="hanleLetterChange"/>
</div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Letters from './components/Letters.vue'

export default {
  components:{
    Header,
    List,
    Letters
  },
  data(){
    return{
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('../../../static/mock/city.json').then(this.handleGetCitiesInfo)
    },
    handleGetCitiesInfo(res){
      res = res.data
      if(res.ret&& res.data) {
        const data = res.data
        this.cities=data.cities
        this.hotCities = data.hotCities
        // console.log(this.cities);
      }
    },
    hanleLetterChange(letter){
      this.letter = letter
    }
  },

  mounted(){
    this.getCityInfo()
  }


  
}
</script>

<style  scoped>

</style>