<template>
  <section id="pricing">
    <h4>Pricing</h4>
    <p>Good options for all companies</p>
    <div id="cards">
      <q-card
        id="otherCards"
        class="my-card bg-white text-black priceCard"
        align="center"
      >
        <q-card-section>
          <div class="text-h6">Free Trial</div>
          <div class="text-subtitle2">Start now!</div>
        </q-card-section>
        <q-card-section>
          <p>Feature</p>
          <p>Feature</p>
          <p>Feature</p>
          <p>Feature</p>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn id="secButton" v-scroll-to="'#contact'">Start Free</q-btn>
        </q-card-actions>
      </q-card>
      <q-card id="fullCard" class="my-card " align="center">
        <q-card-section>
          <div class="text-h6">Full</div>
          <div class="text-subtitle2">Recommended</div>
        </q-card-section>
        <q-card-section>
          <p>Feature</p>
          <p>Feature</p>
          <p>Feature</p>
          <p>Feature</p>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn id="mainButton" label="Buy Now" />
        </q-card-actions>
      </q-card>
      <q-card
        id="otherCards"
        class="my-card bg-white text-black"
        align="center"
      >
        <q-card-section>
          <div class="text-h6">Custom</div>
          <div class="text-subtitle2">Ask for a quote</div>
        </q-card-section>
        <q-card-section>
          <p>Feature</p>
          <p>Feature</p>
          <p>Feature</p>
          <p>Feature</p>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn id="secButton">Contact Us</q-btn>
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
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
#cards {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}
#fullCard {
  background-color: #2899f3;
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
}
#mainButton {
  background-color: white;
  color: #ff2681;
  width: 100%;
}
#secButton {
  background-color: #2899f3;
  color: white;
  width: 100%;
}
</style>
