<template>
  <div class="container">
    <h2 class="pb-3">Manage Product</h2>
    <form @submit.prevent="submitForm">
      <div class="row py-3">
        <div class="col-md-3">
          <label class="form-label invisible">Hidden Label</label>
          <input
            class="form-control"
            type="text"
            v-model="productName"
            placeholder="ชื่อสินค้า/รหัสสินค้า"
            aria-label="default input example"
          />
        </div>
        <div class="col-md-2">
          <label for="productType" class="form-label">ประเภทสินค้า</label>
          <select
            id="productType"
            class="form-select"
            v-model="productType"
            aria-label="Small select example"
          >
            <option value="" selected>กรุณาเลือก</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="productBrand" class="form-label">แบรนด์</label>
          <select
            id="productBrand"
            class="form-select"
            v-model="productBrand"
            aria-label="Small select example"
          >
            <option value="" selected>กรุณาเลือก</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-md-1 d-flex align-items-end">
          <button
            type="button"
            class="btn btn-secondary w-100"
            @click="resetForm"
          >
            Reset
          </button>
        </div>
        <div class="col d-flex align-items-end justify-content-end">
          <button type="submit" class="btn btn-primary">
            <i class="bi bi-plus-circle"></i>
            Add Product
          </button>
        </div>
      </div>
    </form>
    <div
      class="card-body overflow-auto"
      style="max-height: 100vh; padding-left: 0px"
    >
      <div v-for="product in products" :key="product.id">
        <ManageProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ManageProductCard from "../../components/Settings/ManageProductCard.vue";

export default {
  name: "MangeProductPage",
  components: { ManageProductCard },
  data() {
    return {
      products: ref([
        {
          id: 1,
          name: "Dog Food",
          price: 200,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Cat Toy",
          price: 150,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Bird Cage",
          price: 500,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          name: "Bird Cage",
          price: 500,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 5,
          name: "Bird Cage",
          price: 500,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 6,
          name: "Bird Cage",
          price: 500,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 7,
          name: "Bird Cage",
          price: 500,
          image: "https://via.placeholder.com/150",
        },
      ]),
      productName: "",
      productType: "",
      productBrand: "",
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log("Form submitted with:", {
        productName: this.productName,
        productType: this.productType,
        productBrand: this.productBrand,
      });

      // Reset form fields after submission
      this.resetForm();
    },
    resetForm() {
      this.productName = "";
      this.productType = "";
      this.productBrand = "";
    },
  },
};
</script>

<style>
</style>