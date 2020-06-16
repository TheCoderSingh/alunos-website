<template>
  <header>
    <nav>
      <ul>
        <li><a href="#" v-scroll-to="'#features'">Features</a></li>
        <li><a href="#" v-scroll-to="'#team'">Team</a></li>
        <li><a href="#" v-scroll-to="'#pricing'">Pricing</a></li>
        <button>Free Trial</button>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 50px;
  border: 1px solid black;
  padding: 0 15px;
}
nav {
  height: inherit;
}
ul {
  display: flex;
  justify-content: flex-end;
  height: inherit;
  align-items: center;
}

li {
  list-style: none;
  margin: 0 20px;
}
</style>
