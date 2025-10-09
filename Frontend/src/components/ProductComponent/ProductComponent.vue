<script setup>
import { computed, onMounted, ref } from 'vue'
import ProductListeComponet from './productListeComponet.vue'
import ProductCategorie from '@/views/ProductCategorie.vue'
import FooterComp from '@/layout/footerComp.vue'

const fetchEL = ref([])
let category = ref()

const URL = 'http://localhost:4000/api/E-commerceProduits'

onMounted(async () => {
  try {
    //Attendre une reponse de la requete
    const response = await fetch(URL)
    //Parse notre Json
    const data = await response.json()
    console.log('Données reçues :', data)
    fetchEL.value = data.products
    console.log('Produits chargés :', fetchEL.value)
  } catch (error) {
    console.error('Erreur lors du chargement des produits :', error)
  }
})

function ReceiveCategorie(el) {
  category.value = el
  console.log(category.value)
}

const getCategorie = computed(() => {
  let fiterDCategory = fetchEL.value
  if (!category.value) {
    return fiterDCategory
  } else {
    fiterDCategory = fiterDCategory.filter((p) => p.category === category.value)
    return fiterDCategory
  }
})
</script>

<template>
  <ProductCategorie :tab="fetchEL" @SendCategorie="ReceiveCategorie" />
  <ProductListeComponet :type="getCategorie" />
  <FooterComp/>
</template>

<style scoped></style>
