<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>

    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './view/Footer.vue'
export default {
  components:{
    'v-footer':Footer,
    'v-header':Header
  }
}
</script>

<style>
  
</style>
