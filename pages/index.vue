<template>
  <div id="wrap">
    <Nav />
    <Promotion />
    <Features />
    <Dashboard />
    <Mobile />
    <Testimonials />
    <Team />
    <Pricing />
    <Contact />
    <Footer />
    <nuxt />
  </div>
</template>

<script>
import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import Promotion from "../components/promotion";
import Features from "../components/features";
import Dashboard from "../components/dashboard";
import Mobile from "../components/mobile";
import Testimonials from "../components/testimonials";
import Team from "../components/team";
import Pricing from "../components/pricing";
import Contact from "../components/contact";

export default {
  components: {
    Nav,
    Promotion,
    Features,
    Dashboard,
    Mobile,
    Testimonials,
    Team,
    Pricing,
    Contact,
    Footer
  }
};
</script>

<style>
#wrap {
  padding: 20px;
}
</style>
