<template>
  <div class="strategy">
    <!--4G全攻略-->
    <img :src="img" alt="" v-for="img in imgs">
  </div>
</template>
<script type="text/javascript">
  export default {
    data (){
      return {
        imgs:[
          '../../.././static/img/4Gstrategy/manhua1.jpg',
          '../../.././static/img/4Gstrategy/manhua2.jpg',
          '../../.././static/img/4Gstrategy/manhua3.jpg',
          '../../.././static/img/4Gstrategy/manhua4.jpg',
          '../../.././static/img/4Gstrategy/manhua5.jpg',
          '../../.././static/img/4Gstrategy/manhua6.jpg',
          '../../.././static/img/4Gstrategy/manhua7.jpg',
          '../../.././static/img/4Gstrategy/manhua8.jpg',
          '../../.././static/img/4Gstrategy/manhua9.jpg',
        ]
      }
    }
  }
</script>
<style scoped>
  .strategy{
    width:100%;
    margin-bottom:40px;
    margin-top:50px;
  }
  img{
    display:block;
    max-width:100%;

  }
</style>
