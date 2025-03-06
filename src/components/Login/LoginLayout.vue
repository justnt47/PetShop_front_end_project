<template>
  <div class="background-gradient">
    <div
      class="container d-flex justify-content-center align-items-center vh-100"
    >
      <div class="row w-100">
        <div class="col-lg-4 col-md-8 mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from "./LoginForm.vue";
</script>