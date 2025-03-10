<template>
  <div class="container">
    <h1>This is Product Detail Page</h1>
    <p>{{ this.id }}</p>
    <!-- Add cart details here -->
  </div>
</template>

<script>
export default {
  name: "ProductDetailPage",

  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>