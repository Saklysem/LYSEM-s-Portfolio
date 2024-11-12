<script>

export default{

}
</script>
<template>
<div class="portfolioBig">
    <div class="Portfolio_2">
        <div class="PortfolioSt">
            <h1 class="PortfolioCov">Portfolios</h1>
            <div class="PortfolioStyle">
                <h1 >Portfolios</h1>
            </div>
            <div class="line_1">
                    <div class="longLine"></div>
                    <div class="shortLine"></div>
             </div>
        </div>
    </div>
<!-- Portfolio Card -->
    <div class="portfolio">
        <!-- Tab 1 -->
        <div class="MotionTab">
            <div class="Thumnail1">
                <router-link to="/portfolioMotionGraphic">
                    <img src="../assets/BG/BOBI3D.png" alt="Loading" />
                </router-link>
            </div>
            <div class="MTitle">
                <h1>Motion Graphic</h1>
                <p>Experience 1 year in Tech Company. Bringing visual to life with smooth animations and dynamic transition,
                    Skilled in Adobe after effect and Blender creating engaging content for commercials, socail media.
                    Converting a static artwork into an active video.
                    I mostly working on icon Motion in online game Mobile App.
                </p>
                <div class="btnTab">
                    <div class="amount">5 Videos</div>
                    <router-link to="/portfolioMotionGraphic">
                        <div class="more">More...</div>
                    </router-link>    
                    
                </div>
            </div>
        </div>
        <!-- Tab 2 -->
        <div class="MotionTab">
            <div class="Thumnail1">
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjobify.works%2Fvideos%2F6306950019355493%2F&show_text=false&width=560&t=5" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>                
                <!-- <img src="../assets/BG/Video_Thumbnail.png" alt="Loading"> -->
            </div>
            <div class="MTitle">
                <h1>Video Editor</h1>
                <p>Bringing creative vision to life through 
                    smooth transition, color grading and sound design. 
                    Proficient in industry standard Software like Adobe Premiere Pro and 
                    After effect additional blender. Experience 2 years in crafting engaging content otimized 
                    for socail media.
                </p>
                <div class="btnTab">
                    <div class="amount">6 Videos</div>
                    <router-link to="/portfolioVideo">
                        <div class="more">More...</div>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- Tab 3 -->
        <div class="MotionTab">
            <div class="Thumnail1">
                <router-link to="/PortfolioGraphicDesign">
                    <img src="../assets/BG/Graphic_Design.png" alt="Loading">
                </router-link>
            </div>
            <div class="MTitle">
                <h1>Graphic Designer</h1>
                <p>Experienced graphic designer with a strong foundation in visual storytelling, 
                    combining typography, color theory, and layout to create compelling designs. 
                    Skilled in Adobe Photoshop and proficient in brand identity development and digital media assets. 
                </p>
                <div class="btnTab">
                    <div class="amount">10 Posters</div>
                    <router-link to="/PortfolioGraphicDesign">
                        <div class="more">More...</div>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- Tab 4 -->
        <div class="MotionTab">
            <div class="Thumnail1">
                <img src="../assets/BG/Cameraman.jpg" alt="Loading">
            </div>
            <div class="MTitle">
                <h1>Videographer</h1>
                <p>Experienced in Videographer with a sharp eyye for composition,
                    lighting and framing, capture high quality footage that enhance the story.
                    Skilled in operating a varity of cameras, gimbal(DJI Ronin3) and Drone(DJi Mini 3 Pro). Adept at adjusting to 
                    different shooting environments and collaborating with team to bring creative visions to life.
                </p>
                <div class="btnTab">
                    <!-- <div class="amount">9 Videos</div>
                    <div class="more">More Video</div> -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.portfolioBig {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(17, 24, 39);
}
//Title Style
.Portfolio_2 {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    // background-color: #ffd700;
}
.PortfolioSt {
    width: 100%;
    margin-top: 0px;
    
}
.PortfolioCov {
    font-family: sans-serif;
    font-weight: bold;
    letter-spacing: 6px;
    font-size: 90px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    opacity: 10%;
}
.PortfolioStyle {
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
//Portfolio card
.portfolio {
    max-width: 1150px;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-between;
    row-gap: 50px;
    //background-color: rgb(21, 118, 179);
}
.MotionTab {
    width: 550px;
    height: 530px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 0px 10px;
    border-radius: 3%;
    overflow: hidden;
    background-color: rgb(25, 34, 53);
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
}
.Thumnail1 {
    width: 99%;
    height: 330px;
    border-radius: 15px;
    overflow: hidden;

}
.Thumnail1 img{
    width: 100%;
    height: 300px;
}
.Thumnail1 iframe{
    width: 100%;
    height: 300px;
    cursor: pointer;
    justify-content: center;
    align-items: center; 
}
//Title style
.MTitle {
    color: white;
    font-family: sans-serif;

}
.MTitle h1:hover{
    color: #ffd700;
}
.btnTab {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    margin-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.374);
    //background-color: rgb(91, 91, 91);
}
.amount{
    width:50%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.amount:hover{
    color: #ffd700;
}
.more{
    width: 50%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
}
.more:hover{
    color: #ffd700;
}
.moreClick{
    position: absolute;
    z-index: 3;
    width: 15%;
    height: 3%;
    margin-top: -1.5%;
    margin-left: -10%;
}
//Responsive site 500px

@media (max-width: 500px){
    //Title style
    .Portfolio_2 {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        // background-color: #ffd700;
    }
    .PortfolioSt {
        width: 100%;
        margin-top: 0px;
        
    }
    .PortfolioCov {
        font-family: sans-serif;
        font-weight: bold;
        letter-spacing: 6px;
        font-size: 45px;
        display: flex;
        justify-content: center;
        text-transform: uppercase;
        opacity: 10%;
    }
    .PortfolioStyle {
        width: 100%;
        height: auto;
        position: absolute;
        display: flex;
        justify-content: center;
        margin-top: -60px;
        text-transform: uppercase;
        color: #ffd700;
        font-family: sans-serif;
        font-weight: bold;
    }
    .line_1 {
        position: absolute;
        width: 100%;
        height: 6px;
        // background-color: #ffd700;
        display: flex;
        justify-content: center;
        margin-top: -22px;
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
//Portfolio Card    
    .portfolio {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        justify-content: space-between;
        row-gap: 20px;
        padding: 15px;
        //background-color: rgb(21, 118, 179);
    }    
    .MotionTab {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        border-radius: 3%;
        overflow: hidden;
        padding: 6px 6px 0px 6px;
        box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.3);
        //background-color: rgb(122, 122, 122);
    }
    .Thumnail1 {
        width: 99%;
        height: auto;
        border-radius: 9px;
        //box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }
    .Thumnail1 {
        width: 99%;
        height: 200px;
        border-radius: 9px;
        overflow: hidden;
    
    }
    .Thumnail1 img{
        width: 100%;
        height: 210px;
    }
    .Thumnail1 iframe{
        width: 100%;
        height: 200px;
        cursor: pointer;
        justify-content: center;
        align-items: center; 
    }
//Title style
    .MTitle {
        color: white;
        font-family: sans-serif;
    }
    .MTitle h1{
        font-size: 25px;
    }
    .MTitle p{
        font-size: 12px;
    }
    .btnTab {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        justify-content: space-around;
        align-items: center;
        font-size: 15px;
        margin-top: 6px;
        border-top: 1px solid rgba(255, 255, 255, 0.374);
        //background-color: rgb(91, 91, 91);
    }
    .amount{
        width: 30%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
    .more{
        width: 30%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        }
}
</style>