<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default{

}
</script>
<template>
    <div class="About">
        <div class="About_2">
            <div class="aboutSt">
                <h1 class="aboutCov">About ME!</h1>
                <div class="aboutStyle">
                    <h1 >About ME!</h1>
                </div>
                <div class="line_1">
                        <div class="longLine"></div>
                        <div class="shortLine"></div>
                 </div>
            </div>
        </div>
<!-- Pic and brief about  me-->
        <div class="briefdMe">
            <img src="../assets/BG/Profile_2.png" alt="Loading">
            <div class="script">
                <div class="hi">
                    <h1 class="hiThere">Hi There! I am </h1>
                    <h1 class="name">Sak Lysem </h1>
                </div> 
                <h2>Motion Graphic | Video Editor | 3D Motion</h2>
                <p class="promo"> 
                   As a Software Engineering graduate who has completed a 4-year
                   bachelor’s degree, I’ve gained skills in design, branding, creativity, 
                   communication, and problem-solving. With over 3 years of experience 
                   in Video Editing, Video Shooting & Motion Graphics , I bring strong abilities 
                   and knowledge that can contribute to a company's goals and success. 
                   I am very determined and committed to my responsibilities at work and tasks. 
                   As an easy-going person with flexibility and a proactive approach to keeping up 
                   with trends additionally with a pleasant personality.</p>
                <div class="info">
                    <p>Birthday : 3th November 1999</p>
                    <p>Phone : +855 86 696553</p>
                    <p>Email : Saklysem319@gmail.com</p>
                    <p>Address : Phnom Penh, Cambodia</p>
                    <p>Language : Khmer, English</p>
                    <p>Freelance : Available</p>
                </div>
            </div>
        </div>
        <div class="download">
            <a href="https://drive.google.com/file/d/11DRvaIF5EQ1iCXeiH5pE7wNuJpPAMJML/view?usp=sharing">
                <button id="downloadCV" hreff >Download CV</button>
            </a>
        </div>
<!-- Detail about my skill -->
        <div class="skil">
            <div class="About_2">
                <div class="aboutSt">
                    <h1 class="aboutCov">skills</h1>
                    <div class="aboutStyle">
                        <h1 >What I did!</h1>
                    </div>
                    <div class="line_1">
                        <div class="longLine"></div>
                        <div class="shortLine"></div>
                    </div>
                </div>
            </div>
<!-- The skills card -->
            <div class="skills">
                <div class="row-1">
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Motion_Graphic.png" alt="Loading">
                        </div>
                        <div class="cardC2"><h1>Motion Graphics/3D</h1></div>
                        <div class="cardC3"> Converting a static artwork into an active video that 
                            make gain engagement and attention from the audiences with 2D and 3D Animations. 
                            Experience on motion graphic for 1 year in Tech Company.
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Video_Editor.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Video Editing</h1></div>
                        <div class="cardC3">Drafted fully storytelling video base on product with smooth transition, 
                            color grading, SFX and VFX. Tend to Cinematic shot and Feeling. 2 years Experience.
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Design.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Graphic Design</h1></div>
                        <div class="cardC3">Creates visual content to deliver messages through typography, imagery, and color, often for branding, marketing, or digital platforms. 
                            Enhance your your post look more attractive to audiences.
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Director.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Director</h1></div>
                        <div class="cardC3">Enhance the imagination to visibility in filming, product demonstrate and lifestyle. Experience on directing short film for start up 
                            project and my own content and vlog.
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Camera.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Video/Photographer</h1></div>
                        <div class="cardC3">Capture the beautiful Action, Memories by techniques, lighting, and composition to tell stories or document events, often working in fields like media, advertising, or events.
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Web_Dev.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Frontend Dev</h1></div>
                        <div class="cardC3">Passion to Develop my own Porfolio to embed my own project and every experience of my working life. 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
<!-- Detail about software I use -->
        <!-- <div class="skil">
            <div class="About_2">
                <div class="aboutSt">
                    <h1 class="aboutCov">skills</h1>
                    <div class="aboutStyle">
                        <h1 >What I did!</h1>
                    </div>
                    <div class="line_1">
                            <div class="longLine"></div>
                            <div class="shortLine"></div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<style lang="scss" scoped>
