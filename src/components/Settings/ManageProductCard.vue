<template>
  <div :key="product.id" class="card p-3 mb-3">
    <div class="row">
      <div class="col-md-3">
        <img :src="product.image" alt="Product Image" />
      </div>
      <div class="col-md-9 text-start">
        <h5>{{ product.name }}</h5>
        <p>Price: ${{ product.price }}</p>
      </div>
      <div class="d-flex justify-content-end gap-2">
        <button
          type="button"
          class="btn btn-primary"
          @click="editProduct(product.id)"
        >
          <i class="bi bi-pencil-square"></i>
          Edit
        </button>
        <button
          type="button"
          class="btn btn-danger"
          @click="deleteProduct(product.id)"
        >
          <i class="bi bi-trash"></i>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ManageProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editProduct(id) {
      console.log("Edit product with id:", id);
    },
    deleteProduct(id) {
      console.log("Delete product with id:", id);
    },
  },
};
</script>
  
<style>
</style>