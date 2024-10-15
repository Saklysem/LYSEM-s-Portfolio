<script>
import NavBar from "./components/NavBar.vue";
export default{
  name: "App",
  components: {
    NavBar,

  },
};
  
</script>

//Run project in App.vue File

<template>
  <div>
    <div>
      <NavBar/>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">


*{
  padding: 0;
  font-family: "Raleway", sans-serif; 
  font-weight: 400;
}

</style>

<!-- <template>
  <div id="app">
    <button @click="scrollToContainer">Scroll to Container</button>
Add some content to demonstrate scrolling 
    <div style="height: 1000px;"></div>
    <div ref="container" class="container">
      This is the container to scroll to.
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    scrollToContainer() {
      this.$refs.container.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style>
.container {
  height: 500px;
  background-color: lightblue;
}
</style> -->
