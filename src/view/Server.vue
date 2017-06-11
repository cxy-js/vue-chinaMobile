<template>
  <div class="deposit">

      <div class="deposit-0">

          <div class="deposit-1" @click="gopath()">
                <img src="../.././static/img/server/img/business.png" alt="">
            <div class="top-title">
              附近营业厅
            </div>
          </div>
          <div class="deposit-2">
                <img src="../.././static/img/server/img/inter.png" alt="">
            <div class="top-title">
              国际/港澳台
            </div>
          </div>
      </div>

    <div class="server" v-for="item in server">
      <ul>
        <li v-for="(i,index) in item.wlan" @click="golipath(i,index)">
          <div class="li-mark">
              <div class="img">
                <img :src="i.img" alt="" >
              </div>
              <div class="title">
                {{i.title}}
              </div>
          </div>
        </li>
      </ul>
      <div class="ad">
        <img :src="item.ad" alt="">
      </div>
    
    </div>

  </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        businessimg:'../.././static/img/server/img/business.png',
        playurl:'../.././static/four4g/f4g.json',
        con:{},
        server:[],
       
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.getPlay()
      })
    },
    methods:{
      getPlay(){
        this.axios.get(this.playurl).then((response)=>{
        this.con=response.data.con
        this.server=response.data.con.server
      console.log(this.con)
      })
    },
    gopath(){
      this.$router.push({path:"/businesshall"})
    },
    golipath(item,index){
      switch(index){
        case 0:
        this.$router.push({name:'queryiphone'});
        break;
        case 1:
        this.$router.push({name:'queryiphone'});
        break;
        case 2:
        this.$router.push({name:'queryiphone'});
        break;
        case 3:
        this.$router.push({name:'queryiphone'});
        break;
        case 4:
        this.$router.push({name:'queryiphone'});
        break;
        case 5:
        this.$router.push({name:'queryiphone'});
        break;
        case 6:
        this.$router.push({name:'queryiphone'});
        break;
        case 7:
        this.$router.push({name:'queryiphone'});
        break;
        case 8:
        this.$router.push({name:'queryiphone'});
        break;
        case 9:
        this.$router.push({name:'queryiphone'});
        break;
        case 10:
        this.$router.push({name:'queryiphone'});
        break;
        case 11:
        this.$router.push({name:'queryiphone'});
        break;
        case 12:
        this.$router.push({name:'queryiphone'});
        break;
        case 13:
        this.$router.push({name:'queryiphone'});
        break;
        case 14:
        this.$router.push({name:'queryiphone'});
        break;
        case 15:
        this.$router.push({name:'queryiphone'});
        break;
        case 16:
        this.$router.push({name:'queryiphone'});
        break;
        case 17:
        this.$router.push({name:'queryiphone'});
        break;
        
      }
    }
  }
}
</script>
<style media="screen">
.deposit{
  margin-bottom:60px;
 margin-top:40px;
}

.deposit-0{
  display:flex;
  justify-content:space-around;
  background:#26A2dd;
  padding: 60px 0;
  margin-top:-50px
}
.top-title{
  color:#fff
}
.deposit-1,.deposit-2{
    text-align: center;
}
.img{
  display: inline-block;
  width:30px;
  height:30px;
  margin-bottom:10px
}
.img img{
    display:inline-block;
    width:100%;
    height:100%
}
.deposit-1 img,.deposit-2 img{
  margin:10px auto;
  width:45px;
  height:45px;
}
.server{
  width:100%;

  border-bottom:1px solid #ccc;

  font-size:14px
}
.ad{
  display:block;
  width:100%;
  height:85px
}
.ad img{
  width:100%;
  height:100%
}

.server ul{
  background:#f8f8f8
}
.server li{
  display:inline-block;
  width:25%;
  text-align: center;
  
}
.li-mark{
    width: 100%;
    border-left: 1px solid #ccc;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
}
.title{
 
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}

.server li:nth-child(11) img{
visibility: hidden

}
.server li:nth-child(11) .title{
font-size:20px

}
.server li:nth-child(11){

  border-right:1px solid #ccc;
  
  
}

</style>
