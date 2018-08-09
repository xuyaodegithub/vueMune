import muneVue from './HelloWorld.vue'

const vueMune = {
  install(Vue, options) {
    Vue.component(muneVue.name, muneVue)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.vueMune = vueMune
  Vue.use(vueMune)
}
export default vueMune
