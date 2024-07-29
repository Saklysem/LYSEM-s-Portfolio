<script>
  import $ from 'jquery';
  import 'jquery.ripples';
  
  export default {
    name: 'RippleBackground',
    mounted() {
      $(this.$refs.rippleContainer).ripples({
        resolution: 360,
        dropRadius: 30,
        perturbance: 0.03,
      });
    },
    beforeDestroy() {
      $(this.$refs.rippleContainer).ripples('destroy');
    },
  };
</script>
<template>
    <div class="cover">
        <div ref="rippleContainer" class="image">
          <!-- <img src="../assets/BG/Cover.png" alt="Cover"> -->
          <!-- <div id="bgEffect"></div> -->
           <!-- <div class="content"></div> -->
          <div class="profile">
            <div class="profile_style">
              <div class="img_Radious"></div>
              <div class="img"><img src="../assets/BG/Profile.jpg" alt="Loading"></div>
            </div>
            <div class="about">
                <div class="greeting">
                  <h1 class="hi">Hi! I am </h1>
                  <h1 class="name">LYSEM!</h1>
                </div>
                <div>
                  <h3 class="skill">Motion Graphic | Video Editor | Cameraman | 3D Motion</h3>
                </div>
                <!-- Icon -->
                <div class="SMIcon">
                          <p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                          </p>
                          <p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                          </p>
                          <p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                          </p>
                  </div>
            </div>
          </div>
        </div>
    </div>
</template>

<style lang="scss">

.cover  {
  max-width: 100vw;
  height: 680px;
  z-index: 1;
  margin-top: auto;
}
.image {
  width: 100%;
  height: 100%;   
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/BG/Cover.png') no-repeat center center;
  margin-top: auto;
//background-size: cover;
//overflow: hidden;
} 
// Apply water wave effect on cover 
#bgEffect {
  position: absolute;
  width: 100%;   
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  opacity: 50%;
}
// Social icon style
.SCicon {
  width: 200px;
  height: 50px;
  padding: 5px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  // background-color: #006db1;
}
// .SCicon svg{
//   width: 50px;
//   height: 50px;
//   border: 1.5px solid white;
//   border-radius: 50px;
// }
.profile {
  width: fit-content;
  height: fit-content;
  margin-top: 70px;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile_style {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}

.img_Radious {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: radial-gradient(white, #006db1);
  opacity: 30%;
}

.img {
  width: 230px;
  height: 230px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;       
}

.profile img{
  width: 250px;
  height: auto;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.greeting {
  display: flex;
  flex-direction: row;
  font-size: 40px;
  color: white;
}
.greeting .hi{
  font-family: roboto;
  color: white;
}

.greeting .name {
  font-family: roboto;
  color: #ffd700;
  margin-left: 15px;
}

.skill {
  font-size: 20px;
  font-family: sans-serif;
  //background: linear-gradient(45deg, #ffd700, #ffffff, #00939e);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  opacity: 100%;
  margin-top: -15px;
  color: white;
}
// Icon style 
.SMIcon {
    width: 250px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 0px;
    margin-left: -20px;
    // background-color: #ffd90053;
}
.SMIcon p{
    width: 50px;
    height: 50px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1.5px solid white;
    // background-color: #004186;   
}
.SMIcon P:hover{
    // width: 100px;
    // border-radius: 50px;
    border: 1.5px solid #ffd700;
}

// Responsive size
@media (max-width: 500px){
  .cover  {
    max-width: 600px;
    height: 400px;
    margin: auto;
    z-index: 0;
    background-color: #006db1;
  }

  .image {
    margin: auto;
    width: 100%; 
    height: 100%;  
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: url('../assets/BG/Cover2.png')  no-repeat center center;
  //background-size: cover;
  //overflow: hidden;
  } 
  // Apply water wave effect on cover 
  #bgEffect {
    position: absolute;
    width: 100%;   
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #303030;
    opacity: 50%;
  }
  // Social icon style
  .SCicon {
    width: 200px;
    height: 50px;
    padding: 5px;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    // background-color: #006db1;
  }
  // .SCicon svg{
  //   width: 50px;
  //   height: 50px;
  //   border: 1.5px solid white;
  //   border-radius: 50px;
  // }
  .profile {
    width: fit-content;
    height: fit-content;
    margin-top: auto;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .profile_style {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }
  
  .img_Radious {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-image: radial-gradient(white, #006db1);
    opacity: 30%;
  }
  
  .img {
    width: 150px;
    height: 150px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;       
  }
  
  .profile img{
    width: 160px;
    height: auto;
  }
  
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .greeting {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    color: white;
  }
  .greeting .hi{
    font-family: roboto;
    color: white;
  }
  
  .greeting .name {
    font-family: roboto;
    color: #ffd700;
    margin-left: 15px;
  }
  
  .skill {
    font-size: 14px;
    color: white;
    opacity: 100%;
    margin-top: -15px;
  }
  // Icon style 
  .SMIcon {
      width: 250px;
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-top: 0px;
      margin-left: -20px;
      // background-color: #ffd90053;
  }
  .SMIcon p{
      width: 40px;
      height: 40px;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      border: 1.5px solid white;
      // background-color: #004186;   
  }
  .SMIcon p svg{
    width: 20px;
  }
  .SMIcon P:hover{
      // width: 100px;
      // border-radius: 50px;
      border: 1.5px solid #ffd700;
  }
}
</style>