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
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link :to="{ name: 'HomePage' }" class="navbar-brand">
        <img src="@/assets/KuLogo.png" alt="Logo" class="nav-logo" />
      </router-link>

      <div class="d-flex align-items-center">
        <router-link
          :to="{ name: 'CartPage' }"
          class="nav-link position-relative d-lg-none"
        >
          <i class="bi bi-cart fs-4"></i>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            12
            <span class="visually-hidden">unread messages</span>
          </span>
        </router-link>
      </div>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">KU Pet Shop</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav mx-auto fs-5 fw-bold">
            <li class="nav-item">
              <router-link
                :to="{ name: 'HomePage' }"
                class="nav-link"
                exact-path
              >
                HOME
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'ProductPage' }"
                class="nav-link"
                exact-path
              >
                PRODUCT
              </router-link>
            </li>
            <!-- Add more nav items here -->
          </ul>

          <div class="d-flex align-items-center gap-3">
            <router-link
              :to="{ name: 'CartPage' }"
              class="nav-link position-relative d-lg-block d-none"
            >
              <i class="bi bi-cart fs-4"></i>
              <span
                class="position-absolute start-100 translate-middle badge rounded-pill bg-danger"
              >
                12
                <span class="visually-hidden">unread messages</span>
              </span>
            </router-link>

            <div class="my-auto d-lg-block d-none">
              <template v-if="decodedToken">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-person-circle fs-4"></i>
                  {{ user.fname }}
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="accountDropdown"
                >
                  <li class="dropdown-header" @click.stop>
                    <strong>{{ user.fname }} {{ user.lname }}</strong> <br />
                    <small class="text-muted">{{ user.email }}</small>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <router-link to="/A" class="dropdown-item">
                      Profile
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Login' }" class="dropdown-item">
                      Logout
                    </router-link>
                  </li>
                </ul>
              </template>

              <template v-else>
                <router-link :to="{ name: 'Login' }" class="nav-link">
                  Login
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script >
import { ref, onMounted, onUnmounted } from "vue";
import { Dropdown } from "bootstrap";
import { getCookie } from "@/functions/Cookie/Cookie";

export default {
  name: "Navbar",
  data() {
    return {
      user: ref({
        fname: "",
        lname: "",
        email: "",
        role: "",
      }),
      isSticky: ref(false),
      isTransparent: ref(false),
      decodedToken: null,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 2) {
        this.isSticky = true;
        this.isTransparent = true;
      } else {
        this.isSticky = false;
        this.isTransparent = false;
      }
    },
  },
  mounted() {
    this.decodedToken = getCookie();
    if (this.decodedToken) {
      this.user.fname = this.decodedToken.fName;
      this.user.lname = this.decodedToken.lName;
      this.user.email = this.decodedToken.Email;
      this.user.role = this.decodedToken.roleEN;
    }
    window.addEventListener("scroll", this.handleScroll);
    const dropdownElement = document.getElementById("accountDropdown");
    if (dropdownElement) {
      new Dropdown(dropdownElement); // Enable Bootstrap dropdown functionality
    }
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  onUnmounted() {
    window.removeEventListener("scroll", handleScroll);
  },

  handleScroll() {
    if (window.scrollY > 2) {
      this.isSticky = true;
      this.isTransparent = true;
    } else {
      this.isSticky = false;
      this.isTransparent = false;
    }
  },
};
</script>

<style scoped>
/* Navbar Styling */
.navbar-nav .nav-link {
  color: rgb(0, 0, 0);
  transition: background-color 0.3s, color 0.3s;
}
.navbar-nav .nav-link:hover {
  color: #000000;
  text-decoration: underline;
}
.navbar-nav .nav-item > .router-link-exact-active {
  text-decoration: underline;
}
.navbar-nav .nav-item > .router-link-exact-active:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.navbar-nav .dropdown-menu .router-link-active {
  text-decoration: none;
  font-weight: normal;
}

.navbar-transparent {
  background-color: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(5px);
  transition: background-color 0.3s;
}

.nav-logo {
  width: 50px;
  height: 50px;
}
</style>