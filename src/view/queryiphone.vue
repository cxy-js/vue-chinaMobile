<template>
  <div class="queryiphone">
    <!--手机号码归属地查询-->
    <div class="iphone">
      <input type="tel" v-model="tel"><span>查询</span>
    </div>
    <div class="iphoneinfo">
      <li>查询号码:{{tel}}</li>
      <li>号码所在地:{{}}</li>
      <li>号码所在地:{{}}</li>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data (){
      return {
        tel:15862554986,
       
      }
    },    
    created(){
      let xhr=new XMLHttpRequest()
      console.log(xhr)
    },
    methods:{

      
    }
  }
</script>
<style scoped>
  .queryiphone{
    margin-top:50px;
    width:100%
  }
  .iphone{
    width:90%;
    height:30px;
    line-height: 30px;
    margin:0 auto;
    padding:10px 0 20px 0
  }
  .iphone input{
    display:inline-block;
    height:30px;
    outline:none;
    width:80%
  }
  .iphone span{
    display:inline-block;
    height:32px;
    width:18%;
    text-align: center;
    border:1px solid #ccc;
    border-left:none
  }
  .iphoneinfo{
    width:90%;
    margin:0 auto;
  }
</style>
