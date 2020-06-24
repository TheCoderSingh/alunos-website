<template>
  <section id="testimonials">
    <h4>Testimonials</h4>
    <p>This is a brief description of the section</p>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="black"
      navigation
      padding
      arrows
      height="300px"
      class="bg-white text-black shadow-1 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
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
      <q-carousel-slide name="map" class="column no-wrap flex-center">
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
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #2899f3;
  color: white;
}
</style>
