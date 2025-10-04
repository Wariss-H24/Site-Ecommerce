<script setup>
import { ref, onMounted } from "vue"
import { useRoute,useRouter } from "vue-router"
const router =useRouter()
const route = useRoute()              // Permet de récupérer l'ID passé dans l'URL
const Uniqueproduct = ref(null)             // Stockera le produit
const URL ="http://localhost:4000/api/E-commerceProduits"

onMounted(async () => {
  try {
    const resp = await fetch(`${URL}/${route.params.id}`) // On récupère un produit par son id
    const data = await resp.json()
    Uniqueproduct.value = data
    console.log("Produit récupéré :", Uniqueproduct.value)
  } catch (error) {
    console.error("Erreur fetch:", error)
  }
})


function Details() {
    router.push({ name : "product" })
}
</script>


<template>

  <div class="px-[80px] py-6">
    <div v-if="Uniqueproduct" class="bg-white rounded-[20px] shadow p-6">
      <img :src="Uniqueproduct.thumbnail" alt="product.title" class="w-60 mb-4 rounded-lg" />

      <h1 class="text-2xl font-bold">{{ Uniqueproduct.title }}</h1>
      <p class="text-[#979da3] text-[15px] mt-2">{{ Uniqueproduct.description }}</p>

      <div class="flex justify-between items-center mt-6">
        <span class="text-xl font-semibold">{{ Uniqueproduct.price }} $</span>
      </div>
      <button @click="Details">Voir Produit</button>
    </div>

    <div v-else class="text-center text-gray-500">
      Chargement du produit...
    </div>
  </div>

</template>


<style scoped>


</style>