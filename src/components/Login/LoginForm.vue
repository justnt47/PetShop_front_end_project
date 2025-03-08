<template>
  <form @submit.prevent="login">
    <div class="px-4 mt-5">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          required
        />
      </div>
      <label for="password" class="form-label">Password</label>
      <div class="input-group mb-3">
        <input
          :type="showPassword ? 'text' : 'password'"
          class="form-control"
          id="password"
          v-model="password"
          required
        />
        <div class="input-group-append">
          <span
            type="button"
            class="input-group-text"
            @click="togglePasswordVisibility"
            id="basic-addon2"
            style="
              background-color: #e9ecef;
              border-top-left-radius: 0px;
              border-bottom-left-radius: 0px;
            "
          >
            <i
              :class="showPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'"
            ></i>
          </span>
        </div>
      </div>
      <div class="my-4">
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </div>
    </div>
  </form>
</template>
  
  <script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false, // Initialize showPassword
    };
  },
  methods: {
    login() {
      // Handle login logic here
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
  
  <style scoped>
/* Remove unnecessary scoped styles */
</style>