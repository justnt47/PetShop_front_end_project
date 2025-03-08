<template>
  <div class="card text-center" style="width: 20rem">
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-skeleton type="image" width="100%" height="180px" />
        <b-card
          style="border-top-left-radius: 0px; border-top-right-radius: 0px"
        >
          <b-skeleton width="80%" />
          <b-skeleton width="60%" />
          <div class="d-flex justify-content-end mt-3">
            <b-skeleton width="40%" height="30px" />
          </div>
        </b-card>
      </template>

      <img :src="image" class="card-img-top" alt="404 Not found" />
      <div class="card-body">
        <h1 class="card-title text-start fs-6 fw-bold">{{ name }}</h1>
        <p class="card-text text-start fs-6">{{ price }} ฿ THB</p>
        <div class="d-flex justify-content-end">
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    </b-skeleton-wrapper>
  </div>
</template>

<script>
import {
  BCard,
  BSkeletonWrapper,
  BCardBody,
  BCardTitle,
  BCardText,
  BButton,
  BImg,
} from "bootstrap-vue-3";

export default {
  name: "ProductCard",
  components: {
    BCard,
    BSkeletonWrapper,
    BCardBody,
    BCardTitle,
    BCardText,
    BButton,
    BImg,
  },
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
</style>