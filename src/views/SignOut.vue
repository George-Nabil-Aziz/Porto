<template>
  <div class="container p-10 mx-auto">
    <h3 class="font-extrabold text-2xl text-[#4db7b3]">You are signed out</h3>
    <p class="mt-10 text-[#777]">You have signed out and will go to our homepage in 5 seconds</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { userInfoStore } from '@/store/userInfo'

const router = useRouter()
const store = userInfoStore()

const signOut = store.signOut
signOut()
setTimeout(() => {
  router.push({ name: 'home' })
}, 3000)
</script>
