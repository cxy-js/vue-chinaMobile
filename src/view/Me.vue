<template>
  <div class="me">
    <!--我的-->
    <div class="me-top">
        <div class="me-mark">
        <div class="top-left" @click="shownifo">
            <img src="../assets/me (1).png">

        </div>
        <div class="top-center">
            <div>{{tel}}</div>
            <img src="../assets/xingxing.png">
            </div>
        <div class="top-right">
            <div class="top-right-one">
               <img src="../assets/up.png"><span class="span-left">成长值</span><span class="span-right">{{bill.upcount}}</span>
            </div>
            <div class="top-right-two">
               <img src="../assets/jfz.png"><span class="span-left">积分</span><span class="span-right">{{bill.jf}}</span>
            </div>
        </div>
        </div>
    </div>
    <!--*************************-->
    <div class="bill">
        <li v-for="item in bill.billm">
            <span class="weight">{{item.price}}</span>
            <span>{{item.cont}}</span>
        </li>

    </div>
    <!--**********************-->
    <div>
        <div class="flowall">
            <span @click="showflow">套餐流量</span>
            <span @click="hideall" class="">隐藏</span>
            <span @click="showflow1">话费详情</span>
        </div>
        <v-packageallowancecombolist v-show="show" class="m-bottom"></v-packageallowancecombolist>
        <v-flow v-show="show1" class="f-bottom"></v-flow>
    <!--**********************-->
        <div class="content">
            <div class="content-one">
                <ul>
                    <li>
                        <img src="../.././static/me/Moneybalances.png">
                        <span>话费余额</span>
                    </li>
                    <li @click="goflow()">
                        <img src="../.././static/me/Traffichousekeeper.png">
                        <span>流量管家</span>
                    </li>
                    <li @click="gocombo()">
                        <img src="../.././static/me/yuliang.png">
                        <span>套餐余量</span>
                    </li>
                    <li>
                        <img src="../.././static/money-lists-img/money2.png">
                        <span>我的账单</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../.././static/me/bunisess.png">
                        <span>已定业务</span>
                    </li>
                    <li @click="godetailedlistsearch()">
                        <img src="../.././static/money-lists-img/money5.png">
                        <span>详单查询</span>
                    </li>
                    <li>
                        <img src="../.././static/me/analyze.png">
                        <span>详单分析</span>
                    </li>
                    <li>
                        <img src="../.././static/me/history.png">
                        <span>缴费历史</span>
                    </li>
                </ul>

            </div>
            <div class="content-center">

                <div class="dep-left">
                    <router-link to="/deposite">
                   
                        <div class="depimg">
                            <img src="../.././static/money-lists-img/money0.png">
                        </div>
                        <div class="depmoney">
                            <span>充值缴费</span>
                        </div>
                    
                    </router-link>
                
                    </div>
             <div class="dep-right">
                    <router-link to="/flowdeposite">
                     
                        <div class="depimg">
                            <img src="../.././static/money-lists-img/money0.png">
                        </div>
                        <div class="depmoney">
                            <span>流量充值</span>
                        </div>
                   
                    </router-link>
                 </div>
            </div>
            <div class="content-one">
                 <ul>
                    <li>
                        <img src="../.././static/me/cardbag.png">
                        <span>我的卡包</span>
                    </li>
                    <li>
                        <img src="../.././static/me/Closetopay.png">
                        <span>亲蜜付</span>
                    </li>
                    <li>
                        <img src="../.././static/me/equity.png">
                        <span>标识权益</span>
                    </li>
                    <li>
                        <img src="../.././static/me/up.png">
                        <span>成长值</span>
                    </li>
                </ul>
                </div>
                <div class="content-center">
                <div class="dep-left">
                  
                        <div class="depimg">
                            <img src="../.././static/me/order.png">
                        </div>
                        <div class="depmoney">
                            <span>我的订单</span>
                        </div>
                    </div>
                <div class="dep-right">
                   
                        <div class="depimg">
                           <img src="../.././static/me/collect.png">
                        </div>
                        <div class="depmoney">
                            <span>我的收藏</span>
                        </div>
                </div>
            </div>

            <div class="content-one">
                 <ul>
                    <li>
                        <img src="../.././static/me/cardbag.png">
                        <span>电影卡充值</span>
                    </li>
                    <li>
                        <img src="../.././static/img/me/img/movie.png">
                        <span>我的电影</span>
                    </li>
                    <li>
                        <img src="../.././static/me/subscription.png">
                        <span>消息订阅</span>
                    </li>
                    <li>
                        <img src="../.././static/me/andmore.png">
                        <span>和多号</span>
                    </li>
                </ul>
                </div>
        </div>
    </div>

  </div>
