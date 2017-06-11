<template>
  <div class="deposit">
    <div class="deposit-0">
        <div class="deposit-1">
              <img src="../.././static/img/server/img/business.png" alt="">
          <div class="">
            附近营业厅
          </div>
        </div>
        <div class="deposit-2">
              <img src="../.././static/img/server/img/inter.png" alt="">
          <div class="">
            国际/港澳台
          </div>
        </div>
    </div>
    <div class="server" v-for="item in server">
      <ul>
        <li v-for="i in item.wlan">
          <div class="img">
          <img :src="i.img" alt="" >
          </div>
            <div class="title">
              {{i.title}}
            </div>
        </li>
      </ul>
      <div class="ad">
        <img :src="item.ad" alt="">
      </div>
      <!-- <div class="" style="clear:both"></div> -->
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
    }
  }
}
</script>
<style media="screen">
.deposit{
  margin-bottom:60px
}
.deposit-0{
  display:flex;
  justify-content:space-around;
  padding-bottom:20px;
  background:#26A2FF
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
  width:23%;
  padding:20px 3px;
  margin-top:-1px;

  margin-left:-1px;
  border-left:1px solid #ccc;

  text-align: center;

}
.title{
  clear: both;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}
.server li:nth-child(1),.server li:nth-child(2),.server li:nth-child(3),.server li:nth-child(4){
  border-bottom: 1px solid #ccc;

}
.server li:nth-child(11) img{
display:none

}
.server li:nth-child(11) .title{
font-size:20px

}
.server li:nth-child(11){

  border-right:1px solid #ccc;
  padding-left: 2px;

}

</style>
