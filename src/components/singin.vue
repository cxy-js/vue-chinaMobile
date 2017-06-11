<template>
  <div class="singin">
    <!--登录-->
    <form class="" action="" method="post">
    <div class="tel">
      <span>手机号：</span><input type="tel" name="tel" placeholder="输入11位手机号" v-model="tel">
    </div>
    <span v-if="telisok" class="telerror">请输入正确的手机号</span>
    <div class="pw">
      <span>密码：</span></span><input type="password" name="" value="" v-model="pw">
    </div>
    <span  v-if="pwisok" class="pwerror">密码错误</span>
    <div class="singin-btn-p"  @click="singin">
      <span class="singin-btn">登录</span>
    </div>
    </form>
  </div>
</template>
<script type="text/javascript">
import bus from '.././bus.js'
  export default {
    data(){
      return {
        tel:15862554986,
        pw:123456,
        telisok:false,
        pwisok:false
      }
    },
    methods:{
      singin(){
        if(this.tel===''){
          this.telisok=true
          return
        }else{
          this.telisok=false

        };
        if(this.pw===''){
          this.pwisok=true
          return
        }else{
          this.pwisok=false

        };
        if(window.localStorage){
         
         localStorage.name=this.tel
         localStorage.password=this.pw
        }
        this.$router.push({path:"/me"})
        //跳到充值界面,获取到的充值数据将通过vuex获取、bus
        let that=this
        
         document.body.addEventListener('click',function(){
            bus.$emit('singintel',that.tel);
            //console.log(that.tel)
         })
       
      }
    }
  }
</script>
<style scoped>
  .singin{
    width:100%;
    margin-top:60px;
  }
  form{
    border:thin solid #5B4386;
    width:95%;
    text-align:center;
    margin:0 auto;
    padding:20px 0
  }

.tel input,.pw input{
  display:inline-block;
  height:25px;
  border:none;
  margin:5px 0;
  border:thin solid #5B4386;
  outline-color:#5B4386;
  text-indent:10px
  }
.tel span,.pw span{
  display:inline-block;
  width:65px;
  text-align: right;
}
.singin-btn-p{
  height:40px;
  width:80%;
  margin:10px auto;
  line-height: 40px;
  background:#5B4386;
  /*border:red solid thin;*/
  text-align: center
}
.singin-btn{
color:#fff
}
.pwerror,.telerror{
  color:red
}
</style>
