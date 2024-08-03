<script>
export default{

};
</script>

<template>
<div class="software">
    <div class="softwareSt">
        <h1 class="softwareCov">Software</h1>
        <div class="sotfwareStyle">
        <h1 >My Tools</h1>
        </div>
        <div class="line_1">
            <div class="longLine"></div>
            <div class="shortLine"></div>
        </div>
    </div>
    <div class="softwareTool">
        <div class="softwareScript">
            <h1>Softwares I Use Every Day in <br/> My Line of Work</h1>
            <div class="phrase">
                <p>A. In Video's Work, I mainly use Adobe Premiere Pro for Drafting Footages, combine all audio systems and color grading together.
                    And for Adobe After Effect, I use it for doing animations, add-on effects and combine motions and videos together.</p>
                <p>B. I use Adobe Photoshop for doing Video's Thumbnails, Posters, Color Grading, Retouching on Images and make adjust on vectors, 
                    elements and other resouces.</p>
                <p>C. I use Adobe Photoshop for doing Video's Thumbnails, Posters, Color Grading, Retouching on Images and make adjust on vectors, 
                    elements and other resouces. I use Adobe Photoshop for doing Video's Thumbnails, Posters, Color Grading, Retouching on Images and make adjust on vectors, 
                    elements and other resouces.</p>
            </div>
        </div>
        <div class="softwareStatus">
            <div class="AF">
                <div class="level">
                    <h1>Adobe After Effect</h1>
                    <h1>80%</h1>
                </div>
                <div class="status">
                    <div class="line-1"></div>
                </div>
            </div>
            <div class="AF">
                <div class="level">
                    <h1>Adobe Premiere Pro</h1>
                    <h1>90%</h1>
                </div>
                <div class="status">
                    <div class="line-2"></div>
                </div>
            </div>
            <div class="AF">
                <div class="level">
                    <h1>Adobe Photoshop</h1>
                    <h1>75%</h1>
                </div>
                <div class="status">
                    <div class="line-3"></div>
                </div>
            </div>
            <div class="AF">
                <div class="level">
                    <h1>Figma</h1>
                    <h1>60%</h1>
                </div>
                <div class="status">
                    <div class="line-3a"></div>
                </div>
            </div>
            <div class="AF">
                <div class="level">
                    <h1>Blender</h1>
                    <h1>60%</h1>
                </div>
                <div class="status">
                    <div class="line-5"></div>
                </div>
            </div>
            <div class="AF">
                <div class="level">
                    <h1>Videographer & Photographer</h1>
                    <h1>90%</h1>
                </div>
                <div class="status">
                    <div class="line-6"></div>
                </div>
            </div>
            <div class="AF">
                <div class="level">
                    <h1>Digital Marketing</h1>
                    <h1>75%</h1>
                </div>
                <div class="status">
                    <div class="line-7"></div>
                </div>
            </div>
            <div class="AF">
                <div class="level">
                    <h1>Business Suit(Ads Manager)</h1>
                    <h1>90%</h1>
                </div>
                <div class="status">
                    <div class="line-8"></div>
                </div>
            </div>
            <div class="AF">
                <div class="level">
                    <h1>HTML&CSS(Vue.js)</h1>
                    <h1>60%</h1>
                </div>
                <div class="status">
                    <div class="line-9"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.software {
    width: 100% ;
    height: 550px;
    background-color: rgb(17, 24, 39);
    //background-color: rgb(145, 145, 145);
    position: absolute;
    z-index: 0;
    margin-top: auto;
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
// software descrition style
.softwareTool {
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.softwareScript {
    width: 550px;
    height: 400px;

}
.softwareScript h1{
    font-size: 35px;
    font-family: sans-serif;
    line-height: 35px;
    color: white
}
.softwareScript .phrase{
    margin-top: 0px;
    line-height: 30px;
}
.softwareScript .phrase p{
    font-size: 16px;    
    font-family: sans-serif;
    
}
// style on status skill
.softwareStatus {
    width: 550px;
    height: 400px;
    padding: 5px;
    //background-color: rgb(47, 96, 3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    margin-left: 0px;

}
.softwareStatus .AF{
    width: 500px;
    margin-left: 30px;
    //background-color: #ffd90051;
}
.AF .level {
    width: 100%;
    height: 50px;
    display: flex;
    display: row;
    justify-content: center;
    justify-content: space-between;
}
.AF .level h1{
    font-family: sans-serif;
    font-size: 16px;
}
.status {
    width: 100%;
    height: 3px;
    margin-top: -20px;
    background-color: #303030;

}
.status .line-1{
    width: 80%;
    height: 3px;
    margin-top: -20px;
    background-color: #ffd700;   
}
.status .line-2{
    width: 90%;
    height: 3px;
    margin-top: -20px;
    background-color: #ffd700;   
}
.status .line-3{
    width: 75%;
    height: 3px;
    margin-top: -20px;
    background-color: #ffd700;       
}
.status .line-3a{
    width: 60%;
    height: 3px;
    margin-top: -20px;
    background-color: #ffd700;   
}
.status .line-5{
    width: 60%;
    height: 3px;
    margin-top: -20px;
    background-color: #ffd700;   
}
.status .line-6{
    width: 90%;
    height: 3px;
    margin-top: -20px;
    background-color: #ffd700;   
}
.status .line-7{
    width: 75%;
    height: 3px;
    margin-top: -20px;
    background-color: #ffd700;   
}
.status .line-8{
    width: 90%;
    height: 3px;
    margin-top: -20px;
    background-color: #ffd700;   
}
.status .line-9{
    width: 60%;
    height: 3px;
    margin-top: -20px;
    background-color: #ffd700;   
}
@media (max-width: 600px) {
    .software {
        width: 100% ;
        height: fit-content;
        background-color: rgb(17, 24, 39);
        //background-color: rgb(145, 145, 145);	
        margin-top: 4050px;
        z-index: 1;
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
        font-size: 60px;
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
        margin-top: 6%;
    }
    // line style below  About text
    .line_1 {
        position: absolute;
        width: 100%;
        height: 6px;
        // background-color: #ffd700;
        display: flex;
        justify-content: center;
        margin-top: 16%;
    
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
    // software descrition style
    .softwareTool {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        //background-color: #ffd700;
    }
    .softwareScript {
        width: 400px;
        height: fit-content;
        padding: 20px;
        margin-top: -20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        //background-color: #006d1d;
        text-align:center;
    
    }
    .softwareScript h1{
        font-size: 25px;
        margin-top: 6%;
        font-family: sans-serif;
        line-height: 35px;
        display: flex;
        justify-content: center;
        color: white
    }
    .softwareScript .phrase{
        margin-top: 0px;
        line-height: 25px;
    }
    .softwareScript .phrase p{
        font-size: 14px;    
        font-family: sans-serif;
        text-align: justify;
        
    }
    // style on status skill
    .softwareStatus {
        width: 400px;
        height: fit-content;
        padding: 10px;
        //background-color: rgb(47, 96, 3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-content: space-around;
        align-items: center;
        margin-left: 0px;
        margin-top: -6%;
    
    }
    .softwareStatus .AF{
        width: 96%;
        margin-left: 0px;
        //background-color: #ffd90051;
    }
    .AF .level {
        width: 100%;
        height: 50px;
        display: flex;
        display: row;
        justify-content: center;
        justify-content: space-between;
    }
    .AF .level h1{
        font-family: sans-serif;
        font-size: 16px;
    }
    .status {
        width: 100%;
        height: 3px;
        margin-top: -20px;
        background-color: #303030;
    
    }
    .status .line-1{
        width: 80%;
        height: 3px;
        margin-top: -20px;
        background-color: #ffd700;   
    }
    .status .line-2{
        width: 90%;
        height: 3px;
        margin-top: -20px;
        background-color: #ffd700;   
    }
    .status .line-3{
        width: 75%;
        height: 3px;
        margin-top: -20px;
        background-color: #ffd700;       
    }
    .status .line-3a{
        width: 60%;
        height: 3px;
        margin-top: -20px;
        background-color: #ffd700;   
    }
    .status .line-5{
        width: 60%;
        height: 3px;
        margin-top: -20px;
        background-color: #ffd700;   
    }
    .status .line-6{
        width: 90%;
        height: 3px;
        margin-top: -20px;
        background-color: #ffd700;   
    }
    .status .line-7{
        width: 75%;
        height: 3px;
        margin-top: -20px;
        background-color: #ffd700;   
    }
    .status .line-8{
        width: 90%;
        height: 3px;
        margin-top: -20px;
        background-color: #ffd700;   
    }
    .status .line-9{
        width: 60%;
        height: 3px;
        margin-top: -20px;
        background-color: #ffd700;   
    }
}
</style>