<!-- RippleBackground.vue -->
<template>
    <div ref="rippleContainer" class="ripple-container">
    </div>
  </template>
  
  <script>
  import $ from 'jquery';
  import 'jquery.ripples';
  
  export default {
    name: 'RippleBackground',
    mounted() {
      $(this.$refs.rippleContainer).ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.06,
      });
    },
    beforeDestroy() {
      $(this.$refs.rippleContainer).ripples('destroy');
    },
  };
  </script>
  
  <style scoped>
  .ripple-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('../assets/BG/Cover.png') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
  }
  
  </style>
  