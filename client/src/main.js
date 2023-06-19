import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import LoginForm from './components/LoginForm'
import UserDashboard from './components/UserDashboard'

const routes = [
    {path: '/', name:'Login', component: LoginForm},
    {path: '/user/:id',  name: 'UserDashboard', component: UserDashboard, props:true}
]


const  router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