.About{
    width: 100%;
    height: fit-content;
    background-color: rgb(17, 24, 39);
    
}
.About_2 {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    // background-color: #ffd700;
}
.aboutSt {
    width: 100%;
    margin-top: 0px;
    
}
.aboutCov {
    font-family: sans-serif;
    font-weight: bold;
    letter-spacing: 6px;
    font-size: 90px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    opacity: 10%;
}
.aboutStyle {
    width: 100%;
    height: auto;
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: -95px;
    text-transform: uppercase;
    color: #ffd700;
    font-family: sans-serif;
    font-weight: bold;
}

// line style below  About text
.line_1 {
    position: absolute;
    width: 100%;
    height: 6px;
    //background-color: #ffd700;
    display: flex;
    justify-content: center;
    margin-top: -50px;

}
.longLine {
    width: 200px;
    height: 2px;
    background-color: rgb(73, 73, 73);
    display: flex;
    border-radius: 100%;
}
.shortLine {
    position: absolute;
    width:  90px;
    height: 2px;
    background-color: #ffd700;
    display: flex;
    border-radius: 100%;
}

// Pic and brief about  me
.briefdMe {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    //background-color: #ffd700;
}

.briefdMe img {
    width: 440px;
    height: 440px;
    margin-top: -60px;
    margin-right: 30px;
    // box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
}

.script {
    width: 700px;
    height: 420px;
    font-size: 20px;
    margin-right: -2%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //background-color: #424242;

}

.hi {
    height: fit-content;
    display: flex;
    font-size: 20px;
    margin-top: 0px;
}
.hi .hiThere {
    color: white;
    margin-top: -25px;
    //background-color: aqua;
}
.hi .name {
    color: #ffd700;
    margin-left: 10px;
    margin-top: -25px
}

.script h2{
    color: white;
    font-size: 20px;
}

.promo {
    width: 680px;
    text-align: justify;
    text-justify: inter-word;
    font-size: 15px;
    line-height: 25px;
}
.info {
    line-height: 30px;
    font-size: 16px;
    // color: white;
}

.download {
    width: 100%;
    height: 60px;
    //background-color: #ffd700;
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

#downloadCV {
    padding: 15px 25px;
    font-size: 20px;
    margin-right: 30px;
    background-color: #ffd700;
    text-align: center;
    outline: none;
    border: none;
    font-family: Roboto;
    color: rgb(22, 32, 58);
    border-radius: 10px;        
    cursor: pointer;
}
#downloadCV:hover {
    background-color: white;
    color: black;
}
#downloadCV:active {
    padding: 13px 23px;
    font-size: 18px;
}
//About Responsive
@media (max-width: 500px) {
    .About{
        width: 100%;
        height: fit-content;
        //background-color: rgba(2, 82, 202, 0.53);
        background-color: rgb(17, 24, 39);
    }
    .About_2 {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        // background-color: #ffd700;
    }
    .aboutSt {
        width: 100%;
        margin-top: 0px;
    }
    .aboutCov {
        font-family: sans-serif;
        font-weight: bold;
        letter-spacing: 5px;
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        opacity: 10%;
    }
    .aboutStyle {
        width: 100%;
        height: fit-content;
        position: absolute;
        display: flex;
        justify-content: center;
        margin-top: -15%;
        text-transform: uppercase;
        color: #ffd700;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 12px;
    }
    
    // line style below  About text
    .line_1 {
        position: absolute;
        width: 100%;
        height: 6px;
        //background-color: #ffd700;
        display: flex;
        justify-content: center;
        margin-top: -6%;
    
    }
    .longLine {
        width: 200px;
        height: 2px;
        background-color: rgb(73, 73, 73);
        display: flex;
        border-radius: 100%;
    }
    .shortLine {
        position: absolute;
        width:  90px;
        height: 2px;
        background-color: #ffd700;
        display: flex;
        border-radius: 100%;
    }
    
    // Pic and brief about  me
    .briefdMe {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 5px;
    }
    
    .briefdMe img {
        width: 300px;
        height: 300px;
        margin: auto;
        //box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    }
    .script {
        width: 100%;
        height: 600px;
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -5%;
    }
    .hi {
        display: flex;
        font-size: 15px;
    }
    .hi .hiThere {
        color: white;
        margin-top: -15px
    }
    .hi .name {
        color: #ffd700;
        margin-left: 3px;
        margin-top: -15px
    }
    
    .script h2{
        color: white;
        font-size: 16px;
    }
    
    .promo {
        width: 90%;
        text-align: justify;
        text-justify: inter-word;
        line-height: 20px;
        font-size: 15px;
    }
    .info {
        line-height: 30px;
        text-align: center;
        // color: white;
    }
    
    .download {
        width: 100%;
        height: 50px;
        //background-color: #ffd700;
        margin-top: -15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #downloadCV {
        padding: 15px 25px;
        font-size: 16px;
        margin-right: 0px;
        background-color: #ffd700;
        text-align: center;
        outline: none;
        border: none;
        font-family: Roboto;
        color: rgb(22, 32, 58);
        border-radius: 10px;        
        cursor: pointer;
    }
    #downloadCV:hover {
        background-color: white;
        color: black;
    }
    #downloadCV:active {
        padding: 13px 23px;
        font-size: 18px;
    }
}
//The skills's card style
.skills  {
    max-width: 100%;
    height: fit-content;
    background-color: rgb(17, 24, 39);
    //background-color: rgb(18, 236, 204);
    display: flex;
    justify-content: center;
}
.skills .row-1{
    max-width: 1200px;
    height: fit-content;
    //background-color: rgb(35, 95, 179);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 0px;
    margin-top: 0px;
}
.skills .row-2{
    max-width: 1200px;
    height: 500px;
    margin-top: 50px;
    // background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    margin-top: -70px;

}

