import Home from './components/Home.vue'
import Header from './components/Header.vue'
import { resolve } from 'path';
// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'


//Leazy loading
const User = resolve => {
    require.ensure(['./components/user/User.vue'], ()=>{
        resolve(require('./components/user/User.vue'));
    })
}
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], ()=>{
        resolve(require('./components/user/UserStart.vue'));
    })
}
//Load page leazyly using group 'user' it means when we visit one of the page, all files for this two pages will be loaded
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], ()=>{
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user')
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], ()=>{
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user')
}

export const routes = [
    // { path: '', component: Home },
    { path: '', components: {
        default: Home,
        'header-top': Header
    } },
    // { path: '/user', component: User, children: [
    //     {path: '', component: UserStart},
    //     {path: ':id', component: UserDetail},
    //     {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    // ] }
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
         }, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            
            next()
        }},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ] },
    {path: '/redirect', redirect: '/user'},
    {path: '*', redirect: '/'}
]