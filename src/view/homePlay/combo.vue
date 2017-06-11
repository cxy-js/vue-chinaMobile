<template>
  <div class="">
    <!--套餐订购-->
    <div class="search">
      <form class="" action="http://www.00h5.com" method="post">
        <input type="search" placeholder='输入搜索关键词'><span>搜索</span>
      </form>
    </div>
    <!--列表-->
    <div class="combolist" v-for="item in comboorderArr">
      <div class="left">
        <img :src="item.img" alt="">
        <span>{{item.imgcontent}}</span>
      </div>
      <div class="right">
        <span class="title">{{item.title}}</span>
        <span class="price">{{item.price}}</span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        comboorderjson:'../.././static/comboorder/comboorder.json',
        comboorder:{},
        comboorderArr:[]
      }
    },mounted(){

      this.$nextTick(()=>{
      this.getcombo();

    })
  },
  methods:{
      getcombo(){
        this.axios.get(this.comboorderjson).then((response)=>{
          this.comboorder=response.data.comboorder0
          this.comboorderArr=this.comboorder.comboorder1
          console.log(this.comboorderArr);

      })
     }
   }

  }
</script>
<style scoped>
.search{
  width:100%;
  margin-top:50px;
}
  .search form{
  margin:10px 2% 10px 2%;
  position:relative
}
.search form input{
  display:inline-block;
  height:30px;
  width:80%;
  font-size:14px;
  text-indent:5px;
  outline:none;
  border:1px solid #ccc;

  background:#f5f5f5
}
.search form span{
  display:inline-block;
  width:18%;
  height:28px;
  line-height: 28px;
  margin-left:1px;
  text-align: center;
  border:1px solid #ccc;
  position:absolute;
  font-size:14px;
  letter-spacing:2px
}

.combolist{
  width:100%;
  height:100px;
  border-bottom:1px solid #f3f3f3
}
.combolist .left,.combolist .right{
  float:left;
  width:48%;
  height:80px;
  text-align: center;

}
.combolist .left img{
  width:60px;
  height:60px;

}
.combolist .right {
  margin-left:4px
}
.combolist .left span{
  font-size:12px;
  display:block;
  margin-top:5px
}
.combolist .right span{
  display:block;
  height:50px;
  line-height: 50px;
  text-align:left;

}
.price{
  color:#E3007F;
  font-size:12px;
}
.title{
  font-size:14px
}
</style>
