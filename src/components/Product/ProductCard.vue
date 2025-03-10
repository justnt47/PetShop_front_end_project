<template>
  <router-link
    :to="{ name: 'ProductDetailPage', params: { id: name } }"
    class="custom-card text-center"
    style="width: 20rem"
  >
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-skeleton type="image" width="100%" height="180px" />
        <div class="mt-3">
          <b-skeleton width="80%" />
          <b-skeleton width="60%" />
        </div>
      </template>
      <img :src="image" class="card-img-top" alt="404 Not found" />
      <div class="card-body">
        <h1 class="card-title text-start fs-6 fw-bold mt-3">{{ name }}</h1>
        <p class="card-text text-start fs-6">{{ price }} ฿ THB</p>
        <!-- <div class="d-flex justify-content-end">
          <a
            href="/Products/Detail/{{ name }}"
            class="stretched-link"
            @click="handleCardClick"
          ></a>
        </div> -->
      </div>
    </b-skeleton-wrapper>
  </router-link>
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

  methods: {
    handleCardClick() {
      console.log(`Product Name: ${this.name}`);
      console.log(`Product Price: ${this.price} ฿ THB`);
      console.log(`Product Image: ${this.image}`);
    },
  },
};
</script>

<style scoped>
.custom-card {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
</style>