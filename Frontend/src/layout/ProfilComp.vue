<script setup>


const isProfileMenuOpen = ref(false)


const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
  if (isProfileMenuOpen.value) isCartOpen.value = false
}

const closeProfileMenu = () => {
  isProfileMenuOpen.value = false
}

const logout = () => {
  console.log('Déconnexion...')
  closeProfileMenu()
}
</script>


<template>

<div class="">
    <div class="relative">
            <button 
              @click="toggleProfileMenu"
              class="flex items-center space-x-2 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white font-medium text-sm">{{ user.name.charAt(0) }}</span>
              </div>
            </button>

            <!-- Menu profil déroulant -->
            <div v-if="isProfileMenuOpen" class="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
              <div class="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                    <span class="font-bold text-lg">{{ user.name.charAt(0) }}</span>
                  </div>
                  <div>
                    <p class="font-semibold">{{ user.name }}</p>
                    <p class="text-blue-100 text-sm">{{ user.email }}</p>
                  </div>
                </div>
              </div>
              
              <div class="p-2">
                <router-link 
                  to="/profile" 
                  @click="closeProfileMenu"
                  class="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  <i class="fas fa-user w-5"></i>
                  <span>Mon Profil</span>
                </router-link>
                
                <router-link 
                  to="/orders" 
                  @click="closeProfileMenu"
                  class="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  <i class="fas fa-shopping-bag w-5"></i>
                  <span>Mes Commandes</span>
                </router-link>
                
                <router-link 
                  to="/settings" 
                  @click="closeProfileMenu"
                  class="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  <i class="fas fa-cog w-5"></i>
                  <span>Paramètres</span>
                </router-link>
                
                <div class="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                
                <button 
                  @click="logout"
                  class="flex items-center space-x-3 w-full px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors duration-200"
                >
                  <i class="fas fa-sign-out-alt w-5"></i>
                  <span>Déconnexion</span>
                </button>
              </div>
            </div>
          </div>
</div>

</template>

<style scoped></style>
