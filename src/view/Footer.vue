<template>
  <div class="footer">
    <div class="footer-block">
								  <div @click='homename()'>
                      <router-link to="/home">
  								    <img src="../assets/home.png">
  								              <span>首页</span>
                      </router-link>
								  </div >
								  <div @click='shopname()'>
                    <router-link to="/shop">
								    <img src="../assets/shop.png">
								               <span>{{shop}}</span>
                      </router-link>
								  </div>
								  <div @click='Servername()'>
                      <router-link to="/Server">
								    <img src="../assets/deposit.png">
								                <span>{{Server}}</span>
                      </router-link>
								  </div>
								  <div @click='jfname()'>
                      <router-link to="/jf">
								    <img src="../assets/jf.png">
								                <span>{{jf}}</span>
                    </router-link>
								  </div>
								  <div @click='mename()'>
                    <router-link to="/me">
								    <img src="../assets/me.png">
								                <span>{{me}}</span>
                    </router-link>
								  </div>
					</div>
</div>
</template>
<script type="text/javascript">
import bus from '.././bus.js'
  export default {
    data(){
      return {
        home:'中国移动',
        shop:'商城',
        Server:'服务',
        jf:'积分',
        me:'我的'
      }
    },
    methods:{
      homename(){
        bus.$emit('homename',this.home)
      },
      shopname(){
        bus.$emit('shopname',this.shop)
      },
      Servername(){
        bus.$emit('Servername',this.Server)
      },
      jfname(){
        bus.$emit('jfname',this.jf)
      },
      mename(){
        bus.$emit('mename',this.me)
      },
    }
  }
</script>
<style scoped>
.footer{
  position:fixed;
  border-top:1px solid #ccc;
  background:#fff;
  font-size:12px;
  padding-bottom:2px;
  bottom:0px;
  width:100%
}
.footer-block{
  display:flex;
  justify-content:space-around;
}
.footer-block div{
  display:inline-block;
  text-align: center;

}
.footer-block div img{
  display:inline-block;
  height:25px;
  width:25px;
  padding:5px 0;

}
.footer-block div a{
  text-align: center;
  display:block
}
.footer-block div a span{
  display:block;

}
.router-link-active{
  color:black
}
</style>
