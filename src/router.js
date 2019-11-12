import Vue from 'vue'
import Router from 'vue-router'

import FirstPage from "./components/FirstPage";


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            component: FirstPage
        },
        {
            path: '/capture',
            component: () => import("./components/SecondPage")
        }
    ]
})