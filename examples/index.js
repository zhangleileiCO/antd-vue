import Vue from 'vue'
import App from './App.vue'
import AntD from '../lib/index'

Vue.use(AntD)

let vue = new Vue({
    el: '#app',
    render: h => h(App)
})
