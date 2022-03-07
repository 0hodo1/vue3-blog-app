<template>
  <div class="article-list">
    <div v-for="article in articles" :key="article.id">
      <Article :article="article" />
    </div>
  </div>
</template>

<script>
import Article from "./Article.vue";
export default {
  props: ["articles"],
  components: {
    Article,
  },
  setup(props) {},
};
</script>

<style>
.article-list {
  margin-left: 120px !important;
}
</style>
