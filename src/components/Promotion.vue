<template>
  <section id="promotion">
    <div id="promotionContent">
      <h3 id="mainTitle">
        Providing The Best Homestay Management
      </h3>
      <h6 id="subtitle">
        A system that helps homestay coordinators working at schools or agencies
        match students with homestay families in Canada and the U.S.
      </h6>
      <q-btn
        no-caps
        color="secondary"
        label="Start free trial"
        v-scroll-to="'#contact'"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#promotion {
  height: auto;
  padding: 30px 60px;
  display: flex;
  z-index: 1;
  color: white;
  margin-top: 50px;
}
#promotionContent {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
}
#mainTitle {
  font-weight: bold;
  margin-bottom: 15px;
}
#subtitle {
  margin-bottom: 30px;
}
</style>
