<template>
  <div class="bg-[#212529] text-white font-poppins">
    <!-- 1st Footer Line -->
    <div>
      <div class="lg:flex justify-between">
        <div class="ml-10 flex justify-center items-center gap-5">
          <div class="py-12">
            <Icon icon="mdi:instagram" class="text-[white] text-[40px]" />
            <span class="iconify" data-icon="mdi:instagram" data-inline="false"></span>
          </div>
          <div class="py-12">
            <h2 class="capitalize leading-4 text-[18px] font-semibold">follow us on instagram</h2>
            <p class="text-[13px]">@portoecommerce</p>
          </div>
        </div>
        <div class="flex flex-0 justify-end lg:w-[1000px] max-h-[200px] bg-black overflow-hidden">
          <Swiper :slides-per-view="5" :loop="true">
            <SwiperSlide>
              <img class="h-full" src="/Footer/footer1.jpg" alt="Footer" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="h-full" src="/Footer/footer2.jpg" alt="Footer" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="h-full" src="/Footer/footer3.jpg" alt="Footer" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="h-full" src="/Footer/footer4.jpg" alt="Footer" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="h-full" src="/Footer/footer5.jpg" alt="Footer" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="h-full" src="/Footer/footer6.jpg" alt="Footer" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="h-full" src="/Footer/footer1.jpg" alt="Footer" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="h-full" src="/Footer/footer2.jpg" alt="Footer" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="h-full" src="/Footer/footer3.jpg" alt="Footer" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <!-- 2nd Footer Line -->
    <div class="bg-[#4db7b3] mx-auto py-6 text-white font-poppins">
      <div class="container mx-auto lg:flex justify-between">
        <div class="flex gap-4 justify-start items-center ml-6">
          <div>
            <Icon icon="akar-icons:envelope" class="text-[40px]" />
          </div>
          <div>
            <h2 class="capitalize leading-4 text-[18px] font-semibold">
              <span class="md:block">Get Special Offers and Savings</span>
            </h2>
            <p class="text-[13px]">Get all the latest information on Events, Sales and Offers.</p>
          </div>
        </div>
        <div
          class="flex justify-between lg:w-[400px] rounded-full font-poppins text-[#777777] text-[14px] py-3 mx-auto my-5 lg:my-auto bg-[#F4F4F4]"
        >
          <input
            type="text"
            placeholder="Email Address"
            class="w-[120px] lg:w pl-5 bg-transparent flex-1 outline-none italic"
          />
          <span class="text-[#222529] px-5 cursor-pointer font-bold">SUBSCRIBE</span>
        </div>
        <div class="flex justify-start lg:justify-end gap-4">
          <Icon class="text-[40px] text-[#E9F4F6]" icon="ic:baseline-facebook" />
          <Icon class="text-[40px] text-[#E9F4F6]" icon="mdi:twitter-circle" />
          <Icon class="text-[40px] text-[#E9F4F6]" icon="entypo-social:linkedin-with-circle" />
        </div>
      </div>
    </div>

    <!-- 3rd Footer Line -->
    <div class="bg-[#222529] text-white lg:flex p-8 justify-around">
      <div class="lg:w-1/4 bg-[#222529]">
        <div class="max-w-[35%] mb-4"><img src="/logo.png" alt="Logo" /></div>
        <p class="text-zinc-500 text-[13px] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipis.
        </p>
        <p>QUESTIONS?</p>
        <p class="text-[22px] font-bold mb-5 lg:mb-auto">1-888-123-456</p>
      </div>
      <div class="sm:flex gap-5 w-1/2">
        <div>
          <h3 class="mb-4">Account</h3>
          <div class="lg:flex gap-5 justify-between text-[13px] text-zinc-500">
            <div>
              <ul class="lg:w-11/12">
                <li class="mb-2">About us</li>
                <li class="mb-2">Contact us</li>
                <li class="mb-2">My Account</li>
                <li class="mb-2">Payment Methods</li>
              </ul>
            </div>
            <div>
              <ul class="lg:w-11/12">
                <li class="mb-2">Order history</li>
                <li class="mb-2">Advanced search</li>
                <li class="mb-2">Login</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 class="mb-4">About</h3>
            <div class="lg:flex gap-5 text-[13px] text-zinc-500">
              <div>
                <ul class="lg:w-11/12">
                  <li class="mb-2">About Porto</li>
                  <li class="mb-2">Our Guarantees</li>
                  <li class="mb-2">Terms And Conditions</li>
                  <li class="mb-2">Conditions</li>
                  <li class="mb-2">Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul class="lg:w-[90%]">
                  <li class="mb-2">Return Policy</li>
                  <li class="mb-2">Intellectual Property Claims</li>
                  <li class="mb-2">Site Map</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:text-end w1/4">
        <h3 class="mb-4">Features</h3>
        <ul class="text-[13px] text-zinc-500">
          <li class="mb-2">Powerful Admin Panel</li>
          <li class="mb-2">Mobile &amp; Retina Optimized</li>
          <li class="mb-2">Super Fast WordPress Theme</li>
        </ul>
      </div>
    </div>
    <hr class="w-4/5 mx-auto border-zinc-500" />
    <h6 class="text-center p-7 text-zinc-500 text-[12px]">
      © Porto Magento 2023. All Rights Reserved
    </h6>
  </div>

  <div></div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>
