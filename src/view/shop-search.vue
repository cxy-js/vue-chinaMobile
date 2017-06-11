<template>
  <div class="search">
    <form class="" action="http://www.00h5.com" method="post">
      <input type="search" placeholder='iphone' v-model="lis"><span>搜索</span>
    </form>
    <div class="my-search">
      <div class="title">
        <h3>搜索推荐</h3>
      </div>

      <ul>
        <li v-for="li in list" @click="add(li)">{{li}}</li>
      </ul>

    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name:'search',
    data(){
      return {
        list:['iphone8','小米max2','华为','OPPO R11','魅族','三星','金立2017','VIVO'],
        lis:''
      }
    },
    methods:{
      add(i){
        this.lis=i

      }
    }

  }
</script>
<style scoped>
.search{
   margin-top:50px;
}
  .search,.title,.my-search,.ul{
    width:100%;

  }
    .search form{
    margin:10px 2% 10px 2%;
    position:relative
  }
  .search form input{
    display:inline-block;
    height:30px;
    width:80%;
    outline:none;
    border:1px solid #ccc;

    background:#f5f5f5
  }
  .search form span{
    display: inline-block;
    width: 19%;
    height: 28px;
    line-height: 28px;
    margin-left: 2px;
    text-align: center;
    border: 1px solid #ccc;
    position: absolute;
    letter-spacing: 2px;
  }
  .title{
    text-align: center
  }
  .my-search ul{

    text-align: center;
  }
  .my-search li{
    border: 1px solid #ccc;
    height: 30px;
    width: 22%;
    text-align: center;
    display: inline-block;
    line-height: 30px;
    font-size: 14px;
    margin: 10px 1px;
    padding: 0px 1px;

  }
  .my-search li:nth-child(odd){
    color:red
  }
</style>
