import {reactive} from 'vue';

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imagBasePath: 'http://127.0.0.1:8000/storage/',

    menuItems: [
        {
            label: 'Home',
            routeName: 'homepage'
        },
        {
            label: 'Projects',
            routeName: 'projects'
        },
        {
            label: 'About Me',
            routeName: 'aboutme'
        },
        {
            label: 'Contacts',
            routeName: 'contacts'
        },

      
    ]

});