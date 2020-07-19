<template>
  <section id="testimonials">
    <q-carousel
      id="carousel"
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      control-color="white"
      navigation
      padding
      arrows
      class="text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide
        name="style"
        class="column no-wrap flex-center"
        id="carouselId"
      >
        <h4 class="containerTitles" style="padding-top:60px">Testimonials</h4>
        <p style="padding-bottom: 30px; font-weight:bold; text-align: center">
          What companies, students and host-families say about this project
        </p>
        <div>
          <img class="avatarImg" src="../assets/woman.png" />
        </div>
        <div class="q-mt-md text-center">
          "This industry really needs something like that, everything is going
          in paper. Your application is covering all the departments: providers,
          students and families. This solution is a must in this city and this
          country, I am happy someone is working on that"
          <br />
          <p style="font-style:italic">
            &ndash;Homestay Agency Coordinator - picture and name preserved
          </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="tv"
        class="column no-wrap flex-center"
        id="carouselId"
      >
        <h4 class="containerTitles" style="padding-top:60px">Testimonials</h4>
        <p style="padding-bottom: 30px; font-weight:bold; text-align: center">
          What companies, students and host-families say about this project
        </p>
        <div>
          <img class="avatarImg" src="https://cdn.quasar.dev/img/avatar.png" />
        </div>
        <div class="q-mt-md text-center">
          "Since the begging the whole process was confuse...lots of forms,
          emails, messages. I received only a few photos of the family and basic
          information. My expectations were different, I knew almost nothing
          about the people in the house, and communication was always a problem.
          I really like the idea of this app, it could have helped me a lot."
          <br />
          <p style="font-style:italic">
            &ndash;Hosted Student - picture and name preserved
          </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="layers"
        class="column no-wrap flex-center"
        id="carouselId"
      >
        <h4 class="containerTitles" style="padding-top:60px">Testimonials</h4>
        <p style="padding-bottom: 30px; font-weight:bold; text-align: center">
          What companies, students and host-families say about this project
        </p>
        <div>
          <img class="avatarImg" src="https://cdn.quasar.dev/img/avatar.png" />
        </div>
        <div class="q-mt-md text-center">
          "It is really important for me to feel comfortable with my new family
          and to learn about the country culture as much as possible. I would
          like to have a good communication with the people in the house and be
          able to quickly reach my agency in case of problems."
          <br />
          <p style="font-style:italic">
            &ndash;Student - Looking for a homestay - picture and name preserved
          </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="map"
        class="column no-wrap flex-center"
        id="carouselId"
      >
        <h4 class="containerTitles" style="padding-top:60px">Testimonials</h4>
        <p style="padding-bottom: 30px; font-weight:bold; text-align: center">
          What companies, students and host-families say about this project
        </p>
        <div>
          <img class="avatarImg" src="https://cdn.quasar.dev/img/avatar.png" />
        </div>
        <div class="q-mt-md text-center">
          "Sometimes the student profile doesn't match with our family, so it
          would be very nice if the matching process was improved. It sounds
          great to have tool to better manage my homestay and to access all
          information about my students."
          <br />
          <p style="font-style:italic">
            &ndash;Host-family - picture and name preserved
          </p>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: "style"
    };
  }
};
</script>

<style>
#testimonials {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  background-color: #1280ff;
  color: white;
}
#carousel {
  background-color: #1280ff;
  padding: 0 150px;
  height: auto;
  padding-bottom: 60px;
}
.q-carousel__navigation-inner {
  margin-bottom: 50px;
}
</style>
