<template>
  <div class="background-gradient">
    <div
      class="container d-flex justify-content-center align-items-center vh-100"
    >
      <div class="row w-100">
        <div class="col-lg-4 col-md-8 mx-auto">
          <div class="hello card text-center">
            <div class="card-body">
              <h1 class="card-title">Hello, World!</h1>
              <p class="card-text">
                Welcome to your Vue.js app with Bootstrap styling.
              </p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.hello {
  margin-top: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>