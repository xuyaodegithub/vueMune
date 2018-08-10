import vueMuneXu from './vue-mune-xu.vue'

const MuneXu = {
  install(Vue, options) {
    Vue.component(vueMuneXu.name, vueMuneXu)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.MuneXu = MuneXu
  Vue.use(MuneXu)
}
export default MuneXu
