import { createRouter, createWebHistory } from 'vue-router'
import  HomePage   from '../views/HomePage.vue'
import   AboutPage   from '../views/AboutPage.vue'
import EventDetails from '../views/EventDetails'
import NotFound from '../views/NotFound'

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
    },
    {
     path: '/:catchAll(.*)', 
    component: NotFound,
      name: 'NotFound'
    }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	mode: 'history',
	routes,
});
export default router