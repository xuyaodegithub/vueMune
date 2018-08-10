<template>
  <div id="app">
      <vue-mune-xu :first="first" :second="second" :third="third"  v-on:toparents="tochange"></vue-mune-xu>
  </div>
</template>

<script>
  import vueMuneXu from './lib/vue-mune-xu.vue'
export default {
  name: 'app',
  data () {
    return {
      first:'red',
      second:'blue',
      third:'deeppink'
    }
  },
  components:{
    vueMuneXu
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
