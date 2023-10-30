<template>
  <div class="navbar uppercase select-none">
    <!-- 1st Line -->
    <div
      class="currency container px-8 py-4 mx-auto hidden sm:flex justify-between text-[12px] text-neutral-400 font-semibold"
    >
      <div class="relative cursor-pointer">
        <div class="flex" @click="isCurrencyShow = !isCurrencyShow">
          <p>{{ currency }}</p>
          <Icon icon="ic:baseline-keyboard-arrow-down" class="text-[20px]" />
        </div>
        <div
          v-if="isCurrencyShow"
          @click="currencyExchange"
          class="w-[130px] mt-2 absolute left-0 top-full z-30 bg-white border-2 p-2"
        >
          <p v-if="currency == 'EUR'">USD - US Dollar</p>
          <p v-if="currency == 'USD'">EUR - EURO</p>
        </div>
      </div>

      <div class="flex justify-end relative">
        <div @click="isLinksShow = !isLinksShow" class="flex lg:hidden cursor-pointer">
          <span>LINKS</span>
          <Icon icon="ic:baseline-keyboard-arrow-down" class="text-[20px]" />
        </div>

        <ul
          v-if="isLinksShow"
          class="absolute lg:static w-[200px] p-2 lg:p-0 lg:w-auto top-full mt-4 lg:mt-auto z-20 bg-white block lg:flex text-right lg:text-center border border-[#ccc] lg:border-0"
        >
          <li class="my-3 lg:my-auto">
            <RouterLink v-if="token" class="mx-3" to="/"
              >Welcome <span class="font-bold text-[#4db7b3]">{{ firstName }}</span></RouterLink
            >
            <RouterLink v-else class="mx-3" to="/">default welcome msg!</RouterLink>
            <span class="hidden lg:inline">|</span>
          </li>
          <li class="my-3 lg:my-auto">
            <RouterLink class="mx-3" to="/blog">blog</RouterLink>
            <span class="hidden lg:inline">|</span>
          </li>
          <li class="my-3 lg:my-auto" v-if="!token">
            <RouterLink class="mx-3" to="/sign-in">sign in</RouterLink>
            <span class="hidden lg:inline">|</span>
          </li>
          <li class="my-3 lg:my-auto">
            <RouterLink class="mx-3" to="/contact-us">contact us</RouterLink>
            <span class="hidden lg:inline">|</span>
          </li>
          <li class="my-3 lg:my-auto" v-if="!token">
            <RouterLink class="mx-3" to="/create-account">create an account</RouterLink>
          </li>
          <li class="my-3 lg:my-auto" v-if="token">
            <RouterLink class="mx-3" to="/sign-out">sign out</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <hr />

    <!-- 2nd Line -->
    <div class="sticky right-0 z-10 container px-8 py-5 mx-auto bg-white flex justify-between">
      <div class="flex">
        <Icon
          icon="iconamoon:menu-burger-horizontal"
          class="lg:hidden text-[30px] mr-5 cursor-pointer"
          @click="isNavShow = !isNavShow"
        />
        <div class="logo max-w-[110px]">
          <img src="/logo_black.png" alt="Logo" />
        </div>
        <div v-show="isNavShow" class="relative lg:static flex items-center">
          <ul
            class="absolute lg:static top-0 bg-white p-5 lg:p-0 border-2 lg:border-0 lg:flex ml-6 text-[13px] font-bold gap-5 navigations"
          >
            <li class="cursor-pointer"><RouterLink to="/">Home</RouterLink></li>
            <li class="cursor-pointer">
              <RouterLink to="/shop" class="flex">
                shop
                <Icon icon="ic:baseline-keyboard-arrow-down" class="text-[20px]" />
              </RouterLink>
            </li>
            <li class="cursor-pointer">
              <RouterLink to="/products" class="flex"
                >products
                <Icon icon="ic:baseline-keyboard-arrow-down" class="text-[20px]" />
              </RouterLink>
            </li>
            <li class="cursor-pointer">
              <RouterLink to="/pages" class="flex"
                >pages
                <Icon icon="ic:baseline-keyboard-arrow-down" class="text-[20px]" />
              </RouterLink>
            </li>
            <li class="cursor-pointer">
              <RouterLink to="/features" class="flex"
                >features
                <Icon icon="ic:baseline-keyboard-arrow-down" class="text-[20px]" />
              </RouterLink>
            </li>
            <li class="cursor-pointer"><RouterLink to="/buy-porto">buy porto!</RouterLink></li>
          </ul>
        </div>
      </div>

      <div
        class="hidden 2xl:flex rounded-full font-poppins text-[#777777] text-[14px] flex-1 ml-8 bg-[#F4F4F4]"
      >
        <input
          type="text"
          placeholder="Search..."
          class="pl-5 bg-transparent flex-1 outline-none"
        />

        <select class="bg-transparent flex-end mr-5 outline-none">
          <option value="all">All Categories</option>
          <option value="shop">Shop</option>
          <option value="accessories">Accessories</option>
          <option value="bikes">Bikes</option>
        </select>

        <span class="bg-[#222529] text-white px-4 flex items-center rounded-r-full cursor-pointer">
          <Icon icon="material-symbols:search-rounded" class="cursor-pointer text-[30px]" />
        </span>
      </div>

      <div class="flex relative select-none">
        <Icon icon="ph:magnifying-glass-thin" class="cursor-pointer ml-5 text-[40px] 2xl:hidden" />
        <Icon icon="ph:heart-straight-thin" class="cursor-pointer ml-5 text-[40px]" />
        <Icon
          icon="ph:bag-thin"
          class="cursor-pointer ml-5 text-[40px]"
          @click="isCartShow = !isCartShow"
        />
        <div
          class="absolute right-0 bottom-0 translate-y-full w-[300px] max-h-[450px]"
          v-if="isCartShow"
        >
          <CartCheckout class="border-2 border-[#777]" />
        </div>
      </div>
    </div>

    <!-- 3rd Line -->
    <div class="advertisement text-[14px] text-white font-poppins font-bold text-center md:flex">
      <div class="w-full flex justify-center bg-[#4DB7B3] p-3">
        <Icon icon="material-symbols:local-shipping-outline-rounded" class="text-[20px] mr-5" />
        free shipping &amp; return
      </div>
      <div class="w-full hidden md:flex justify-center bg-[#43ADA9] p-3">
        <Icon
          class="text-[20px] mr-5"
          icon="streamline:money-cash-dollar-coin-accounting-billing-payment-cash-coin-currency-money-finance"
        />
        money back guarantee
      </div>
      <div class="w-full hidden lg:flex justify-center bg-[#4DB7B3] p-3">
        <Icon icon="ri:24-hours-line" class="text-[20px] mr-5" />
        online support 24/7
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CartCheckout from '@/components/CartCheckout.vue'
import { userInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'

const store = userInfoStore()
const { firstName, token, currency } = storeToRefs(store)
const getAllProducts = store.getAllProducts
getAllProducts()
const getSingleProduct = store.getSingleProduct
getSingleProduct()

const isCurrencyShow = ref(false)
function currencyExchange() {
  store.currency == 'USD' ? (store.currency = 'EUR') : (store.currency = 'USD')
  isCurrencyShow.value = false
}

const isLinksShow = ref(true)
const isNavShow = ref(true)
const isCartShow = ref(false)
</script>

<style scoped>
.router-link-active {
  color: #4db7b3;
}
</style>
