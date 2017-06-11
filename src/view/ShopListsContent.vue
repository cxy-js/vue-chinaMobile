<template>
  <div class="list-center">
      <div class="shopCombo" v-for="(i,index) in shopCombo">
            <div class="more">
              <h3>{{i.name}}</h3><span @click="gopath(index)">{{i.more}}</span>
            </div>
            <ul>
              <li v-for="lis in i.combo">
                <div class="img">
                  <img :src="lis.img" alt="">
                </div>
                <div class="title">
                  {{lis.title}}
                </div>
                <div class="content">
                  {{lis.content}}
                </div>
                <div class="price">
                  {{lis.price}}
                </div>
              </li>
            </ul>
        </div>

        <div class="mobile">
          <div class="more">
              <h3>热卖专区</h3><span><router-link :to="{name:'mobileshop'}">更多 ></router-link></span>
          </div>
          <div class="mobile-list">
            <li>
              <img src="../.././static/img/shoping/rongyao8.jpg">
              <div class="mobile-content">
                <span>荣耀8青春版</span>
                <span>美颜自拍</span>
                <span>￥1379</span>
              </div>
            </li>
            <li>
              <img src="../.././static/img/shoping/red4.jpg">
              <div class="mobile-content">
                <span>荣耀8青春版</span>
                <span>美颜自拍</span>
                <span>￥1379</span>
              </div>
            </li>
            <li>
              <img src="../.././static/img/shoping/kupai.jpg">
              <div class="mobile-content">
                <span>荣耀8青春版</span>
                <span>美颜自拍</span>
                <span>￥1379</span>
              </div>
            </li>
            <li>
              <img src="../.././static/img/shoping/chuizi.jpg">
              <div class="mobile-content">
                <span>荣耀8青春版</span>
                <span>美颜自拍</span>
                <span>￥1379</span>
              </div>
            </li>
            <li>
              <img src="../.././static/img/shoping/meilan.jpg">
              <div class="mobile-content">
                <span>荣耀8青春版</span>
                <span>美颜自拍</span>
                <span>￥1379</span>
              </div>
            </li>
            <li>
              <img src="../.././static/img/shoping/360.jpg">
              <div class="mobile-content">
                <span>荣耀8青春版</span>
                <span>美颜自拍</span>
                <span>￥1379</span>
              </div>
            </li>
          </div>
        </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        listsurl:'../.././static/four4g/f4g.json',
        shopCombo:[],
        path:['/combo','/combo']
      }
    },
    created(){
      this.getlist()
    },
    methods:{
      getlist(){
        this.axios.get(this.listsurl).then((res)=>{
          this.shopCombo=res.data.con.shopCombo
          console.log(this.shopCombo)
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
        }
      }
    }
  }
</script>
<style scoped>
.list-center{
  width:100%;
  margin-bottom:60px;
  text-align: center;
  font-size:14px
}

.list-center ul{
  width:100%;
  display:flex;
  justify-content: space-around;
  text-align: center;
}

.more{
  height: 20px;
  padding-bottom: 20px;
  line-height: 40px;
  text-align: left;
  border-top: 1px solid #ccc;
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
.title{
  font-size:14px
}
.shopCombo ul{
  width:100%;
  text-align: center;
}
.shopCombo li{
  display:inline-block;
  width: 33.33%;
  
}
.shopCombo li div{
  padding:5px 0
}
.img img{
  width:40px;
  height:40px
}
.price{
  color:#E40077;
  font-size:12px;

}
.content{
  clear: both;
  height: 20px;
  display: inline-block;
  width: 85px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}


.list-center>div:nth-child(2) li .content{
  display:none
}
.mobile-list{
  width:100%;
  
}
.mobile-list li{
   display:inline-block;
   
   padding:5px 0;
   margin:2px 0;
  width:48%;
  text-align: center;
}

.mobile-list li img{
  max-width: 75px;
  height: 95px;
}
.mobile-content{
   text-align: center;
}
.mobile-content span{
  padding:5px 0
}
.mobile-content span:nth-child(1),.mobile-content span:nth-child(2){
  display:inline-block
}
.mobile-content span:nth-child(3){
 
  display:block;
  padding:5px 0
  
}
.mobile-content span:nth-child(3){
  color:red;
  font-size:14px
}

</style>
