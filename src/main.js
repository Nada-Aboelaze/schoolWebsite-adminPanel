import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {createRouter,createWebHistory} from 'vue-router'
import getAllstudents from './components/pages/getAllstudents.vue'
import addStudent from './components/pages/addStudent.vue'
import home from './components/pages/home.vue'
import getDataByID from './components/pages/getDataByID.vue'
import deletedStudentComp from './components/pages/deletedStudent'
import notfoundComp from './components/pages/error.vue'
import aboutUsComp from './components/pages/aboutUs.vue'



const routes = [
    {
        path:'/allStudents',
        component: getAllstudents
    },
    {
        path: '/addStudent',
        component: addStudent
    },
    {
        path: '/',
        component: home
    },
    {
        path: '/allStudents/:id',
        component: getDataByID
    },
    {
        path: '/deletedStudent/:id',
        component: deletedStudentComp
    },
    {
        path: '/About Us',
        component: aboutUsComp
    },
    {
        path:'/:Notfound(.*)*',
        component: notfoundComp
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
