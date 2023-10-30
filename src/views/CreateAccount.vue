<template>
  <div>
    <div id="sign-in" class="font-poppins text-[#212529]">
      <h1 class="text-center text-[32px] bg-[#F4F4F4] font-bold p-16">
        Create New Customer Account
      </h1>

      <div class=" mx-auto">
        <form action="">
          <div class="lg:flex justify-evenly  text-[#777]">
            <div class="w-1/2 p-10 mx-auto">
              <h3 class="text-[22px] text-[#222529] font-bold mb-3">Personal Information</h3>
              <div>
                <label for="first-name">First Name <span class="text-[red]">*</span></label> <br />
                <input
                  id="first-name"
                  v-model="firstName"
                  type="text"
                  class="w-full p-3 my-5 outline-none border-[#E8E8E8] border"
                />
              </div>
              <div>
                <label for="last-name">Last Name <span class="text-[red]">*</span></label
                ><br />
                <input
                  id="last-name"
                  v-model="lastName"
                  type="text"
                  class="w-full p-3 my-5 outline-none border-[#E8E8E8] border"
                />
              </div>
              <div>
                <input id="newsletter" type="checkbox" v-model="newsletter" />
                <label for="newsletter" class="ml-2 text-[14px]">Sign Up for Newsletter</label>
              </div>
              <div>
                <button
                  class="block bg-[#222529] w-full px-10 py-5 my-20 text-white font-bold tracking-[3px]"
                  @click.prevent="signUp"
                >
                  CREATE AN ACCOUNT
                </button>
              </div>
            </div>
            <div class="w-1/2 p-10 mx-auto">
              <h3 class="text-[22px] text-[#222529] font-bold mb-3">Sign-in Information</h3>
              <div>
                <label for="email">Email <span class="text-[red]">*</span></label> <br />
                <input
                  id="email"
                  v-model="email"
                  type="email"
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
                  class="w-full p-3 mt-5 outline-none border-[#E8E8E8] border"
                />
                <p class="text-[14px] mt-1 mb-5">Password Strength: {{ passwordStrength }}</p>
              </div>
              <div>
                <label for="confirm-password"
                  >Confirm Password <span class="text-[red]">*</span></label
                ><br />
                <input
                  id="confirm-password"
                  type="password"
                  class="w-full p-3 my-5 outline-none border-[#E8E8E8] border"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

import { userInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'
const store = userInfoStore()

const { firstName, lastName, email, password, newsletter } = storeToRefs(store)
const signUp = store.signUp

const passwordStrength = ref('No Password')
</script>
