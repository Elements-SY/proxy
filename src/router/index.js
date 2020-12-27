import Vue from 'vue'
import Router from 'vue-router'
var route = []
// link: https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
   const value = modulesFiles(modulePath)
   route.push(value.default)
   return value.default
}, {})
Vue.use(Router)
let router = route.reduce((a, b) => a.concat(b));
export default new Router({
   routes: router,
   mode: 'hash'
})