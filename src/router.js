import vueRouter from 'vue-router'
import App from'./App'
import Login from './components/Login'
import Index from './components/Index'
import Create from './components/Create'

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
        }

    ]
})

export default router
