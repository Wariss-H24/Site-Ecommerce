<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
    <div class="max-w-md w-full">
      <!-- Carte d'authentification -->
      <div class=" dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <!-- En-tête avec onglets -->
        <div class="p-6">
          <div class="flex space-x-4">
            <button
              @click="setActiveTab('login')"
              class="flex-1 py-3 px-4 rounded-lg text-center transition-all duration-300"
              :class="activeTab === 'login' 
                ? 'text-black-700 shadow-lg transform scale-105' 
                : 'bg-white/20 text-black/50 hover:bg-white/30'"
            >
              <i class="fas fa-sign-in-alt mr-2"></i>
              Login 
            </button>
            <button
              @click="setActiveTab('register')"
              class="flex-1 py-3 px-4 rounded-lg text-center transition-all duration-300"
              :class="activeTab === 'register' 
                ? 'text-black-700 shadow-lg transform scale-105' 
                : 'bg-white/20 text-black/50 hover:bg-white/30'"
            >
              <i class="fas fa-user-plus mr-2"></i>
              Register
            </button>
          </div>
        </div>

        <!-- Contenu du formulaire -->
        <div class="p-6">
          <!-- Formulaire de connexion -->
          <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <i class="fas fa-envelope mr-2"></i>Email
              </label>
              <input
                v-model="loginForm.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="votre@email.com"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <i class="fas fa-lock mr-2"></i>Mot de passe
              </label>
              <div class="relative">
                <input
                  v-model="loginForm.password"
                  :type="showLoginPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors pr-12"
                  placeholder="Votre mot de passe"
                >
                <button
                  type="button"
                  @click="showLoginPassword = !showLoginPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <i :class="showLoginPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input
                  v-model="loginForm.remember"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                >
                <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Se souvenir de moi</span>
              </label>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400">
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full hover:bg-white/50 disabled:bg-blue-400 text-black py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <i v-if="loading" class="fas fa-spinner fa-spin mr-2"></i>
              <i v-else class="fas fa-sign-in-alt mr-2"></i>
              {{ loading ? 'Connexion...' : 'Se connecter' }}
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
                @click="socialLogin('google')"
                class="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <i class="fab fa-google text-red-500 mr-2"></i>
                <span class="text-sm font-medium">Google</span>
              </button>
              <button
                type="button"
                @click="socialLogin('facebook')"
                class="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <i class="fab fa-facebook text-blue-600 mr-2"></i>
                <span class="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </form>

          <!-- Formulaire d'inscription -->
          <form v-else @submit.prevent="handleRegister" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <i class="fas fa-user mr-2"></i>Prénom
                </label>
                <input
                  v-model="registerForm.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Votre prénom"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <i class="fas fa-user mr-2"></i>Nom
                </label>
                <input
                  v-model="registerForm.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Votre nom"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <i class="fas fa-envelope mr-2"></i>Email
              </label>
              <input
                v-model="registerForm.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="votre@email.com"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <i class="fas fa-lock mr-2"></i>Mot de passe
              </label>
              <div class="relative">
                <input
                  v-model="registerForm.password"
                  :type="showRegisterPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors pr-12"
                  placeholder="Créez un mot de passe"
                >
                <button
                  type="button"
                  @click="showRegisterPassword = !showRegisterPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <i :class="showRegisterPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
              <div class="mt-2 space-y-1 flex">
                <div class="flex items-center text-xs" :class="passwordStrength.length ? 'text-green-500' : 'text-gray-500'">
                  <i class="fas fa-check mr-1"></i>
                  <span>8 caractères minimum</span>
                </div>
                <div class="flex items-center text-xs" :class="passwordStrength.uppercase ? 'text-green-500' : 'text-gray-500'">
                  <i class="fas fa-check mr-1"></i>
                  <span>1 lettre majuscule</span>
                </div>
                <div class="flex items-center text-xs" :class="passwordStrength.number ? 'text-green-500' : 'text-gray-500'">
                  <i class="fas fa-check mr-1"></i>
                  <span>1 chiffre</span>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <i class="fas fa-lock mr-2"></i>Confirmer le mot de passe
              </label>
              <div class="relative">
                <input
                  v-model="registerForm.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors pr-12"
                  placeholder="Confirmez votre mot de passe"
                >
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
              <div v-if="registerForm.confirmPassword && !passwordsMatch" class="text-red-500 text-xs mt-1">
                <i class="fas fa-exclamation-triangle mr-1"></i>
                Les mots de passe ne correspondent pas
              </div>
            </div>

            <label class="flex items-start">
              <input
                v-model="registerForm.agreeTerms"
                type="checkbox"
                required
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
              >
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                J'accepte les 
                <a href="#" class="text-blue-600 hover:text-blue-500 dark:text-blue-400">conditions d'utilisation</a>
                et la 
                <a href="#" class="text-blue-600 hover:text-blue-500 dark:text-blue-400">politique de confidentialité</a>
              </span>
            </label>

            <button
              type="submit"
              :disabled="loading || !passwordsMatch || !isPasswordStrong"
              class="w-full bg-green-500 hover:bg-[var(--)] disabled:bg-green-400 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <i v-if="loading" class="fas fa-spinner fa-spin mr-2"></i>
              <i v-else class="fas fa-user-plus mr-2"></i>
              {{ loading ? 'Création du compte...' : 'Créer un compte' }}
            </button>
          </form>
        </div>

        <!-- Pied de page -->
        <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
          <p class="text-center text-sm text-gray-600 dark:text-gray-400">
            {{ activeTab === 'login' ? "Pas encore de compte ?" : "Déjà un compte ?" }}
            <button
              @click="toggleTab"
              class="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
            >
              {{ activeTab === 'login' ? "S'inscrire" : "Se connecter" }}
            </button>
          </p>
        </div>
      </div>

      <!-- Messages d'alerte -->
      <div v-if="message" class="mt-4 p-4 rounded-lg transition-all duration-300" :class="messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
        <div class="flex items-center">
          <i :class="messageType === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle'" class="mr-2"></i>
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthComponent',
  data() {
    return {
      activeTab: 'login',
      loading: false,
      showLoginPassword: false,
      showRegisterPassword: false,
      showConfirmPassword: false,
      message: '',
      messageType: 'success',
      loginForm: {
        email: '',
        password: '',
        remember: false
      },
      registerForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      }
    }
  },
  computed: {
    passwordsMatch() {
      return this.registerForm.password === this.registerForm.confirmPassword
    },
    passwordStrength() {
      const password = this.registerForm.password
      return {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        number: /[0-9]/.test(password)
      }
    },
    isPasswordStrong() {
      return Object.values(this.passwordStrength).every(Boolean)
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab
      this.clearMessages()
    },
    
    toggleTab() {
      this.activeTab = this.activeTab === 'login' ? 'register' : 'login'
      this.clearMessages()
    },
    
    clearMessages() {
      this.message = ''
    },
    
    async handleLogin() {
      this.loading = true
      this.clearMessages()
      
      try {
        // Simulation d'appel API
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Ici, vous intégreriez votre vraie logique d'authentification
        console.log('Tentative de connexion:', this.loginForm)
        
        this.showMessage('Connexion réussie ! Redirection...', 'success')
        
        // Redirection après connexion réussie
        setTimeout(() => {
          this.$router.push('/dashboard')
        }, 2000)
        
      } catch (error) {
        this.showMessage('Erreur de connexion. Vérifiez vos identifiants.', 'error')
      } finally {
        this.loading = false
      }
    },
    
    async handleRegister() {
      if (!this.passwordsMatch) {
        this.showMessage('Les mots de passe ne correspondent pas.', 'error')
        return
      }
      
      if (!this.isPasswordStrong) {
        this.showMessage('Le mot de passe n\'est pas assez fort.', 'error')
        return
      }
      
      this.loading = true
      this.clearMessages()
      
      try {
        // Simulation d'appel API
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Ici, vous intégreriez votre vraie logique d'inscription
        console.log('Tentative d\'inscription:', this.registerForm)
        
        this.showMessage('Compte créé avec succès ! Vous pouvez maintenant vous connecter.', 'success')
        
        // Basculer vers l'onglet de connexion après inscription
        setTimeout(() => {
          this.activeTab = 'login'
          this.registerForm = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreeTerms: false
          }
        }, 2000)
        
      } catch (error) {
        this.showMessage('Erreur lors de la création du compte. Veuillez réessayer.', 'error')
      } finally {
        this.loading = false
      }
    },
    
    socialLogin(provider) {
      this.showMessage(`Connexion avec ${provider}...`, 'success')
      // Intégration avec les APIs OAuth
      console.log(`Social login with ${provider}`)
    },
    
    showMessage(text, type) {
      this.message = text
      this.messageType = type
    }
  }
}
</script>

<style scoped>
/* Animations personnalisées */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Style pour la force du mot de passe */
.password-strength {
  transition: all 0.3s ease;
}

input{
    outline: none;
}
</style>