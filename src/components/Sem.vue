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