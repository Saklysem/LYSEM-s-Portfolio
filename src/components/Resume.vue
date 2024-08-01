<script>
export default{

};
</script>
<template>
<div class="software">
    <div class="softwareSt">
        <h1 class="softwareCov">Resume</h1>
        <div class="sotfwareStyle">
        <h1 >Resume</h1>
        </div>
        <div class="line_1">
            <div class="longLine"></div>
            <div class="shortLine"></div>
        </div>
    </div>
<!-- The Resume style  -->
    <div class="ResumeStyle">
<!-- the left wall style -->
        <div class="leftWall">
            <div class="circle1">
                <div></div>
            </div>
            <div class="circle2">
                <div></div>
            </div>
            <div class="line1"></div>
        </div>
<!-- The Experience description style (left side)-->
        <div class="left">
            <div class="title">
                <div class="Ex">
                    <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-business"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                        Experience</h1>
                </div>
                <!-- <div class="Ed">
                    <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
                        Education</h1>
                </div> -->
            </div>
<!-- Experience job 1 -->
            <div class="ex1">
                <div class="exTitle1">Video Edtior & Motion Graphics</div>
                <div class="date">2023 - Present</div>
                <div class="exTitle1s">Infinity Information & Apps Dev</div>
                <div class="description">
                    <ul class="listEx1">
                        <li>Make Graphic Animation, Assets to Support Developer for App and Web’s Publishment</li>
                        <li>Make Highlights Video, 2D Graphic Animations, Promotional Videos, Tutorial Videos ...</li>
                        <li>manage fully on Video Productions within Deadline plus Client’s Requirement</li>
                    </ul>
                </div>
            </div>
<!-- Experience job 2 -->
            <div class="ex2">
                <div class="exTitle2">Video Edtior & Motion Graphics</div>
                <div class="date">2023 - Present</div>
                <div class="exTitle1s">Infinity Information & Apps Dev</div>
                <div class="description">
                    <ul class="listEx2">
                        <li>Make Graphic Animation, Assets to Support Developer for App and Web’s Publishment</li>
                        <li>Make Highlights Video, 2D Graphic Animations, Promotional Videos, Tutorial Videos ...</li>
                        <li>manage fully on Video Productions within Deadline plus Client’s Requirement</li>
                    </ul>
                </div>
            </div>
        </div>
<!-- the right wall style -->
        <div class="rightWall">
            <div class="Edcircle1">
                <div></div>
            </div>
            <div class="Edcircle2">
                <div></div>
            </div>
            <div class="Edline1"></div>
        </div>
<!-- The educ description style (right side)-->
        <div class="right">
            <div class="titleEd">
                <div class="Ed">
                    <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
                        Education</h1>
                </div>
            </div>
<!-- Education 1 -->
            <div class="Ed1">
                <div class="EdTitle1">Video Edtior & Motion Graphics</div>
                <div class="date">2023 - Present</div>
                <div class="EdTitle1s">Infinity Information & Apps Dev</div>
                <div class="description">
                    <ul class="listEd1">
                        <li>Make Graphic Animation, Assets to Support Developer for App and Web’s Publishment</li>
                        <li>Make Highlights Video, 2D Graphic Animations, Promotional Videos, Tutorial Videos ...</li>
                        <li>manage fully on Video Productions within Deadline plus Client’s Requirement</li>
                    </ul>
                </div>
            </div>
<!-- Education 2 -->
            <div class="Ed2">
                <div class="EdTitle2">Video Edtior & Motion Graphics</div>
                <div class="date">2023 - Present</div>
                <div class="EdTitle1s">Infinity Information & Apps Dev</div>
                <div class="description">
                    <ul class="listEd2">
                        <li>Make Graphic Animation, Assets to Support Developer for App and Web’s Publishment</li>
                        <li>Make Highlights Video, 2D Graphic Animations, Promotional Videos, Tutorial Videos ...</li>
                        <li>manage fully on Video Productions within Deadline plus Client’s Requirement</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>

