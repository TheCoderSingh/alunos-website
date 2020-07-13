<template>
  <div id="outMobile">
    <h4 id="mobileTitle" class="containerTitles">Mobile Apps Features</h4>
    <section id="mobile">
      <div id="mobileContent">
        <p id="subtitleApp" class="itemTitle">
          Students and host-families can now stay connected and informed with
          ALUNOS app.
        </p>
        <h5 class="mobSub">For All</h5>
        <p>
          Have a real time updated feed with all last activities, add and manage
          issues, add announcements, communicate with your agent/school and much
          more!
        </p>
        <h5 class="mobSub">Specially for students</h5>
        <p>
          Check all the details of your homestay and of the house members,
          inform your preferences and give feedback to your agent/school.
        </p>
        <h5 class="mobSub">Specially for host-families</h5>
        <p>
          Check all the information about your students, manage your rooms
          availability, add your rules, and manage details of provided meals.
        </p>
        <div id="mobileButtons">
          <p style="font-weight:bold">Comming soon:</p>
          <div class="wrapBtn">
            <img class="downloadBtn" src="../assets/googleBtn.png" />
            <img class="downloadBtn" src="../assets/appBtn.png" />
          </div>
        </div>
      </div>
      <div id="mobileImgContainer">
        <img id="mobileImg" src="../assets/mobileImg.png" />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
#outMobile {
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 80px 30px 80px;
  margin-bottom: 60px;
}
#mobileTitle {
  margin-bottom: 60px;
}
#subtitleApp {
  font-size: 22px;
}

#mobile {
  height: auto;
  display: flex;
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
.mobSub {
  font-family: "Catamaran", sans-serif;
  font-weight: 900;
  font-size: 20px;
}
.downloadBtn {
  width: 120px;
}
.wrapBtn {
  display: flex;
  align-items: center;
}
</style>
