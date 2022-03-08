<template>
  <div class="article">
    <router-link :to="{ name: 'Detail', params: { id: article.id } }">
      <h3>{{ article.title }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["article"],
};
</script>

<style>
.article a {
  display: block;
  margin: 40px 0;
  padding: 20px;
  border-left: 6px solid #eb4d4b;
  cursor: pointer;
}
.article a:hover h3 {
  color: #eb4d4b;
}
</style>
