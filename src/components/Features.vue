<template>
  <section id="features">
    <div id="title">
      <h5 id="textTitle">
        Match students with homestays and improve the communication between
        students and host-families, making the experience more satisfying for
        all parties.
      </h5>
    </div>
    <img id="laptop" src="../assets/laptop.png" />
    <div id="featuresContent">
      <div class="featureItem">
        <h6>Web Dashboard</h6>
        <p>
          ALUNOS Web Dashboard helps homestay coordinators to manage students
          and homestays, and keep track of all necessary information.
        </p>
      </div>
      <div class="featureItem">
        <h6>Student App</h6>
        <p>
          ALUNOS Student App offers a modern and friendly interface through
          which students can easily communicate with their homestay and have
          access to information useful to their stay.
        </p>
      </div>
      <div class="featureItem">
        <h6>Homestay App</h6>
        <p>
          ALUNOS Homestay app offers a simple tool for homestays to manage their
          accommodation and quickly communicate with students and homestay
          coordinators.
        </p>
      </div>
      <div class="featureItem">
        <h6>Connecting all parties</h6>
        <p>
          Both mobile apps are connected to the homestay coordinators dashboard,
          and all parties can send and receive information in a fast and safe
          way.
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
  margin-top: 185px;
  margin-bottom: 30px;
}
#title {
  margin: 0px auto 30px auto;
  width: 65%;
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
