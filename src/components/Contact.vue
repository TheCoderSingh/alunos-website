<template>
  <section id="contact">
    <div id="imgContact">
      <img id="formImg" src="../assets/formImg.png" />
    </div>
    <div id="formContainer">
      <div id="contactForm">
        <h4 class="containerTitles">Sign Up for Free</h4>
        <p id="formSub">
          Start today to use ALUNOS! Sign-up and enjoy 30 days free or contact
          us for more information about our platform.
        </p>
        <q-form v-on:submit.prevent="onSubmit" @submit.prevent class="form">
          <div style="width:75%">
            <q-input
              rounded
              outlined
              v-model="email"
              placeholder="Email"
              bg-color="white"
              lazy-rules
              required
              style="width:100%"
              :rules="[
                val => (val && val.length > 0) || 'Please type your email'
              ]"
            />
          </div>
          <div align="center" style="width:30%; margin-left: -30px;">
            <q-btn
              class="priceBtn"
              rounded
              id="secButton"
              label="Submit"
              type="submit"
              no-caps
              style="width:100%"
            />
          </div>
        </q-form>
        <div :class="{ show: submitted }">Thank you for your contact!</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      accept: false,
      submitted: false
    };
  },

  methods: {
    onSubmit: function() {
      this.submitted = true;
    }
  }
};
</script>

<style>
#contact {
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 90px;
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
  margin: auto;
  padding: 0 60px;
}
#formImg {
  width: 100%;
}
.form {
  margin-top: 20px;
  display: flex;
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
.q-field__control {
  height: 36px !important;
}
.show {
  display: block;
  color: black;
  font-size: 18px;
}
</style>
