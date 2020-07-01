<template>
  <div id="app">
    <product-one></product-one>
    <product-two></product-two>
  </div>
</template>

<script>
import ProductOne from "./components/ProductOne.vue";
import ProductTwo from "./components/ProductTwo.vue";

export default {
  data() {
    return {};
  },
  name: "App",
  components: {
    "product-one": ProductOne,
    "product-two": ProductTwo,
  },
};
</script>

<style></style>
