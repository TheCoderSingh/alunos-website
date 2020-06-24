<template>
  <section id="team">
    <h4>Meet the Team</h4>
    <p>This is a brief description of this section</p>
    <div id="teamCards">
      <q-card class="my-card" align="center">
        <div>
          <img class="avatarImg" src="../assets/heloysa.jpg" />
        </div>
        <q-card-section class="teamCards">
          <div class="text-h6">Heloysa Tancredo</div>
          <div class="text-p">PM and Frontend Developer</div>
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
          <div class="text-h6">Heloysa Tancredo</div>
          <div class="text-p">PM and Frontend Developer</div>
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
          <div class="text-h6">Heloysa Tancredo</div>
          <div class="text-p">PM and Frontend Developer</div>
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
    </div>
    <div id="teamCards2">
      <q-card class="my-card" align="center">
        <div>
          <img class="avatarImg" src="../assets/heloysa.jpg" />
        </div>
        <q-card-section class="teamCards">
          <div class="text-h6">Heloysa Tancredo</div>
          <div class="text-p">PM and Frontend Developer</div>
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
          <div class="text-h6">Heloysa Tancredo</div>
          <div class="text-p">PM and Frontend Developer</div>
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
          <div class="text-h6">Heloysa Tancredo</div>
          <div class="text-p">PM and Frontend Developer</div>
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
          <div class="text-h6">Heloysa Tancredo</div>
          <div class="text-p">PM and Frontend Developer</div>
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
  padding: 30px 60px;
  margin-bottom: 30px;
  margin-top: 30px;
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
}
.avatarImg {
  border-radius: 50%;
  height: 75px;
}
.socialImg {
  height: 50px;
}
</style>
