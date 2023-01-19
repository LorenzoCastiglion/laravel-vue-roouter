import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import Projects from  './pages/Projects.vue';
import AboutMe from './pages/AboutMe.vue';
import Contacts from './pages/Contacts.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/about-me',
            name: 'aboutme',
            component: AboutMe
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/single-project',
            name: 'singleproject',
            component: SingleProject
        },
        {
            path: '/not-found',
            name: 'notfound',
            component: NotFound
        },
       
    ]
});

export { router };