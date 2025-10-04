<script setup>
import FooterComp from '@/layout/footerComp.vue'
</script>

<template>
  <div class="">
    <section class="image text-gray-600 pt-10 relative">
      <div class="grid justify-center items-center p-5">
        <div class="">
          <h1 class="text-[60px]">About Us - The Best Collection !</h1>
        </div>
        <div class="flex gap-3 px-70">
          <router-link to="/home" class="border-r px-3 font-semibold hover:text-yellow-500"
            >Home</router-link
          >
          <router-link to="/about" class="font-semibold hover:text-yellow-500">About</router-link>
        </div>
      </div>
    </section>

    <!-- History -->
    <section class="p-5 px-40">
      <div class="">
        <h1 class="pl-50 text-[25px] font-[100px]">A Brief History of the</h1>
        <p class="pl-50 w-300 py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh dolor, efficitur
          eget pharetra ac, cursus sed sapien. Cras posuere ligula ut blandit varius. Nunc
          consectetur scelerisque felis, et volutpat massa aliquam in. Curabitur sodales porttitor
          tortor sit amet malesuada.
        </p>
        <p class="pl-50 w-300 py-6">
          Consectetur adipiscing elit. Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed
          sapien. Cras posuere ligula ut blandit varius. Nunc consectetur scelerisque felis, et
          volutpat massa aliquam in. Curabitur sodales porttitor tortor sit amet malesuada
        </p>
      </div>
      <div class="pl-20">
        <div class="pl-50 w-300 text-[20px] font-semibold">
          <span class=""></span>1950 <span class="span text-transparent">.....</span>1999
        </div>
        <div class="pl-30 w-300 py-2">
          <p class="px-20">
            Lorem ipsum dolor sit amet, efficitur eget pharetra ac, cursus sed sapien. Cras posuere
            ligula ut blandit varius. Nunc consectetur scelerisque felis. consectetur adipiscing
            elit. Maecenas nibh dolor
          </p>
        </div>
        <div class="pl-50 w-300 py-2 text-[20px] font-semibold">
          <span class=""></span>2000 <span class="span text-transparent">.....</span>2018
        </div>
        <div class="pl-30 w-300 py-2">
          <p class="px-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh dolor, efficitur
            eget pharetra ac, cursus sed sapien. Cras posuere ligula ut blandit varius. Nunc
            consectetur scelerisque felis, et volutpat massa aliquam in. Curabitur sodales porttitor
            tortor sit amet malesuada.
          </p>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="">
      <div class="pl-30 bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div class="max-w-3xl pb-8">
            <h2 class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Meet our leadership TEAM
            </h2>
            <p class="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated
              to delivering the best results for our clients.
            </p>
          </div>
          <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">
                    Leslie Alexander
                  </h3>
                  <p class="text-sm/6 font-semibold text-indigo-600">Founder / Doctor ABM</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">
                    Michael Foster
                  </h3>
                  <p class="text-sm/6 font-semibold text-indigo-600">Co-Founder / Doctor G</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">
                    Dries Vincent
                  </h3>
                  <p class="text-sm/6 font-semibold text-indigo-600">Business Relations</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">
                    Lindsay Walton
                  </h3>
                  <p class="text-sm/6 font-semibold text-indigo-600">Stylist</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">
                    Courtney Henry
                  </h3>
                  <p class="text-sm/6 font-semibold text-indigo-600">Stylist</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Tom Cook</h3>
                  <p class="text-sm/6 font-semibold text-indigo-600">Director of Product</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

  <footer>
    <FooterComp />
  </footer>
</template>

<style scoped>
.span {
  width: 20px;
  border-bottom: 2px solid black;
}
</style>
