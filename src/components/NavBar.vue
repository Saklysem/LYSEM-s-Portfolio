<script>
export default{
  data(){
    return{
      checked: false
    };
  }
};
</script>

<template>
<div class="navberCover">
  <div class="nav">
      <div class="logo">
        <img src="../assets/ZER01.png" alt="LOGO">
        <h1></h1>
      </div>
      <div :class="['menu', {'menu-open':checked}]">
        <ul>
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
          <p>+855 86699553</p>
          </a>
      </div>
      <!-- Bar for showing the menu -->
      <input type="checkbox" v-model="checked" id="check">
      <!-- the icon that we have to click to show the emenu -->
      <label for="check" class="checkbtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </label>
  </div>
</div>
</template>



<style lang="scss" scoped>
.navberCover{
  width: 100vw;
  height: 62.5px;
  display: flex;
  justify-content: center;
  background-color:  rgb(17, 24, 39, 1);
  position: fixed;
  z-index: 11;

}
.nav{
  background-color:  rgb(17, 24, 39, 1);
  max-width: 1200px;
  height: fit-content;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  
}
.logo{
  display: flex;
  flex-direction: row;
  width: 50px;
  height: 50px;
  padding: 6px;
  align-items: center;
  margin-right: 0px;
}
.logo img{
  height: 60px
}
.logo h1{
  margin-left: 10px;
}

.menu{
  margin-left: 450px;
  margin-top: 0px;
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

//Menu style
.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  margin-right: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;
}

//checkbox for bar hide
#check {
  display: none;
}
//Nav bar Responsive 
@media (max-width: 500px) {
  .navberCover{
    width: 100vw;
    margin:auto;
    height: auto;
  }
  .nav {
    max-width: 500px;
    height: 60px;
    display: flex;
    flex-direction: column;
  }

  .logo {
    margin-right: auto;
    margin-top: 0px;
    padding: 10px;
    width: fit-content;
  }
  .logo img {
    height: 35px;
    margin-top: -10px;
    margin-left: 50px;
  }
  .checkbtn {
    display: flex;
    flex-direction: row;
    margin-top: -300px;
    padding: 6x;
    margin-left: 330px;
  }
  .checkbtn svg{
    margin-top: -13px;
  }
  .checkbtn:hover{
    color: #ffd700;
  }
  .menu {
    margin-left: 900px;
  }
  .menu ul {
    width: fit-content;
    display: block;
    background-color:  rgba(17, 24, 39, 1);

  }
  .menu-open{
    margin-left: 290px;
    margin-top: 0px;
    opacity: 100%;
    transition: all 0.3s ease;

  }

  li a{
    font-size: 16px;
    margin: auto;
  }
  .Phone {
    font-size: 10px;
  }
  .contact {
    margin-right: 0px;
    justify-content: none;
  }
  .contact p{
    margin-right: 0px;
    display: none;
  }
  .Phone svg{
    margin-right: 0px;
    display: none;
  }
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
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  width: fit-content;
}
.Phone svg{
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
.Phone p{
  font-family: roboto;
  font-size: 15px;
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


