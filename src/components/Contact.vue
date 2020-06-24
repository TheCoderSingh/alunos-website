<template>
  <section id="contact">
    <div id="imgContact" class="q-pa-md"></div>
    <div id="contactForm" style="max-width: 400px">
      <h4>Sign Up for Free</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <q-form @submit="onSubmit" class="form">
        <q-input
          filled
          v-model="name"
          label="Your name *"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type your name']"
        />
        <q-input
          filled
          v-model="email"
          label="Your email *"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type your email']"
        />

        <!-- <q-input
          filled
          type="textarea"
          v-model="message"
          label="Your message *"
          lazy-rules
          :rules="[
            val => (val !== null && val !== '') || 'Please type your message'
          ]"
        /> -->
        <div align="center">
          <q-btn id="mainButton" label="Submit" type="submit" />
        </div>
      </q-form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: null,
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
  padding: 30px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
#imgContact,
#contactForm {
  width: 50%;
  text-align: center;
}
.form {
  margin-top: 20px;
}
#contactForm {
  display: flex;
  flex-direction: column;
}
</style>
