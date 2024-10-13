<!-- <script>
import Vue from "vue";
import Carousel3d from "vue-carousel-3d";
import {Carouse3d, Slide} from "vue-carousel-3d";
Vue.use(Carousel3d);
export default{
    components: {
        Carousel3d,
        Slide,
    },

};
</script>
<template>
<Carousel3d>
    <Slide :index="0">
        <img src="../assets/BG/BOBI3D.png" alt="Loading">
    </Slide>
    <Slide :index="1">
        <img src="../assets/BG/BOBI3D.png" alt="Loading">
    </Slide>
    <Slide :index="2">
        <img src="../assets/BG/BOBI3D.png" alt="Loading">
    </Slide>
    <Slide :index="3">
        <img src="../assets/BG/BOBI3D.png" alt="Loading">
    </Slide>
    <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
        </template>
    </slide>
</Carousel3d>
</template> -->

<script>
export default{
    
}
</script>