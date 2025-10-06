<script setup>
const isCartOpen = ref(false)


const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value
  if (isCartOpen.value) isProfileMenuOpen.value = false
}
const cartItemsCount = computed(() =>
  cartItems.value.reduce((total, item) => total + item.quantity, 0)
)
const closeCart = () => {
  isCartOpen.value = false
}
const cartItems = ref([
  {
    id: 1,
    name: 'Kiss',
    price: 29.99,
    quantity: 1,
    image: ''
  }
])
const decreaseQuantity = (itemId) => {
  const item = cartItems.value.find(item => item.id === itemId)
  if (item && item.quantity > 1) {
    item.quantity--
  } else {
    cartItems.value = cartItems.value.filter(item => item.id !== itemId)
  }
}
const increaseQuantity = (itemId) => {
  const item = cartItems.value.find(item => item.id === itemId)
  if (item) item.quantity++
}

const goToCheckout = () => {
//   router.push('/checkout')
  closeCart()
}
</script>


<template>

<div class="">
    <div class="relative">
            <button 
              @click="toggleCart"
              class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 relative"
            >
              <i class="fas fa-shopping-cart"></i>
              <span v-if="cartItemsCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {{ cartItemsCount }}
              </span>
            </button>
            <!-- Panier déroulant -->
            <div v-if="isCartOpen" class="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
              <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                <div class="flex justify-between items-center">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Votre Panier</h3>
                  <button @click="closeCart" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              
              <div class="max-h-96 overflow-y-auto">
                <div v-if="cartItems.length === 0" class="p-8 text-center">
                  <i class="fas fa-shopping-cart text-gray-300 dark:text-gray-600 text-4xl mb-4"></i>
                  <p class="text-gray-500 dark:text-gray-400">Votre panier est vide</p>
                </div>
                
                <div v-else>
                  <div 
                    v-for="item in cartItems" 
                    :key="item.id"
                    class="p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                  >
                    <div class="flex items-center space-x-3">
                      <img :src="item.image" :alt="item.name" class="w-12 h-12 rounded-lg object-cover">
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-800 dark:text-white truncate">{{ item.name }}</p>
                        <p class="text-sm text-blue-500 font-semibold">{{ item.price }} €</p>
                      </div>
                      <div class="flex items-center space-x-2">
                        <button 
                          @click="decreaseQuantity(item.id)"
                          class="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <i class="fas fa-minus text-xs"></i>
                        </button>
                        <span class="text-sm font-medium w-6 text-center">{{ item.quantity }}</span>
                        <button 
                          @click="increaseQuantity(item.id)"
                          class="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <i class="fas fa-plus text-xs"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div v-if="cartItems.length > 0" class="p-4 border-t border-gray-200 dark:border-gray-700">
                <div class="flex justify-between items-center mb-4">
                  <span class="text-lg font-semibold text-gray-800 dark:text-white">Total:</span>
                  <span class="text-lg font-bold text-blue-500">{{ cartTotal }} €</span>
                </div>
                <button 
                  @click="goToCheckout"
                  class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Commander
                </button>
              </div>
            </div>
          </div>
</div>

</template>

<style scoped></style>
