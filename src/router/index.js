import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddArticle from "../views/AddArticle.vue";
import DetailArticle from "../views/DetailArticle.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "Add",
    component: AddArticle,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: DetailArticle,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
