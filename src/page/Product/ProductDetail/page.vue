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
        <!-- <pre>this is pre{{ product }}</pre> -->
        <div class="col-6 text-center">
          <img
            :src="
              product.product_image
                ? `data:image/png;base64,${product.product_image}`
                : 'https://via.placeholder.com/150'
            "
            alt="Product Image"
            class="img-fluid"
            style="max-height: 60vh; min-height: 60vh"
          />
        </div>
        <div class="col-4">
          <h1>{{ product.product_name }}</h1>
          <p>{{ product.product_detail }}</p>
          <strong>Price: ฿{{ product.product_price }}</strong>
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
import { ref } from "vue";
import { BSkeletonWrapper, BSkeleton } from "bootstrap-vue-3";

export default {
  name: "ProductDetailPage",
  components: {
    BSkeletonWrapper,
    BSkeleton,
  },
  data() {
    return {
      loading: true,
      product: null, // ตั้งค่าเป็น null ก่อน
      originalProducts: [], // เก็บข้อมูลจาก cache
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        let cacheKey = "productsCache";
        let cachedData = localStorage.getItem(cacheKey);

        if (cachedData) {
          this.originalProducts = JSON.parse(cachedData);
        }

        // ดึงค่า id จาก route params
        let productId = this.$route.params.id;
        console.log(`productId = ${productId}`);

        // ค้นหาสินค้าใน cache
        let foundProduct = this.originalProducts.find(
          (product) => product.product_id == parseInt(productId)
        );

        if (foundProduct) {
          this.product = foundProduct;
        } else {
          console.error("Product not found in cache");
        }

        if (foundProduct) {
          this.product = foundProduct;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        } else {
          console.error("Product not found in cache");
          // Redirect to Not Found page
          this.$router.push({ name: "NotFound" });
        }
      } catch (error) {
        console.log("Error fetching data from cache:", error);
      }
    },
  },
};
</script>

  
<style scoped>
/* Add any additional styling here if needed */
</style>