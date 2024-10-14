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
        <div class="MotionTab">
            <div class="Thumnail1">
                <img src="../assets/BG/BOBI3D.png" alt="Loading">
            </div>
            <div class="MTitle">
                <h1>UI Motion Demo</h1>
                <p>This UI Demo design model and motion in blender, then design sound in Adobe Primiere Pro 2023.</p>
                <div class="btnTab">
                    <div class="amount">9 Videos</div>
                    <div class="like">100 like</div>
                    <div class="more">More Video</div>
                </div>
            </div>
        </div>
        <div class="MotionTab">
            <div class="Thumnail1">
                <img src="../assets/BG/BOBI3D.png" alt="Loading">
            </div>
            <div class="MTitle">
                <h1>UI Motion Demo</h1>
                <p>This UI Demo design model and motion in blender, then design sound in Adobe Primiere Pro 2023.</p>
                <div class="btnTab">
                    <div class="amount">9 Videos</div>
                    <div class="like">100 like</div>
                    <div class="more">More Video</div>
                </div>
            </div>
        </div>
        <div class="MotionTab">
            <div class="Thumnail1">
                <img src="../assets/BG/BOBI3D.png" alt="Loading">
            </div>
            <div class="MTitle">
                <h1>UI Motion Demo</h1>
                <p>This UI Demo design model and motion in blender, then design sound in Adobe Primiere Pro 2023.</p>
                <div class="btnTab">
                    <div class="amount">9 Videos</div>
                    <div class="like">100 like</div>
                    <div class="more">More Video</div>
                </div>
            </div>
        </div>
        <div class="MotionTab">
            <div class="Thumnail1">
                <img src="../assets/BG/BOBI3D.png" alt="Loading">
            </div>
            <div class="MTitle">
                <h1>UI Motion Demo</h1>
                <p>This UI Demo design model and motion in blender, then design sound in Adobe Primiere Pro 2023.</p>
                <div class="btnTab">
                    <div class="amount">9 Videos</div>
                    <div class="like">100 like</div>
                    <div class="more">More Video</div>
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
    width: 1150px;
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
    height: fit-content;
    display: flex;
    flex-direction: column;
    color: gold;
    border-radius: 3%;
    overflow: hidden;
    background-color: rgb(122, 122, 122);
}
.Thumnail1 {
    width: 100%;
}
.Thumnail1 img{
    width: 100%;
    height: auto;
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
    border-top: 1px solid rgba(255, 255, 255, 0.374);
}
.amount{
    width: 30%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
.like{
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
    border-radius: 10px;
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
        color: gold;
        border-radius: 3%;
        overflow: hidden;
        background-color: rgb(122, 122, 122);
    }
}
</style>