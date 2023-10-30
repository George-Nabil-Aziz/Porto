<template>
  <div>
    <div class="container mx-auto">
      <div class="p-5">
        <span>
          <RouterLink to="/">Home</RouterLink>
          &gt; {{ singleProduct.title }}
        </span>
      </div>
      <div class="lg:flex justify-between p-5">
        <div class="w-1/2 max-w-[400px] lg:w-[35%]">
          <div class="w-full h-[300px] overflow-hidden">
            <img :src="singleProduct.images[imageID]" class="w-full" />
          </div>
          <div class="flex flex-wrap justify-center gap-5 mt-10">
            <span
              @click="imageID = i"
              class="w-[70px] h-[70px] border-4 cursor-pointer"
              v-for="(image, i) in singleProduct.images"
              :key="i"
            >
              <img :src="image" class="w-full h-full" />
            </span>
          </div>
        </div>
        <div class="lg:w-[60%]">
          <h3 class="text-[35px] font-extrabold">{{ singleProduct.title }}</h3>
          <div class="text-[#A7A7A7] text-[25px] mb-10">
            <div v-if="singleProduct.rating">
              <Icon
                icon="mdi:star"
                :class="`${singleProduct.rating >= 4 ? 'text-[yellow]' : ''} text-[#D5D5D5] inline`"
              />
              <Icon
                icon="mdi:star"
                :class="`${
                  singleProduct.rating >= 4.2 ? 'text-[yellow]' : ''
                } text-[#D5D5D5] inline`"
              />
              <Icon
                icon="mdi:star"
                :class="`${
                  singleProduct.rating >= 4.4 ? 'text-[yellow]' : ''
                } text-[#D5D5D5] inline`"
              />
              <Icon
                icon="mdi:star"
                :class="`${
                  singleProduct.rating >= 4.6 ? 'text-[yellow]' : ''
                } text-[#D5D5D5] inline`"
              />
              <Icon
                icon="mdi:star"
                :class="`${
                  singleProduct.rating >= 4.8 ? 'text-[yellow]' : ''
                } text-[#D5D5D5] inline`"
              />
            </div>
            <span v-else class="ml-1 text-[15px]">Be the first to review this product</span>
          </div>
          <p class="font-openSans font-bold mb-5">
            <span class="text-[14px] text-[#A7A7A7] text-lg line-through"
              >${{
                Math.trunc((100 * singleProduct.price) / (100 - singleProduct.discountPercentage))
              }}
            </span>
            <span class="text-[18px] text-[#444444] text-2xl"> ${{ singleProduct.price }}</span>
          </p>
          <p class="font-poppins mb-5 text-[#848684]">{{ singleProduct.description }}</p>
          <p class="text-xs mb-5 text-[#848684]">
            AVAILABILITY:
            <span class="font-bold">
              <span v-if="singleProduct.stock" class="text-black">IN STOCK</span>
              <span v-else>Not Available</span>
            </span>
          </p>
          <hr />
          <div class="mt-10 text-xl font-bold select-none">
            <span
              class="px-3 py-2 border-[1px] border-[#ccc] cursor-pointer"
              @click="singleProductQuantity > 0 ? singleProductQuantity-- : null"
            >
              -
            </span>
            <span class="px-4 py-2 border-[1px] border-[#ccc]">{{ singleProductQuantity }}</span>
            <span
              class="px-3 py-2 border-[1px] border-[#ccc] cursor-pointer"
              @click="singleProductQuantity++"
            >
              +
            </span>
            <span
              class="p-3 ml-2 border-[1px] bg-[#111] hover:bg-[#4db7b3] text-white text-[15px] cursor-pointer"
            >
              <Icon icon="material-symbols:shopping-bag-outline" class="text-[25px] mr-1 inline" />
              <!-- <RouterLink :to="`/products/${singleProduct.id}`">ADD TO CART</RouterLink> -->
              <button @click="addNewCart">ADD TO CART</button>
            </span>
            <span class="px-3 py-2 ml-2 border-[1px] cursor-pointer">
              <Icon icon="material-symbols:favorite-outline" class="text-[25px] mr-1 inline" />
            </span>
            <span class="px-3 py-2 ml-2 border-[1px] cursor-pointer">
              <Icon icon="ph:chart-bar-fill" class="text-[25px] mr-1 inline" />
            </span>
          </div>
          <hr class="mt-10" />
          <div class="mt-10">
            <Icon
              icon="ion:social-facebook"
              class="cursor-pointer inline border rounded-full w-10 h-10 p-2 mr-4 hover:bg-[#4E6AA4] hover:text-white duration-300"
            />
            <Icon
              icon="mdi:twitter"
              class="cursor-pointer inline border rounded-full w-10 h-10 p-2 mr-4 hover:bg-[#30B1E4] hover:text-white duration-300"
            />
            <Icon
              icon="bx:bxl-linkedin"
              class="cursor-pointer inline border rounded-full w-10 h-10 p-2 mr-4 hover:bg-[#1981BA] hover:text-white duration-300"
            />
            <Icon
              icon="ant-design:google-plus-outlined"
              class="cursor-pointer inline border rounded-full w-10 h-10 p-2 mr-4 hover:bg-[#E05D4C] hover:text-white duration-300"
            />
            <Icon
              icon="heroicons:envelope"
              class="cursor-pointer inline border rounded-full w-10 h-10 p-2 mr-4 hover:bg-[#E05D4C] hover:text-white duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { userInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'
const store = userInfoStore()
const { singleProduct, singleProductQuantity } = storeToRefs(store)
const addNewCart = store.addNewCart
const imageID = ref(0)
</script>
