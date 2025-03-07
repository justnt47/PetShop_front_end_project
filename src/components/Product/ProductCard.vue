<template>
  <div class="card text-center" style="width: 20rem">
    <img :src="image" class="card-img-top" alt="404 Not found" />
    <div class="card-body">
      <h1 class="card-title text-start fs-6 fw-bold">{{ name }}</h1>
      <p class="card-text text-start fs-6">{{ price }} ฿ THB</p>
      <div class="d-flex justify-content-end">
        <a href="#" class="btn btn-primary">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>