<template>
  <div class="home">
    <div class="" v-if="errors">{{ errors }}</div>
    <div v-else-if="articles.length">
      <ArticleList :articles="articles" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleList from "../components/ArticleList.vue";
import getArticles from "../composables/getArticles";

export default {
  name: "HomeView",
  components: {
    ArticleList,
  },
  setup() {
    const { articles, errors, loadArticle } = getArticles();

    loadArticle();

    return { articles, errors };
  },
};
</script>
