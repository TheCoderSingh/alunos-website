<template>
  <div id="wrap">
    <Nav />
    <Promotion />
    <Features />
    <Dashboard />
    <Mobile />
    <Testimonials />
    <Pricing />
    <Contact />
    <Team />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Mobile from "./components/Mobile";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Promotion from "./components/Promotion";
import Dashboard from "./components/Dashboard";

export default {
  components: {
    Nav,
    Promotion,
    Features,
    Mobile,
    Testimonials,
    Team,
    Pricing,
    Contact,
    Footer,
    Dashboard
  }
};
</script>

<style>
#wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  align-items: stretch;
}
body,
html {
  margin: 0 auto !important;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  min-width: 375px;
  max-width: 1920px;
}

* {
  box-sizing: inherit;
}

@media screen and (min-width: 1367px) {
  body {
    background-image: url("assets/alunos_01.png");
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
    font-size: 15px !important;
  }
  nav {
    padding: 20px 11vw 20px 10.5vw !important;
  }
  #headerId {
    background-image: none !important;
  }
  #mainTitle {
    font-size: 40px;
  }
  #features {
    margin-top: 225px;
    padding: 30px 11vw;
  }
  #promotion {
    padding: 5vw 11vw;
  }
  #outDash {
    padding: 0 0 30px 0;
  }
  #dashContent {
    padding: 70px 11vw 70px 40px;
  }
  #outMobile {
    padding: 0 11vw 30px 11vw;
  }
  #contactForm {
    width: 75%;
  }
  #formSub {
    margin-top: 20px;
  }
  footer {
    padding: 30px 11vw !important;
  }
  #subtitleApp {
    width: 85%;
  }
  #cards {
    grid-gap: 75px;
  }
  #teamCards,
  #teamCards2 {
    grid-gap: 45px;
  }
  #otherCards,
  #fullCard {
    padding: 10px 20px 20px 20px;
  }
}

@media screen and (min-width: 1580px) {
  nav {
    padding: 20px 17vw 20px 16.5vw !important;
  }
  #wrap {
    padding: 15px 0 0 0;
  }
  #promotion {
    padding: 5.5vw 17vw;
  }
  #features {
    margin-top: 19.5vw;
    padding: 30px 17vw;
  }
  #outDash {
    padding: 0 0 30px 0;
  }
  #dashContent {
    padding: 70px 17vw 70px 40px;
  }
  #outMobile {
    padding: 0 17vw 30px 17vw;
  }
  #carouselId {
    padding-left: 200px;
    padding-right: 200px;
  }
  footer {
    padding: 30px 17vw !important;
  }
}
@media screen and (min-width: 1920px) {
  #features {
    margin-top: 350px;
  }
}
@media screen and (max-width: 1366px) {
  #features #title {
    width: 55%;
  }
}
@media screen and (max-width: 1080px) {
  #features {
    margin-top: 0;
    background-color: white;
  }
  header {
    background-color: #1280ff;
  }
  #headerId {
    margin-bottom: -600px;
  }
  #promotion {
    padding: 20px 25px;
    margin-top: -50px;
    margin-bottom: 9vw;
  }
  #features #title {
    width: 80%;
  }
  #laptop {
    margin-top: 0;
  }
  #mainTitle {
    padding-right: 12px;
    font-size: 3.4vw;
  }
  #navigation {
    padding: 20px 15px 20px 15px;
  }
  #features {
    padding: 30px 25px;
  }
  #dashTitle {
    padding-left: 25px;
  }
  #outDash {
    padding: 0 25px 30px 0;
  }
  #outMobile {
    padding: 0 25px 30px 25px;
  }
  #pricing {
    padding: 30px 25px;
  }
  #team {
    padding: 0 25px 30px 25px;
  }
  footer {
    padding: 30px 25px;
  }
  #laptop {
    width: 40%;
  }
}
@media screen and (max-width: 980px) {
  #promotion {
    margin-bottom: 5vw;
  }
  #promotionContent #subtitle {
    font-size: 16px;
  }
  #mainTitle {
    font-size: 3.6vw;
  }
}
@media screen and (max-width: 767px) {
  #promotion {
    padding-bottom: 60px;
    margin-bottom: 0;
    margin-top: -80px;
  }
  #promotionContent #subtitle {
    padding-right: 2px;
  }
  #navOptions {
    display: none;
  }
  #teamCards2 {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
  #outDash {
    margin-bottom: 30px;
  }
  #footerContent {
    align-items: center;
  }
  #cards {
    grid-template-rows: 3fr;
    grid-template-columns: 1fr;
  }
  #features #title #textTitle {
    font-size: 22px;
  }
  #mainTitle {
    font-size: 3.8vw;
  }
  #featuresContent {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
  #dashboard {
    flex-direction: column;
  }
  #dashContent {
    width: 100%;
    padding-top: 20px;
  }
  #dashImgContainer {
    width: 38%;
  }
  #subtitleApp {
    font-size: 19px;
  }
  #mobileImg {
    height: 400px;
  }
  #mobileButtons {
    display: none;
  }
  #features {
    padding-bottom: 0px;
  }
  #outDash {
    padding-bottom: 0px;
  }
  #outMobile {
    padding-bottom: 0px;
  }
  #pricing {
    padding-top: 0px;
  }
  #contact {
    margin-bottom: 60px;
  }
  #carouselId {
    padding: 0;
    padding-bottom: 50px;
  }
}
@media screen and (max-width: 600px) {
  #teamCards {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  #teamCards2 {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  #promotion {
    padding-bottom: 62px;
    margin-bottom: 0;
    margin-top: -100px;
  }
  #mainTitle {
    font-size: 22px;
    line-height: 37px;
  }
  #promotionContent #subtitle {
    display: none;
  }
  #features #title #textTitle {
    font-size: 20px;
  }
  #footerButtons {
    display: none;
  }
  #footerContent {
    margin-top: 0;
  }
  #contact {
    display: block;
    padding: 30px 0;
  }
  #imgContact {
    display: none;
  }
  #trialBtn {
    width: 150px;
  }
  #signButton {
    width: 80px !important;
  }
  #formContainer {
    width: 100%;
  }
  #mobileContent {
    width: 100%;
  }
  #mobileImgContainer {
    display: none;
  }
  #team {
    margin-bottom: 0;
  }
  #footerContent {
    flex-direction: column-reverse;
  }
  .about {
    width: 100%;
    text-align: center;
  }
  #copy {
    justify-content: center;
  }
  .form {
    margin-bottom: 20px;
  }
  #carousel {
    padding: 0 65px;
  }
  #carouselId {
    padding-bottom: 110px;
  }
  #div2 {
    margin-left: 0;
  }
}
@media screen and (max-width: 500px) {
  #signButton {
    position: absolute;
    right: 120px;
    top: 222px;
  }
  #mainTitle {
    font-size: 4vw;
  }
  #dashContent {
    padding-bottom: 10px;
  }
  #features {
    margin-bottom: 10px;
  }
  #trialBtn {
    margin-top: 20px;
  }
  #promotion {
    padding-bottom: 38px;
  }
}
@media screen and (max-width: 400px) {
  #mainTitle {
    font-size: 17px;
    padding-right: 0;
  }
  #signButton {
    right: 30px;
  }
}
</style>
