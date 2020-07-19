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
  margin: auto;
  max-width: 1366px;
  font-family: "Montserrat", sans-serif;
  align-items: stretch;
}
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-width: 375px;
}

* {
  box-sizing: inherit;
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
    margin-top: -200px;
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
}
@media screen and (max-width: 767px) {
  #promotion {
    padding-bottom: 60px;
    margin-bottom: 0;
    margin-top: -230px;
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
    font-size: 28px;
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
    margin-top: -255px;
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
    font-size: 21px;
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
    font-size: 21px;
    padding-right: 0;
  }
  #signButton {
    right: 30px;
  }
}
</style>
