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
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <h4 class="containerTitles" style="padding-top:60px">Testimonials</h4>
        <p style="padding-bottom: 30px; font-weight:bold">
          What companies, students and host-families said about this project
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
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <h4 class="containerTitles" style="padding-top:60px">Testimonials</h4>
        <p style="padding-bottom: 30px; font-weight:bold">
          What companies, students and host-families said about this project
        </p>
        <div>
          <img class="avatarImg" src="https://cdn.quasar.dev/img/avatar.png" />
        </div>
        <div class="q-mt-md text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <h4 class="containerTitles" style="padding-top:60px">Testimonials</h4>
        <p style="padding-bottom: 30px; font-weight:bold">
          What companies, students and host-families said about this project
        </p>
        <div>
          <img class="avatarImg" src="https://cdn.quasar.dev/img/avatar.png" />
        </div>
        <div class="q-mt-md text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
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
