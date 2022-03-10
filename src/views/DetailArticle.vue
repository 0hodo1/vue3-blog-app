<template>
  <h1 id="page-title">Detail Article</h1>
  <div v-if="errors">
    {{ errors }}
  </div>
  <div v-if="article" class="detail content">
    <h2>Article Title:{{ article.title }}</h2>
    <div class="content">
      <i>Article Content:</i>
      <p>{{ article.description }}</p>
    </div>
    <div class="content">
      <i>Article date:</i>
      <p>{{ article.createdAt }}</p>
    </div>
    <a class="delete" @click="deleteArticle">
      <span class="material-icons">close</span>
    </a>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import getArticle from "../composables/getArticle";
import { db } from "../firebase/config";

export default {
  props: ["id"],
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = ref(route.params.id);

    const { article, errors, loadArticle } = getArticle(route.params.id);
    loadArticle();

    const deleteArticle = async () => {
      await db
        .collection("articles")
        .doc(route.params.id)
        .delete()
        .then(() => {
          router.push("/");
        });
    };

    return {
      article,
      errors,
      deleteArticle,
    };
  },
};
</script>

<style>
.detail {
  position: relative;
}
.content {
  margin: 30px;
  border: 2px solid #bdbebf;
  padding: 10px;
  border-radius: 10px;
}
.delete {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
}
#page-title {
  text-align: center;
  margin: 60px 0;
}
</style>
