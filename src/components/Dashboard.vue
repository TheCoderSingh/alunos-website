<template>
  <section id="dashboard">
    <div id="dashImgContainer">
      <img id="dashImg" src="../assets/alunos_02.png" />
    </div>
    <div id="dashContent">
      <div class="dashChildren" id="child1">
        <h5>Content 1</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div class="dashChildren" id="child2">
        <h5>Content 2</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div class="dashChildren" id="child3">
        <h5>Content 3</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div class="dashChildren" id="child4">
        <h5>Content 4</h5>
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
#dashboard {
  height: auto;
  display: flex;
  padding: 30px 60px 30px 0;
  margin-top: 30px;
}
#dashImgContainer {
  width: 50%;
  margin: auto;
  text-align: center;
  padding-right: 10px;
  /* background-image: url("../assets/alunos_02.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover; */
}
#dashContent {
  width: 50%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  padding-left: 10px;
}
#dashImg {
  width: 100%;
}
.dashChildren {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
h5 {
  margin: 10px 0;
}
</style>
