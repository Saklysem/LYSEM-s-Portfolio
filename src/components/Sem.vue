<script>
export default{

};
</script>
<template>
  <div >
    <div class="cover">
        <div class="image">
          <img src="../assets/BG/Cover.png" alt="Cover">
          <div class="bgEffect"></div>
        </div>
        <div class="profile">
          <div class="profile_style">
            <div class="img_Radious"></div>
            <div class="img"><img src="../assets/BG/Profile.jpg" alt=""></div>
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
              <div class="SCicon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">




.cover  {
  max-width: 100%;
  height: 1100px;
  
}


.image img{
  position: fixed;
  width: 100%;   
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
} 

// Apply water wave effect on cover 
.bgEffect {
  position: absolute;
  width: 100%;   
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  opacity: 30%;
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
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile_style {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -90px;
}

.img_Radious {
  width: 215px;
  height: 215px;
  border-radius: 50%;
  background-image: radial-gradient(white, #006db1);
  opacity: 30%;

}

.img {
  width: 200px;
  height: 200px;
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
  font-size: 30px;
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
  color: white;
  opacity: 70%;
}
</style>