<template>
  <div class="shop">

      <!-- <form class="" action="" method="post"> -->
      <div class="search">
          <router-link to="/search">
            <form class="" action="http://www.00h5.com" method="post">
              <input type="text" name="" value=""><span>搜索</span>
            </form>
          </router-link>

        </div>
      <!-- </form> -->

        <div class="adimg">
          <router-link :to="{name:'flowdeposite'}">
            <img :src="ad" alt="">
          </router-link>
        </div>

    <div class="list">
        <ul class="list-son">
          <li v-for="(list,index) in lists">
            <img :src="imgurl[index]" alt="">
            <span>{{list}}</span>
          </li>
        </ul>
        <div style="clear:both">
        </div>
      </div>
      <v-shopliscontent></v-shopliscontent>

</div>
</template>
<script type="text/javascript">
import ShopListsContent from '../view/ShopListsContent'

  export default{
    data(){
      return {
        lists:['我的订单','收货地址','发票管理','我的收藏'],
        imgurl:[],
        ad:'../.././static/img/shoping/jliuliang.png'


      }
    },
    directives:{
      focus:{
        inserted: function (el) {
           // 聚焦元素
           el.focus()
         }
      }
    },
    methods:{
      // showComponent:function(){
      //   this.show=true
      // }
    },
    created(){
    for(let i=0,len=this.lists.length;i<len;i++){
        let imgurl='../.././static/img/shoping/order'+i+'.png'
        this.imgurl.push(imgurl)
    }
  },
  components:{
    'v-shopliscontent':ShopListsContent,

  }

  }
</script>
<style scoped>
.shop{
  margin-bottom:60px;
  margin-top:50px;
}
.search form{
  margin: 2% 5% 0 5%;
  position:relative
}
.search input{
display:inline-block;
height:30px;
width:100%;
outline:none;
border:1px solid #ccc;

background:#f5f5f5
}
.search span{
  display:inline-block;
  width:18%;
  height:30px;
  line-height: 30px;
  /*margin-left:1px;*/
  text-align: center;

  position:absolute;
  top:0;
  right:0


}
.list{
  width:100%;
}
.list-son{
  width:100%;
  display:flex;
  justify-content: space-around;
  text-align: center;
}
.list li{
  display:inline-block;
  width:25%;

  padding:20px 0;
  font-size:14px;
  text-align: center
}
.list li img{
  display:inline-block;
  width:30px;
  height:30px;


}
.list li span{
  display:block;
  padding-top:5px
}
.adimg{
  width:100%;

}
.adimg img{
  width:100%
}
</style>
