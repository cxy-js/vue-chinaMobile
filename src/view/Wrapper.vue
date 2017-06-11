<template>
  <div class="wrapper">
    <v-banner></v-banner>
    <v-moneylist></v-moneylist>
    <v-play></v-play>

  </div>
</template>
<script type="text/javascript">
import Banner from '../view/Banner.vue'
import Money from '../view/Money-lists.vue'
import Play from '../view/play.vue'
export default{
  components:{
    'v-banner':Banner,
    'v-moneylist':Money,
    'v-play':Play

  }
}
</script>
<style scoped>
.wrapper{
  margin-top:40px;
}
.mint-swipe{
	width:100%;
	height:200px
}
.mint-swipe-item img{
	width:100%;
	height:100%
}

</style>
