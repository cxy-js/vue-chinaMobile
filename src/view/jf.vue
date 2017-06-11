<template>
  <div class="me">
    <div class="top">
   		 <div class="top-img1">
    		<img src="../.././static/img/me/img/chinamobile.png" ></img>
    	</div>
    	<div class="top-img1">
    		<img src="../.././static/img/me/img/jf.png"></img>
    	</div>
        <!--list-->
      <div class="list">
        <a href=""><img src="../.././static/img/me/img/wlan-4.png"></img><span>类目</span></a>
        <a href=""><img src="../.././static/img/me/img/chang.png"></img><span>兑换榜</span></a>
        <a href=""><img src="../.././static/img/me/img/chang-1.png"></img><span>我可兑换</span></a>
        <router-link to="/search"><img src="../.././static/img/me/img/search.png"></img><span>搜索</span></router-link>
        <a href=""><img src="../.././static/img/me/img/my.png"></img><span>我的积分</span></a>
      </div>
    </div>
    <div class="hot">
      <div class="title">
        <h3>热门兑换</h3><span @click="show=!show">换一批</span>
      </div>
        <ul class="hot-ul-1" v-if="show">
          <li>
            <div class="content-top">
              <img src="../.././static/img/me/img/deposit.png" alt="">
              <span>话费充值</span>
              <span><b>10</b><small>元</small></span>
            </div>
            <div class="content-bottom">
              <span>10元话费直充</span>
              <span>积分<i>840</i></span>
            </div>
          </li>
          <li>
            <div class="content-top">
              <img src="../.././static/img/me/img/deposit.png" alt="">
              <span>话费充值</span>
              <span><b>30</b><small>元</small></span>
            </div>
            <div class="content-bottom">
              <span>30元话费直充</span>
              <span>积分<i>2500</i></span>
            </div>
          </li>
          <li>
            <div class="content-top">
              <img src="../.././static/img/me/img/deposit.png" alt="">
              <span>话费充值</span>
              <span><b>50</b><small>元</small></span>
            </div>
            <div class="content-bottom">
              <span>10元话费直充</span>
              <span>积分<i>4170</i></span>
            </div>
          </li>
          <li>
            <div class="content-top">
              <img src="../.././static/img/me/img/deposit.png" alt="">
              <span>流量加油包</span>
              <span>10<small>元</small>=<b>100M</b></span>
            </div>
            <div class="content-bottom">
              <span>10元=100M流量</span>
              <span>积分<i>840</i></span>
            </div>
          </li>
        </ul>
        <ul class="hot-ul-1" v-if="!show">
          <li>
            <div class="content-top">
              <img src="../.././static/img/me/img/deposit.png" alt="">
              <span>话费充值</span>
              <span><b>100</b><small>元</small></span>
            </div>
            <div class="content-bottom">
              <span>100元话费直充</span>
              <span>积分<i>8340</i></span>
            </div>
          </li>
          <li>
            <div class="content-top">
              <img src="../.././static/img/me/img/deposit.png" alt="">
              <span>数据流量包</span>
              <span>5<small>元</small><b>30M</b></span>
            </div>
            <div class="content-bottom">
              <span>5元30M数据流量</span>
              <span>积分<i>420</i></span>
            </div>
          </li>
          <li>
            <div class="content-top">
              <img src="../.././static/img/me/img/deposit.png" alt="">
              <span>数据流量包</span>
              <span>10<small>元</small><b>70M</b></span>
            </div>
            <div class="content-bottom">
              <span>10元70M数据流量包</span>
              <span>积分<i>840</i></span>
            </div>
          </li>
          <li>
            <div class="content-top">
              <img src="../.././static/img/me/img/deposit.png" alt="">
              <span>话费直充</span>
              <span><b>300元</b></span>
            </div>
            <div class="content-bottom">
              <span>300元话费直充</span>
              <span>积分<i>25000</i></span>
            </div>
          </li>
        </ul>
        </div>
        <!--为您推荐-->
        <div class="tuijian">
          <div class="title">
            <h3>为您推荐</h3>
          </div>
          <li>
            <div class="tuijian-title">
              <span>洗护/保健</span>
              <span>健康生活每一天</span>
            </div>
            <div class="tuijian-img">

            <img src="../.././static/img/me/img/xihu.jpg" alt="">
            </div>
          </li>
          <li>
            <div class="tuijian-title">
              <span>家具/家纺/家装/厨具</span>
              <span>积极接触的感觉</span>
            </div>
            <div class="tuijian-img">

            <img src="../.././static/img/me/img/xijiantao.jpg" alt="">
            </div>
          </li>
          <li>
            <div class="tuijian-title">
              <span>运动户外/汽车用品</span>
              <span>专业车载器具用品</span>
            </div>
            <div class="tuijian-img">

            <img src="../.././static/img/me/img/shport.jpg" alt="">
            </div>
          </li>
          <li>
            <div class="tuijian-title">
              <span>母婴/玩具童装童鞋</span>
              <span>给宝宝们的礼物</span>
            </div>
            <div class="tuijian-img">

            <img src="../.././static/img/me/img/wanju.jpg" alt="">
            </div>
          </li>
          </div>

            <!--用心之选-->
            <div class="tuijian">
              <div class="title">
                <h3>用心之选</h3>
              </div>
              <li>
                <div class="tuijian-title">
                  <span>家用电器</span>
                  <span>厨房小助手</span>
                </div>
                <div class="tuijian-img">

                <img src="../.././static/img/me/img/cookrome.jpg" alt="">
                </div>
              </li>
              <li>
                <div class="tuijian-title">
                  <span>手机数码/电脑办公</span>
                  <span>方便实用 办公神器</span>
                </div>
                <div class="tuijian-img">

                <img src="../.././static/img/me/img/computed.jpg" alt="">
                </div>
              </li>
              <li>
                <div class="tuijian-title">
                  <span>服装/鞋靴/箱包</span>
                  <span>包包在手 世界我有</span>
                </div>
                <div class="tuijian-img">

                <img src="../.././static/img/me/img/bag.jpg" alt="">
                </div>
              </li>
              <li>
                <div class="tuijian-title">
                  <span>珠宝首饰/手表</span>
                  <span>璀璨星光 富贵奢华</span>
                </div>
                <div class="tuijian-img">

                <img src="../.././static/img/me/img/zhubao.jpg" alt="">
                </div>
              </li>
              </div>

              <!--品质生活-->
              <div class="tuijian">
                <div class="title">
                  <h3>品质生活</h3>
                </div>
                <li>
                  <div class="tuijian-title">
                    <span>自动售卖机</span>
                    <!-- <span>健康生活每一天</span> -->
                  </div>
                  <div class="tuijian-img">

                  <img src="../.././static/img/me/img/m.jpg" alt="">
                  </div>
                </li>
                <li>
                  <div class="tuijian-title">
                    <span>洗车服务</span>
                    <!-- <span>健康生活每一天</span> -->
                  </div>
                  <div class="tuijian-img">

                  <img src="../.././static/img/me/img/car.jpg" alt="">
                  </div>
                </li>
                <li>
                  <div class="tuijian-title">
                    <span>餐饮</span>
                    <!-- <span>健康生活每一天</span> -->
                  </div>
                  <div class="tuijian-img">

                  <img src="../.././static/img/me/img/food.jpg" alt="">
                  </div>
                </li>
                <li>
                  <div class="tuijian-title">
                    <span>电影</span>
                    <!-- <span>健康生活每一天</span> -->
                  </div>
                  <div class="tuijian-img">

                  <img src="../.././static/img/me/img/movie.png" alt="">
                  </div>
                </li>
                </div>
        </div>

    </div>

