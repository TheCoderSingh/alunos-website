<template>
  <div id="outDash">
    <h4 id="dashTitle" class="containerTitles">Web Dashboard Features</h4>
    <section id="dashboard">
      <div id="dashImgContainer">
        <img id="dashImg" src="../assets/alunos_02.png" />
      </div>
      <div id="dashContent">
        <div class="dashChildren" id="child1">
          <h5 class="itemTitle">Manage</h5>
          <p>
            Easily manage your students and homestays applications and keep
            track of all necessary information. See student and homestay lists,
            manage issues and more.
          </p>
        </div>
        <div class="dashChildren" id="child2">
          <h5 class="itemTitle">Match</h5>
          <p>
            Quickly match the student with the most suitable homestay based in
            pre-defined criteria by using our automated matching tool, and
            improve the quality of your matching process.
          </p>
        </div>
        <div class="dashChildren" id="child3">
          <h5 class="itemTitle">Communicate</h5>
          <p>
            Handle issues reported by students and homestays and easily
            communicate will all parties. Provide daily tips for the students to
            help them in their adaptation.
          </p>
        </div>
        <div class="dashChildren" id="child4">
          <h5 class="itemTitle">Evaluate</h5>
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
  padding: 0 80px 30px 0;
  margin-bottom: 60px;
}
.containerTitles {
  font-family: "Catamaran", sans-serif;
  font-weight: 900;
  text-align: center;
}
#dashTitle {
  padding-left: 80px;
  margin-bottom: 30px;
}
#dashboard {
  height: auto;
  display: flex;
}
#dashImgContainer {
  width: 50%;
  margin: auto;
  text-align: center;
  padding-right: 20px;
}
#dashContent {
  width: 50%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  padding: 70px 20px;
}
#dashImg {
  width: 100%;
}
.dashChildren {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
h5 {
  margin: 10px 0;
}
</style>
