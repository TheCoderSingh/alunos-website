import Vue from "vue";

import "./styles/quasar.scss";
import "@quasar/extras/material-icons/material-icons.css";
import { Quasar } from "quasar";

Vue.use(Quasar, {
  config: {},
  components: [
    "QList",
    "QCard",
    "QTab",
    "QTabs",
    "QBtn",
    "QCardSection",
    "QAvatar",
    "QIcon",
    "QCarousel",
    "QCarouselSlide",
    "QSlide",
    "QSeparator",
    "QForm",
    "QInput"
  ],
  directives: {
    /* not needed if importStrategy is not 'manual' */
  },
  plugins: {}
});
