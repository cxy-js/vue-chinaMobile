<template>
  <div class="">
    <!--套餐余量-->
    <div class="white">
      <span></span>
      <span></span>
      <span></span>
      <p>流量</p>
      <i></i>
    </div>
    <div class="flow">
      <div class="flow-left">
        <span>本月<router-link :to="{name:'liuliang'}">流量</router-link>总量</span>
        <span>3.59GB</span>
      </div>
      <div class="flow-right">
        <span>本月<router-link :to="{name:'liuliang'}">流量</router-link>剩余</span>
        <span>1.34GB</span>
      </div>
    </div>
    <v-flowcombo></v-flowcombo>
  </div>
</template>
<script type="text/javascript">
import flowcombo from '../homePlay/packageAllowance-combolist'
  export default {
    components:{'v-flowcombo':flowcombo}
  }
</script>
<style scoped>

  .white{
    width:100%;
    height:53px;
    background:#c43f6a;
    text-align: center;
    padding-top:10px;
     margin-top:40px;
  }
  .white span{
    display:inline-block;
    background:#fff;
    width:6px;
    border-radius:2px
  }
  .white span:nth-child(1){
    height:20px
  }
  .white span:nth-child(2){
    height:8px
  }
  .white span:nth-child(3){
    height:15px
  }
  .white p{
    font-size:14px;
    color:#fff;
    margin-top:5px;

  }
    .white i{
      display:inline-block;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid #fff;
    }
    .flow{
      width:100%;
      

      text-align: center;
    }
    .flow-left,.flow-right{
      display:inline-block;
      text-align: center;
      height:40px;
      width:48%;
      margin-top:15px;
    }
    .flow-left span a,.flow-right span a{
      color:blue;
      text-decoration:underline
    }
    .flow-left span,.flow-right span{
      display:block;
      margin:5px 0;
      letter-spacing: 2px
    }
    .flow-left{
      border-left:none
    }
    .flow-right{
      border-left:1px solid #ccc
    }
</style>
