<template>
  <div class="flex">
    <SideBar />
    <div class="">
      <router-view />
    </div>
  </div>
</template>
  
  <script setup>
import { useRoute } from "vue-router";
import SideBar from "./components/SideBar/SideBar.vue";

const route = useRoute();
</script>
  
<style scoped>
</style>