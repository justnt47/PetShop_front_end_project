<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNavbar"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: isNavbarOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'HomePage' }" class="nav-link">
              LOGO</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'HomePage' }" class="nav-link">
              Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'HomePage' }" class="nav-link">
              Home</router-link
            >
          </li>
          <!-- Add more nav items here -->
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="accountDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i> Account
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="accountDropdown"
            >
              <li class="dropdown-header">
                <strong>{{ user.name }}</strong> <br />
                <small class="text-muted">{{ user.email }}</small>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link :to="{ name: '' }" class="dropdown-item"
                  >Profile</router-link
                >
              </li>

              <li>
                <router-link :to="{ name: 'Login' }" class="dropdown-item"
                  >Login</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { Dropdown } from "bootstrap";

const user = ref({ name: "John Doe", email: "john.doe@example.com" });

const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

onMounted(() => {
  const dropdownElement = document.getElementById("accountDropdown");
  if (dropdownElement) {
    new Dropdown(dropdownElement); // Enable Bootstrap dropdown functionality
  }
});
</script>

<style scoped>
/* Navbar Styling */
.navbar-nav .nav-link {
  color: rgb(255, 255, 255);
  transition: background-color 0.3s, color 0.3s;
}
.navbar-nav .nav-link:hover {
  color: #ffffff;
  /* background: rgba(255, 255, 255, 0.2); */
}
.navbar-nav .nav-item > .router-link-active {
  text-decoration: underline;
  font-weight: bold;
}

.navbar-nav .dropdown-menu .router-link-active {
  text-decoration: none;
  font-weight: normal;
}
</style>


