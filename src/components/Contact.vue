<template>
  <section id="contact">
    <div id="imgContact">
      <img id="formImg" src="../assets/formImg.png" />
    </div>
    <div id="formContainer">
      <div id="contactForm" style="max-width: 400px">
        <h4>Sign Up for Free</h4>
        <p id="formSub">
          Start today to use ALUNOS! Sign-up and use our solution free for 30
          days.
        </p>
        <q-form @submit="onSubmit" class="form">
          <q-input
            rounded
            outlined
            v-model="email"
            label="Email"
            bg-color="white"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || 'Please type your email'
            ]"
          />
          <div align="center">
            <q-btn
              style="background: #1280ff; color: white"
              rounded
              id="mainButton"
              label="Submit"
              type="submit"
            />
          </div>
        </q-form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      accept: false
    };
  },

  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted"
      });
    }
  }
};
</script>

<style>
#contact {
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: lightgray;
  font-size: 0;
}
#imgContact {
  width: 50%;
  text-align: center;
}
#contactForm {
  width: 100%;
  text-align: center;
  max-width: 400px;
  margin: auto;
}
#formImg {
  width: 100%;
}
.form {
  margin-top: 20px;
}
#contactForm {
  display: flex;
  flex-direction: column;
}
#formContainer {
  width: 50%;
}
#inputForm {
  background-color: white;
}
#formSub {
  font-size: 16px;
}
</style>
