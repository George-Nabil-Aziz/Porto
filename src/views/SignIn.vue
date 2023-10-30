<template>
  <div>
    <div id="sign-in" class="font-poppins text-[#212529]">
      <h1 class="text-center text-[32px] bg-[#F4F4F4] font-bold p-16">Customer Login</h1>
      <div class="form w-[800px] mx-auto px-10 pt-12">
        <h3 class="text-[22px] text-[#222529] font-bold">Registered Customers</h3>
        <p class="text-[14px] mt-5 text-[#777] leading-7">
          If you have an account, sign in with your email address.
        </p>
        <form action="" class="text-[#777] mt-5">
          <div>
            <label for="userName">User Name <span class="text-[red]">*</span></label> <br />
            <input
              id="userName"
              v-model="userName"
              type="text"
              class="w-full p-3 my-5 outline-none border-[#E8E8E8] border"
            />
          </div>
          <div>
            <label for="password">Password <span class="text-[red]">*</span></label
            ><br />
            <input
              id="password"
              v-model="password"
              type="password"
              class="w-full p-3 my-5 outline-none border-[#E8E8E8] border"
            />
          </div>

          <div>
            <p class="text-[#222529] font-semibold">Forgot Your Password?</p>
            <div>
              <button
                @click.prevent="signInButton"
                class="block bg-[#222529] w-full px-10 py-5 my-5 text-white font-bold tracking-[3px]"
              >
                SIGN IN
              </button>
            </div>
            <button
              class="block bg-[#222529] w-full px-10 py-5 my-5 text-white font-bold tracking-[3px]"
            >
              <RouterLink to="/create-account">CREATE AN ACCOUNT</RouterLink>
            </button>
            <p class="text-[red] mb-20 text-[14px]">* Required Fields</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSwiper } from 'swiper/vue'
import { userInfoStore } from '@/store/userInfo.js'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = userInfoStore()

const { userName, password, token } = storeToRefs(store)
const signIn = store.signIn
function signInButton() {
  signIn()
  router.push({ name: 'home' })
}
</script>
