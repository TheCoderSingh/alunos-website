<template>
  <div>
    <footer>
      <div id="footerWrap">
        <div id="footerButtons">
          <div class="schools">
            <h6 class="itemTitle" style="text-align:center">
              FOR SCHOOLS/AGENCIES
            </h6>
            <q-btn
              class="priceBtn"
              rounded
              id="secButton"
              v-scroll-to="'#contact'"
              no-caps
              style="width: 230px;"
              >Start free trial</q-btn
            >
          </div>
          <div class="schools" style="text-align:center">
            <h6 class="itemTitle">FOR STUDENTS</h6>
            <div>
              <img class="downloadBtn" src="../assets/googleBtn.png" /><br />
              <img class="downloadBtn" src="../assets/appBtn.png" />
            </div>
          </div>
          <div class="schools">
            <h6 class="itemTitle" style="text-align:center">FOR FAMILIES</h6>
            <q-btn
              class="priceBtn"
              rounded
              id="secButton"
              v-scroll-to="'#contact'"
              no-caps
              style="width: 230px;"
              >Learn more</q-btn
            >
          </div>
        </div>
        <div id="footerContent">
          <div class="about" id="div1">
            <h6 class="itemTitle">About us</h6>
            <p>
              ALUNOS is a solution created by a team of five developers and two
              designers - Team Pegasus, for the Capstone Project of the Web and
              Mobile App Design and Development program in Langara College.
            </p>
            <div id="copy">
              &copy; 2020
              <img id="logo2" src="../assets/alunos_logo.png" />
            </div>
          </div>
          <div class="about" id="div2">
            <h6 class="itemTitle">Download Brochure (pdf)</h6>
            <p>
              Know all the details of our solution.
            </p>
            <q-form @submit.prevent="download" class="form">
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
                />
              </div>
              <q-input class="hidden"></q-input>
              <div align="center" style="width:30%; margin-left: -30px;">
                <q-btn
                  type="submit"
                  class="priceBtn"
                  rounded
                  id="secButton"
                  label="Download"
                  no-caps
                  style="width:100%"
                />
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  data() {
    return {
      email: null,
      url:
        "https://images.unsplash.com/photo-1594976382948-12e3439721b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
    };
  },

  methods: {
    forceFileDownload(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.png"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    download: function() {
      axios({
        method: "get",
        url: this.url,
        responseType: "arraybuffer"
      })
        .then(response => {
          this.forceFileDownload(response);
        })
        .catch(() => console.log("error occured"));
    }
  }
};
</script>

<style>
footer {
  padding: 30px 80px;
  margin-top: 30px;
  background-color: lightgray;
}
.about {
  width: 50%;
}
#secondSection {
  width: 50%;
  text-align: center;
}
#logo2 {
  height: 40px;
  margin-left: 10px;
}
#footerWrap {
  display: flex;
  align-items: center;
  flex-direction: column;
}
#footerButtons {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
#copy {
  display: flex;
  align-items: center;
}
#footerContent {
  width: 100%;
  display: flex;
  margin-top: 40px;
}
#div1 {
  margin-right: 30px;
}
#div2 {
  margin-left: 30px;
}
.hidden {
  display: none;
  height: 0;
  width: 0;
}
</style>
