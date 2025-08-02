import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Profile from '../pages/Profile.vue'
import PostDetail from '../pages/PostDetail.vue'
import PostEditor from '../pages/PostEditor.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile },
    { path: '/post/:id', component: PostDetail },
    { path: '/post-editor', component: PostEditor }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
