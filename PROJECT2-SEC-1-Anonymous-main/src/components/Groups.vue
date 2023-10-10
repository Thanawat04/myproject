<script setup>
import { ref, onMounted } from 'vue';
import { getGroups } from '../composable/getGroups.js'
const groups = ref([])
let groupLimit = ref(true)
onMounted(async () => {
  groups.value = await getGroups()
  checkGroup()
})  
function checkGroup(){
    if (groups.value.length >= 4){
      groupLimit.value = false
    }else {
      groupLimit.value = true
    }
  }
const deleteGroup= async (deleteId)=>{
 try{
const res = await fetch(`http://localhost:3000/groups/${deleteId}`,{
  method:'DELETE'
})
if(res.ok){
  groups.value= groups.value.filter((group)=>{
    return group.id!==deleteId
  })
  checkGroup()
}else{
  throw new Error('Error, cannot delete data!!')
}
 }
 catch (err){
console.log(err)
 }
}
defineEmits(['onShow', 'onEdit','onPlay'])
</script>
 
<template>
<div class="flex flex-col h-screen" style="background-color: #2A303C;color: #A6ADBB">
    <div>
        <h1 class=" text-center text-6xl m-10" style="font-family: researcher;">Choose Your Group</h1>
    </div>

    <div class=" justify-center flex flex-row h-5/6">

      <div v-for="(item,index) of groups" :key="index" class="flex flex-col w-1/4 h-4/5 bg-gray-300  mx-10 mt-10 rounded-xl">
            <div class="pt-16"> 
                <p class=" text-center text-4xl font-bold text-black">{{ item.groupName }}</p>  
                
            </div>
            <div class="mt-auto">
                <p class=" text-center text-xl text-black mb-5">Number Of Player</p>
                <p class=" text-center text-3xl text-black font-bold">{{ item.numOfPlayer }}</p>
            </div>
            <div class="flex flex-col pb-10 mt-auto">
                <button class=" font-bold hover:bg-red-400 transition duration-500 text-black ease-in-out bg-white rounded-full py-2 mx-5 my-3" id="play" @click="$emit('onPlay',item.id,true)">PLAY</button>
                <button class="font-bold hover:bg-red-400 transition duration-500 text-black ease-in-out bg-white rounded-full py-2 mx-5 my-3" id="edit" @click="$emit('onEdit',item,item.id,true)">EDIT</button>
                <button class="font-bold hover:bg-red-400 transition duration-500 text-black ease-in-out bg-white rounded-full py-2 mx-5 my-3" id="delete" @click="deleteGroup(item.id)" >DELETE</button> 
            </div>    
      </div>      
        <button v-show="groupLimit" @click="$emit('onShow','add',false)" class="hover:bg-red-400 transition duration-500 ease-in-out bg-gray-300 flex flex-col w-1/4 h-4/5  mx-10 mt-10 rounded-xl" id="add">
            <img class="w-1/4 m-auto" src="./../assets/Pic/plus.png" alt="PLUS BUT">        
        </button>
    </div>
</div>
</template>
 
<style scoped>

</style>