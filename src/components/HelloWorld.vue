<template>
  <div class="hello">
    <!--<div class="header">-->
      <!--<i class="icon iconfont icon-caidan" @click="showOrClose=!showOrClose"> </i>-->
    <!--</div>-->
    <transition name="bounce">
      <ul class="menu" v-show="showOrClose">
        <li v-for="(item,index) in paresMune" class="sonMune">
          {{item.title}}
          <i class="icon iconfont icon-you" style="float: right; margin-right: 0.4rem;"></i>
          <ul v-if="item.childBtn.length>0"  class="son">
              <li v-for="(val,key) in item.childBtn" @click="tochangeR(val)">
                  {{val.title}}
                <i class="icon iconfont icon-you"  style="float: right; margin-right: 0.4rem;"></i>
              </li>
          </ul>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['paresMune','showOrClose'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted(){
    $('li').has('ul').addClass('show').children('ul').hide();
    $('li').has('ul').click(function(ev){
      if(this==ev.target){
        console.log(ev.target)
        if($(this).children('ul').is(':hidden')){//满足子元素ul显示
          $(this).addClass('hide').removeClass('show').children('ul').show(400);
          $(this).children('i').addClass('icon-xia').removeClass('icon-you')
        }else{
          $(this).addClass('show').removeClass('hide').children('ul').hide(400);
          $(this).children('i').addClass('icon-you').removeClass('icon-xia')
        }
      }
    });
  },
  methods:{
    tochangeR(val){
      this.$emit('toparents',val.routerUrl)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .menu{
    /*background-color: #ffffff;*/
    /*transition: all 0.3s linear;*/
    position: fixed;
    /*top:1.08rem;*/
    left:0;
    top:0;
    height:100%;
    width:5rem;
    /*text-align: center;*/
    line-height: 0.36rem;
    text-indent: 2em;
    font-size: 0.28rem;
    background-color: #FAFAFA;
    .sonMune{
      background-color: #ffffff;
      .son{
        background-color: #FAFAFA;
      }
    }
    i{
      text-indent: 0;
    }
    & > li {
      /*padding:0 0.4rem;*/
    }
  }
  .bounce-enter-active {
    /*animation: bounce-in2 .5s linear;*/
  }

  .bounce-leave-active {
    /*animation: bounce-in .5s linear;*/
    transform: translateX(-100%);
  }
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
  li ul{
    padding-left: 0.2rem;
    li:last-child{
      border-bottom: none;
    }
  }
  li{
   line-height: 0.84rem;
    border-bottom: 1px solid #CCCCCC;
  }
  .header{
    line-height: 1.08rem;
    padding:0 0.4rem;
    background-color: #ffffff;
    i{
      font-size: 0.36rem;
    }
  }
</style>
