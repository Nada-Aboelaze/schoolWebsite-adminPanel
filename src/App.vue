<template>
 <!-- <div>
   <h1>hello</h1>
   <button class="btn btn-primary">test </button>
 </div> -->
 <div>
 <navComp/>
 <router-view></router-view>
 <h1></h1>
</div>
</template>

<script>
// import homeComp from './components/pages/home.vue'
import navComp from './components/pages/nav.vue'
export default {
  name: 'App',
  components: {
   navComp
  },
  data(){
    return{
      

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;

}
.bg-color{
}
</style>
