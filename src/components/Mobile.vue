<template>
  <section id="mobile">
    <div id="mobileContent">
      <h3>This is the title</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <h5>Subtitle 1</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <h5>Subtitle 2</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <h5>Subtitle 3</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
    </div>
    <div id="mobileImgContainer">
      <img id="mobileImg" src="../assets/mobileImg.png" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#mobile {
  height: auto;
  display: flex;
  padding: 30px 60px;
  margin-bottom: 30px;
}
#mobileImgContainer {
  width: 50%;
  margin: auto;
  text-align: center;
}

#mobileImg {
  max-width: 300px;
  height: 500px;
}
#mobileContent {
  width: 50%;
  display: flex;
  flex-direction: column;
}
h5 {
  margin: 10px 0;
}
</style>
