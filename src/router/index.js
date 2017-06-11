import Vue from 'vue'
import Router from 'vue-router'
// import play from '../view/play'
import error404 from '../components/error404'
//导航
const wrapper=reslove=>require(['.././view/Wrapper'],reslove)
const shop=reslove=>require(['.././view/Shop'],reslove)
const server=reslove=>require(['.././view/Server'],reslove)
const jf=reslove=>require(['.././view/jf'],reslove)
const me=reslove=>require(['.././view/Me'],reslove)
//首页上方列表
const deposite=reslove=>require(['.././view/homePlay/deposite'],reslove)
const flow=reslove=>require(['.././view/homePlay/flow'],reslove)

const myBill=reslove=>require(['.././view/homePlay/myBill'],reslove)
const packageAllowance=reslove=>require(['.././view/homePlay/packageAllowance'],reslove)
const business=reslove=>require(['.././view/homePlay/business'],reslove)
const detailedlistsearch=reslove=>require(['.././view/homePlay/detailedlistsearch'],reslove)
const flowdeposite=reslove=>require(['.././view/homePlay/flowdeposite'],reslove)
const combo=reslove=>require(['.././view/homePlay/combo'],reslove)
//首页上方列表下方
const four4g=reslove=>require(['.././view/homePlay/four4g'],reslove)
const four4Gflycombo=reslove=>require(['.././view/homePlay/four4Gflycombo'],reslove)
const four4gMonthpackage=reslove=>require(['.././view/homePlay/four4gMonthpackage'],reslove)
const relieved=reslove=>require(['.././view/homePlay/relieved'],reslove)

const flowPay=reslove=>require(['.././view/homePlay/flowPay'],reslove)
const volte=reslove=>require(['.././view/homePlay/volte'],reslove)
const migu=reslove=>require(['.././view/homePlay/migu'],reslove)
const hongkong=reslove=>require(['.././view/homePlay/hongkong'],reslove)

//套餐明细
const packageAllowancecombolist=reslove=>require(['.././view/homePlay/packageAllowance-combolist'],reslove)
//搜索
const search=reslove=>require(['.././view/shop-search'],reslove)
//我的个人信息
const menifo=reslove=>require(['.././view/homePlay/me-nifo'],reslove)
//支付页面
const payway=reslove=>require(['.././view/homePlay/payway'],reslove)
//首页流量管家页面列表最后一项
const flowlast=reslove=>require(['.././view/homePlay/flow-last'],reslove)
//附近营业厅
const businesshall=reslove=>require(['../view/homePlay/businessHall'],reslove)
//登录页
const singin=reslove=>require(['../components/singin'],reslove)

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    // {path:'*',redirect:'/error404'},
    {path:'/',component:wrapper},
    {path:'/home',component:wrapper},
    {path:'/shop',component:shop},
    {path:'/Server',component:server},
    {path:'/jf',component:jf},
    {path:'/me',component:me},
    //首页充值缴费
    {path:'/deposite',component:deposite},
    {path:'/deposite/payway',name:'payway',component:reslove=>require(['../view/homePlay/payway'],reslove)},
     //首页流量管家
    {path:'/flow',component:flow},
    //首页流量管家页面列表最后一项
    {path:'/flowlast',component:flowlast},
    //我的账单
    {path:'/mybill',component:myBill},
    //套餐余量
    {path:'/packageallowance',component:packageAllowance},
    {path:'/packageallowance/liuliang',name:'liuliang',component:reslove=>require(['../view/homePlay/packageAllowance-combolist'],reslove)},
    //业务分类
    {path:'/business',component:business},
    //详单查询
    {path:'/detailedlistsearch',component:detailedlistsearch},
    //流量充值
    {path:'/flowdeposite',component:flowdeposite},
    //套餐订购
    {path:'/combo',component:combo},
    //4G全攻略
    {path:'/four4g',component:four4g},
    //4G飞享套餐
    {path:'/four4Gflycombo',component:four4Gflycombo},
    //4G流量月包
    {path:'/four4gMonthpackage',component:four4gMonthpackage},
    //4G流量安心包
    {path:'/relieved',component:relieved},
    //4G流量统付
    {path:'/flowPay',component:flowPay},
    //VOLTE
    {path:'/volte',component:volte},
    //咪咕
    {path:'/migu',component:migu},
    //国际港澳台
    {path:'/hongkong',component:hongkong},
    //更多热卖机型
    {path:'/shop/mobileshop',name:'mobileshop',component:reslove=>require(['../view/homePlay/mobile-shop'],reslove)},
    {path:'/shop/flowdeposite',name:'flowdeposite',component:reslove=>require(['../view/homePlay/flowdeposite'],reslove)},
    //套餐明细
    {path:'/packageAllowancecombolist',component:packageAllowancecombolist},
    //搜索
    {path:'/search',component:search},
    //我的个人信息
    {path:'/menifo',component:menifo},
    //附近营业厅
    {path:'/businesshall',component:businesshall},
    //登录
    {path:'/singin',component:singin},
    //号码归属地
    {path:'/Server/queryiphone',name:'queryiphone',component:reslove=>require(['../view/queryiphone'],reslove)},
    
  ]
})
