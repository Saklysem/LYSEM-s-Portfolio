<script>
import Contact from"./components/Contact.vue";
import Portfolio from"./components/Portfolio.vue";
import Resume from"./components/Resume.vue";
import Software from"./components/Software.vue";
import About from"./components/About.vue";
import SEM from "./components/Sem.vue";
import NavBar from "./components/NavBar.vue";
import RippleEffect from "./components/RippleEffect.vue";
export default{
  name: "App",
  components: {
    NavBar,
    SEM,
    About,
    Software,
    Resume,
    Portfolio,
    Contact,
    RippleEffect,
  },
};
  
</script>

//Run project in App.vue File

<template>
  <div class="General">
    <div class="navBar">
      <NavBar/>
    </div>
      <div class="cover">
        <SEM />
      </div>
      <div id="about">
        <About />
      </div>
    <div>
      <Software />
    </div>
    <div>
      <Resume />
    </div>
    <!-- <div>
      <Portfolio />
    </div>
    <div>
      <Contact />
    </div> -->
    <!-- <div class="rippleEffect">
      <RippleEffect />
    </div> -->
  </div>
</template>

<style lang="scss">


*{
  padding: 0;
  font-family: "Raleway", sans-serif; 
  font-weight: 400;
    //background-color: rgba(0, 87, 137, 0.406);
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
