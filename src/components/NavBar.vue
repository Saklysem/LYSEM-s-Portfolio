<script>
export default{

};
</script>

<template>

<div class="nav">
  <div class="logo">
    <img src="../assets/ZER01.png" alt="LOGO">
    <h1></h1>
  </div>
  <div class="menu">
    <ul >
      <!-- <li><a class="active" href="#">Home</a></li> -->
      <li><a href="#">SEM</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Resume</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">contact</a></li>
    </ul>
  </div>
  <div class="contact">
    <p>|</p>
    <a class="Phone" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      +855 86699553
      </a>
  </div>
</div>

</template>



<style lang="scss" scoped>

.nav{
  background-color:  rgba(17, 24, 39, 0.90);
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  z-index: 10;
  
}
.logo{
  display: flex;
  flex-direction: row;
  width: 50px;
  height: 50px;
  padding: 6px;
  align-items: center;
  margin-right: 500px;
}
.logo img{
  height: 60px
}
.logo h1{
  margin-left: 10px;
}

.menu{
  margin-left: 100px;
}
.menu ul{
  display: flex;
  flex-direction: row;
  list-style-type: none;
}

li{
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
li a{
  display: block;
  color: white;
  justify-content: center;
  padding: 14px 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: roboto ;
}
li a:hover:not(.active){
  // background-color: #303030;
  color: #ffd700;
}
// .active{
//   background-color: #303030;
// }

.contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between 30px;
  align-items: center;
  margin-right: 30px;
}
.contact p {
  margin-right: 30px;
  text-decoration: none;
  color: #ffd700;
  
}
.Phone{
  text-decoration: none;
  color: #ffd700;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
}
.Phone svg{
  margin-right: 10px;
}

// .logo{
//   width: 60px;
//   height: 60px;
//   margin-left: 10px;  
// }
// ul{
// font-weight: 500;
// color:aliceblue;
// list-style: none;
// text-decoration: none;
// display: flex;
// flex-direction: row;
// }

// li{
//   text-transform: uppercase;
//   padding: 16px;
//   margin-left: 16px;
// }


</style>


