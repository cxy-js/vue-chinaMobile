import Vue from 'vue'
import Router from 'vue-router'
import Wrapper from '../view/wrapper'
import Shop from '../view/Shop'
import play from '../view/play'
import singin from '../components/singin'
import Server from '../view/Server'
import businesshall from '../view/homePlay/businessHall'
import four4g from '../view/homePlay/four4g'
import four4Gflycombo from '../view/homePlay/four4Gflycombo'
import four4gMonthpackage from '../view/homePlay/four4gMonthpackage'
import relieved from '../view/homePlay/relieved'
import flowPay from '../view/homePlay/flowPay'
import volte from '../view/homePlay/volte'
import migu from '../view/homePlay/migu'
import hongkong from '../view/homePlay/hongkong'

import jf from '../view/jf'
import me from '../view/Me'
import menifo from '../view/homePlay/me-nifo'
import error404 from '../components/error404'
import search from '../view/shop-search'
import deposite from '../view/homePlay/deposite'
import payway from '../view/homePlay/payway'
import flow from '../view/homePlay/flow'
import myBill from '../view/homePlay/myBill'
import packageAllowance from '../view/homePlay/packageAllowance'
import business from '../view/homePlay/business'
import detailedlistsearch from '../view/homePlay/detailedlistsearch'
import flowdeposite from '../view/homePlay/flowdeposite'
import combo from '../view/homePlay/combo'
import packageAllowancecombolist from '../view/homePlay/packageAllowance-combolist'
import flowlast from '../view/homePlay/flow-last'
import flowComboChild from '../view/homePlay/flowComboChild'






import shopAd from '../view/shoplink-ad/shop-ad'
Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    // {path:'*',redirect:'/error404'},
    {path:'/',component:Wrapper},
    {path:'/home',component:Wrapper},
    {path:'/shop',component:Shop},
    {path:'/shop/mobileshop',name:'mobileshop',component:reslove=>require(['../view/homePlay/mobile-shop'],reslove)},
    {path:'/shop/flowdeposite',name:'flowdeposite',component:reslove=>require(['../view/homePlay/flowdeposite'],reslove)},

    {path:'/Server',component:Server},
    {path:'/Server/queryiphone',name:'queryiphone',component:reslove=>require(['../view/queryiphone'],reslove)},
    {path:'/businesshall',component:businesshall},
    {path:'/four4g',component:four4g},
    {path:'/four4Gflycombo',component:four4Gflycombo},
    {path:'/four4gMonthpackage',component:four4gMonthpackage},
    {path:'/relieved',component:relieved},
    {path:'/flowPay',component:flowPay},
    {path:'/volte',component:volte},
    {path:'/migu',component:migu},
    {path:'/hongkong',component:hongkong},

    {path:'/singin',component:singin},


    {path:'/jf',component:jf},
    {path:'/me',component:me},
    {path:'/menifo',component:menifo},
    //公用搜索
    {path:'/search',component:search},
    //首页上方列表路由
    {path:'/deposite',component:deposite},
    {path:'/deposite/payway',name:'payway',component:reslove=>require(['../view/homePlay/payway'],reslove)},
    {path:'/flow',component:flow},

    {path:'/mybill',component:myBill},
    {path:'/packageallowance',component:packageAllowance},
    {path:'/packageallowance/liuliang',name:'liuliang',component:reslove=>require(['../view/homePlay/packageAllowance-combolist'],reslove)},
    {path:'/business',component:business},
    {path:'/detailedlistsearch',component:detailedlistsearch},
    {path:'/flowdeposite',component:flowdeposite},
    {path:'/combo',component:combo},
    {path:'/packageAllowancecombolist',component:packageAllowancecombolist},
    {path:'/flowlast',component:flowlast},
    {path:'/flowComboChild',component:flowComboChild},

    //商城
    {path:'/shopAd',component:shopAd},





  ]
})
