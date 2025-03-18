<template>
  <div class="container">


  <form @submit.prevent="submitForm">
      <div class="row py-3">
        <div class="col-md-3">
          <label for="productType" class="form-label">ชื่อสินค้า</label>
          <input
            class="form-control"
            type="text"
            v-model="productName"
            placeholder="กรุณาใส่ชื่อสินค้า"
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
            <option value="1">อาหารสุนัข</option>
            <option value="2">ขนม</option>
            <option value="3">อุปกรณ์</option>
            <option value="4">ของเล่น</option>
            <option value="5">กรง ที่นอน</option>
            <option value="6">ผลิตภัณฑ์ทำความสะอาด</option>
            <option value="7">ปลอกคอ สายจูง</option>
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
        
      </div>
    </form>
  </div>
</template>


<script>
import {ref} from "vue"

export default {
  name: "ProductPage",
  data(){
    return {
      productType: ref("")}
  }
};
</script>

<style>
</style>