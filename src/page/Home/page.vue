<template>
  <div class="banner-container">
    <img
      src="@/assets/bannerPetShop1.jpg"
      class="banner-img"
      alt="Responsive image"
    />
  </div>

  <!-- Product Section -->
  <div class="container my-5">
    <div class="mx-auto text-center my-5">
      <h2 class="fw-bold my-5">"เพราะสุนัขคือครอบครัว เราจึงเลือกสิ่งที่ดีที่สุดให้เขา"</h2>
      <p class="lead my-5">-Pet Shop-</p>

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
          name: "สมาร์ทฮาร์ท Power Pack อาหารสุนัข เน้นโปรตีน ไขมันสูง สร้างกล้ามเนื้อ (10kg)",
          price: 800.0,
          image: new URL("@/assets/food1.jpg", import.meta.url).href,
        },
        {
          name: "Ruby",
          price: 20.0,
          image: new URL("@/assets/food1.jpg", import.meta.url).href,
        },
        {
          name: "Sapphire",
          price: 30.0,
          image: new URL("@/assets/food1.jpg", import.meta.url).href,
        },
        {
          name: "Topaz",
          price: 40.0,
          image: new URL("@/assets/food1.jpg", import.meta.url).href,
        },
      ],
    };
  },
};
</script>

<style scoped>
.banner-container {
  width: 100vw;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
