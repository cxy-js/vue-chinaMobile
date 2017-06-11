<template>
  <div class="main">
  <div class="play">
      <li v-for="(i,index) in playconent"  class="item"  @click="gopath(index)">
        <div class="more">
        <h3>{{i.name}}</h3><span><router-link :to="{name:'mobileshop'}">{{i.more}}</router-link></span>
        </div>
        <div class="content">
          <div :class="{red:isred}">{{i.title}}</div>

          <div :class="{size:issize}">{{i.content}}</div>
          <span :class="{red:isred}">{{i.price}}</span>
          <img :src="i.img" alt="4G">
        </div>
      </li>
  </div>
  <div style="clear:both"></div>
  </div>
</template>
<script type="text/javascript">
export default{
    data(){
      return {
        playurl:'../.././static/four4g/f4g.json',

        con:{},
        playconent:[],
        isred:true,
        issize:true,
        isposition:true,
        path:['/four4g','/four4Gflycombo','/four4gMonthpackage','/relieved','/flowPay','/volte','/migu','/hongkong']
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
        this.playconent=response.data.con.playConent
       console.log(this.playconent)
      })
    },
     gopath(index){
       switch(index){
          case 0:
          this.$router.push({path:this.path[0]})
          break;
          case 1:
          this.$router.push({path:this.path[1]})
          break;
          case 2:
          this.$router.push({path:this.path[2]})
          break;
          case 3:
          this.$router.push({path:this.path[3]})
          break;
          case 4:
          this.$router.push({path:this.path[4]})
          break;
          case 5:
          this.$router.push({path:this.path[5]})
          break;
          case 6:
          this.$router.push({path:this.path[6]})
          break;
          case 7:
          this.$router.push({path:this.path[7]})
          break;
        }

    }

    }
  }
</script>
<style scoped>
.main{
  margin-bottom:50px
}
.play{
  width:100%;
  overflow: hidden;

}
.more{
 height:30px;
 line-height: 30px;
  text-align: left;
  border-bottom: 1px solid #ccc;

}
.more span{
float:right;
margin-right:10px;
font-size:14px
}
.more a{
  color:red;
}
h3{
  margin-left:20px;
  display:inline-block;

  font-weight:normal
}
li .content{
  width:100%;
  border-left:1px solid #ccc;

}

.item{
  display:inline-block;
  width:50%;
  overflow: hidden;
  text-align: center;

 border-bottom:1px solid #ccc;
 margin-left:-1px

}

.red{
  color:#BD2D30;
  padding-top: 10px;
}

.size{
  font-size:13px;

  margin-top: 15px;
}
.item img{
  display:inline-block;
  width: 100px;
  height: 100px;
  margin-top: 5px;

}
li:nth-child(3) .more,li:nth-child(3) .more,li:nth-child(4) .more,li:nth-child(7) .more,li:nth-child(8) .more,li:nth-child(11) .more,li:nth-child(12) .more{
  display:none
}
li:nth-child(3),li:nth-child(3),li:nth-child(4),li:nth-child(7),li:nth-child(8),li:nth-child(11),li:nth-child(12){
  /*border-bottom:none*/
}
/*li:nth-child(1),li:nth-child(4),li:nth-child(6),li:nth-child(6),li:nth-child(10),li:nth-child(12){
  border-left:1px solid #ccc
}*/
/*
.play li:nth-child(3),.play li:nth-child(5){
  border-right:none
}
.play li:nth-child(4),.play li:nth-child(5){
  border-bottom:none;
  margin-top: -2px;
}
.play:nth-child(3) li .content{
  width: 50%;;
  float:left
}
.play:nth-child(3) li img{
    float:right;
    width: 50%;
    padding:0;
    margin:10px 0
}
.play:nth-child(3) li div:nth-child(3){


}
.play:nth-child(3) li div:nth-child(3):after{
  content:"购买";
  float: left;
  width: 94%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #fff;
  margin: 2px 3%;
  border: 1px solid #e54fd3;
}
.play:nth-child(3) .content span{

  height:20px;
  text-align: center;
  line-height: 20px;
  display:block;
  margin: 30px 0 0 20px;
}*/
</style>
