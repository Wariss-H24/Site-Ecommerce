<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
    <div class="max-w-3xl w-full">
      <!-- Carte de connexion -->
      <div class="bg-gray dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <!-- En-tête -->
        <div class="p-6 text-center">
          <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-sign-in-alt text-yellow-500 text-2xl"></i>
          </div>
          <h2 class="text-2xl font-bold text-black">Connexion</h2>
          <p class="text-gray-500 mt-2">Accédez à votre compte</p>
        </div>

        <!-- Formulaire -->
        <div class="p-6">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <i class="fas fa-envelope mr-2"></i>Email
              </label>
              <input 
                v-model="v"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="votre@email.com"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <i class="fas fa-lock mr-2"></i>Mot de passe
              </label>
              <div class="relative">
                <input 
                  v-model="v"
                  type="password"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:text-white transition-colors pr-12"
                  placeholder="Votre mot de passe"
                >
                <button
                  type="button"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <i class="fas fa-eye"></i>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input 
                  v-model="v"
                  type="checkbox"
                  class="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                >
                <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Se souvenir de moi</span>
              </label>
              <a href="#" class="text-sm text-yellow-600 hover:text-yellow-500 dark:text-yellow-400">
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              class="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <i class="fas fa-sign-in-alt mr-2"></i>
              Se connecter
            </button>

            <!-- Séparateur -->
            <div class="relative flex items-center py-4">
              <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              <span class="flex-shrink mx-4 text-sm text-gray-500 dark:text-gray-400">Ou continuer avec</span>
              <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div>

            <!-- Connexion sociale -->
            <div class="grid grid-cols-2 gap-3">
              <button
                type="button"
                class="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <i class="fab fa-google text-red-500 mr-2"></i>
                <span class="text-sm font-medium">Google</span>
              </button>
              <button
                type="button"
                class="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <i class="fab fa-facebook text-blue-600 mr-2"></i>
                <span class="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Pied de page -->
        <div @click=""
         class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
          <p class="text-center text-sm text-gray-600 dark:text-gray-400">
            Pas encore de compte ?
            <router-link to="/register" class="text-yellow-600 hover:text-yellow-500 dark:text-yellow-400 font-medium ml-1">S'inscrire</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
input{
  outline: none;
}
</style>