<template>
<div >
  <div id="app">
    <NavBar /> 
    <router-view />
  </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
html {
  background-blend-mode: overlay; 
  background: url("assets/oyboar_hovedside.jpg") no-repeat center center fixed;
  -webkit-background-size: cover; 
  -moz-background-size: cover; 
  -o-background-size: cover;  
  background-size: cover;
}

#app {  
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
