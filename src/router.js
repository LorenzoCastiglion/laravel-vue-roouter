import { createRouter, createWebHistory } from "vue-router";

import appHome from './pages/appHome.vue';
import appPost from './pages/appPost.vue';
import appPostList from './pages/appPostList.vue';
import appTeam from './pages/appTeam.vue';
import appNotFound from './pages/appNotFound.vue'



const router = createRouter({
history: createWebHistory(),
routes:[
    {
        path: '/',
        name:'HomePage',
        component: appHome
    },

    {
        path: '/post',
        name:'SinglePost',
        component: appPost
    },
    {
        path: '/*',
        name:'Not-Found',
        component: appNotFound
    },
    {
        path: '/Posts',
        name:'Posts-List',
        component: appPostList
    },
    {
        path: '/team',
        name:'Team',
        component: appTeam
    },
]
});

export {router};


