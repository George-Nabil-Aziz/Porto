<template>
  <div class="w-full group transition duration-3000 ease-out select-none">
    <div class="relative overflow-hidden">
      <div
        class="absolute bg-[#E27C7C] w-[38px] h-[18px] top-2 left-2 font-bold text-white text-[10px]"
      >
        -{{ Math.round(item.discountPercentage) }}%
      </div>
      <div class="h-[200px]">
        <img :src="item.thumbnail" class="h-full w-full" />
      </div>
      <div
        @click="addToCart"
        class="absolute bg-[#4db7b3] text-white w-full h-[30px] p-4 opacity-0 bottom-0 transition-all duration-300 ease-out group-hover:h-[50px] group-hover:opacity-75 hover:group-hover:opacity-100 hover:cursor-pointer"
      >
        Quick View
      </div>
    </div>
    <h3
      :title="item.title"
      class="h-[40px] text-[18x] truncate hover:text-clip hover:whitespace-normal mt-2"
    >
      {{ item.title }}
    </h3>
    <div class="text-[#A7A7A7] text-[25px] mb-10">
      <div v-if="item.rating">
        <Icon
          icon="mdi:star"
          :class="`${item.rating >= 4 ? 'text-[yellow]' : ''} text-[#D5D5D5] inline`"
        />
        <Icon
          icon="mdi:star"
          :class="`${item.rating >= 4.2 ? 'text-[yellow]' : ''} text-[#D5D5D5] inline`"
        />
        <Icon
          icon="mdi:star"
          :class="`${item.rating >= 4.4 ? 'text-[yellow]' : ''} text-[#D5D5D5] inline`"
        />
        <Icon
          icon="mdi:star"
          :class="`${item.rating >= 4.6 ? 'text-[yellow]' : ''} text-[#D5D5D5] inline`"
        />
        <Icon
          icon="mdi:star"
          :class="`${item.rating >= 4.8 ? 'text-[yellow]' : ''} text-[#D5D5D5] inline`"
        />
      </div>
      <span v-else class="ml-1 text-[15px]">Be the first to review this product</span>
    </div>
    <p class="font-openSans font-bold">
      <span class="text-[14px] text-[#A7A7A7] line-through"
        >${{ Math.trunc((100 * item.price) / (100 - item.discountPercentage)) }}
      </span>
      <span class="text-[18px] text-[#444444]"> ${{ item.price }}</span>
    </p>
    <div class="relative w-fit mx-auto">
      <button
        class="absolute left-0 group-hover:translate-x-[-100%] transition-all text-[12px] p-2 mt-4 border-2"
      >
        <Icon icon="material-symbols:favorite-outline" class="text-[17px] mr-1 inline" />
      </button>
      <button
        class="absolute right-0 group-hover:translate-x-full transition-all text-[12px] p-2 mt-4 border-2"
      >
        <Icon icon="ph:chart-bar-fill" class="text-[17px] mr-1 inline" />
      </button>
      <button
        class="relative text-[12px] p-2 mt-4 border-2 overflow-hidden bg-white group-hover:bg-[#4db7b3] group-hover:text-white"
      >
        <Icon icon="material-symbols:shopping-bag-outline" class="text-[17px] mr-1 inline" />
        <button>ADD TO CART</button>
      </button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { userInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'
const router = useRouter()
const store = userInfoStore()
const { singleProductID } = storeToRefs(store)
const getSingleProduct = store.getSingleProduct
function addToCart() {
  store.singleProductID = props.item.id
  getSingleProduct()
  router.push({ name: 'products' })
}
const props = defineProps({
  item: Object
})
</script>
