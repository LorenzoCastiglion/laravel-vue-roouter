<template>
     <section v-if="project" class=" d-flex">
        <div class="img-wrap">
            <img v-if="project.cover_image" :src="`${store.imagBasePath}${project.cover_image}`" :alt="`${project.name}`" class="proj-img">
            <img v-else src="https://i.pinimg.com/originals/20/67/71/2067716a5d1aec5612a07e03db86f9d4.jpg" alt="" class="proj-img">
        </div>
        <div>
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <p>{{ project.diff_lvl }}</p>
        </div>
     </section>
     <div class="text-center mt-5" v-else>
   
        <span class="loader "></span>
     </div>
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


// loeader
.loader {
  width: 60px;
  height: 60px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid rgb(176, 25, 25);
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader 2s linear infinite;
}
.loader::after {
  animation-delay: 1s;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}


</style>