<template>
  <div class="article">
    <router-link :to="{ name: 'Detail', params: { id: article.id } }">
      <h3>{{ article.title }}</h3>
      <h5>{{ article.description.substr(0, 100) }}...</h5>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["article"],
};
</script>

<style scoped>
.article a {
  display: block;
  margin: 40px 0;
  padding: 20px;
  border-left: 14px solid #d94862;
  cursor: pointer;
}
.article a:hover h3 {
  color: #d94862;
}
.article a h5 {
  font-size: 16px;
}
</style>
