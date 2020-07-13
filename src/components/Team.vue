<template>
  <section id="team">
    <h4 class="containerTitles">Meet the Team</h4>
    <img id="logoPegasus" src="../assets/logo_pegasus.png" />
    <div id="teamCards">
      <q-card class="my-card" align="center">
        <div>
          <img class="avatarImg" src="../assets/heloysa.jpg" />
        </div>
        <q-card-section class="teamCards">
          <div class="text-h6" style="font-weight:bold">Heloysa Tancredo</div>
          <div class="text-p">PM and Frontend Developer</div>
        </q-card-section>
        <q-card-actions align="evenly">
          <a href="https://www.linkedin.com/in/heloysa-tancredo/"
            ><img class="socialImg" src="../../public/linkedin.png"
          /></a>
          <a href="https://github.com/heloysatancredo"
            ><img class="socialImg" src="../../public/github.png"
          /></a>
        </q-card-actions>
      </q-card>
      <q-card class="my-card" align="center">
        <div>
          <img class="avatarImg" src="../assets/alex.png" />
        </div>
        <q-card-section class="teamCards">
          <div class="text-h6" style="font-weight:bold">Alexander Vasilyev</div>
          <div class="text-p">UX/UI Designer</div>
        </q-card-section>
        <q-card-actions align="evenly">
          <a href="https://www.linkedin.com/in/alexander-vasilyev-web/"
            ><img class="socialImg" src="../../public/linkedin.png"
          /></a>
          <a href="https://www.google.com"
            ><img class="socialImg" src="../../public/github.png"
          /></a>
        </q-card-actions>
      </q-card>
      <q-card class="my-card" align="center">
        <div>
          <img class="avatarImg" src="../assets/param.png" />
        </div>
        <q-card-section class="teamCards">
          <div class="text-h6" style="font-weight:bold">Parminder Kaur</div>
          <div class="text-p">UX/UI Designer</div>
        </q-card-section>
        <q-card-actions align="evenly">
          <a href="https://www.linkedin.com/in/parminder-kaur-433939a0/"
            ><img class="socialImg" src="../../public/linkedin.png"
          /></a>
          <a href="https://www.google.com"
            ><img class="socialImg" src="../../public/github.png"
          /></a>
        </q-card-actions>
      </q-card>
    </div>
    <div id="teamCards2">
      <q-card class="my-card" align="center">
        <div>
          <img class="avatarImg" src="../assets/walter.png" />
        </div>
        <q-card-section class="teamCards">
          <div class="text-h6" style="font-weight:bold">Walter Galvão</div>
          <div class="text-p">Full Stack Lead Developer</div>
        </q-card-section>
        <q-card-actions align="evenly">
          <a href="https://www.linkedin.com/in/wbgneto/"
            ><img class="socialImg" src="../../public/linkedin.png"
          /></a>
          <a href="https://github.com/wbgneto"
            ><img class="socialImg" src="../../public/github.png"
          /></a>
        </q-card-actions>
      </q-card>
      <q-card class="my-card" align="center">
        <div>
          <img class="avatarImg" src="../assets/zeinab.png" />
        </div>
        <q-card-section class="teamCards">
          <div class="text-h6" style="font-weight:bold">Zeinab Ahmadi</div>
          <div class="text-p">Frontend Developer</div>
        </q-card-section>
        <q-card-actions align="evenly">
          <a href="https://www.linkedin.com/in/nazaninahmadi/"
            ><img class="socialImg" src="../../public/linkedin.png"
          /></a>
          <a href="https://github.com/NazaninAhmadii"
            ><img class="socialImg" src="../../public/github.png"
          /></a>
        </q-card-actions>
      </q-card>
      <q-card class="my-card" align="center">
        <div>
          <img class="avatarImg" src="../assets/jyot.png" />
        </div>
        <q-card-section class="teamCards">
          <div class="text-h6" style="font-weight:bold">Jyot Sarup Kaur</div>
          <div class="text-p">Frontend Developer</div>
        </q-card-section>
        <q-card-actions align="evenly">
          <a href="https://www.google.com"
            ><img class="socialImg" src="../../public/linkedin.png"
          /></a>
          <a href="https://www.google.com"
            ><img class="socialImg" src="../../public/github.png"
          /></a>
        </q-card-actions>
      </q-card>
      <q-card class="my-card" align="center">
        <div>
          <img class="avatarImg" src="../assets/heloysa.jpg" />
        </div>
        <q-card-section class="teamCards">
          <div class="text-h6" style="font-weight:bold">Jaskaran Singh</div>
          <div class="text-p">Frontend Developer</div>
        </q-card-section>
        <q-card-actions align="evenly">
          <a href="https://www.linkedin.com/in/thecodersingh/"
            ><img class="socialImg" src="../../public/linkedin.png"
          /></a>
          <a href="https://github.com/TheCoderSingh"
            ><img class="socialImg" src="../../public/github.png"
          /></a>
        </q-card-actions>
      </q-card>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#team {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px 30px 80px;
  margin-bottom: 60px;
}
#teamCards {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  margin: 30px auto;
}
#teamCards2 {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
}
.teamCards {
  text-align: center;
}
.my-card {
  padding: 10px 0;
  width: 100%;
}
.avatarImg {
  border-radius: 50%;
  height: 75px;
}
.socialImg {
  height: 50px;
}
#logoPegasus {
  height: 60px;
}
</style>
