<template>
  <div class="container-fluid p-0">
    <img
      src="@/assets/KuBanner.jpeg"
      class="img-fluid"
      alt="Responsive image"
    />
    <!-- <div class="text-center py-5">
      <div class="container">
        <div class="row align-items-center align-middle">
          <div class="col-md-6 text-start">
            <h1 class="fw-bold">
              Welcome to <span class="">KASETSART UNIVERSITY!</span>
            </h1>
            <p class="lead">QUACK on the go, wherever you are!</p>
            <button type="button" class="btn btn-warning btn-lg fw-bold">
              GET NOW
            </button>
          </div>
          <div class="col-md-6">
            <img
              src="@/assets/KuBanner.jpeg"
              class="img-fluid hero-img"
              alt="KU Banner"
            />
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <!-- Product Section -->
  <div class="container my-5">
    <div class="mx-auto text-center my-5">
      <h2 class="fw-bold my-5">"เนื้อหมาเวร"</h2>
      <p class="lead my-5">-KU Pet Shop-</p>

      <hr class="my-4 col-6 mx-auto" />
      <h2 class="fw-bold" style="margin-top: 16vh; margin-bottom: 16vh">
        สินค้าแนะนำ
      </h2>
    </div>
    <div class="row g-4">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="col-lg-3 col-md-4 col-6 d-flex justify-content-center"
      >
        <ProductCard
          :name="product.name"
          :price="product.price"
          :image="product.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../../components/Product/ProductCard.vue";

export default {
  name: "HomePage",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          name: "Emerald",
          price: 10.0,
          image: new URL("@/assets/crytal_g.png", import.meta.url).href,
        },
        {
          name: "Ruby",
          price: 20.0,
          image: new URL("@/assets/crytal_g.png", import.meta.url).href,
        },
        {
          name: "Sapphire",
          price: 30.0,
          image: new URL("@/assets/crytal_g.png", import.meta.url).href,
        },
        {
          name: "Topaz",
          price: 40.0,
          image: new URL("@/assets/crytal_g.png", import.meta.url).href,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>