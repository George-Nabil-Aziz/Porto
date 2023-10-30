<template>
  <div class="font-poppins">
    <h5 class="p-5 font-bold">MOST POPULAR PRODUCTS</h5>
    <div class="container p-5 mx-auto flex gap-5">
      <Swiper
        :loop="true"
        :space-between="30"
        :breakpoints="{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 }
        }"
      >
        <SwiperSlide v-for="item in allProducts" :key="item.id">
          <ProductCard :item="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/store/userInfo'
const store = userInfoStore()
const { allProducts } = storeToRefs(store)
</script>
