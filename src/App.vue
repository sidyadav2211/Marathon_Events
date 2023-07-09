<template>
  <div id="nav">
    <Router-link to="/">Home</Router-link> |
    <Router-link to="/about">About</Router-link> |
    <Router-link :to="{name:'CreateEvent'}"> Create Event </Router-link>
  </div>
  <Router-view/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav{
  padding: 30px;

}

#nav a {
  font-weight: bold;
  font-size: larger;
  font-style: normal;
  color: #2c3e50;
}
#nav a.router-link-exact-active{
  color: #42b983;;
}
</style>
