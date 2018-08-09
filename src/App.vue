<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <menu-vue :paresMune="arrList" :showOrClose="showOrClose" v-on:toparents="tochange"></menu-vue>
  </div>
</template>

<script>
  import menuVue from './components/HelloWorld.vue'
export default {
  name: 'App',
  data(){
    return{
//      showOrClose:true,
//      arrList:[
//        {
//          title:'关于我们',
//          childBtn:[
//            {title:'中心概况',routerUrl:''},
//            {title:'业务范围',routerUrl:''},
//            {title:'组织管理',routerUrl:''},
//            {title:'系统建设',routerUrl:''},
//          ]
//        },
//        {
//          title:'新闻中心',
//          childBtn:[
//            {title:'通知公告',routerUrl:''},
//            {title:'行业资讯',routerUrl:''},
//          ]
//        },
//        {
//          title:'会诊专家',
//          childBtn:[
//            {title:'名医名家',routerUrl:''},
//            {title:'科室列表',routerUrl:''},
//            {title:'特殊医疗',routerUrl:''},
//          ]
//        },
//        {
//          title:'远程教育',
//          childBtn:[
//
//          ]
//        },
//        {
//          title:'加入我们',
//          childBtn:[
//            {title:'加盟条件',routerUrl:''},
//            {title:'加盟申请',routerUrl:''},
//            {title:'协同医院',routerUrl:''},
//          ]
//        }
//      ]
    }
  },
  components:{
    menuVue
  },
  methods:{
    tochange(val){
      this.$router.push(val)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
