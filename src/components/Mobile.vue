<template>
  <div id="outMobile">
    <h5 id="mobileTitle">Mobile Apps Features</h5>
    <section id="mobile">
      <div id="mobileContent">
        <p id="subtitleApp">
          Students and host-families can now stay connected and informed with
          ALUNOS app.
        </p>
        <h5>For All</h5>
        <p>
          Have a real time updated feed with all last activities, add and manage
          issues, add announcements, communicate with your agent/school and much
          more!
        </p>
        <h5>Specially for students</h5>
        <p>
          Check all the details of your homestay and of the house members,
          inform your preferences and give feedback to your agent/school.
        </p>
        <h5>Specially for host-families</h5>
        <p>
          Check all the information about your students, manage your rooms
          availability, add your rules, and manage details of provided meals.
        </p>
        <div id="mobileButtons">
          <button>GOOGLE PLAY</button>
          <button>APP STORE</button>
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
  padding: 30px 60px;
  margin-top: 30px;
  margin-bottom: 30px;
}
#mobileTitle {
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}
#subtitleApp {
  font-weight: bold;
  font-size: 20px;
}
#mobileButtons {
  display: flex;
  margin: auto 0;
}
#mobile {
  height: auto;
  display: flex;
  /* padding: 30px 60px;
  margin-top: 30px;
  margin-bottom: 30px; */
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
