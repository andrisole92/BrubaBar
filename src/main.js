import Vue from 'vue'
import App from './App.vue'
import vueKanban from 'vue-kanban'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.use(vueKanban);

window.debug = {
  vue: function(o){
    console.log(o);
  }
};

new Vue({
  el: '#app',
  render: h => h(App)
});
