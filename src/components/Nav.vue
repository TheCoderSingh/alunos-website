<template>
  <header>
    <nav>
      <div>
        <img id="logo" src="../assets/logo_alunos.png" />
      </div>
      <q-tabs inline-label>
        <q-tab name="features" v-scroll-to="'#outDash'" class="menuItems"
          >Features</q-tab
        >
        <q-tab name="pricing" v-scroll-to="'#pricing'" class="menuItems"
          >Pricing</q-tab
        >
        <q-tab name="team" v-scroll-to="'#team'" class="menuItems">Team</q-tab>
      </q-tabs>
      <q-btn
        type="a"
        rounded
        id="signButton"
        style="background: white; color: #FF2681"
        label="Login"
        href="http://langara.alunos.ca"
      />
    </nav>
  </header>
</template>

<script>
import { openURL } from "quasar";
export default {};
</script>

<style scoped>
header {
  height: 50px;
  background-image: url("../assets/alunos_01.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  padding-bottom: 825px;
  margin-bottom: -755px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px 80px 20px 70px;
}
#logo {
  height: 40px;
}
#signButton {
  width: 120px;
  text-transform: capitalize;
  font-family: "Catamaran", sans-serif;
  font-weight: 700;
}
.menuItems {
  text-transform: capitalize;
  font-family: "Catamaran", sans-serif;
  font-weight: 800;
  color: white;
}
</style>
