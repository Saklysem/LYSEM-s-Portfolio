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
    <a class="Phone" href="#">+855 86699553</a>
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


