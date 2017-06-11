<template>
  <div class="business">
    <!--业务分类-->
    <div class="business-left">
      <li v-for="(item,index) in businessName" @click="add(item,index)" :class="{ccc:item.bgccc}">
        <span>{{item.name}}</span>
      </li>
    </div>
    <div class="business-right">
     <li v-for="(i,index) in businessName" v-show="i.bgccc" @click="getpath(index)"><!-- v-show="item.bgccc" @click="getpath(index)"-->
        <span v-for="k in i.child">
          {{k}}
        </span>
      </li>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        businessName:[
            {name:'充值缴费',bgccc:true,
              child:[
                '流量充值','话费充值','充值卡充值'
               ]
              },
            {name:'流量',bgccc:false,
              child:[
                'WLAN套餐','4G流量加油包','5元通用流量包','夜间专用流量','流量小时套餐','流量安心包','流量可选包','4G闲时流量包','流量日套餐','流量季包','流量半年包','任我享'
                ]
              },
            {name:'套餐',bgccc:false,
              child:[
                '4G飞享套餐18元','4G飞享套餐','4G飞享套餐28元','4G飞享套餐38元','任我用 (老用户版)'
               ]
               },
            {name:'宽带',bgccc:false},
            {name:'国际/港澳台',bgccc:false,
              child:[
                '畅听日套餐','一带一路多国流量包','大洋洲多国流量包','北美洲多国流量包','欧洲多国流量包','港澳台三地畅游包','斯里兰卡大包多天流量包','4沙特大包多天流量包','韩国大包多天流量包','日本大包多天流量包','阿联酋大包多天流量包'
                ]},
            {name:'手机',bgccc:false},
            {name:'配件',bgccc:false},
            {name:'增值业务',bgccc:false,
              child:[
                '神州行积分计划','呼叫转移','和娱乐包','手机上网功能','冲浪助手','和通讯录','优惠提醒','4G高清语音 (VoLTE)','和包 (手机支付)','易查询系列','咪咕会员','短信套餐'
                ]},
            {name:'亲密付',bgccc:false,
              child:[
                '亲密付'
               ]},
            {name:'和多号',bgccc:false,
              child:[
                '和多号'
               ]},
            {name:'家庭',bgccc:false,
              child:[
                '流量共享包'
               ]},
            {name:'WLAN',bgccc:false,
              child:[
                'WLAN套餐'
               ]},
            {name:'Volte',bgccc:false,
              child:[
                '4G+高清语音'
               ]},
            {name:'咪咕电影',bgccc:false,
              child:[
                '咪咕电影'
               ]}
          ],
         childpath:[
           ['/flowdeposite','/deposite','/flowdeposite'],
           ['/mybill','/shop','me']

           ]

      }
    },
    methods:{
      add(item,index){
        for(let i=0;i<this.businessName.length;i++){
          this.businessName[i].bgccc=false;
          this.businessName[index].bgccc=true
        }
      },
      getpath(index){
        for(let i=0;i<this.childpath.length;i++){

          for(let j=0;j<this.childpath[i].length;j++){

            switch (index){
              case j:

              this.$router.push({path:this.childpath[i][j]})

            }
          }

        }

      }
    }
  }
</script>
<style scoped>
.ccc{
  background:#fff;
  
}
.business{
  width:100%;
  font-size:14px;
  display:flex;
   margin-top:40px;
  margin-bottom:54px;
}
.business-left{
  flex: 0 0 90px;

  background:#f5f5f5;

}
  .business-left>li{
    display:block;
    height:40px;

    text-align: center;
    line-height: 40px;

    border-bottom:1px solid #d6d6d6
  }
  .business-right{
    flex:1;
    display:inline-block
  }
  .business-right>li>span{
    margin-left:20px;
    line-height: 40px;
    border-bottom:1px solid #f4f4f4;
    text-align: left;
    display:block
  }
</style>
