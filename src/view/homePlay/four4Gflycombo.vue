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
        <li>{{item.content}}{{item.price}}元</li>
      </div>
    </div>
    <div class="combo-infoPage">
      <div class="combo-info" v-for="(item,index) in comboInfo" :class="{border:item.isborder}" @click="setborder(item,index)">
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="combo-info-1" v-if="comboInfo[0].isborder===true">
      <v-info4g1></v-info4g1>
    </div>
    <div class="combo-info-1" v-if="comboInfo[1].isborder===true">
      <v-info4g2></v-info4g2>
    </div>
    <div class="combo-info-1" v-if="comboInfo[2].isborder===true">
      <v-info4g3></v-info4g3>
    </div>
    <div class="combo-info-1" v-if="comboInfo[3].isborder===true">
      <v-info4g4></v-info4g4>
    </div>
    <!--***************-->
    <div class="go">

          <span class="collect" @click="collect()">{{collectspan}}</span><span class="transaction" @click="t()">立即办理</span>

      </div>
        <div class="banlit" v-if="banlitshow">
            <p>
              尊敬的用户您好，您将办理<span class="pri">{{flowname}}</span>元业务，请确认！
            </p>
            <div class="yesorno">
              <span @click="banlitfalse">取消</span>
              <span @click="add1()">确认</span>
            </div>
          </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import bus from '../.././bus.js'
  import info4g1 from './info-4g1'
  import info4g2 from './info-4g2'
  import info4g3 from './info-4g3'
  import info4g4 from './info-4g4'
  export default{
    components:{
      'v-info4g1':info4g1,
      'v-info4g2':info4g2,
      'v-info4g3':info4g3,
      'v-info4g4':info4g4
    },
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
        comboInfo:[
          {title:'套餐详情',isborder:true},
          {title:'资费标准',isborder:false},
          {title:'常见问题',isborder:false},
          {title:'温馨提示',isborder:false}
        ],
        pri:18,
        collectspan:"收藏",
        banlitshow:false,
        flowname:'4G飞享套餐18'
      }
    },
    
    methods:{
      add(item,index){
        this.pri=item.price
        for(let i=0;i<this.prices.length;i++){
          this.prices[i].isred=false;
          this.prices[index].isred=true;
          this.flowname=this.prices[index].content+this.pri
          //console.log(this.flowname)
        }
      },
      add1(){

         //跳到充值界面,获取到的充值数据将通过vuex获取、bus
         let that=this
         document.body.onclick=function(){
           console.log(that.$router.path)
            bus.$emit('pri3',that.pri);
           
            console.log(that.pri)
         }

          this.$router.push({name:'payway'})
          this.banlitshow=false

      },
      setborder(item,index){
        for(let i=0;i<this.comboInfo.length;i++){
          this.comboInfo[i].isborder=false
          this.comboInfo[index].isborder=true
        }
      },
       t(){
        this.banlitshow=true

      },
      collect(){

        if(this.collectspan==="收藏"){
          alert("已收藏")
         this.collectspan="已收藏"

        }else{
          alert("取消收藏")
          this.collectspan="收藏"
        }
      },
      banlitfalse(){
        this.banlitshow=false
      }
    }
  }
</script>
<style scoped>
  .deposite{
    font-size:14px;
    margin-bottom:60px;
    margin-top:50px;
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
    width: 30px;
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
  margin-bottom:20px;
  text-align: center;
}
.price-1{
  display: inline-block;
  border: 1px solid #ccc;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 5px;
  width: 46%;
  font-size:14px;
}
.price-1.red{
  border-color:red;
  color:#ff0000
}

.border{
  border-bottom:1px solid blue;
  color:blue
}
.combo-infoPage{
  display:flex;
  justify-content: space-between;
}
.combo-info{
  padding:0 2% 10px 2%
}
.combo-info span{
  display:block
}



.go{
  display:flex;
  background:#fff;
  margin-top:10px;
}
.go span{
  display:inline-block;
  height:40px;
  line-height: 40px;
  text-align: center;
  border:1px solid #ccc;

}
.go span.collect{
  flex:1;
  background:#fff
}
.go span.transaction{
  flex:2;
  color:#fff;
  background:#0072FF
}
.banlit{
    position: fixed;
    top: 50%;
    left: 3%;
    right: 3%;
    width: 93%;
    z-index: 99999999;
    text-align: center;
    background:#fff;
    background-size:100% 100%;
    -webkit-border-image:url(border.png) 20 20 round;
    border-image:url('../../.././static/img/migu.png') 20 30 round;
    padding: 15px 0;
    color:#333;
    font-size:12px;
}
.banlit p{
  padding:5px 0;
  line-height: 20px;

}
.banlit .yesorno span{
  display:inline-block;
  padding:0 20px;
  line-height: 25px;
  border:1px solid #ccc
}
.pri{
  color:#ff0000;
  font-size:14px;
  font-weight:bold
}
</style>
