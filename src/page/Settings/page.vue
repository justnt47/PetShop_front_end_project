<template>
  <div class="bg-gray-200 min-vh-100">
    <div class="p-4 d-flex justify-content-center">
      <div class="row card w-100">
        <div class="card-body">
          <div class="row" style="padding-top: 0vh">
            <div class="col-md-3 my-4" style="padding-top: 0vh">
              <div class="mt-5 list-group list-group-flush">
                <router-link
                  to="/Settings/Mange-Product"
                  class="list-group-item list-group-item-action"
                  >Manage Product</router-link
                >
                <router-link
                  to="/Settings/Profile"
                  class="list-group-item list-group-item-action"
                  >Profile</router-link
                >
                <router-link
                  to="/Settings/change-password"
                  class="list-group-item list-group-item-action"
                  >Change Password</router-link
                >
                <router-link
                  to="/Settings/Cart-History"
                  class="list-group-item list-group-item-action"
                  >Cart history</router-link
                >
              </div>
            </div>
            <div class="col-md-9 my-2">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsPage",
};
</script>

<style>
.bg-gray-200 {
  background-color: #f3f3f3; /* Similar to Tailwind's gray-200 */
}
</style>