.skills .row-1 .card{
    width: 300px;
    height: 380px;
    border-radius: 15px;
    background-color: rgb(25, 34, 53);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    margin: 20px;
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.3);
}

.cardC1{
    width: 160px;
    height: 160px;
    background-color: rgb(25, 34, 53);
    //background-color: #ffd700;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.5);
    border-radius: 100%;
}
.cardC1:hover {
    box-shadow: inset 0 0 30px rgba(0, 110, 184, 0.5);
}
.cardC1 img {
    width: 180px;
    height: 180px;


}

.cardC2 h1{
    font-family:sans-serif;
    font-size: 25px;
    color: white;
    // background-color: #ffd700;
}

.cardC2 h1:hover {
    color: #ffd700;
}

.cardC3{
    width: 100%;
    height: 120px;
    padding: 15px;
    // background-color: #7d4c4c;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    font-size: 15px;
}

.skills .row-2 .card{
    width: 350px;
    height: 400px;
    border-radius: 15px;
    background-color: rgb(25, 34, 53);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    margin: 20px;
}
//Drafted style
@media (max-width: 10px) {
//The skills's card style
.skills  {
    width: 100%;
    height: 3300px;
    background-color: rgb(17, 24, 39);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-content: center;
}

.skills .row-1{
    width: 80%;
    height: fit-content;
    //background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-top: -90%;
}
.skills .row-2{
    width: 80%;
    height: fit-content;
    //background-color: rgb(70, 70, 70);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-top: 0%;
}

.skills .row-1 .card{
    width: 330px;
    height: 440px;
    border-radius: 15px;
    background-color: rgb(25, 34, 53);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 3px;
}

.cardC1{
    width: 160px;
    height: 160px;
    background-color: rgb(25, 34, 53);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.5);
    border-radius: 100%;

}
.cardC1 img {
    width: 60px;
    height: 60px;


}

.cardC2 h1{
    font-family:sans-serif;
    // background-color: #ffd700;
}

.cardC2 h1:hover {
    color: #ffd700;
}

.cardC3{
    width: 100%;
    height: 120px;
    padding: 25px;
    // background-color: #7d4c4c;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    font-size: 16px;
}

.skills .row-2 .card{
    width: 330px;
    height: 440px;
    border-radius: 15px;
    background-color: rgb(25, 34, 53);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
}
}

</style>