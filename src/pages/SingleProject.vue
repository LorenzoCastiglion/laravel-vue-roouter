<template>
     <section v-if="project">
        <div>
            <img v-if="project.cover_image" :src="`${store.imagBasePath}${project.cover_image}`" :alt="`${project.name}`" class="proj-img">
            <img v-else src="https://i.pinimg.com/originals/20/67/71/2067716a5d1aec5612a07e03db86f9d4.jpg" alt="">
        </div>
        <div>
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <p>{{ project.diff_lvl }}</p>
        </div>
     </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store'
export default {
    name: 'SingleProject',

    data() {
        return {
            store,
            project: null,
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((response) => {
                console.log(response.data.results)
                if (response.data.success) {
                    this.project = response.data.results;
                } else {
                    this.$router.push({ name: 'notfound' })
                }
            });
        }

    },

    mounted(){
       setTimeout(
        this.getProject,3000
       )
            
        
        
    }
    
}
</script>

<style lang="scss" scoped>

.proj-img{
    height: 300px;
}

</style>