<template>
  <!-- 23-10-2023 -->
  <div class="bg-grey">
    <NavBar />
    <RouterView />
    <FooterComp />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterComp from '@/components/FooterComp.vue'
</script>
