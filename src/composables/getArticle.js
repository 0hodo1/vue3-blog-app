import { ref } from "vue";
import { db } from "../firebase/config";
import moment from "moment";

const getArticle = (id) => {
  const article = ref(null);
  const errors = ref(null);

  const loadArticle = async () => {
    try {
      let res = await db.collection("articles").doc(id).get();
      if (!res.exists) {
        throw new Error("Article not found");
      }
      const date = res.data().createdAt.toDate();
      const formatDate = moment(date).locale("tr").format("LLLL");
      article.value = { ...res.data(), id: res.id, createdAt: formatDate };
    } catch (error) {
      errors.value = error.message;
    }
  };

  return { article, errors, loadArticle };
};

export default getArticle;
