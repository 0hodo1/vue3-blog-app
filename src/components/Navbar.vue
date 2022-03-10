<template>
  <nav>
    <router-link :to="{ name: 'home' }">Article List</router-link>
    <router-link :to="{ name: 'Add' }">Add Article</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
  text-transform: uppercase;
  font-size: 40px;
}

nav ul {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
nav li {
  list-style-type: none;
  margin-left: 20px;
}
nav a {
  color: #d94862;
}
nav .router-link-active {
  color: #d94862;
}
</style>
