import vueRouter from 'vue-router'
import App from'./App'
import Login from './components/Login'
import Index from './components/Index'
import Create from './components/Create'
import User from './components/User'
import Documents from './components/Documents'
import Change from './components/Change'

const router = new vueRouter({
    mode:'history',
    base: __dirname,
    routes:[

        {
            path: '/',
            name: "root",
            component: App
        },

        {
            path: '/login', 
            name: "login", 
            component: Login
        },
        
        {
            path: '/index', 
            name: "index", 
            component: Index
        },

        {
            path:'/user/createUser',
            name: "create",
            component: Create
        },

        {
            path:'/user/:username',
            name: "user",
            component: User
        },

        {
            path:'/change',
            name: "change",
            component: Change
        },


        {
            path:'/user/Buscar',
            name: "documents",
            component: Documents
        }

    ]
})

export default router