.software {
    width: 100%;
    height: 1000px;
    background-color: rgb(17, 24, 39);
    position: absolute;
    z-index: 0;
    margin-top: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
        	
}
.softwareSt{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

}       
.softwareCov {

    width: 100%;
    height: 120px;
    font-family: sans-serif;
    font-weight: bold;
    letter-spacing: 6px;
    font-size: 90px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    opacity: 10%;
    
}
.sotfwareStyle {
    width: 100%;
    height: auto;
    position: absolute;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    color: #ffd700;
    font-family: sans-serif;
    font-weight: bold;
    margin-top: 50px;

}
// line style below  About text
.line_1 {
    position: absolute;
    width: 100%;
    height: 6px;
    // background-color: #ffd700;
    display: flex;
    justify-content: center;
    margin-top: 90px;

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
.title {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //background-color: aqua;
    margin-top: -5.5%;
    margin-left: -7.5%;
}
.titleEd {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //background-color: aqua;
    margin-top: -5.5%;
    margin-left: -7.5%;

}
.title .Ex{
    width: 630px;
    color: white;
    // background-color: #003a97;
}
.Ex h1{
    display: flex;
    align-items: center;
}
.Ex svg{
    margin-right: 10px;
}
.titleEd .Ed {
    width: 630px;
    color: white;
    // background-color: rgb(14, 70, 120);
}
.Ed h1{
    display: flex;
    align-items: center;
}
.Ed svg{
    margin-right: 10px;
}
// Resume descrition style
.ResumeStyle {
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;

}
// The left wall style
.leftWall {
    width: 30px;
    height: 700px;
    // background-color: rgb(0, 68, 140);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.circle1{
    position: absolute;
    width: 16px;
    height: 16px;
    background-color:rgb(81, 81, 81);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.circle1 div{
    width: 12px;
    height: 12px;
    background-color: rgba(17, 24, 39, 0.90);
    border-radius: 100%;
}
.circle1 div:hover{
    animation-duration: 1s;
    background-color: #ffd700;

}
// Circle dot 2
.circle2{
    position: absolute;
    width: 16px;
    height: 16px;
    background-color:rgb(81, 81, 81);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 270px;
}
.circle2 div{
    width: 12px;
    height: 12px;
    background-color: rgba(17, 24, 39, 0.90);
    border-radius: 100%;
}
.circle2 div:hover{
    animation-duration: 1s;
    background-color: #ffd700;

}
.line1{
    width: 2px;
    height: 100%;
    background-color: rgb(81, 81, 81);
    border-radius: 3px;
}
// The Experience description style at left side
.left {
    width: 600px;
    height: 700px;
    padding-left: 15px;
    margin-top: -15px;
    // background-color: #696969;
    display: flex;
    flex-direction: column;
}
.ex1 {
    width: 100%;
    height: auto;
    // background-color: rgb(14, 45, 72);
}
// Experience job 1
.ex1 .exTitle1{
    font-family: sans-serif;
    font-size: 30px;
    color: #ffd700;
}
.ex1 .date{
    font-family: sans-serif;
    font-size: 20px;
}
.ex1 .exTitle1s{
    font-family: sans-serif;
    font-size: 20px;
    color: #ffffff;
}
.ex1 .listEx1{
    font-family: sans-serif;
    font-size: 16px;
    margin-left: 30px;
    // visibility: visible;
    // animation-duration: 1.5s;
    // animation-delay: 0.5s;
    // animation-name: fadeInLeft;
}
// Experience job 2
.ex2 .exTitle2{
    font-family: sans-serif;
    font-size: 30px;
    color: #ffd700;
    margin-top: 30px;
}
.ex2 .date{
    font-family: sans-serif;
    font-size: 20px;
}
.ex2 .exTitle1s{
    font-family: sans-serif;
    font-size: 20px;
    color: #ffffff;
}
.ex2 .listEx2{
    font-family: sans-serif;
    font-size: 16px;
    margin-left: 30px;
}
// The right wall style
.rightWall {
    width: 30px;
    height: 700px;
    // background-color: rgb(0, 68, 140);
    display: flex;
    flex-direction: column; 
    align-items: center;
}
//The right wall
.Edcircle1{
    position: absolute;
    width: 16px;
    height: 16px;
    background-color:rgb(81, 81, 81);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Edcircle1 div{
    width: 12px;
    height: 12px;
    background-color: rgba(17, 24, 39, 0.90);
    border-radius: 100%;
}
.Edcircle1 div:hover{
    animation-duration: 1s;
    background-color: #ffd700;

}
// Circle dot 2
.Edcircle2{
    position: absolute;
    width: 16px;
    height: 16px;
    background-color:rgb(81, 81, 81);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 270px;
}
.Edcircle2 div{
    width: 12px;
    height: 12px;
    background-color: rgba(17, 24, 39, 0.90);
    border-radius: 100%;
}
.Edcircle2 div:hover{
    animation-duration: 1s;
    background-color: #ffd700;

}
.Edline1{
    width: 2px;
    height: 100%;
    background-color: rgb(81, 81, 81);
    border-radius: 3px;
}
// The Experience description style at right side
.right {
    width: 600px;
    height: 700px;
    // background-color: white;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    margin-top: -15px;
}
// Educaton description style
.Ed1 {
    width: 100%;
    height: auto;
    // background-color: rgb(14, 45, 72);
}
// Experience job 1
.Ed1 .EdTitle1{
    font-family: sans-serif;
    font-size: 30px;
    color: #ffd700;
}
.Ed1 .date{
    font-family: sans-serif;
    font-size: 20px;
}
.Ed1 .EdTitle1s{
    font-family: sans-serif;
    font-size: 20px;
    color: #ffffff;
}
.Ed1 .listEd1{
    font-family: sans-serif;
    font-size: 16px;
    margin-left: 30px;
    // visibility: visible;
    // animation-duration: 1.5s;
    // animation-delay: 0.5s;
    // animation-name: fadeInLeft;
}
// Experience job 2
.Ed2 .EdTitle2{
    font-family: sans-serif;
    font-size: 30px;
    color: #ffd700;
    margin-top: 30px;
}
.Ed2 .date{
    font-family: sans-serif;
    font-size: 20px;
}
.Ed2 .exTitle1s{
    font-family: sans-serif;
    font-size: 20px;
    color: #ffffff;
}
.Ed2 .listEd2{
    font-family: sans-serif;
    font-size: 16px;
    margin-left: 30px;
}
@media (max-width: 500px) {
    .software {
        width: 100%;
        height: fit-content;
        background-color: rgb(17, 24, 39);
        position: absolute;
        z-index: 5;
        margin-top: 5235px;
        display: flex;
        flex-direction: column;      
        overflow: hidden; 
    }
    .softwareSt{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        margin-top: 0%;
    }       
    .softwareCov {
        width: 100%;
        height: 120px;
        font-family: sans-serif;
        font-weight: bold;
        letter-spacing: 6px;
        font-size: 60px;
        display: flex;
        justify-content: center;
        text-transform: uppercase;
        opacity: 10%;
        //background-color: #ffd700;
        
    }
    .sotfwareStyle {
        width: 100%;
        height: auto;
        position: absolute;
        display: flex;
        justify-content: center;
        text-transform: uppercase;
        color: #ffd700;
        font-family: sans-serif;
        font-weight: bold;
        margin-top: 26px;
    
    }
    // line style below  About text
    .line_1 {
        position: absolute;
        width: 100%;
        height: 6px;
        // background-color: #ffd700;
        display: flex;
        justify-content: center;
        margin-top: 15%;
    
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
    .title {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: -23.5%;
        margin-left: -8.5%;
        //background-color: aqua;
    }
    .title .Ex{
        width: 400px;
        color: white;
        //background-color: #003a97;
    }
    .Ex h1{
        display: flex;
        align-items: center;
        
    }
    .Ex svg{
        margin-right: 10px;
    }
    .title .Ed {
        width: 400px;
        color: white;
        margin-left: 4.5%;
        //background-color: rgb(14, 70, 120);
    }
    .Ed h1{
        display: flex;
        align-items: center;
    }
    .Ed svg{
        margin-right: 10px;
    }
    // Resume descrition style
    .ResumeStyle {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 90px;
    
    }
    // The left wall style
    .leftWall {
        width: 30px;
        height: 700px;
        position: absolute;
        // background-color: rgb(0, 68, 140);
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 3;
        margin-top: -238%;
    }
    .circle1{
        position: absolute;
        width: 16px;
        height: 16px;
        background-color:rgb(81, 81, 81);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circle1 div{
        width: 12px;
        height: 12px;
        background-color: rgba(17, 24, 39, 0.90);
        border-radius: 100%;
    }
    .circle1 div:hover{
        animation-duration: 1s;
        background-color: #ffd700;
    
    }
    // Circle dot 2
    .circle2{
        position: absolute;
        width: 16px;
        height: 16px;
        background-color:rgb(81, 81, 81);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1035%;
    }
    .circle2 div{
        width: 12px;
        height: 12px;
        background-color: rgba(17, 24, 39, 0.90);
        border-radius: 100%;
    }
    .circle2 div:hover{
        animation-duration: 1s;
        background-color: #ffd700;
    
    }
    .line1{
        width: 2px;
        height: 100%;
        background-color: rgb(81, 81, 81);
        border-radius: 3px;
    }
    // The Experience description style at left side
    .left {
        width: 400px;
        height: fit-content;
        padding-left: 8%;
        margin-top: -8%;
        //background-color: #696969;
        display: flex;
        flex-direction: column;

    }
    .ex1 {
        width: 100%;
        height: fit-content;
        // background-color: rgb(14, 45, 72);
    }
    // Experience job 1
    .ex1 .exTitle1{
        font-family: sans-serif;
        font-size: 25px;
        color: #ffd700;
    }
    .ex1 .date{
        font-family: sans-serif;
        font-size: 20px;
    }
    .ex1 .exTitle1s{
        font-family: sans-serif;
        font-size: 20px;
        color: #ffffff;
    }
    .ex1 .listEx1{
        font-family: sans-serif;
        font-size: 16px;
        margin-left: 30px;
        // visibility: visible;
        // animation-duration: 1.5s;
        // animation-delay: 0.5s;
        // animation-name: fadeInLeft;
    }
    // Experience job 2
    .ex2 .exTitle2{
        font-family: sans-serif;
        font-size: 25px;
        color: #ffd700;
        margin-top: 30px;
    }
    .ex2 .date{
        font-family: sans-serif;
        font-size: 20px;
    }
    .ex2 .exTitle1s{
        font-family: sans-serif;
        font-size: 20px;
        color: #ffffff;
    }
    .ex2 .listEx2{
        font-family: sans-serif;
        font-size: 16px;
        margin-left: px;
    }
    // The right wall style
    .rightWall {
        width: 30px;
        height: 700px;
        //background-color: rgb(0, 68, 140);
        display: flex;
        flex-direction: column; 
        align-items: center;
        z-index: 5;
        margin-top: 100%;
        margin-left: 0%;
    }
//The right wall style
.Edcircle1{
    position: absolute;
    width: 16px;
    height: 16px;
    background-color:rgb(81, 81, 81);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Edcircle1 div{
    width: 12px;
    height: 12px;
    background-color: rgba(17, 24, 39, 0.90);
    border-radius: 100%;
}
.Edcircle1 div:hover{
    animation-duration: 1s;
    background-color: #ffd700;

}
// Circle dot 2
.Edcircle2{
    position: absolute;
    width: 16px;
    height: 16px;
    background-color:rgb(81, 81, 81);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 67%;
}
.Edcircle2 div{
    width: 12px;
    height: 12px;
    background-color: rgba(17, 24, 39, 0.90);
    border-radius: 100%;
}
.Edcircle2 div:hover{
    animation-duration: 1s;
    background-color: #ffd700;

}
.Edline1{
    width: 2px;
    height: 100%;
    background-color: rgb(81, 81, 81);
    border-radius: 3px;
}
    // The Education description style at right side
    .right {
        width: 400px;
        height: 700px;
        //background-color: white;
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        margin-left: 4%;
        margin-top: -168%;
    }
    .Ed1 {
        width: 100%;
        height: fit-content;
        // background-color: rgb(14, 45, 72);
    }
    // Experience job 1
    .Ed1 .EdTitle1{
        font-family: sans-serif;
        font-size: 25px;
        color: #ffd700;
    }
    .Ed1 .date{
        font-family: sans-serif;
        font-size: 20px;
    }
    .Ed1 .exTitle1s{
        font-family: sans-serif;
        font-size: 20px;
        color: #ffffff;
    }
    .Ed1 .listEd1{
        font-family: sans-serif;
        font-size: 16px;
        margin-left: 30px;
        // visibility: visible;
        // animation-duration: 1.5s;
        // animation-delay: 0.5s;
        // animation-name: fadeInLeft;
    }
    // Experience job 2
    .Ed2 .EdTitle2{
        font-family: sans-serif;
        font-size: 25px;
        color: #ffd700;
        margin-top: 30px;
    }
    .Ed2 .date{
        font-family: sans-serif;
        font-size: 20px;
    }
    .Ed2 .EdTitle1s{
        font-family: sans-serif;
        font-size: 20px;
        color: #ffffff;
    }
    .Ed2 .listEd2{
        font-family: sans-serif;
        font-size: 16px;
        margin-left: 30px;
    }
}
</style>