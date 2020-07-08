<template>
  <header>
    <nav>
      <div>
        <img id="logo" src="../assets/logo_alunos.png" />
      </div>
      <q-tabs v-model="tab" inline-label>
        <q-tab
          name="features"
          label="Features"
          v-scroll-to="'#outDash'"
          class="menuItems"
        />
        <q-tab
          name="team"
          label="Team"
          v-scroll-to="'#team'"
          class="menuItems"
        />
        <q-tab
          name="pricing"
          label="Pricing"
          v-scroll-to="'#pricing'"
          class="menuItems"
        />
      </q-tabs>
      <q-btn
        type="a"
        rounded
        id="signButton"
        style="background: white; color: #FF2681"
        label="Sign In"
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
  padding: 20px 60px;
}
#logo {
  height: 40px;
}
#signButton {
  width: 100px;
}
.menuItems {
  text-transform: capitalize;
  font-weight: bold;
  color: white;
}
</style>
