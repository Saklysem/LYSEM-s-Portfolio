<script>
export default{
  data(){
    return{
      checked: false
    };
  },
// Scroll Method
  methods: {
    ScrollInToSEM(){
      const contactSection = document.getElementById("SEM");
      if (contactSection){
        contactSection.scrollIntoView({behavior: "smooth"})
      }
    },
    ScrollInToAbout(){
      const contactSection = document.getElementById("About");
      if (contactSection){
        contactSection.scrollIntoView({behavior: "smooth"})
      }
    },
    ScrollInToResume(){
      const contactSection = document.getElementById("Resume");
      if (contactSection){
        contactSection.scrollIntoView({behavior: "smooth"})
      }
    },
    ScrollInToPortfolio(){
      const contactSection = document.getElementById("PortfolioTab");
      if (contactSection){
        contactSection.scrollIntoView({behavior: "smooth"})
      }
    },
    ScrollInToContact(){
      const contactSection = document.getElementById("contact");
      if (contactSection){
        contactSection.scrollIntoView({behavior: "smooth"})
      }
    },
    
  },

};
</script>

<template>
  <div class="nav">
      <div class="logo">
        <img src="../assets/ZER01.png" alt="LOGO">
        <h1></h1>
      </div>
      <div :class="['menu', {'menu-open':checked}]">
        <ul>
          <!-- <li><a class="active" href="#">Home</a></li> -->
          <li><a href="#" @click="ScrollInToSEM">SEM</a></li>
          <li><a href="#" @click="ScrollInToAbout">About</a></li>
          <li><a href="#" @click="ScrollInToResume">Resume</a></li>
          <li><a href="#" @click="ScrollInToPortfolio">Portfolio</a></li>
          <li><a href="#" @click="ScrollInToContact">contact</a></li>
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
</template>



<style lang="scss" scoped>
.nav{
  background-color:  rgb(17, 24, 39);
  //background-color:  rgb(0, 113, 142);
  //max-width: 1200px;
  width: 100%;
  height: fit-content;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  margin: auto;
  
}
.logo{
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 50px;
  padding: 6px;
  align-items: center;
  margin-right: -60px;
  //background-color: #ffd700;
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
  margin-right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

//checkbox for bar hide
#check {
  display: none;
}



//Scroll to section
#Contact {
  margin-top: 1500px;
}

//Nav bar Responsive 
@media (max-width: 500px) {
  .navberCover{
    width: 100%;
    //margin:auto;
    height: fit-content;
  }
  .nav {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    //background-color: #ffd700;
  }

  .logo {
    margin-right: 380px;
    margin-top: 0px;
    padding: 10px;
    width: fit-content;
  }
  .logo img {
    height: 35px;
    margin-top: -10px;
    margin-left: 70%;
  }
  .checkbtn {
    display: flex;
    flex-direction: row;
    margin-top: -300px;
    padding: 0px;
    margin-left: 300px;
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
    margin-left: 77%;
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
    margin-left: 0px;
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
  margin-right: 5px;
  overflow: hidden;
}
.contact p {
  margin-right: 10px;
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


