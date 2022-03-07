<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Hubballi&display=swap");

body {
  max-width: 1200px;
  margin: 20px auto;
  font-family: "Hubballi", cursive;
  font-size: 25px;
  background-color: #fafafa;
}

p,
h1,
h2,
h3,
a,
ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #333;
}

h2 {
  margin-bottom: 40px;
}
h3 {
  text-transform: capitalize;
  margin-bottom: 8px;
}
</style>
