<template>
  <div
    class="p-3 max-h-[400px] overflow-y-auto bg-white font-poppins text-[13px] text-[#222529] font-bold z-20"
  >
    <div v-if="!token">Please Sign In</div>
    <div v-else-if="token">
      <div v-if="carts.length == 0">{{ userName }}, your Cart is empty.</div>
      <div v-else-if="carts" v-for="cart in carts" :key="cart.id">
        <div class="flex justify-between p-2 mb-2">
          <p>{{ cart.totalProducts }} Items</p>
          <p>
            <RouterLink to="/checkout-view">View Cart</RouterLink>
          </p>
        </div>
        <hr class="mb-2" />
        <div v-for="product in cart.products" :key="product.id">
          <div class="p-2 relative flex justify-between">
            <span
              class="absolute text-center top-2 right-2 rounded-full bg-white cursor-pointer border"
              >x</span
            >
            <div class="p-2">
              <p>{{ product.title }}</p>
              <p class="font-normal text-[#777]">$ {{ product.price }}</p>
              <p class="font-normal text-[#777]">QTY: {{ product.quantity }}</p>
            </div>
            <div class="w-1/3 h-[60px]"><img class="w-full h-full" :src="product.thumbnail" /></div>
          </div>
          <hr class="my-1" />
        </div>
        <div class="flex justify-between p-2">
          <div>SubTotal:</div>
          <div class="text-[20px]">$ {{ carts[0].total }}</div>
        </div>
        <button class="p-3 w-full bg-[#222] text-white my-2">
          <RouterLink to="/checkout-view">View Cart</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/store/userInfo'
const store = userInfoStore()
const { userName, token, carts } = storeToRefs(store)
</script>
