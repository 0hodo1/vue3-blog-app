import { ref } from "vue";
import { db } from "../firebase/config";

const getArticles = () => {
  const articles = ref([]);
  const errors = ref(null);

  const loadArticle = async () => {
    try {
      let res = await db
        .collection("articles")
        .orderBy("createdAt", "desc")
        .get();

      articles.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (error) {
      errors.value = error.message;
    }
  };

  return { articles, errors, loadArticle };
};

export default getArticles;
