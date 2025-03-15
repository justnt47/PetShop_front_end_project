<template>
  <div class="row">
    <div class="row my-4">
      <h4 class="col-md-8 pb-3">Personal Information</h4>
      <div v-if="!isEditing" class="col-md-4 text-end">
        <button type="button" class="btn btn-primary" @click="edit">
          <i class="bi bi-pencil-square"></i> Edit
        </button>
      </div>
    </div>
    <div v-if="isEditing">
      <div class="row mb-3">
        <label class="col-sm-4 col-form-label">Name</label>
        <div class="col-sm-4">
          <input
            v-model="userInfo.name"
            class="form-control"
            placeholder="Name"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-4 col-form-label">Surname</label>
        <div class="col-sm-4">
          <input
            v-model="userInfo.surName"
            class="form-control"
            placeholder="Surname"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-4 col-form-label">Email</label>
        <div class="col-sm-4">
          <input
            v-model="userInfo.email"
            class="form-control"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="text-end">
        <button type="button" class="btn btn-secondary me-2" @click="cancel">
          <i class="bi bi-x-circle"></i> Cancel
        </button>
        <button type="button" class="btn btn-success" @click="save">
          <i class="bi bi-check-circle"></i> Save
        </button>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <p class="col-sm-4">Name</p>
        <p class="col-sm-6">{{ userInfo.name }}</p>

        <p class="col-sm-4">Surname</p>
        <p class="col-sm-6">{{ userInfo.surName }}</p>

        <p class="col-sm-4">Email</p>
        <p class="col-sm-6">{{ userInfo.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "PersonalCard",

  data() {
    return {
      isEditing: false,
      userInfo: {
        name: "John",
        surName: "Doe",
        email: "john.doe@example.com",
      },
    };
  },
  methods: {
    edit() {
      this.isEditing = true;
    },
    save() {
      Swal.fire({
        title: "Are you sure?",
        text: "You are about to save your changes.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, save it!",
        cancelButtonText: "No, cancel!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.isEditing = false;
          // Add your save logic here
          Swal.fire("Saved!", "Your information has been saved.", "success");
        }
      });
    },
    cancel() {
      this.isEditing = false;
      // Optionally, reset the userInfo to its original state if needed
    },
  },
};
</script>

<style>
</style>