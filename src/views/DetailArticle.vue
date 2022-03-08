<template>
  <h1>Detail Article</h1>
  <p>{{ id }}</p>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  //   props: ["id"],
  setup() {
    const route = useRoute();
    const id = ref(route.params.id);
    return {
      id,
    };
  },
};
</script>

<style></style>
