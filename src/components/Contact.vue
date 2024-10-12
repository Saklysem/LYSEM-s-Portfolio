<script>
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
export default{
    // components  :{
    //     faSitemap,
    // }
};
</script>
<template>
<div class="Contact">
<!-- Contact Title style -->
    <div class="ContactSt">
        <h1 class="ContactCov">Contact</h1>
        <div class="ContactStyle">
        <h1 >Contact Me</h1>
        </div>
        <div class="line_1">
            <div class="longLine"></div>
            <div class="shortLine"></div>
        </div>
    </div>
<!-- Contact Detail Style -->
    <div class="ContactDetail">
        <div class="ContactDetail1">
            <h1>Get In Touch WIth Me!</h1>
            <div class="inputSt">
                <form action="#">
                    <!-- <label for="name">Your Name</label> -->
                    <input type="text" id="name" placeholder="Your Name"><br>
                    <!-- <label for="Email">Your Email</label> -->
                    <input type="text" id="email" placeholder="Your Email"><br>
                    <!-- <label for="message">Message</label> -->
                    <textarea v-model="text" id="message" placeholder="Your Message..."></textarea>
                </form>
            </div>
            <div class="Detail">
                <button id="ProjectDetail">Send Message</button>
            </div>
        </div>
        <div class="ContactDetail2">
            <h1>Contact Info!</h1>
            <div class="info">
                <div class="greeting">
                    <p>Feel Free to contact me for any Project's Opportunities, <br>
                    StartUps or FreeLance Job XD.</p>
                </div>
                <div class="iEmail">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail email_icon"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div class="ScAddress1">
                        <h1>Email</h1>
                        <p>Saklysem319@gmail.con</p>
                    </div>
                </div>
                <div class="iEmail">
                    <div class="icon">
                        <!-- Test Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div class="ScAddress2">
                        <h1>Phone</h1>
                        <p>+855 86 696 553</p>
                    </div>
                </div>
                <div class="iEmail">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div class="ScAddress3">
                        <h1>Address</h1>
                        <p>TK1 ,Phnom Penh, Cambodia</p>
                    </div>
                </div>
                <div class="AddSM">
                    <div class="InProfile">
                        <p>Let's Connect with my Social Media!</p>
                    </div>
                    <div class="SMIcon">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="CopyRIght">
        <i class="fa fa-bank" style="font-size:24px"></i>
        <h1 class="name">Sak Lysem -</h1>
        <h1 class="Port">Portfolio Site!</h1>

    </div>
</div>
</template>
<style lang="scss" scoped>

.Contact {
    max-width: 100%;
    height: fit-content;
    background-color: rgb(17, 24, 39);
    // background-color: #33492c;
    // opacity: 90%;
    display: flex;
    flex-direction: column;
}
.ContactSt{
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    // margin-top: -880px;
    // background-color: #003572;

}       
.ContactCov {

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
.ContactStyle {
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
.ContactDetail {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // background-color: #696969;
}
.ContactDetail .ContactDetail1{
    width: 600px;
    height: fit-content;
    padding: 15px;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    // background-color: #565656;
}
// Chat With me style
.inputSt {
    width: 100%;
    height: 380px;
    display: flex;
    flex-direction: column;

    color: #ffffff;
    // background-color: #ffd700;
}
#name {
    width: 570px;
    height: 50px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    border: 1.5px solid #cccccc1a;
    background-color: rgb(17, 24, 39);
}
#name:focus{
    border: 1.5px solid #ffd700;
}
#email {
    width: 570px;
    height: 50px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    border: 1.5px solid #cccccc1a;
    background-color: rgb(17, 24, 39);
}
#message {
    width: 570px;
    height: 200px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    font-size: 16px;
    border: 1.5px solid #cccccc1a;
    background-color: rgb(17, 24, 39);
    color: #ffffff;
}



// Submit Message to me BTN
.Detail {
    width: 200px;
    height: 60px;
    margin-top: 0px;
    margin-left: -6px;
    display: flex;
    align-items: center;
    // background-color: #ee0000;
    align-items: center;
    justify-content: center;
}
#ProjectDetail {
    padding: 15px 25px;
    font-size: 16px;
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
    font-size: 14px;
}