</template>
<script type="text/javascript">
import bus from '.././bus.js'
import packageallowancecombolist from '../view/homePlay/packageAllowance-combolist'
import flow from '../view/homePlay/flow'
    export default {
        components:{

            'v-packageallowancecombolist':packageallowancecombolist,
             'v-flow':flow

            },
        data(){
            return {
                tel:'',
                billjson:'../.././static/me/me.json',
                bill:{},
                billm:[],
                show:false,
                show1:false
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.getbill();
                bus.$on('singintel',(tel)=>{
                    this.tel=tel
                })
            })
            },
        methods:{
            getbill(){
                this.axios.get(this.billjson).then((response)=>{
                this.bill=response.data.bill
                this.billm=this.bill.billm
                console.log(this.bill,this.billm)
                })
            },
            shownifo(){
               this.$router.push({path:'/menifo'})
            },
            showflow(){
                    this.show=!this.show;
                    this.show1=false
            },
            showflow1(){
                    this.show1=!this.show1;
                    this.show=false
            },
            hideall(){
                    this.show=false;
                    this.show1=false
            },
            goflow(){
                this.$router.push({path:'/flow'})
            },
            gocombo(){
                this.$router.push({path:'/packageAllowancecombolist'})
            },
            godetailedlistsearch(){
                this.$router.push({path:'/detailedlistsearch'})
            },
        }
    }
</script>
<style scoped>
    .me{
        margin-bottom:50px;
        background:#f5f5f5;
        margin-top:40px;
    }
    .m-bottom{
        margin-bottom:0 !important
    }
    .f-bottom{
        padding-bottom:0 !important
    }
    .me-top{
            padding:5px 0;
        background:#26A2FF;
    }
    .me-mark{
        width:90%;
        height:50px;

        margin:auto
    }
    .top-left{
        float:left
    }
    .top-left img{
        width: 40px;
        height: 50px;
        margin-top: -5px;

    }
    .top-center{
        display:inline-block;
        margin-left:10px
    }
    .top-center>div{
        color:#fff;
        margin-bottom:5px
    }
    .top-center img{
       width:20px;
       height:20px
    }
    .top-right{
       float:right;
       font-size:12px;

    }
    .top-right-one{
        background:#29E29E;
        padding:2px 0
    }
    .top-right-two{
        background:#E9C229;
         padding:2px 0
    }

    .top-right div{
        height:10px;
        overflow: hidden;
        border-radius:8px;
        border:1px solid transparent;

        margin-top:4px;
        line-height: 10px;
        text-align: center
    }
     .top-right span{
        display:inline-block;
        width:40px;

     }
     .top-right img{
        margin:0 5px;
         width:10px;
         height:10px;
         float:left

     }

     .span-left{
         text-align: left
     }
     .span-right{
         border-left:1px solid #333
     }

     .info{
         position: fixed;
         top:40px;
         left:-100%
     }


     .bill{
         width:100%;
         display:flex;
         margin-top:-5px;
         justify-content: space-around
     }
     .bill li{
         display:inline-block;
         text-align: center;
         flex:1;
       
        background: -webkit-linear-gradient(260deg, #009ad6, #694d9f);
        background: -o-linear-gradient(260deg, #009ad6, #694d9f);
        background: -moz-linear-gradient(260deg, #009ad6, #694d9f);
        background: linear-gradient(260deg, #009ad6, #694d9f);
        padding:4px 0

     }

     .bill li span{
         display:block;
         padding:3px 0;
         color:#fff
     }
     .flowall{
         display:flex;
         justify-content: space-around;
         margin:10px;
     }
     .flowall span{
        height: 10px;
        border: 1px solid #26A2FF;

        font-size:12px;
        letter-spacing: 3px;
        padding: 5px 10px;
        border-radius: 20px;
        line-height: 10px;
     }
     .content{
         width:100%;
         text-align: center
     }
     .content-one{
         width:100%;
         
         font-size:14px;
         background:#fff
     }
     .content-one ul{
         display:flex;
         justify-content: space-around;
         border-bottom:1px solid #ccc;
         border-top:1px solid #ccc
     }
     .content-one ul:nth-child(2){
          border-top:none
     }
     .content-one li{
        display:inline-block;
        width:25%;
        border-left:1px solid #ccc;
        padding:20px 0;
        font-size:14px;
        text-align: center
     }
     .content-one li:nth-child(1){
         border-left:none
     }
     .content-one li img{
        display:inline-block;
        width:30px;
        height:30px;
     }
     .content-one li span{
         display:block;
         padding-top:5px
     }

     .content-center{
       width:100%;
       display:flex;
       justify-content: center;
      
     }
    
     .content-center .depimg{
      display:inline-block;
     }
     .content-center .depimg img{
         width:30px;
         height:30px;
         vertical-align: middle;
     }
    .content-center .depmoney{
     display:inline-block;
     }
     .dep-left{
       width:50%
     }
     .dep-right{
       width:50%
     }
     .depmoney span{
         display:block;
         height:40px;
         line-height: 40px;
     }
    .content-center a{
       color:#000;
     }
     .flow-component,.top{
         margin-top:0 !important;
         margin-bottom:5px !important;
         
     }
</style>
