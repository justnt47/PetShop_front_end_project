<template>
  <div class="container">
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <div class="row my-auto g-4 py-5 d-flex justify-content-center">
          <div class="col-6 text-center">
            <b-skeleton type="image" width="100%" height="300px" />
          </div>
          <div class="col-4">
            <b-skeleton width="80%" height="30px" />
            <b-skeleton width="100%" height="20px" class="mt-3" />
            <b-skeleton width="100%" height="20px" />
            <b-skeleton width="100%" height="20px" />
            <b-skeleton width="100%" height="20px" />
            <b-skeleton width="60%" height="20px" />
            <b-skeleton width="100%" height="50px" class="mt-5" />
          </div>
        </div>
      </template>

      <div class="row my-auto g-4 py-5 d-flex justify-content-center">
        <div class="col-6 text-center">
          <img src="" alt="Product Image" class="img-fluid" />
        </div>
        <div class="col-4">
          <h1>{{ id }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut
            ducimus amet, repellendus voluptatem laborum corrupti dolores
            dignissimos omnis magni quisquam eaque nesciunt illo nemo, fuga
            error, pariatur repellat libero!
          </p>
          <strong>Price: ฿</strong>
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block w-100 rounded-5 my-5"
          >
            เพิ่มลงตะกร้า
          </button>
        </div>
      </div>
    </b-skeleton-wrapper>
  </div>
</template>
  
  <script>
import { BSkeletonWrapper, BSkeleton } from "bootstrap-vue-3";

export default {
  name: "ProductDetailPage",
  components: {
    BSkeletonWrapper,
    BSkeleton,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: true, // Set this to false when data is loaded
    };
  },
  mounted() {
    // Simulate data loading
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>
  
  <style scoped>
/* Add any additional styling here if needed */
</style>