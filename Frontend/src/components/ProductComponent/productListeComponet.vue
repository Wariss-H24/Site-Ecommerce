<script setup>
import { ref, onMounted } from 'vue'

const produits = ref([])

const URL ='http://localhost:4000/api/E-commerceProduits'

onMounted(async ()=> {
    try {
        //Attendre une reponse de la requete
        const response = await fetch(URL)
        //Parse notre Json
        const data = await response.json()
        produits.value = data.products
    } catch (error) {
      console.error('Erreur lors du chargement des produits :', error)
    }
})
// onMounted(() => {
//   fetch('http://localhost:4000/api/E-commerceProduits')
//     .then(response => {
//       if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`)
//       return response.json()
//     })
//     .then(data => {
//       produits.value = data.products   // 👈 bien accéder à "products"
//       console.log('Produits reçus :', produits.value)
//     })
//     .catch(error => {
//       console.error('Erreur lors du chargement des produits :', error)
//     })
// })

</script>

<template>
  <div>
   
    <div class="productlist px-[20px] mb-[30px] ">
        <div  v-for="product in produits"  :key="product.id" :class="produc" class=" w-75 h-105 bg-[#ffffff] pl-6 pr-2 rounded-[20px] border-[#d9d9d9]" >
            <div>
                <img class="w-42" :src="product.images[0]" alt="product.title"></img>
            </div>
            <div class="flex mt-3 justify-between items-center">
                <div class="flex ">
                    <img class="w-5 mr-1" src="../../asset/us.jpg" alt=""><span class="text-[9px]">US-Boutique</span>
                </div>
                <p class="font-semibold">{{ product.category }}</p>
            </div>
            <h1 class="text-base font-bold py-2">{{ product.title }}</h1>
            <p class="text-[#979da3] text-[14px] font-medium " >  {{ product.description }}</p>
            <div class="flex justify-between items-center ">
                <div><h3 class="font-semibold mt-6">{{ product.price }}$</h3></div>
               
            </div>
            <div class="pt-[20px] flex " >
                <div class=" flex p-2 rounded-[8px]">
                    <img  src="../../asset/add_shopping.png" alt="ADD SHOPPING">Add To cart</img>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
 .productlist{
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; 
        transition: 0.6s;
}
</style>
