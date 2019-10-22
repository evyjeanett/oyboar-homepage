    <template>
    <div class="header">
        
    <div id="nav">
     <!-- <router-link to="/">Øyboar</router-link> | -->
     <router-link id="band-name" to="/"><h1>ØYBOAR</h1></router-link>
      <router-link to="/music">Musikk</router-link> |
      <router-link to="/about">Om oss</router-link> |
      <router-link to="/conserts">Konserter</router-link> |
      <router-link to="/contact">Kontakt oss</router-link>
      
    </div>
    </div>
    </template>

<script>
    export default {
    }
</script>

<style scoped>
.header {
    display: flex; 
    justify-content: center; 
}
h1 {
    font-size: 5rem; 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#band-name {
    text-decoration: none; 
}


</style>