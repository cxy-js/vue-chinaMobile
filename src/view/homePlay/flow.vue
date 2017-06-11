<template>
  <div class="flow">
    <!--流量直充-->
    <div class="top">


         <div class="progress-1">
           <span class="span-title">已使用:</span>
            <div class="progress">
              <div class="count">
                <span class="count0">0%</span>
                <span>50%</span>
                <span class="count100">100%</span>
              </div>
              <div class="progress-red">
              </div>
           </div>
         </div>
        <div class="progress-1">
           <span class="span-title">剩余:</span>
            <div class="progress">
              <div class="count">
                <span class="count0">0%</span>
                <span>50%</span>
                <span class="count100">100%</span>
              </div>
              <div class="progress-red blue">
              </div>
           </div>
         </div>
         <router-link :to="{name:'liuliang'}" class="underline"><span class="lookflow">查看明细</span></router-link>
       </div>

    <div class="G">
      <div class="">
        <p>本月套餐内剩余</p>
        <span>2.21GB</span>
      </div>
      <div class="">
        <p>本月套餐内已用</p>
        <span>1.51GB</span>
      </div>
      <div class="">
        <p>建议日均</p>
        <span>1.11GB</span>
      </div>
    </div>
    <div class="list">
      <li v-for="(item,index) in list" @click="goto(index)">
        <img :src="imgurl[index]" alt=''>
        <span>{{item}}</span>
      </li>
    </div>
    <div class="alllock">
      <div class="lock-top">
        <span>大家都在看</span>
        <span>更新于</span>
        <span>{{time}}</span>
      </div>
      <ul class="lock-bottom">
        <li>
          <img src="../../.././static/img/shoping/4g.png">
          <div class="cont">
            <p class="p-title">任我享</p>
            <p class="p-content">我的流量够任性</p>
            <p class="p-red ">￥60元/半年</p>
          </div>
        </li>
        <li>
          <img src="../../.././static/img/shoping/4g-1.png">
          <div class="cont">
            <p class="p-title">流量加油包</p>
            <p class="p-red p-5">￥5元</p>
          </div>
        </li>
        <div style="clear:both"></div>
      </ul>
    </div>

  </div>
</template>
<script type="text/javascript">

  export default {
    data(){
      return {
        list:['流量直充','流量套餐','流量使用详情','流量详单'],
        imgurl:[],
        time:'',
        path:['/flowdeposite','flowComboChild','/packageAllowancecombolist','/flowlast']
      }
    },
    methods:{
      goto(index){
        switch(index){
          case 0:
          this.$router.push({path:this.path[0]});
          break;
          case 1:
          this.$router.push({path:this.path[1]});
          break;
          case 2:
          this.$router.push({path:this.path[2]});
          break;
          case 3:
          this.$router.push({path:this.path[3]});
          break;
        }
      }
    },
    mounted(){
      this.$nextTick(()=>{

      })
    },
    created(){
      for(let i=0,len=this.list.length;i<len;i++){
  				let imgurl='../../.././static/money-lists-img/money'+i+'.png';
  				this.imgurl.push(imgurl);
  	    	};
      const date=new Date();
      let hours=date.getHours().toString();
      let minute=date.getMinutes().toString();
      let second=date.getSeconds().toString();
      if( hours<9){hours=0+hours}else{hours=hours};
      if( minute<9){minute=0+minute}else{minute=minute};
      if( second<9){second=0+second}else{second=second};
      this.time=hours+':'+minute+':'+second;
    }
  }
</script>
<style scoped>

  .flow{
    width:100%;
    font-size:14px;
    padding-bottom:70px
  }
  .top{
    width: 100%;
    margin: 65px auto 20px auto;

    text-align: center;
  }
  .progress-1{
   height:15px;
   display:flex;
   margin-top:20px;
   flex-direction:initial
  }
  .progress{
    display:inline-block;
    width:100%;
    height:10px;
    border-radius:10px;
    background:#ccc
  }
 .span-title{
    display:inline-block;
    flex:1 0 50px;
    height:14px;
    margin-top:-2px;
    text-align: right;
  }
 .progress-red{

   height:10px;
   width:60%;
  border-radius:10px;
   background:red
 }
 .blue{
    width:30%;
    background:blue
 }
 .count{
   width:100%;
   display:flex;
   justify-content: space-between;
   margin-top:-14px
 }
 .count .count100{
   margin-right:5px;
 }
 .count .count0{
   margin-left:5px;
 }
  .G{
    display:flex;

    width:100%;
    margin:0 auto;
    border-bottom:1px solid #ccc;
    padding-bottom:10px

  }
  .G div{
    flex:1;
    text-align: center;
    border-left:1px solid #ccc
  }
  .G div:nth-child(1){
    border-left:none
  }
  .G div span{
    display:block;
    margin-top:8px;
    color:blue
  }
  .list{
    display:flex;
    height:80px;
    margin-top:20px
  }
  .list li{
    flex:1;
    text-align: center
  }
  .list li span{
    display:block;
    margin-top:5px
  }
 .list li img{
   display:inline-block;
   width:30px;
   height:30px;
 }
 .alllock{
  width:100%;
 }
 .lock-top{
   width:80%;
   text-align: center;
   height:40px;
   background:#ccc;
   margin:20px auto;
   line-height: 40px;

 }
 .lock-top span{
   display:inline-block;
   height:40px;

 }
 .lock-bottom{

   display:flex;
   justify-content: space-around;
   text-align: center
 }
 .lock-bottom li{
  flex:1
 }
 .lock-bottom li img{

   width:130px;
   height:130px
 }
  .cont{
    border:1px solid #ccc;
    padding:5px 0;
    border-radius:5px;

  }
  .lock-bottom li div:nth-child(1){
    border-right:none
  }

 .cont p{

   text-align: left;
   margin-left:30px;
 }
.p-red{
  color:red;
  margin-top:13px
}
.p-title{
  height:20px;
  margin:10px 0
}
.p-5{
  margin-top:35px

}
.p-content{
  font-size:12px
}
.underline{
  color:#ef54a7;
  text-decoration:underline

}
.lookflow{
  display:block;
  margin-top:20px;
}
</style>
