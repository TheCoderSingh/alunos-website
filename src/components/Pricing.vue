<template>
  <section id="pricing">
    <h4 class="containerTitles">Pricing</h4>
    <p class="itemTitle">Good options for all companies</p>
    <div id="cards">
      <q-card
        id="otherCards"
        class="my-card bg-white text-black priceCard"
        align="center"
      >
        <q-card-section>
          <div class="containerTitles priceTitle">Free Trial</div>
          <div class="text-subtitle2" style="font-weight:bold">Start now!</div>
        </q-card-section>
        <q-card-section>
          <p>
            Start today using ALUNOS solution and try for 1 month all the
            features we offer
          </p>
          <p>
            You can access all interfaces during your freel trial - Web
            Dashboard, Students App and Homestay App.
          </p>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="priceBtn"
            rounded
            id="secButton"
            v-scroll-to="'#contact'"
            no-caps
            >Contact Us</q-btn
          >
        </q-card-actions>
      </q-card>
      <q-card id="fullCard" class="my-card priceCard" align="center">
        <q-card-section>
          <div class="containerTitles priceTitle">Full</div>
          <div class="text-subtitle2" style="font-weight:bold">$60/mo</div>
        </q-card-section>
        <q-card-section>
          <p>
            By choosing our Full plan you can access all available features in
            ALUNOS based on an annualy subscription.
          </p>
          <p>
            Manage your students, host-families, explore our matching tool, get
            feedbacks, and more.
          </p>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="priceBtn"
            rounded
            id="mainButton"
            no-caps
            v-scroll-to="'#contact'"
            >Contact Us</q-btn
          >
        </q-card-actions>
      </q-card>
      <q-card
        id="otherCards"
        class="my-card bg-white text-black priceCard"
        align="center"
      >
        <q-card-section>
          <div class="containerTitles priceTitle">Custom</div>
          <div class="text-subtitle2" style="font-weight:bold">
            Ask for a quote
          </div>
        </q-card-section>
        <q-card-section>
          <p>
            ALUNOS can be totally customized according to your needs - we
            understand that each provider has it's own particularities.
          </p>
          <p>
            By choosing our Custom plan you can personalize all forms, menus,
            themes and more.
          </p>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="priceBtn"
            rounded
            id="secButton"
            no-caps
            v-scroll-to="'#contact'"
            >Contact Us</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#pricing {
  height: auto;
  padding: 30px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}
#cards {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;
}
#fullCard {
  background-color: #1280ff;
  color: white;
  padding: 10px 20px;
}
#otherCards {
  padding: 10px 20px;
}
h4 {
  margin-top: 0;
  margin-bottom: 10px;
}
.priceCard {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 287px;
  height: 425px;
}
#mainButton {
  background-color: white;
  color: #ff2681;
  width: 100%;
}
#secButton {
  background-color: #1280ff;
  color: white;
  width: 100%;
}
.priceBtn {
  font-family: "Catamaran", sans-serif;
  font-weight: 700;
}
.priceTitle {
  font-size: 24px;
}
</style>
