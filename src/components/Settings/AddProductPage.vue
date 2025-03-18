<template>
  <div class="container">
    <h2 class="pb-3">Add Product</h2>
    <div class="card p-4">
      <div class="row">
        <!-- Left Section: Drag & Drop & Click Upload Box -->
        <div class="col-md-6">
          <div
            class="preview-container border rounded d-flex align-items-center justify-content-center w-100"
            style="
              height: 250px;
              cursor: pointer;
              background-color: #f8f9fa;
              text-align: center;
            "
            @dragover.prevent="dragOver"
            @dragleave="dragLeave"
            @drop.prevent="handleDrop"
            @click="openFilePicker"
            :class="{ 'drag-active': isDragging }"
          >
            <!-- Show image preview if available -->
            <img
              v-if="imageUrl"
              :src="imageUrl"
              alt="Image Preview"
              class="img-thumbnail"
              style="max-height: 100%; max-width: 100%"
            />

            <!-- Show upload text if no image -->
            <span v-else class="text-muted"
              >Click or Drag & Drop to Upload</span
            >

            <!-- Hidden file input -->
            <input
              ref="fileInput"
              type="file"
              class="d-none"
              @change="previewImage"
              accept="image/*"
            />
          </div>

          <!-- Remove Image Button -->
          <div v-if="imageUrl" class="text-center mt-2">
            <button type="button" class="btn btn-danger" @click="removeImage">
              <i class="bi bi-trash"></i> Remove
            </button>
          </div>
        </div>

        <!-- Right Section: Product Details -->
        <div class="col-md-6">
          <div class="row mb-3">
            <label class="col-sm-4 col-form-label">ชื่อสินค้า</label>
            <div class="col-sm-8">
              <input
                v-model="productName"
                class="form-control"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="productType" class="col-sm-4 form-label"
              >ประเภทสินค้า</label
            >
            <div class="col-sm-8">
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
          </div>
          <div class="row mb-3">
            <label class="col-sm-4 col-form-label">ราคา</label>
            <div class="col-sm-8">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    style="
                      border-top-right-radius: 0px;
                      border-bottom-right-radius: 0px;
                    "
                    >฿</span
                  >
                </div>
                <input
                  v-model="productPrice"
                  class="form-control"
                  placeholder="Price"
                />
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="text-end mt-3">
            <button
              type="button"
              class="btn btn-secondary me-2"
              @click="resetForm"
            >
              <i class="bi bi-x-circle"></i> Cancel
            </button>
            <button type="button" class="btn btn-success" @click="saveProduct">
              <i class="bi bi-check-circle"></i> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "AddProductPage",
  setup() {
    const imageUrl = ref(null);
    const selectedFile = ref(null);
    const productName = ref("");
    const productPrice = ref("");
    const productType = ref("");
    const isDragging = ref(false);
    const fileInput = ref(null);

    // Handle file preview when uploaded via click or drag & drop
    const previewImage = (event) => {
      const file = event.target.files[0];
      if (file) {
        selectedFile.value = file;
        imageUrl.value = URL.createObjectURL(file);
      }
    };

    // Drag & Drop: Handle file drop
    const handleDrop = (event) => {
      isDragging.value = false;
      const file = event.dataTransfer.files[0];
      if (file) {
        selectedFile.value = file;
        imageUrl.value = URL.createObjectURL(file);
      }
    };

    // Drag & Drop: Indicate active drag state
    const dragOver = () => {
      isDragging.value = true;
    };

    // Drag & Drop: Remove active state
    const dragLeave = () => {
      isDragging.value = false;
    };

    // Open File Picker when clicking the container
    const openFilePicker = () => {
      fileInput.value.click();
    };

    // Remove image preview
    const removeImage = () => {
      imageUrl.value = null;
      selectedFile.value = null;
    };

    const resetForm = () => {
      imageUrl.value = null;
      selectedFile.value = null;
      productName.value = "";
      productPrice.value = "";
      productType.value = "";
    };

    const convertToBlob = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const blob = new Blob([reader.result], { type: file.type });
          resolve(blob);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    };

    const uploadImage = async (file) => {
      const blob = await convertToBlob(file);
      console.log(`blob`, blob);

      return blob;
    };

    const saveProduct = async () => {
      const uploadedImageUrl = await uploadImage(selectedFile.value);

      if (!uploadedImageUrl) {
        console.error("Failed to upload image");
        return;
      }

      const productData = {
        imageUrl: uploadedImageUrl,
        productName: productName.value,
        productPrice: productPrice.value,
        productType: productType.value,
      };
      console.log(`productData`, productData);

      try {
        // const response = await axios.post(
        //   "http://localhost:3000/products",
        //   productData
        // );
        // console.log("Product saved:", response.data);
        resetForm();
      } catch (error) {
        console.error("Error saving product:", error);
      }
    };

    return {
      imageUrl,
      productName,
      productPrice,
      productType,
      saveProduct,
      resetForm,
      previewImage,
      removeImage,
      handleDrop,
      dragOver,
      dragLeave,
      openFilePicker,
      isDragging,
      fileInput,
    };
  },
};
</script>

<style>
/* Add slight background change when dragging over the box */
.preview-container.drag-active {
  background-color: #e9ecef;
  border: 2px dashed #007bff;
  transition: background-color 0.3s, border 0.3s;
}
</style>