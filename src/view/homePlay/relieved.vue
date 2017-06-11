<template>
  <div class="publicFlow">
    <!--流量安心包-->
    <div class="combo4">
          <div class="combo4-left">
            <img src="../../.././static/img/shoping/flay-1.png" alt="4g">
          </div>
          <div class="combo4-right">
            <h3>流量安心包</h3>
            <span>适合用户：全球通 神州行 动感地带</span>
            <span>生效时间：次月</span>
            <span>资费：<input type="text" v-model="pri">元</span>
            <span>商户：江苏移动。客服电话 10086</span>
          </div>
    </div>
    <!--公用顶部 end-->
    <div class="js">
      发布范围：江苏省
    </div>
    <!--公用套餐选项-->
    <div class="price">
      <div class="price-1" v-for="(item,index) in prices"  @click="add(item,index)" :class="{red:item.isred}">
        <li>流量安心包 {{item.price}}{{item.content}}</li>
      </div>
    </div>
    <div class="combo-infoPage">
      <div class="combo-info" v-for="(item,index) in comboInfo" :class="{border:item.isborder}" @click="setborder(item,index)">
        <span>{{item.title}}</span>
      </div>
    </div>
    <!--公用套餐选项 end-->
    <!--公用选项卡-->
    <!--公用选项卡 第一个-->
    <div class="combo-info-1" v-if="comboInfo[0].isborder===true">
      <div class="comboInfo">
        <span class="comboinf-blue">
           ...此处省略10000个字！~
        </span>
        <span class="comboinf-blue-red">
           ...此处省略10000个字！~
        </span>
        <span class="comboinf-red">
          <li class="li">
             ...此处省略10000个字！~
          </li>
          <li class="li">
            ...此处省略10000个字！~
          </li>
           <li class="li">
            ...此处省略10000个字！~
            <span class="li-m">(1) ...此处省略10000个字！~</span>
            <span class="li-m">(2) ...此处省略10000个字！~</span>
            <span class="li-m">(3) ...此处省略10000个字！~</span>
            <span class="li-m">(4) ...此处省略10000个字！~</span>
          </li>
        </span>
      </div>
    </div>
    <!--公用选项卡 第2个-->
    <div class="combo-info-1" v-if="comboInfo[1].isborder===true">
      <div class="comboinf-blue">
          <li>
              套餐不区分上下半月,实时扣费月底补齐，订购首月套餐费和套餐优惠按实际天数折算。
          </li>
          <li>
              2015年4月1日起，开通......此处省略10000个字！~
          </li>
          <li>
              ......此处省略10000个字！~
          </li>
          <li>
              ......此处省略10000个字！~
          </li>
          <li>
              ......此处省略10000个字！~
          </li>
          <li>
              ......此处省略10000个字！~
          </li>
      </div>
    </div>
    <!--公用选项卡 第3个-->
    <div class="combo-info-1" v-if="comboInfo[2].isborder===true">
      <div class="comboinf-blue">
          <li>
              4G (TD-LTE) 是什么？
              <p>答：......此处省略10000个字！~</p>
          </li>
          <li>
              2015年4月1日起，开通......此处省略10000个字！~
          </li>
          <li>
              ......此处省略10000个字！~
          </li>
          <li>
              ......此处省略10000个字！~
          </li>
          <li>
              ......此处省略10000个字！~
          </li>
          <li>
              ......此处省略10000个字！~
          </li>
      </div>
    </div>
    <!--公用选项卡 第4个-->
    <div class="combo-info-1" v-if="comboInfo[3].isborder===true">
      <div class="comboInfo">
        <span class="comboinf-blue">
          为了我更好的满足广大客户的通信需求，自2016年7月1日起，我公司销售的品牌套餐以4G自选套餐、4G飞享套餐等语音
          资费长市漫一口价的套餐为主。如您当前正在使用非长市漫一口价的老套餐，退订后将不可恢复。详询10086
        </span>
        <span class="comboinf-blue-red">
          办理品牌套餐变更，当月办理次月生效。<i>办理本套餐后，适用全球通品牌的业务规则。</i>
        </span>
        <li>
              ......此处省略10000个字！~
        </li>
      </div>
    </div>
    <!--公用选项卡 end-->
    <!--公用按钮-->
    <!--***************-->
      <div class="go">

          <span class="collect" @click="collect()">{{collectspan}}</span><span class="transaction" @click="t()">立即办理</span>

      </div>
      <div class="banlit" v-if="banlitshow">
          <p>
              尊敬的用户您好，您将办理<span class="pri">{{flowname}}</span>业务，请确认！
          </p>
          <div class="yesorno">
            <span @click="banlitfalse">取消</span>
            <span @click="add1()">确认</span>
          </div>
      </div>
    <!--公用按钮end-->
    </div>
  </div>
</template>
<script type="text/javascript">
import bus from '../.././bus.js'
  export default{
    data(){
      return {
        prices:[
          {price:10,content:"元包100M",isred:true},
        ],
        comboInfo:[
          {title:'套餐详情',isborder:true},
          {title:'资费标准',isborder:false},
          {title:'常见问题',isborder:false},
          {title:'温馨提示',isborder:false}
        ],
        pri:10,
        collectspan:"收藏",
        banlitshow:false,
        flowname:'10元包100M'
      }
    },

    methods:{
      add(item,index){
        this.pri=item.price
        for(let i=0;i<this.prices.length;i++){
          this.prices[i].isred=false;
          this.prices[index].isred=true;
          this.flowname=this.prices[index].price+this.prices[index].content
          console.log(this.flowname)
        }
      },
      
      add1(){

         //跳到充值界面,获取到的充值数据将通过vuex获取、bus
         let that=this
         document.body.onclick=function(){
           console.log(that.$router.path)
            bus.$emit('pri2',that.pri);
           
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
 
  .combo4{
    border-bottom: 1px solid #ccc;
    padding-bottom:5px;
    margin-top:50px;
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
  font-size:14px;
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

}
.price-1{
  display: inline-block;
  border: 1px solid #ccc;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 5px;
  
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
  margin-bottom: 55px;
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
    border-image:url('../../.././static/img/migu.png') 20 30 round;;
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


.comboInfo{

  margin-top:20px;
  font-size:12px;
  padding:0 2%;
  overflow: hidden
  }
  .comboInfo span{
     display:block;
    line-height: 25px;
    margin-bottom:10px
  }
span.comboinf-blue,span.comboinf-blue-red{
  color:blue;

}
span.comboinf-blue-red i{

  font-style:normal;
  font-size:12px;
  color:red
}
span.comboinf-red li.li{
  list-style:decimal
}
.li-m{
  margin-left:40px;

}


.comboinf-blue{
    margin-top:20px;
  font-size:12px;
  padding:0 2%;
  overflow: hidden;
  color:blue;
}
.comboinf-blue li{
    list-style:decimal;
    line-height: 20px;
}

</style>
