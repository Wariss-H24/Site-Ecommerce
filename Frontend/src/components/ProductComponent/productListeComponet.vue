<script setup>
import { ref, onMounted } from 'vue'

const produits = ref([])

onMounted(() => {
  fetch('http://localhost:4000/api/E-commerceProduits')
    .then(response => {
      if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`)
      return response.json()
    })
    .then(data => {
      produits.value = data.products   // 👈 bien accéder à "products"
      console.log('Produits reçus :', produits.value)
    })
    .catch(error => {
      console.error('Erreur lors du chargement des produits :', error)
    })
})
</script>

<template>
  <div>
    <h2>Liste des Produits</h2>
    <ul>
      <li v-for="p in produits" :key="p.id">{{ p.title }} - {{ p.price }}€</li>
    </ul>
  </div>
</template>
