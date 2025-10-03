<script setup>


</script>


<template>

    <div class="">
<footer class="bg-gray-900 text-white">
        <!-- Section principale -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Colonne Logo et description -->
                <div class="lg:col-span-1">
                    <div class="flex items-center space-x-3 mb-4">
                        <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                            <i class="fas fa-store text-white text-lg"></i>
                        </div>
                        <span class="text-xl font-bold">MonShop</span>
                    </div>
                    <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                        Votre destination de shopping en ligne préférée. Découvrez les meilleurs produits aux prix les plus compétitifs.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all">
                            <i class="fab fa-facebook-f text-sm"></i>
                        </a>
                        <a href="#" class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all">
                            <i class="fab fa-twitter text-sm"></i>
                        </a>
                        <a href="#" class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500 transition-all">
                            <i class="fab fa-instagram text-sm"></i>
                        </a>
                        <a href="#" class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                            <i class="fab fa-linkedin-in text-sm"></i>
                        </a>
                    </div>
                </div>

                <!-- Colonne Liens rapides -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Liens Rapides</h3>
                    <ul class="space-y-3">
                        <li>
                          <router-link to="/home" class="text-gray-400 hover:text-white transition-colors flex items-center group">
                            <i class="fas fa-home mr-3 text-sm group-hover:text-blue-400 transition-colors"></i>
                            Accueil
                          </router-link>
                        </li>
                        <li>
                            <router-link to="/product" class="text-gray-400 hover:text-white transition-colors flex items-center group">
                                <i class="fas fa-shopping-bag mr-3 text-sm group-hover:text-green-400 transition-colors"></i>
                                Produits
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/about" class="text-gray-400 hover:text-white transition-colors flex items-center group">
                                <i class="fas fa-info-circle mr-3 text-sm group-hover:text-yellow-400 transition-colors"></i>
                                À propos
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact" class="text-gray-400 hover:text-white transition-colors flex items-center group">
                                <i class="fas fa-envelope mr-3 text-sm group-hover:text-red-400 transition-colors"></i>
                                Contact
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Colonne Catégories -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Catégories</h3>
                    <ul class="space-y-3">
                        <li>
                            <router-link to="" class="text-gray-400 hover:text-white transition-colors flex items-center group">
                                <i class="fas fa-laptop mr-3 text-sm group-hover:text-purple-400 transition-colors"></i>
                                Électronique
                            </router-link>
                        </li>
                        <li>
                            <router-link to="" class="text-gray-400 hover:text-white transition-colors flex items-center group">
                                <i class="fas fa-tshirt mr-3 text-sm group-hover:text-pink-400 transition-colors"></i>
                                Mode
                            </router-link>
                        </li>
                        <li>
                            <router-link to="" class="text-gray-400 hover:text-white transition-colors flex items-center group">
                                <i class="fas fa-home mr-3 text-sm group-hover:text-orange-400 transition-colors"></i>
                                Maison
                            </router-link>
                        </li>
                        <li>
                            <router-link to="" class="text-gray-400 hover:text-white transition-colors flex items-center group">
                                <i class="fas fa-dumbbell mr-3 text-sm group-hover:text-green-400 transition-colors"></i>
                                Sport
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Colonne Contact -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact</h3>
                    <div class="space-y-3">
                        <div class="flex items-center text-gray-400">
                            <i class="fas fa-map-marker-alt mr-3 text-blue-400"></i>
                            <span class="text-sm">123 Rue Example, Paris 75000</span>
                        </div>
                        <div class="flex items-center text-gray-400">
                            <i class="fas fa-phone mr-3 text-green-400"></i>
                            <span class="text-sm">+33 1 23 45 67 89</span>
                        </div>
                        <div class="flex items-center text-gray-400">
                            <i class="fas fa-envelope mr-3 text-yellow-400"></i>
                            <span class="text-sm">contact@monshop.com</span>
                        </div>
                        <div class="flex items-center text-gray-400">
                            <i class="fas fa-clock mr-3 text-purple-400"></i>
                            <span class="text-sm">Lun-Ven: 9h-18h</span>
                        </div>
                    </div>
                    
                    <!-- Newsletter -->
                    <div class="mt-6">
                        <h4 class="text-sm font-semibold mb-2">Newsletter</h4>
                        <div class="flex">
                            <input 
                                type="email" 
                                placeholder="Votre email" 
                                class="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm"
                            >
                            <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-colors">
                                <i class="fas fa-paper-plane text-sm"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section inférieure -->
        <div class="border-t border-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2024 MonShop. Tous droits réservés.
                    </div>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
                            Politique de confidentialité
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
                            Conditions d'utilisation
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
                            Mentions légales
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>

</template>


<style scoped>


</style>