// Contact Info Style
.ContactDetail .ContactDetail2{
    width: 600px;
    height: 450px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // background-color: #565656;
}
.info {
    width: 100%;
    height: 380px;
    display: inline-block;
    padding-top: 11px;
    // background-color: #ffd700;
}
.info h1{
    font-size: 20px;
}
.iEmail {
    // background-color: #ffd700;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    
}
.iEmail .ScAddress1{
    margin-left: 10px;
}
.iEmail .ScAddress1:hover{
    color: #ffd700;
}
.iEmail .ScAddress2{
    margin-left: 10px;
}
.iEmail .ScAddress2:hover{
    color: #ffd700;
}
.iEmail .ScAddress3{
    margin-left: 10px;
}
.iEmail .ScAddress3:hover{
    color: #ffd700;
}
.icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1.5px solid rgba(33, 44, 67, 0.7);
    // background-color: #ffd700;
}
.icon:hover{
    border: 1.5px solid #ffd700;
}
.greeting{
    line-height: 30px;
    font-size: 16px;
    // background-color: #ffd700;
}
// Let's Connect with my social media profile
.AddSM {
    width: 100%;
    height: 30px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    // background-color: #004186;
}
.InProfile {
    display: flex;
    align-items: center;
}
.SMIcon {
    width: 300px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 0px;
    margin-left: -20px;
    // background-color: #ffd90053;
}
.SMIcon p{
    width: 50px;
    height: 50px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1.5px solid rgba(33, 44, 67, 0.7);
    // background-color: #004186;   
}
.SMIcon P:hover{
    width: 100px;
    border-radius: 50px;
    border: 1.5px solid #ffd700;
}
// Copyright at the end of Porfolio
.CopyRIght {
    width: 100%;
    height: 60px;
    background-color: rgb(12, 24, 49);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.CopyRIght h1{
    text-transform: uppercase;
    font-size: 16px;
    margin-left: 6px;
}
.CopyRIght .name{
    margin-left: 50px;
}
.email_icon:hover{
    color: #ffd700;
}


//Responsive 500px
@media (max-width: 500px){
    .ContactSt{
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        // margin-top: -880px;
        // background-color: #003572;
    
    }       
    .ContactCov {
    
        width: 100%;
        height: fit-content;
        font-family: sans-serif;
        font-weight: bold;
        letter-spacing: 6px;
        font-size: 50px;
        display: flex;
        justify-content: center;
        text-transform: uppercase;
        opacity: 10%;
        
    }
    .ContactStyle {
        width: 100%;
        height: fit-content;
        position: absolute;
        display: flex;
        justify-content: center;
        text-transform: uppercase;
        color: #ffd700;
        font-family: sans-serif;
        font-weight: bold;
        margin-top: 16px;
    
    }
    // line style below  About text
    .line_1 {
        position: absolute;
        width: 100%;
        height: 6px;
        // background-color: #ffd700;
        display: flex;
        justify-content: center;
        margin-top: 55px;
    
    }
//Contact me input text left side


.ContactDetail {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    // background-color: #696969;
}
.ContactDetail .ContactDetail1{
    width: 100%;
    height: fit-content;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: #565656;
}
// Chat With me style
.inputSt {
    width: 100%;
    height: 380px;
    display: inline-block;
    color: #ffffff;
    // background-color: #ffd700;
}
#name {
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    color: white;
    font-size: 14px;
    border: 1.5px solid #cccccc1a;
    background-color: rgb(17, 24, 39);
}
#name:focus{
    border: 1.5px solid #ffd700;
}
#email {
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    color: white;
    font-size: 14px;
    border: 1.5px solid #cccccc1a;
    background-color: rgb(17, 24, 39);
}
#message {
    width: 100%;
    height: 200px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    font-size: 16px;
    border: 1.5px solid #cccccc1a;
    background-color: rgb(17, 24, 39);
    color: #ffffff;
}



// Submit Message to me BTN
.Detail {
    width: 100%;
    height: 50px;
    margin-top: 0px;
    display: flex;
    //background-color: #ee0000;
    align-items: center;
    justify-content: center;
}
#ProjectDetail {
    padding: 15px 25px;
    font-size: 16px;
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
    font-size: 14px;
}
//Contact info Style right side


.ContactDetail .ContactDetail2{
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    //background-color: #565656;
}
.info {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    //background-color: #ffd700;
}
.info h1{
    font-size: 16px;
}
.iEmail {
    // background-color: #ffd700;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    
}
.iEmail .ScAddress1{
    margin-left: 10px;
}
.iEmail .ScAddress1:hover{
    color: #ffd700;
}
.iEmail .ScAddress2{
    margin-left: 10px;
}
.iEmail .ScAddress2:hover{
    color: #ffd700;
}
.iEmail .ScAddress3{
    margin-left: 10px;
}
.iEmail .ScAddress3:hover{
    color: #ffd700;
}
.icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1.5px solid rgba(33, 44, 67, 0.7);
    // background-color: #ffd700;
}
.icon:hover{
    border: 1.5px solid #ffd700;
}
.greeting{
    line-height: 30px;
    font-size: 14px;
    //background-color: #ffd700;
}
// Let's Connect with my social media profile
.AddSM {
    width: 100%;
    height: 30px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    // background-color: #004186;
}
.InProfile {
    display: flex;
    align-items: center;
    font-size: 14px;
}
.SMIcon {
    width: 300px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 0px;
    margin-left: -20px;
    // background-color: #ffd90053;
}
.SMIcon p{
    width: 50px;
    height: 50px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1.5px solid rgba(33, 44, 67, 0.7);
    // background-color: #004186;   
}
.SMIcon P:hover{
    width: 100%;
    border-radius: 50px;
    border: 1.5px solid #ffd700;
}
// Copyright at the end of Porfolio
.CopyRIght {
    width: 100%;
    height: 60px;
    background-color: rgb(12, 24, 49);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.CopyRIght h1{
    text-transform: uppercase;
    font-size: 12px;
}
.CopyRIght .name{
    margin-left: 0px;
}
.email_icon:hover{
    color: #ffd700;
}
}

</style>