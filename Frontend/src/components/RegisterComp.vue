<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const prenom = ref('');
const nom = ref('');
const email =ref('');
const password = ref('');
const confirmPassword =ref('')

const handleRegister = async (e)=> {
  e.preventDefault()

  if(password.value.trim() !== confirmPassword.value.trim()) {
     alert('Les mots de passe ne correspondent pas');
    return;
  }

  //Je veux fetcher mon API cree pour l'inscription

  const resp = await fetch('http://localhost:4000/api/auth/register',{
    method : 'POST',
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify({
      email : email.value,
      password : password.value,
      // confirmPassword : confirmPassword.value
    })
  });

  if(resp.ok){
        alert('Inscription réussie ! Vérifiez votre email.');
        // redirection vers la page de connexion
        // router.push('/signUp'); 
        router.push(`/verify?email=${encodeURIComponent(email.value)}`);
        // prenom.value = '';
        // nom.value = '';
        // email.value = '';
        // password.value = '';
  }else{
  const data = await resp.json(); // Ajoute cette ligne
  alert(data.message);

  }
}




</script>
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4"
  >
    <div class="max-w-3xl w-full">
      <!-- Carte d'inscription -->
      <div class="bg-gray dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <!-- En-tête -->
        <div class="p-6 text-center">
          <div
            class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <i class="fas fa-user-plus text-gray-500 text-2xl"></i>
          </div>
          <h2 class="text-2xl font-bold text-black">Inscription</h2>
          <p class="text-black-100 mt-2">Créez votre compte</p>
        </div>

        <!-- Formulaire -->
        <div class="p-6">
          <form class="space-y-4" @submit="handleRegister">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <i class="fas fa-user mr-2"></i>Prénom
                </label>
                <input v-model="prenom"  type="text" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white transition-colors"placeholder="Votre prénom" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <i class="fas fa-user mr-2"></i>Nom
                </label>
                <input v-model="nom"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <i class="fas fa-envelope mr-2"></i>Email
              </label>
              <input v-model="email" type="email"required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <i class="fas fa-lock mr-2"></i>Mot de passe
              </label>
              <div class="relative">
                <input v-model="password"
                  type="password"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white transition-colors pr-12"
                  placeholder="Créez un mot de passe"
                />
                <button
                  type="button"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <i class="fas fa-eye"></i>
                </button>
              </div>
              <div class="mt-2 space-y-1 flex">
                <div class="flex items-center text-xs text-gray-500">
                  <i class="fas fa-check mr-1"></i>
                  <span>8 caractères minimum</span>
                </div>
                <div class="flex items-center text-xs text-gray-500">
                  <i class="fas fa-check mr-1"></i>
                  <span>1 lettre majuscule</span>
                </div>
                <div class="flex items-center text-xs text-gray-500">
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
                <input type="password" v-model="confirmPassword"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white transition-colors pr-12"
                  placeholder="Confirmez votre mot de passe"
                />
                <button
                  type="button"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <i class="fas fa-eye"></i>
                </button>
              </div>
            </div>

            <label class="flex items-start">
              <input
                type="checkbox"
                required
                class="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500 mt-1"
              />
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                J'accepte les
                <a href="#" class="text-gray-900 hover:text-gray-500 dark:text-gray-400"
                  >conditions d'utilisation</a
                >
                et la
                <a href="#" class="text-gray-900 hover:text-gray-500 dark:text-gray-400"
                  >politique de confidentialité</a
                >
              </span>
            </label>

            <button
              type="submit"
              class="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <i class="fas fa-user-plus mr-2"></i>
              Créer un compte
            </button>
          </form>
        </div>

        <!-- Pied de page -->
        <div
          class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600"
        >
          <p class="text-center text-sm text-gray-600 dark:text-gray-400">
            Déjà un compte ?
            <router-link
              to="/signUp"
              class="text-gray-600 hover:text-gray-500 dark:text-green-400 font-medium ml-1"
              >Se connecter</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
input {
  outline: none;
}
</style>
