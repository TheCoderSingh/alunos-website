<template>
  <section id="testimonials">
    <q-carousel
      id="carousel"
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      class="text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <h4>Testimonials</h4>
        <p>This is a brief description of the section</p>
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
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
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
  margin-top: 30px;
  margin-bottom: 60px;
  background-color: #1280ff;
  color: white;
}
#carousel {
  background-color: #1280ff;
  padding: 0 150px;
}
</style>
