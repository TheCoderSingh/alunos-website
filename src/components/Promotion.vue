<template>
  <section id="promotion">
    <div id="promotionContent">
      <h3 id="mainTitle">
        Providing The Best Homestay Management
      </h3>
      <h6 id="subtitle">
        ALUNOS helps companies in Canada to manage homestay-related activities
        and facilitates communication.
      </h6>
      <q-btn
        rounded
        no-caps
        label="Start free trial"
        v-scroll-to="'#contact'"
        style="background: white; color: #FF2681"
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
  width: 48%;
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
