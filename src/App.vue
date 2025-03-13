<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <!-- <router-link to="/s">Home</router-link>  -->
    <!-- <router-link to="/rutas">Rutas</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  margin: -8px -8px 0 -8px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


nav {
  background-color: #1e1e1e;
  padding: 10px;
  text-align: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  transition: color 0.3s;
}

nav a:hover {
  color: #16b6bf;
}
</style>
