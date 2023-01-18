<template>
  <div>

<ul>
  <li v-for="(project,i) in projects" :key="i">{{ project.name }}</li>
</ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: 'App',
data(){
  return{
    title : 'hello world',
    apiURL: 'http://localhost:8000/api',
    projects:[],
  }
   

  
},

methods:{
  getProjects(){
    axios.get(`${this.apiURL}/projects`).then((response)=>{
       this.projects = response.data.results.data
    
    })
  }
},

mounted(){
  this.getProjects();
}

}
</script>

<style lang="scss" scoped>

</style>