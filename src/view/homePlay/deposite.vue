<template>
  <div class="deposite">
    <!--充值-->
    <div class="tel">
      <input type="tel" name="tel" v-model="tel"><span>通讯录</span>
    </div>
    <div class="price">
      <div class="price-1" v-for="(item,index) in prices"  @click="add(item,index)" :class="{red:item.isred}">
        <li>{{item.price | set$(item.price)}}</li><img src="../../.././static/img/deposite/img/yes.png" alt="icon" v-if="item.isred">
      </div>
      <input type="number" name="" placeholder="自定义" class="zdy" ref="zdy" @click="removeprice()">
      <div class="price-model">
        <div class="price-model-left">
          <span>支付金额:</span><input type="number" name="" v-model="pri">元
        </div>
        <div class="price-model-right">
          <span>到账金额:</span><input type="number" name="" v-model="pri2">元
        </div>
      </div>
      <div class="">
        <p><input type="radio" name="b" value="one" checked>优惠策略<span>充值享9.98折</span></p>
        <p><input type="radio" name="b" value="two">优惠券<span>无可用</span></p>
      </div>
      <div class="pay-par">

          <span type="button" name="button" class="pay-btn" @click="add1()">去支付</span>

      </div>

    </div>
  </div>
</template>
<script type="text/javascript">
import bus from '../.././bus.js'
  export default{

    data(){
      return {
        prices:[
          {price:10,isred:false},
          {price:30,isred:false},
          {price:50,isred:false},
          {price:100,isred:true},
          {price:200,isred:false},
          {price:300,isred:false},
          {price:400,isred:false},
          {price:500,isred:false}
        ],
        pri:99.8,
        pri2:100,
        tel:'',

      }
    },
    filters:{
      set$(i){
        return i+'元'
      }
    },
    
    methods:{
      add(item,index){
       
        this.pri=item.price*0.998
        this.pri2=item.price

        for(let i=0;i<this.prices.length;i++){
          this.prices[i].isred=false
          this.prices[index].isred=true
        }
      },
      add1(){
        
       if(this.tel===''){
        alert('号码不能为空')
        return
       }else{
         //跳到充值界面,获取到的充值数据将通过vuex获取、bus
         let that=this
         document.body.onclick=function(){
           console.log(that.$router.path)
            bus.$emit('price',that.pri);
            bus.$emit('tel',that.tel);
            //console.log(that.pri)
         }

         this.$router.push({name:'payway'})

       }
      },
      removeprice(){
        for(let i=0;i<this.prices.length;i++){
          this.prices[i].isred=false
          this.pri=0
          this.pri2=0
        }
      }
    },
    mounted(){
        
        this.$refs.zdy.oninput=()=>{
        this.pri=this.$refs.zdy.value*0.998
        this.pri2=this.$refs.zdy.value
        console.log(this.$refs.zdy)
      }
    }
  }
</script>
<style scoped>
  .deposite{
    font-size:14px;
     margin-top:50px;
  }
  .tel{
    margin: 10px 2% 15px 2%;
    position: relative;
    border: 1px solid #ccc;

  }
  .tel span{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin-left: 1px;
    text-align: center;
    position: absolute;
    letter-spacing: 2px;
    right: 3px;
    border-left: 1px solid #ccc;
    padding: 0 0 0px 7px;
  }
  .tel input{
    display: inline-block;
    height: 30px;
    width: 80%;
    outline: none;
    border:0;
    letter-spacing: 3px
  }

.price{

   width: 100%;

    margin-bottom:60px;
}
.zdy{
  display: inline-block;
  position:absolute;
  height: 30px;
  border:1px solid #ccc;
  line-height: 30px;
  text-align: center;
  margin: 2% 1%;
  width: 30%;
}
.price-1{
  display: inline-block;
  border: 1px solid #ccc;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 2% 1%;
  width: 30%;
  position:relative
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
.price-model{
  display:flex;
  justify-content: space-around;
  width:100%;
  padding:10px 0;
  border-bottom:1px solid #ccc
}
.price-model-left{}
.price-model input{
  outline:none;
  display:inline-block;
  width:55px;
  height:30px;
  border:0;
  color:red;
  text-align: center
}
.price-model span{
    display:inline-block;
    height:30px;

}

.price-model{

}
.price-model div:nth-child(2){

}
p{
  border-bottom:1px solid #ccc;
  width:100%;
  height:30px;
  line-height: 30px;
  margin:5px 0;
  padding:5px 0;

}
p input{
  float:left;
  height:30px;
  line-height: 30px;
  margin-right:5px
}
p span{
  float:right;
  margin-right:10px;

}
p:nth-child(2) span{
  font-size:14px;
  color:#ccc
}
.pay-par{
  width: 100%;
 margin-top:20px;
  height: 30px;
  line-height: 30px;
}
.pay-btn{
  display:block;
  width:100%;
  height:40px;
  line-height: 40px;
  background:#26A2FF;
  text-align: center;
  color:#fff;
  font-weight:900;
  border-radius:5px;

}

.pay-page{
  width:90%;
  margin:0 auto;

}
.pay-info{
  width:100%;
  margin: 0 auto;
  text-align: center;
  background:#f5f5f5;
  padding-bottom:4px
}
.pay-info span{
  display:block
}
.pay-info .pay-tel{
  width:100%;
  height:30px;
  text-align: center;
  line-height: 30px;
  background:red;
  color:#fff
}
.pay-price{
  color:red;
  font-size:18px;
  padding:15px 0;
  font-weight:bold
}
small{
  font-size:12px;
  color:red
}
.pay-wraing{
  font-size:12px;
   color:#666;
}
i{
  font-style: normal;
  color:red;
  font-size:18px
}
.three{
  font-size:12px
}
h3{
  width:100%;
  height:40px;
  line-height: 40px;
  color:#666;


  margin-top:10px
}
.pay-way li{
  display:block;
  height:60px;
  padding:10px 0;
  position:relative;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc
}
.pay-way li:nth-child(2),.pay-way li:nth-child(3){
  border-top:none
}
.pay-way li span:nth-child(2){
  font-size:12px;
  margin-top:20px;
}
.pay-way li .img1{
    display: inline-block;
    width: 30px;
    height: 30px;
    padding:0 5px;

}
.pay-way li .payway-left{
  display: inline-block;
}
.pay-way li .img2{
    position:absolute;
    right:0;
    top:50%;
    width: 20px;
    height: 20px;
    vertical-align: middle;
}

.pay-way li span{
   display:block;
   margin-bottom:5px;
   text-align: left
}

.pay-affirm{
  display:block;
  height:40px;
  line-height: 40px;
  color:#fff;
  margin-top:10px;
  border-radius:3px;
  background:#26A2FF;
  text-align: center
}
.btn-price,.btnmoney{
  color:#fff
}
</style>
