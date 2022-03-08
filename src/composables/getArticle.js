import { ref } from "vue";
import { db } from "../firebase/config";

const getArticle = (id) => {
  const article = ref(null);
  const errors = ref(null);

  const getArticle = async () => {
    try {
      let res = await db.collection("articles").doc(id).get();
      if (!res.exists) {
        throw new Error("Article not found");
      }
      article.value = { ...res.data(), id: res.id };
    } catch (error) {
      errors.value = error.message;
    }
  };

  return { article, errors, getArticle };
};

export default getArticle;
