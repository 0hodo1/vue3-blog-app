<template>
  <div class="add-article">
    <form @submit.prevent="addArticle">
      <label>Title:</label>
      <input type="text" id="title" v-model="title" name="title" required />
      <label>Description:</label>
      <textarea
        id="description"
        v-model="description"
        name="description"
        required
      />
      <button>Add Article</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { db, timestamp } from "../firebase/config";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const description = ref("");

    const router = useRouter();

    const addArticle = async () => {
      const article = {
        title: title.value,
        description: description.value,
        createdAt: timestamp(),
      };
      const res = await db
        .collection("articles")
        .add(article)
        .then(() => {
          router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      title,
      description,
      addArticle,
    };
  },
};
</script>

<style>
.add-article form {
  max-width: 400px;
  margin: 0 auto;
}
.add-article input,
.add-article textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
.add-article label {
  display: block;
  margin-top: 24px;
}
text-area {
  height: 120px;
}
.add-article button {
  display: block;
  margin: 20px auto;
  padding: 10px;
  border: none;
  background: #eb4d4b;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.add-article button:hover {
  background: #d15656;
}
</style>
