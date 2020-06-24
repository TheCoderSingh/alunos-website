<template>
  <section id="features">
    <div id="title">
      <h5 id="textTitle">
        A system that helps homestay coordinators working at schools or agencies
        match students with homestay families in Canada and the U.S.
      </h5>
    </div>
    <img id="laptop" src="../assets/laptop.png" />
    <div id="featuresContent">
      <div class="featureItem">
        <h6>Feature 1</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div class="featureItem">
        <h6>Feature 2</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div class="featureItem">
        <h6>Feature 3</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div class="featureItem">
        <h6>Feature 4</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#features {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
  margin-top: 150px;
}
#title {
  margin: 0px auto 30px auto;
  width: 60%;
  text-align: center;
}
#textTitle {
  font-weight: bold;
}
h6 {
  margin: 10px 0;
}
#featuresContent {
  margin-top: 30px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
}
#laptop {
  margin-top: 60px;
}
</style>
