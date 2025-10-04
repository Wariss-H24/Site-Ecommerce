<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
    type : Array                                                                                         
})

const produc= ref("product")



</script>

<template>
  <div>
   
    <div class="productlist  my-[40px] mx-[50px]">
        <div  v-for="product in props.type"  :key="product.id" class=" w-90 h-120 bg-[var(--couleur-bgnav)] pl-6 pr-2  border-[#eeeeee] border-1" >
            <div class="text-right p-2.5">
                {{  product.discountPercentage }}%
            </div>
            <div>
                <img class="w-70" :src="product.images[0]" alt="product.title"></img>
            </div>
            <div class="flex mt-3 justify-between items-center">
                <div class="flex ">
                    <img class="w-5 mr-1" src="../../asset/us.jpg" alt=""><span class="text-[12px]">US-Boutique</span>
                </div>
                <p class="font-semibold">{{ product.category }}</p>
            </div>
            <h1 class="text-base font-bold py-2">{{ product.title }}</h1>
            <!-- <p class="text-[#979da3] text-[14px] font-medium " >  {{ product.description }}</p> -->
            <div class="flex justify-between items-center ">
                <h3 class="font-semibold mt-6">{{ product.price }}$</h3>
                <div>
                <RouterLink :to="{ name : 'ProductDetails', params : { id :product.id} }">
                    Voir Details
                </RouterLink>
                </div>
            
            </div>
            <div  >
                <div class=" flex p-2 justify-evenly items-center">
                    <i class="fa-solid fa-cart-plus"></i><span>Ajouter au panier</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
 .productlist{
        display: flex;
        
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; 
        transition: 0.6s;
}
</style>
