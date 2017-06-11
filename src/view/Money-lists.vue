<template>
  <div class="list">
    <ul class="list-son">
        <li v-for="(list,index) in lists" @click='goto(index)'>
            <img :src="imgurl[index]" alt=''>
              <span>{{list}}</span>
        </li>
    </ul>
    <div style="clear:both">

    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    props:['lis'],
    data(){
      return {
        lists:['充值缴费','流量管家','我的账单','套餐余量','业务分类','详单查询','流量充值','套餐订购'],
        imgurl:[],
        path:["/deposite","/flow","/mybill","/packageAllowance","/business","/detailedlistsearch","/flowdeposite","/combo"]
      }
    },
    mounted(){
  		for(let i=0,len=this.lists.length;i<len;i++){
  				let imgurl='../.././static/money-lists-img/money'+i+'.png'
  				this.imgurl.push(imgurl)
  		}
  	},
    methods:{
      goto(index){
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
.list{
  width:100%;
}
.list-son{
  width:100%;
  margin: 20px 0;
}
.list li{
  display:inline-block;
  width:25%;
  text-align: center;
}
.list li span{
  display:block;
  padding:10px 0
}
.list li img{
    display: inline-block;
    width:30px;
    height:30px;
}
.list li a{
  color:black;
  font-weight:500
}

</style>
