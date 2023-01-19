<template>
    <section>
        <h1>Lista dei Progetti</h1>
        <div class="row">
            <div class="col-12 col-md-4" v-for="(project, index) in projects" :key="index">
                <div class="card" style="width: 18rem;">
                    <div class="wrap-img">
                        <img v-if="project.cover_image" :src="`${store.imagBasePath}${project.cover_image}`" class="card-img-top" :alt="project.name">
                        <img v-else src="https://i.pinimg.com/originals/20/67/71/2067716a5d1aec5612a07e03db86f9d4.jpg" alt="">
                        
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p class="card-text">{{ truncateContent(project.description) }}</p>
                        <router-link class="btn btn-primary"
                            :to="{ name: 'singleproject', params: { slug: project.slug } }">
                            Vedi il progetto
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li @click="prev()" class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item" v-for="n in lastPage"><a class="page-link" @click="getProject(n)">{{ n }}</a></li>
                <li @click="next()" class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Projects',
    data() {

        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
            total: 0,
            contentMaxLen: 100,

        }
    },

    methods: {

        getProject(pagenum) {

            axios.get(`${this.store.apiBaseUrl}/projects`, { params: { page: pagenum } }).then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.total = response.data.results.total;
            })
        },

        truncateContent(text) {
            if (text.length > this.contentMaxLen) {
                return text.substr(0, this.contentMaxLen) + '...';
            }
            return text;
        },

        prev() {
        if(this.currentPage > 1) {
            this.currentPage--;
            this.getProject(this.currentPage);
        }
    },
    next() {
        if(this.currentPage < this.lastPage) {
            this.currentPage++;
            this.getProject(this.currentPage);
        }
    }
    },

    computed: {

    },

    mounted() {

        this.getProject(1)
    }


}

</script>

<style lang="scss" scoped>

.wrap-img{
    height: 300px;
    overflow: hidden;
   
}

</style>