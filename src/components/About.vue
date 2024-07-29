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
            <button id="downloadCV">Download CV</button>
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
<!-- The skills card -->
                    </div>
                </div>
            </div>
            <div class="skills">
                <div class="row-1">
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Video_editing.png" alt="">
                        </div>
                        <div class="cardC2"><h1>3D/Motion Graphics</h1></div>
                        <div class="cardC3">Drafting a fully story telling videos base on Client's 
                        requirements with smooth transitions, color grading,
                         Sound EFX and background musics.
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Video_editing.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Video Editing</h1></div>
                        <div class="cardC3">Converting a static artwork into an active videoo that 
                                make gain engagement and attention from the audiences with 2D Animations.
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Video_editing.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Graphic Design</h1></div>
                        <div class="cardC3">Drafting a fully story telling videos base on Client's 
                        requirements with smooth transitions, color grading,
                         Sound EFX and background musics.
                        </div>
                    </div>
                </div>
                <div class="row-2">
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Video_editing.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Director</h1></div>
                        <div class="cardC3">Drafting a fully story telling videos base on Client's 
                        requirements with smooth transitions, color grading,
                         Sound EFX and background musics.
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Video_editing.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Video/Photographer</h1></div>
                        <div class="cardC3">Drafting a fully story telling videos base on Client's 
                        requirements with smooth transitions, color grading,
                         Sound EFX and background musics.
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardC1">
                            <img src="../assets/icon/Video_editing.png" alt="">
                        </div>
                        <div class="cardC2"><h1>Frontend Dev</h1></div>
                        <div class="cardC3">Drafting a fully story telling videos base on Client's 
                        requirements with smooth transitions, color grading,
                         Sound EFX and background musics.
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
    position: absolute;
    margin-top: auto;
}
.About_2 {
    width: 100%;
    height: auto;
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
    // background-color: #ffd700;
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
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.briefdMe img {
    width: 500px;
    height: 500px;
    margin-top: -60px;
    margin-right: 50px;
    // box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
}

.script {
    width: 700px;
    height: 500px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.hi {
    display: flex;
    font-size: 20px;
    margin-top: -22px;
}
.hi .hiThere {
    color: white;
    margin-top: -15px
}
.hi .name {
    color: #ffd700;
    margin-left: 10px;
    margin-top: -15px
}

.script h2{
    color: white;
}

.promo {
    width: 700px;
    text-align: justify;
    text-justify: inter-word;
    font-size: 16px;
    line-height: 28px;
}
.info {
    line-height: 35px;
    font-size: 16px;
    // color: white;
}

.download {
    width: 100%;
    height: 60px;
    //background-color: #ffd700;
    margin-top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#downloadCV {
    padding: 15px 25px;
    font-size: 20px;
    margin-right: -20px;
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
        background-color: rgb(17, 24, 39);
        position: absolute;
        margin-top: auto;
    }
    .About_2 {
        width: 100%;
        height: auto;
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
        font-size: 80px;
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    .briefdMe img {
        width: 500px;
        height: 500px;
        margin: auto;
        //box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    }
    .script {
        width: 100%;
        height: 600px;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .hi {
        display: flex;
        font-size: 20px;
    }
    .hi .hiThere {
        color: white;
        margin-top: -15px
    }
    .hi .name {
        color: #ffd700;
        margin-left: 10px;
        margin-top: -15px
    }
    
    .script h2{
        color: white;
    }
    
    .promo {
        width: 90%;
        text-align: justify;
        text-justify: inter-word;
        line-height: 28px;
    }
    .info {
        line-height: 35px;
        text-align: center;
        // color: white;
    }
    
    .download {
        width: 100%;
        height: 60px;
        //background-color: #ffd700;
        margin-top: -45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #downloadCV {
        padding: 15px 25px;
        font-size: 20px;
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
    width: 100%;
    height: 900px;
    background-color: rgb(17, 24, 39);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -18.3px;
}
.skills .row-1{
    width: 1200px;
    height: 500px;
    //background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
    margin-top: -60px;
}
.skills .row-2{
    width: 1200px;
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
}

.cardC1{
    width: 160px;
    height: 160px;
    background-color: rgb(25, 34, 53);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 1px rgba(120, 120, 120, 0.5);
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
}
@media (max-width: 600px) {
//The skills's card style
.skills  {
    width: 100%;
    height: fit-content;
    background-color: rgb(17, 24, 39);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-content: center;
}

.skills .row-1{
    width: 80%;
    height: 1500px;
    //background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 0px;
    margin-top: auto;
}
.skills .row-2{
    width: 80%;
    height: 1500px;
    margin-top: auto;
    //background-color: rgb(70, 70, 70);
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    margin-top: auto;
}

.skills .row-1 .card{
    width: 350px;
    height: 450px;
    border-radius: 15px;
    background-color: rgb(25, 34, 53);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
}

.cardC1{
    width: 160px;
    height: 160px;
    background-color: rgb(25, 34, 53);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 1px rgba(120, 120, 120, 0.5);
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
    width: 350px;
    height: 450px;
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