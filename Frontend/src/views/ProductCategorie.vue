<script setup>
import { onMounted, ref, watch } from 'vue';

//    const props = defineProps({
//     tab : Array                                                                                                               
// })

const emit =defineEmits(["SendCategorie"])
const catfetch = ref([])
const UniqueCategory =ref([])
const URL ='http://localhost:4000/api/E-commerceProduits'

function SeletCat(e) {
    emit("SendCategorie",e.target.textContent)
    // console.log(e.target.textContent)
}


onMounted(async()=>{
    try{
        const resp = await fetch(URL)
        const data = await resp.json()
        catfetch.value = data.products

        UniqueCategory.value= [...new Set(catfetch.value.map(p => p.category))]
        console.log(UniqueCategory.value);
        
    }catch(error){
        return `Erreur fetch:, ${error}`
    }
})


//Eviter les doublos de category
// const UniqueCategory = [...new Set(props.tab.value)]
</script>


<template>

<section class="ml-40 pt-5">
    <div class="w-[200px] h-60 pl-[30px] bg-[#ffffff] ml-10" >
        <h4 class=" w-35 pb-[5px] font-bold text-[15px] mt-1 pt-3">My Categorise</h4>
        <div class="pt-2" v-for="categorie in UniqueCategory" :key="categorie.id" >
            <div class="" @click="SeletCat">
                <p class="font-semibold my-[8px] capitalize">{{ categorie }}</p>
            </div>
        </div>
    </div>
</section>

</template>


<style scoped>


</style>