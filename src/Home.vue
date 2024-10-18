<script>
import PortfolioTab from "./components/PortfolioTab.vue";
import Contact from"./components/Contact.vue";
import Portfolio from"./components/Portfolio.vue";
import Resume from"./components/Resume.vue";
import Software from"./components/Software.vue";
import About from"./components/About.vue";
import SEM from "./components/Sem.vue";
import RippleEffect from "./components/RippleEffect.vue";
export default{
  name: "App",
  components: {
    SEM,
    About,
    Software,
    Resume,
    // eslint-disable-next-line vue/no-unused-components
    Portfolio,
    PortfolioTab,
    Contact,
    // eslint-disable-next-line vue/no-unused-components
    RippleEffect,
  },
};
  
</script>

//Run project in App.vue File

<template>
  <div>
    <div id="Navbar">
      <NavBar/>
    </div>
      <div id="SEM">
        <SEM />
      </div>
      <div id="About">
        <About />
      </div>
    <div id="Software">
      <Software />
    </div> 
    <div id="Resume">
      <Resume />
    </div>
    <!-- <div>
      <Portfolio />
    </div>  -->
    <div id="PortfolioTab">
      <PortfolioTab />
    </div> 
    <div id="contact">
      <Contact />
    </div> 
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