</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        show:true
      }
    },
    // methods:{
    //   translatey(){
    //     this.show=false
    //   }
    // }
  }
</script>
<style scoped>
	.me{
		width:100%;
    margin-bottom:40px;
       margin-top:40px;
	}
	.top{
		width:100%;
		text-align: center;
   	padding-bottom:15px;
    border-bottom: 1px solid #ccc;
      background:#fff

	}
	.top .top-img1{
		display:inline-block;
		width:50px;
		height:50px;
		padding:30px;
	}
	.top .top-img1 img{
		max-width:100%;
		height:100%;
	}
	.list{
		width:100%;
		text-align: center
	}

	.list a{
    display: inline-block;
    text-align: center;
    font-size:14px
	}
	.list a img{
    display:inline-block;
    width:40px;
    height: 40px;
    margin:2px 5px

	}
  .list a span{
    display:block
  }

	.title{
    width: 100%;
    margin-bottom: 20px;
    background: #f4f4f4;
    height: 30px;
    line-height: 30px;

	}
  .hot .title h3{
    float:left
  }
  h3{
    margin-left:10px;
    margin-bottom:10px;
    font-size:16px
  }
  .hot .title span{
    float:right;
    margin-right:5px
  }
  .hot{
    background:#fff;
    text-align: center;
    overflow: hidden;
    margin:25px auto;
    height:175px;

  }

  .hot ul{
    display: inline-block;
/* margin: 3px auto; */
    width: 100%;
    margin-top: -7px;
    border-bottom: 1px solid #ccc;


  }
    .hot ul li{
      display:inline-block;
      height: 130px;
      width: 23%;
      font-size: 12px;


    }
  .hot ul li img{
    display:inline-block;
    width:40px;
    height:40px
  }
	.hot ul span{
	 	display:block;
    margin:2px 0;
	}
  b{
    font-weight:bold
  }
  small{
    font-size:12px
  }
  .content-top{
    border:1px solid #ccc;
    padding:10px;
    margin-bottom:2px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .content-bottom span{
    width:80px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    height:20px;
    font-size:12px

  }
  i{
  font-style: normal;
  color:#E40077
  }


  .tuijian{
    width:100%;
      background:#fff
  }
  .tuijian li{
    display: inline-block;
    width: 50%;
    overflow: hidden;
    height: 120px;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-left: -5px;
    margin-top: -1px;

  }
  .tuijian-title{
    float: left;
    margin-left: 10px;
    font-size: 12px;
    margin-top: 20px;
  }
  .tuijian-title span{
    display:block;
    margin:2px 0;
    width:65px;
    height:20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .tuijian-title span:nth-child(1){
    font-size:14px
  }
  .tuijian-title span:nth-child(2){
    font-size:12px
  }
  .tuijian-img{
    float: right;
    width: 85px;
    height: 70px;
    margin-top: 20px;
    /*margin-right: 5px;*/


  }
  .tuijian-img img{
    max-width:100%;
    height:70px
  }
</style>
