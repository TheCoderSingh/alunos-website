<template>
  <footer>
    <div id="footerWrap">
      <div id="about">
        <h6>About us</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
      </div>
      <div id="secondSection">
        <img id="logoPegasus" src="../assets/logo_pegasus.png" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  padding: 30px 60px;
  margin: 30px 60px;
}
#about {
  width: 50%;
}
#secondSection {
  width: 50%;
  text-align: center;
}
#logoPegasus {
  height: 100px;
}
#footerWrap {
  display: flex;
  align-items: center;
}
</style>
