<template>
  <router-link
    :to="{ name: 'CartHistoryDetail'}"
    class="card text-center"
    
    >
    <div class=" p-3 mb-3">
      <div class="row">
        
        <div class="col-md-9 text-start">
          <h5>productId</h5>
          <p>TotalPrice: $ 55555</p>
        </div>
        
      </div>
    </div>
  </router-link>
  </template>

<script>
export default {
name: "CartHistoryCard"

}
</script>

<style>
.card {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

</style>