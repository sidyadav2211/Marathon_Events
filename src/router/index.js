import { createRouter, createWebHistory } from 'vue-router'
import  HomePage   from '../views/HomePage.vue'
import   AboutPage   from '../views/AboutPage.vue'
import EventDetails from '../views/EventDetails'

const routes =[
    {
        path:'/',
        name:'HomePage',
        component: HomePage,
    },
    {
        path:'/about',
        name:'AboutPage',
        component: AboutPage,
    },
    {
    path:'/event/:id',
    props: true,
    name:"EventDetails",
    component:EventDetails,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router