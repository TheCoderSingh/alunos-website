<template>
  <div id="outDash">
    <h5 id="dashTitle">Web Dashboard Features</h5>
    <section id="dashboard">
      <div id="dashImgContainer">
        <img id="dashImg" src="../assets/alunos_02.png" />
      </div>
      <div id="dashContent">
        <div class="dashChildren" id="child1">
          <h5>Manage</h5>
          <p>
            Easily manage your students and homestays applications and keep
            track of all necessary information. See student and homestay lists,
            manage issues and more.
          </p>
        </div>
        <div class="dashChildren" id="child2">
          <h5>Match</h5>
          <p>
            Quickly match the student with the most suitable homestay based in
            pre-defined criteria by using our automated matching tool, and
            improve the quality of your matching process.
          </p>
        </div>
        <div class="dashChildren" id="child3">
          <h5>Communicate</h5>
          <p>
            Handle issues reported by students and homestays and easily
            communicate will all parties. Provide daily tips for the students to
            help them in their adaptation.
          </p>
        </div>
        <div class="dashChildren" id="child4">
          <h5>Evaluate</h5>
          <p>
            Automate and structure your feedback process and get feedback from
            students about the homestay they are living, and improve your
            selection of host-families.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
#outDash {
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 30px 60px 30px 0;
  margin-top: 30px;
  margin-bottom: 30px;
}
#dashTitle {
  font-weight: bold;
  text-align: center;
  padding-left: 30px;
  margin-bottom: 30px;
}
#dashboard {
  height: auto;
  display: flex;
  /* padding: 30px 60px 30px 0;
  margin-top: 30px;
  margin-bottom: 30px; */
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
  grid-gap: 25px;
  padding: 70px 10px;
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
