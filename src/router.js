import vueRouter from 'vue-router'
import App from'./App'
import Login from './components/Login' 
import Create from './components/Create'
import Inicial from './components/Inicial'

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
            path: '/inicio', 
            name: "incio", 
            component: Inicial
        },

        {
            path:'/user/createUser',
            name: "create",
            component: Create
        }
        

    ]
})

export default router
