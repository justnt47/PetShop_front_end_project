<template>
  <nav
    :class="[
      'navbar',
      'navbar-expand-lg',
      'bg-white',
      { 'sticky-top': isSticky, 'navbar-transparent': isTransparent },
    ]"
  >
    <div class="container-fluid">
      <router-link :to="{ name: 'HomePage' }" class="navbar-brand">
        <img src="@/assets/KuLogo.png" alt="Logo" class="nav-logo" />
      </router-link>

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
        <ul class="navbar-nav mx-auto fs-5 fw-bold">
          <li class="nav-item">
            <router-link :to="{ name: 'HomePage' }" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: '' }" class="nav-link"> Home</router-link>
          </li>
          <!-- Add more nav items here -->
        </ul>
        <ul class="navbar-nav gap-2">
          <li class="nav-item position-relative">
            <router-link :to="{ name: '' }" class="nav-link">
              <i class="bi bi-cart fs-4"></i>
              <span
                class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger"
              >
                12
                <span class="visually-hidden">unread messages</span>
              </span>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="accountDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle fs-4"></i> TEST {{ user.name }}
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
                <router-link :to="{ name: '' }" class="dropdown-item">
                  Profile
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Login' }" class="dropdown-item">
                  Login
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Dropdown } from "bootstrap";

const user = ref({ name: "John Doe", email: "john.doe@example.com" });

const isNavbarOpen = ref(false);
const isSticky = ref(false);
const isTransparent = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

const handleScroll = () => {
  if (window.scrollY > 2) {
    isSticky.value = true;
    isTransparent.value = true;
  } else {
    isSticky.value = false;
    isTransparent.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  const dropdownElement = document.getElementById("accountDropdown");
  if (dropdownElement) {
    new Dropdown(dropdownElement); // Enable Bootstrap dropdown functionality
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Navbar Styling */
.navbar-nav .nav-link {
  color: rgb(0, 0, 0);
  transition: background-color 0.3s, color 0.3s;
}
.navbar-nav .nav-link:hover {
  color: #000000;
  /* background: rgba(255, 255, 255, 0.2); */
}
/* .navbar-nav .nav-item > .router-link-active {
  text-decoration: underline;
  font-weight: bold;
} */

.navbar-nav .dropdown-menu .router-link-active {
  text-decoration: none;
  font-weight: normal;
}

.navbar-transparent {
  background-color: rgba(255, 255, 255, 0.8) !important;
  transition: background-color 0.3s;
}

.nav-logo {
  width: 50px;
  height: 50px;
}
</style>