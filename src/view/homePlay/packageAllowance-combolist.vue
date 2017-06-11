<template>
  <div class="flow-component">
    <!--套餐流量组件-->
    <div>
      <h3 class="flow-title">套餐明细</h3>
      <div class="combo" v-for="item in flowlis">
        <h3 class="flow-name-yuan">{{item.title}}</h3>
        <div class="combo-list-top">
          <div class="div">
            <div class="white">
              <div class="icon1 icon"></div>
              <div class="icon2 icon"></div>
              <div class="icon3 icon"></div>
            </div>
            <div class="flow-234G">{{item.local4G}}</div>

          </div>
          <div class="combo-progress">
            <div class="combo-blue" id="problue"></div>
          </div>
         <div class="combo-blue-bottom">
           <span>剩余</span><span>流量总量</span>
           <div style="clear:both"></div>
         </div>
         <div class="combo-blue-bottom">
           <span class="GBblue">{{item.surplusflow}}</span><span>{{item.allflow}}</span>
           <div style="clear:both"></div>
         </div>
        </div>

        <!--<div class="combo-list-bottom" >

        </div>-->
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
    export default {
      data(){
        return {
            flowcombojson:'../.././static/flowcombo/flowCombo.json',
            flowcombo:{},
            flowlis:[]

        }
      },
      mounted(){

        this.$nextTick(()=>{
        this.getflow();

      })
    },
    methods:{
      getflow(){
        this.axios.get(this.flowcombojson).then((response)=>{
        this.flowcombo=response.data.flowCombo
        this.flowlis=this.flowcombo.combos
       console.log(this.flowlis[0].title);

      })
     }
   },
   updated(){
     let problue=document.getElementById("problue");
        console.log(problue)

   }
 }
</script>
<style scoped>
.flow-component{
  margin-bottom:60px;
  margin-top:40px;
}
.flow-title{
  width:30px;
  width:100%;
  color:#26A2FF;
  font-weight:bold;
  background:#f8f8f8;
  line-height:30px;
  padding-left:5px
}
  .flow-name-yuan{
    height:30px;
     margin:0 2%;
     line-height: 30px;
     margin-bottom:1px;
     padding:5px 0

  }
  .combo-list-top{
    width:100%;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
  }
 .combo-list-top .div{
   height:30px;
   margin:5px 2%;
   line-height: 25px
 }
 .flow-234G{
    float:left;
    height:30px;

    margin-left:5px;
  }
  .white{
    float:left;
    height:30px;

  }
  .white div{
   float:left;

   border-radius:2px;
   background:blue

  }
  .icon{
    margin:0 1px;
    width:6px;
  }
  .icon1{
    height:20px;

  }
  .icon2{

    height:10px;
    background:blue;
    margin-top:10px;
  }
   .icon3{

    height:15px;
    background:blue;
    margin-top:5px;
  }
.combo-progress{
    clear:both;
    position:relative;
    height:6px;
    margin: 5px 2% 15px 2%;
    border-radius:4px;
    background:#ccc
  }
  .combo-blue{

    position:absolute;
    height:6px;
    border-radius:4px;
    width:80%;
    top:0;
    left:0;
    background:blue
  }
  .combo-blue-bottom{

    margin:8px 2%;
  }
  .combo-blue-bottom span:nth-child(1){
    float:left;
    font-size:14px
  }
   .combo-blue-bottom span:nth-child(2){
    float:right;
    font-size:14px
  }
  .GBblue{
    color:blue
  }
</style>
