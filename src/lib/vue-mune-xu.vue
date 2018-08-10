<template>
  <div class="hello">
    <div class="first"></div>
    <div class="second"></div>
    <div class="third"></div>
  </div>
</template>

<script>
  export default {
    name: 'vue-mune-xu',
    props:['first','second','third'],
    data () {
      return {

      }
    },
    mounted(){
     let odiv= document.getElementsByClassName('first')[0]
     let odiv1= document.getElementsByClassName('second')[0]
     let odiv2= document.getElementsByClassName('third')[0]
      odiv.style.cssText='background-color:'+this.first
      odiv1.style.cssText='background-color:'+this.second
      odiv2.style.cssText='background-color:'+this.third
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .hello{
   display: flex;
   justify-content: space-between;
 }
  .first,.second,.third{
    width:30%;
    border:1px solid #2e2e2e;
    height:2rem;
  }
</style>
