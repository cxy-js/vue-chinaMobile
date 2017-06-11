<template>
  <div class="deposite">
    <!--充值-->
    <div class="tel">
      <input type="tel" name="tel" v-model="tel"><span>通讯录</span>
    </div>
    <div class="price">
      <div class="price-1" v-for="(item,index) in prices"  @click="add(item,index)" :class="{red:item.isred}">
        <li>{{item.price | set$(item.price)}}<div class="shoujia">售价:{{item.price1 | set1$(item.price1)}}</div></li><img src="../../.././static/img/deposite/img/yes.png" alt="icon" v-if="item.isred">
      </div>
     
      <div class="price-model">
        <div class="">
      
          <span>【全国】即时生效，当月有效，支持2G/3G/4G</span>
        </div>
       
      </div>
      <div class="">
    
        <p><input type="radio" name="b" value="two" checked>优惠券<span>无可用</span></p>
      </div>
      <div class="pay-par">
        <span type="button" name="button" class="pay" @click="add1()">去支付</span>
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
          {price:30,price1:5,isred:false},
          {price:70,price1:10,isred:false},
          {price:150,price1:20,isred:true},
          {price:500,price1:30,isred:false},
          {price:3,price1:50,isred:false},
          {price:2,price1:70,isred:false}
        ],
        tel:'',
        pri:20,
        
      }
    },
    filters:{
      set$(i){
       
        if(i===2 || i===3){
           return i+'G'
        }else{
          return i+'M'
        }
          
      },
      set1$(i){
        return i+'元'
        
      }
    },
    methods:{
      add(item,index){
        this.pri=item.price1
      
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
              console.log(that.$route.path)
              bus.$emit('pri1',that.pri);
              bus.$emit('tel1',that.tel);
           }
           this.$router.push({name:'payway'})
         }
      },
     
    }
  }
</script>
<style scoped>

  .tel{
    margin: 50px 2% 15px 2%;
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
  width:100%;
  margin:0 1%
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
  border:1px solid #ccc;
  
  line-height: 22px;
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
  right:0;
  bottom:0
}
.shoujia{
  font-size:12px
}
.price-model{
  clear:both;
  width:95%;
  margin:5% 1%;;
  height:30px;
  line-height: 30px;
  border:1px solid #ccc
}
.price-model span{
  height:30px;
  font-size:14px;
  color:#333
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
  width: 95%;
  margin: 5% 1%;
  height: 30px;
  line-height: 30px;
}
.pay{
      display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #26A2FF;
    text-align: center;
    color: #fff;
    font-weight: 900;
    border-radius: 5px;

}



</style>
