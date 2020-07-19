<template>
  <section id="promotion">
    <div id="promotionContent">
      <h4 id="mainTitle">
        Providing The Best Homestay Management
      </h4>
      <p id="subtitle">
        ALUNOS improves homestay experiences by helping companies in Canada to
        manage homestay-related activities and faciliting communication.
      </p>
      <div id="buttonsDiv">
        <q-btn
          rounded
          no-caps
          label="Start free trial"
          v-scroll-to="'#contact'"
          id="trialBtn"
          style="background: white; color: #FF2681"
        />
        <!-- <q-btn
          rounded
          no-caps
          label="Download brochure"
          v-scroll-to="'#contact'"
          id="trialBtn"
          style="background: white; color: #FF2681; margin-left: 35px;"
        /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#promotion {
  height: auto;
  padding: 20px 80px;
  display: flex;
  z-index: 1;
  color: white;
  /* margin-top: 50px; */
  font-family: "Catamaran", sans-serif;
}
#promotionContent {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
}
#mainTitle {
  font-weight: 900;
  margin-bottom: 15px;
  font-size: 3.3vw;
  padding-right: 60px;
  margin-top: 0;
  line-height: 50px;
}
#subtitle {
  margin-bottom: 15px;
  font-size: 1.2rem;
  padding: 15px 60px 15px 0;
}
#trialBtn {
  font-weight: 700;
  width: 210px;
}
#buttonsDiv {
  display: flex;
}
@media screen and (min-width: 1336px) {
  #mainTitle {
    font-size: 40px;
  }
}
/* @media screen and (max-width: 1096px) {
  #mainTitle {
    font-size: 30px;
  }
} */
</style>
