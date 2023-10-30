<template>
  <div class="container mx-auto p-6 font-poppins flex">
    <Swiper
      :loop="true"
      :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
      }"
    >
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="game-icons:saddle" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE SADDLES</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="mdi:bike-pedal-mountain" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE PADDALS</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="teenyicons:framer-outline" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE FRAMES</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="eos-icons:blockchain" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE CHAINS</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="carbon:tools" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE TOOLS</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="game-icons:saddle" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE SADDLES</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="mdi:bike-pedal-mountain" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE PADDALS</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="teenyicons:framer-outline" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE FRAMES</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="eos-icons:blockchain" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE CHAINS</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border p-4">
          <Icon icon="carbon:tools" class="text-[#43ADA9] text-[50px] mr-5 inline" />
          <span class="font-bold">BIKE TOOLS</span>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Icon } from '@iconify/vue'
</script>
