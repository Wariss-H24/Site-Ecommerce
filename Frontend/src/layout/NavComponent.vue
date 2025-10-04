<template>
  <nav
    class="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300 py-3"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="relative left-[-140px] flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div
              class="w-10 h-10 bg-gradient-to-r from-[var(--couleur-hover)] to-[var(--couleur-bgbtn)] rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-store text-white text-lg"></i>
            </div>
            <span class="text-3xl font-bold text-gray-800 dark:text-white">
              <span class="text-[var(--couleur-hover)]">E-</span>Com</span
            >
          </router-link>
        </div>

        <!-- Liens de navigation - Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-[var(--couleur-hover)] dark:hover:text-[var(--couleur-hover)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            <i class="fas fa-home mr-2"></i>
            Accueil
          </router-link>
          <router-link
            to="/product"
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-[var(--couleur-hover)] dark:hover:text-[var(--couleur-hover)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Product
          </router-link>
        </div>

        <!-- Barre de recherche -->
        <div class="hidden lg:block flex-1 max-w-md mx-8">
          <div class="relative" :class="{ 'ring-2 ring-blue-500 rounded-lg': isSearchFocused }">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher..."
              class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
              @focus="isSearchFocused = true"
              @blur="isSearchFocused = false"
              @keyup.enter="performSearch"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i class="fas fa-search text-gray-400"></i>
            </div>
          </div>
        </div>
        <div>
          <router-link
            to="/about"
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-[var(--couleur-hover)] dark:hover:text-[var(--couleur-hover)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            <i class="fas fa-info-circle mr-2"></i>
            Abouts
          </router-link>

          <router-link
            to="/contact"
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-[var(--couleur-hover)] dark:hover:text-[var(--couleur-hover)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            <i class="fas fa-envelope mr-2"></i>
            Contact
          </router-link>
        </div>
        <!-- Actions utilisateur -->
        <div class="flex items-center space-x-4">
          <!-- Barre de recherche mobile -->
          <button
            @click="toggleMobileSearch"
            class="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <i class="fas fa-search"></i>
          </button>

          <!-- Panier -->
          <div class="relative">
            <button
              @click="toggleCart"
              class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 relative"
            >
              <i class="fas fa-shopping-cart"></i>
              <span
                v-if="cartItemsCount > 0"
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
              >
                {{ cartItemsCount }}
              </span>
            </button>
            <!-- Panier déroulant -->
            <div
              v-if="isCartOpen"
              class="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
            >
              <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                <div class="flex justify-between items-center">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Votre Panier</h3>
                  <button
                    @click="closeCart"
                    class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <div class="max-h-96 overflow-y-auto">
                <div v-if="cartItems.length === 0" class="p-8 text-center">
                  <i
                    class="fas fa-shopping-cart text-gray-300 dark:text-gray-600 text-4xl mb-4"
                  ></i>
                  <p class="text-gray-500 dark:text-gray-400">Votre panier est vide</p>
                </div>

                <div v-else>
                  <div
                    v-for="item in cartItems"
                    :key="item.id"
                    class="p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                  >
                    <div class="flex items-center space-x-3">
                      <img
                        :src="item.image"
                        :alt="item.name"
                        class="w-12 h-12 rounded-lg object-cover"
                      />
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-800 dark:text-white truncate">
                          {{ item.name }}
                        </p>
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

              <div
                v-if="cartItems.length > 0"
                class="p-4 border-t border-gray-200 dark:border-gray-700"
              >
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

          <!-- Connexion -->
          <div class="">
            <router-link
              to="/sign"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              <svg class="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
                />
              </svg>
            </router-link>
          </div>
          <!-- Profil utilisateur -->
          <div class="relative">
            <!-- <button 
              @click="toggleProfileMenu"
              class="flex items-center space-x-2 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white font-medium text-sm">{{ user.name.charAt(0) }}</span>
              </div>
            </button> -->

            <!-- Menu profil déroulant -->
            <div
              v-if="isProfileMenuOpen"
              class="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
            >
              <!-- <div class="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                    <span class="font-bold text-lg">{{ user.name.charAt(0) }}</span>
                  </div>
                  <div>
                    <p class="font-semibold">{{ user.name }}</p>
                    <p class="text-blue-100 text-sm">{{ user.email }}</p>
                  </div>
                </div>
              </div> -->

              <!-- <div class="p-2">
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
              </div> -->
            </div>
          </div>

          <!-- Menu mobile -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <!-- Barre de recherche mobile -->
      <div v-if="isMobileSearchOpen" class="lg:hidden pb-4">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher..."
            class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
            @keyup.enter="performSearch"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fas fa-search text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- Menu mobile -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-700 pt-4 pb-4"
      >
        <div class="flex flex-col space-y-2">
          <router-link
            to="/"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
          >
            <i class="fas fa-home w-5"></i>
            <span>Accueil</span>
          </router-link>

          <router-link
            to="/about"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
          >
            <i class="fas fa-info-circle w-5"></i>
            <span>À propos</span>
          </router-link>

          <router-link
            to="/contact"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
          >
            <i class="fas fa-envelope w-5"></i>
            <span>Contact</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// export default {
//   name: 'Navbar',
//   data() {
//     return {
//       isScrolled: false,
//       isMobileMenuOpen: false,
//       isMobileSearchOpen: false,
//       isSearchFocused: false,
//       isCartOpen: false,
//       isProfileMenuOpen: false,
//       searchQuery: '',
//       cartItems: [
//         {
//           id: 1,
//           name: 'Produit Exemple',
//           price: 29.99,
//           quantity: 1,
//           image: 'https://via.placeholder.com/50'
//         }
//       ],
//       user: {
//         name: 'Frymce',
//         email: 'frymce@email.com'
//       }
//     }
//   },
//   computed: {
//     cartItemsCount() {
//       return this.cartItems.reduce((total, item) => total + item.quantity, 0)
//     },
//     cartTotal() {
//       return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
//     }
//   },
//   mounted() {
//     this.handleScroll()
//     window.addEventListener('scroll', this.handleScroll)
//     document.addEventListener('click', this.handleClickOutside)
//   },
//   beforeUnmount() {
//     window.removeEventListener('scroll', this.handleScroll)
//     document.removeEventListener('click', this.handleClickOutside)
//   },
//   methods: {
//     handleScroll() {
//       this.isScrolled = window.scrollY > 10
//     },

//     toggleMobileMenu() {
//       this.isMobileMenuOpen = !this.isMobileMenuOpen
//       if (this.isMobileMenuOpen) {
//         this.isMobileSearchOpen = false
//       }
//     },

//     closeMobileMenu() {
//       this.isMobileMenuOpen = false
//     },

//     toggleMobileSearch() {
//       this.isMobileSearchOpen = !this.isMobileSearchOpen
//       if (this.isMobileSearchOpen) {
//         this.isMobileMenuOpen = false
//       }
//     },

//     performSearch() {
//       if (this.searchQuery.trim()) {
//         this.$router.push(`/search?q=${encodeURIComponent(this.searchQuery)}`)
//         this.searchQuery = ''
//         this.isMobileSearchOpen = false
//       }
//     },

//     toggleCart() {
//       this.isCartOpen = !this.isCartOpen
//       if (this.isCartOpen) {
//         this.isProfileMenuOpen = false
//       }
//     },

//     closeCart() {
//       this.isCartOpen = false
//     },

//     toggleProfileMenu() {
//       this.isProfileMenuOpen = !this.isProfileMenuOpen
//       if (this.isProfileMenuOpen) {
//         this.isCartOpen = false
//       }
//     },

//     closeProfileMenu() {
//       this.isProfileMenuOpen = false
//     },

//     increaseQuantity(itemId) {
//       const item = this.cartItems.find(item => item.id === itemId)
//       if (item) {
//         item.quantity++
//       }
//     },

//     decreaseQuantity(itemId) {
//       const item = this.cartItems.find(item => item.id === itemId)
//       if (item && item.quantity > 1) {
//         item.quantity--
//       } else {
//         this.cartItems = this.cartItems.filter(item => item.id !== itemId)
//       }
//     },

//     goToCheckout() {
//       this.$router.push('/checkout')
//       this.closeCart()
//     },

//     logout() {
//       console.log('Déconnexion...')
//       this.closeProfileMenu()
//     },

//     handleClickOutside(event) {
//       if (!event.target.closest('.relative')) {
//         this.isCartOpen = false
//         this.isProfileMenuOpen = false
//       }
//     }
//   }
// }
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// State
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileSearchOpen = ref(false)
const isSearchFocused = ref(false)
const isCartOpen = ref(false)
const isProfileMenuOpen = ref(false)
const searchQuery = ref('')

const cartItems = ref([
  {
    id: 1,
    name: 'Kiss',
    price: 29.99,
    quantity: 1,
    image: 'https://via.placeholder.com/50',
  },
])

const user = ref({
  name: 'Frymce',
  email: 'frymce@email.com',
})

// Computed
const cartItemsCount = computed(() =>
  cartItems.value.reduce((total, item) => total + item.quantity, 0),
)

const cartTotal = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),
)

// Methods
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) isMobileSearchOpen.value = false
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleMobileSearch = () => {
  isMobileSearchOpen.value = !isMobileSearchOpen.value
  if (isMobileSearchOpen.value) isMobileMenuOpen.value = false
}

const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push(`/search?q=${encodeURIComponent(searchQuery.value)}`)
    searchQuery.value = ''
    isMobileSearchOpen.value = false
  }
}

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value
  if (isCartOpen.value) isProfileMenuOpen.value = false
}

const closeCart = () => {
  isCartOpen.value = false
}

const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
  if (isProfileMenuOpen.value) isCartOpen.value = false
}

const closeProfileMenu = () => {
  isProfileMenuOpen.value = false
}

const increaseQuantity = (itemId) => {
  const item = cartItems.value.find((item) => item.id === itemId)
  if (item) item.quantity++
}

const decreaseQuantity = (itemId) => {
  const item = cartItems.value.find((item) => item.id === itemId)
  if (item && item.quantity > 1) {
    item.quantity--
  } else {
    cartItems.value = cartItems.value.filter((item) => item.id !== itemId)
  }
}

const goToCheckout = () => {
  router.push('/checkout')
  closeCart()
}

const logout = () => {
  console.log('Déconnexion...')
  closeProfileMenu()
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    isCartOpen.value = false
    isProfileMenuOpen.value = false
  }
}

// Lifecycle
onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Styles spécifiques supplémentaires si nécessaire */
.nav-link {
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: var(--couleur-hover);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 80%;
}
</style>
