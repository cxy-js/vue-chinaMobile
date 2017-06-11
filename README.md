<template>
  <div class="deposite">
    <!--4G飞享套餐-->
    <div class="combo4">
          <div class="combo4-left">
            <img src="../../.././static/img/shoping/flay-1.png" alt="4g">
          </div>
          <div class="combo4-right">
            <h3>4G飞享套餐</h3>
            <span>适合用户：全球通 神州行 动感地带</span>
            <span>生效时间：次月</span>
            <span>资费：<input type="text" v-model="pri">元/月</span>
            <span>商户：江苏移动。客服电话 10086</span>
          </div>
    </div>
    <div class="js">
      发布范围：江苏省
    </div>
    <div class="price">
      <div class="price-1" v-for="(item,index) in prices"  @click="add(item,index)" :class="{red:item.isred}">
        <li>{{item.content}}{{item.price}}元</li><img src="../../.././static/img/deposite/img/yes.png" alt="icon" v-if="item.isred">
      </div>
      <div class="more">
        <span>查看更多</span>

      </div>
      <div class="pay-par">

      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{

    data(){
      return {
        prices:[
          {price:18,content:"4G飞享套餐",isred:true},
          {price:28,content:"4G飞享套餐",isred:false},
          {price:38,content:"4G飞享套餐",isred:false},
          {price:48,content:"4G飞享套餐",isred:false},
          {price:58,content:"4G飞享套餐",isred:false},
          {price:88,content:"4G飞享套餐",isred:false},
          {price:138,content:"4G飞享套餐",isred:false},
          {price:158,content:"4G飞享套餐",isred:false},
          {price:238,content:"4G飞享套餐",isred:false},
          {price:268,content:"4G飞享套餐",isred:false},
          {price:338,content:"4G飞享套餐",isred:false},
          {price:588,content:"4G飞享套餐",isred:false}
        ],
        pri:18,

      }
    },
    filters:{
      set$(i){

        return i+'元/月'

      }
    },
    methods:{
      add(item,index){
        this.pri=item.price

        for(let i=0;i<this.prices.length;i++){
          this.prices[i].isred=false
          this.prices[index].isred=true
        }
      }

    }

  }
</script>
<style scoped>
  .deposite{
    font-size:14px
  }
  .tel{
    height:80px
  }
  .combo4{
    border-bottom: 1px solid #ccc;
    padding-bottom:5px
  }
  .combo4-left{
    display: table-cell;
   vertical-align: middle;
   text-align: center;
  }
  .combo4 img{
    width:60px;
    height:60px;
    padding:0 15px
  }
  .combo4 .combo4-right{
    display: table-cell;
    vertical-align: middle;
  }
  .combo4 .combo4-right h3{
    height:20px;
    line-height: 20px;
    font-size:14px;
    text-align: left;
    margin:5px 0 5px 0
  }
  .combo4 .combo4-right input{
    outline: none;
    border: none;
    height: 20px;
    text-align: center;
    width: 25px;
    color:#ff0000
  }
.combo4 span{
  display:block;
  padding:3px 0;
  text-align: left
}
.js{
  width:100%;
  height:30px;
  overflow: hidden;
  line-height: 30px;
  padding:5px
}
.price{
  width:100%;
  text-align: center;
  height:210px;
  display: relative;
  /*overflow: hidden*/
}

.price-1{
  display: inline-block;
  border: 1px solid #ccc;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 5px;
  width: 46%;
  font-size:12px;

}
.price-1.red{
  border-color:red;
  color:#ff0000

}
.price-1 img{
  position:absolute;
  width:20px;
  height:15px;
  right:3px;
  bottom:3px
}
.more{
  display:fixed;
  height:80px;
  width:100%;
  text-align: center;
  background:#ccc
}
</style>
