<script>
export default{

};
</script>
<template>
    <div class="Portfolio">
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
<!-- Portfolio set -->
        <div class="Portfo">
<!-- Slide Card of project have been done -->
            <div class="D3Motion">
                <div class="Card">
                    <img src="../assets/BG/BOBI3D.png" alt="Loading">
                    <div class="ProjectTitle"></div>
                </div>
                <div class="Card">
                    <img src="../assets/BG/BOBI3D.png" alt="Loading">
                    <div class="ProjectTitle"></div>
                </div>
                <div class="Card">
                    <img src="../assets/BG/BOBI3D.png" alt="Loading">
                    <div class="ProjectTitle"></div>
                </div>
            </div>
        </div>
<!-- Type of projects -->
 <!-- Type of projects  1-->
    <div class="ProCard">
        <div class="ProjectTypeSt">
            <div class="image">
                <img src="../assets/BG/BOBI3D.png" alt="Loading">
            </div>
            <div class="description">
                <h2>Motion Graphic | Video Editor | 3D Motion</h2>
                <p class="promo"> 
                   As a Software Engineering graduate who has completed a 4-year
                   bachelor’s degree, I’ve gained skills in design, branding, creativity, 
                   communication, and problem-solving. With over 3 years of experience 
                   in Video Editing, Video Shooting & Motion Graphics , I bring strong abilities 
                   and knowledge that can contribute to a company's goals and success. 
                   I am very determined and committed to my responsibilities at work and tasks. </p>
                <div class="Detail">
                    <button id="ProjectDetail">Project Detail</button>
                </div>
            </div>
        </div>
<!-- Type of projects 2-->
        <div class="ProjectTypeSt">
            <div class="image">
                <img src="../assets/BG/BOBI3D.png" alt="Loading">
            </div>
            <div class="description">
                <h2>Motion Graphic | Video Editor | 3D Motion</h2>
                <p class="promo"> 
                   As a Software Engineering graduate who has completed a 4-year
                   bachelor’s degree, I’ve gained skills in design, branding, creativity, 
                   communication, and problem-solving. With over 3 years of experience 
                   in Video Editing, Video Shooting & Motion Graphics , I bring strong abilities 
                   and knowledge that can contribute to a company's goals and success. 
                   I am very determined and committed to my responsibilities at work and tasks. </p>
                <div class="Detail">
                    <button id="ProjectDetail">Project Detail</button>
                </div>
            </div>
        </div>
<!-- Type of projects 3-->
        <div class="ProjectTypeSt">
            <div class="image">
                <img src="../assets/BG/BOBI3D.png" alt="Loading">
            </div>
            <div class="description">
                <h2>Motion Graphic | Video Editor | 3D Motion</h2>
                <p class="promo"> 
                   As a Software Engineering graduate who has completed a 4-year
                   bachelor’s degree, I’ve gained skills in design, branding, creativity, 
                   communication, and problem-solving. With over 3 years of experience 
                   in Video Editing, Video Shooting & Motion Graphics , I bring strong abilities 
                   and knowledge that can contribute to a company's goals and success. 
                   I am very determined and committed to my responsibilities at work and tasks. </p>
                <div class="Detail">
                    <button id="ProjectDetail">Project Detail</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.Portfolio{
    width: 100%;
    height: fit-content;
    background-color: rgb(17, 24, 39);
}
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
// Portfolio Style
.Portfo {
    width: 100%;
    height: 300px;
    // background-color: #0d4a8f;
    opacity: 30%;
    display: flex;
    justify-content: center;
}
.D3Motion{
    width: 1200px;
    height: 250px;
    // background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
}
.D3Motion .Card{
    width: 350px;
    height: 200px;
    background-color: #ee0000;
    display: center;
    justify-content: center;
    border-radius: 15px;
    overflow: hidden;
}
.D3Motion .Card img{
    width: 100%;
}
.D3Motion .Card .ProjectTitle {
    width: 350px;
    height: 120px;
    margin-top: -120px;
    border-radius: 15px;
    position: absolute;
    background-image: linear-gradient(0deg, rgb(17, 24, 39), transparent);
}
.ProCard{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.ProjectTypeSt{
    width: 100%;
    height: fit-content;
    // background-color: #ffd700;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.image{
    width: 500px;
    height: auto;
    background-color: aliceblue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.image img{
    position: absolute;
    z-index: 3;
    width: 500px;
    height: auto;
}

.description{
    width: 600px;
    height: 300px;
    padding: 15px;
    margin-left: 30px;
    text-align: justify;
    // background-color: #00ffc8;
}
.description h2{
    color: white;
    margin-top: -15px;
}
.promo {
    line-height: 30px;
}
// See detail in project BTN
.Detail {
    width: 100%;
    height: 60px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    // background-color: #ee0000;
}
#ProjectDetail {
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
#ProjectDetail:hover {
    background-color: white;
    color: black;
}
#ProjectDetail:active {
    padding: 13px 23px;
    font-size: 18px;
}

@media (max-width: 500px) {

    .Portfolio{
        width: 100%;
        height: fit-content;
        background-color: rgb(17, 24, 39);
    }
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
        font-size: 50px;
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
        margin-top: -65px;
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
        margin-top: -25px;
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
    // Portfolio Style
    .Portfo {
        width: 400px;
        height: 300px;
        // background-color: #0d4a8f;
        opacity: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
    }
    .D3Motion{
        width: 1200px;
        height: 250px;
        // background-color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-around;
        padding: 15px;
    }
    .D3Motion .Card{
        width: 350px;
        height: 200px;
        background-color: #ee0000;
        display: center;
        justify-content: center;
        border-radius: 15px;
        overflow: hidden;
    }
    .D3Motion .Card img{
        width: 100%;
    }
    .D3Motion .Card .ProjectTitle {
        width: 350px;
        height: 120px;
        margin-top: -120px;
        border-radius: 15px;
        position: absolute;
        background-image: linear-gradient(0deg, rgb(17, 24, 39), transparent);
    }
    .ProCard{
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .ProjectTypeSt{
        width: 100%;
        height: 300px;
        // background-color: #ffd700;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }
    .image{
        width: 400px;
        height: auto;
        background-color: aliceblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .image img{
        position: absolute;
        z-index: 3;
        width: 400px;
        height: auto;
    }
    
    .description{
        width: 400px;
        height: 300px;
        padding: 15px;
        margin-left: auto;
        text-align: justify;
        margin-top: 150px;
        // background-color: #00ffc8;
    }
    .description h2{
        color: white;
        margin-top: -15px;
    }
    .promo {
        line-height: 30px;
    }
    // See detail in project BTN
    .Detail {
        width: 100%;
        height: 60px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        // background-color: #ee0000;
    }
    #ProjectDetail {
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
    #ProjectDetail:hover {
        background-color: white;
        color: black;
    }
    #ProjectDetail:active {
        padding: 13px 23px;
        font-size: 18px;
    }   

}
</style>