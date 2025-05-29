<template>
  <div class="app">
    <HeaderComponent />
    <div>
      <nav v-if="$route.path !== '/login'">
        <router-link to="/rutass">Home</router-link>
        <router-link to="/info">Rutas</router-link>
        <router-link to="/infoApp">Información</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: { HeaderComponent },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      this.$router.replace({ path: "/rutass" });
    }
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: #1e1e1e;
  padding: 20px 0;
  text-align: center;
  z-index: 999;
}

nav a {
  color: #42b983;
  text-decoration: none;
  margin: 0 20px;
  font-size: 18px;
  transition: color 0.3s;
  font-weight: bold;
}

nav a:hover {
  color: #16b6bf;
  transform: scale(1.05);
}

.app {
  padding-top: 120px;
  min-height: 100vh;
}

html,
body {
  background-color: #121212;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
