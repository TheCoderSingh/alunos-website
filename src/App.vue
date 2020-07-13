<template>
  <div id="wrap">
    <Nav />
    <Promotion />
    <Features />
    <Dashboard />
    <Mobile />
    <Testimonials />
    <Pricing />
    <Contact />
    <Team />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Mobile from "./components/Mobile";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Promotion from "./components/Promotion";
import Dashboard from "./components/Dashboard";

export default {
  components: {
    Nav,
    Promotion,
    Features,
    Mobile,
    Testimonials,
    Team,
    Pricing,
    Contact,
    Footer,
    Dashboard
  }
};
</script>

<style>
#wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  max-width: 1366px;
  font-family: "Montserrat", sans-serif;
}
</style>
