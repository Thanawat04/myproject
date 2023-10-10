<script setup>
import { RouterLink } from 'vue-router'
let teamInfo = [
  {
  nickName : "NENG",
  name : 'Techatham Kajanasuttakun',
  id : '64130500025',
  pic: './Team/Neng.jpeg'
},
{
  nickName : "TAN",
  name : 'Thanawat Chen',
  id : '64130500033',
  pic: './Team/Tan.jpeg'
},
{
  nickName : "OU",
  name : 'Nitis Visayatasin',
  id : '64130500045',
  pic: './Team/Ou.png'
},
{
  nickName : "FILM",
  name : 'Pratipran Sritangtrong',
  id : '64130500046',
  pic: './Team/Film.jpeg'
},
{
  nickName : "POR",
  name : 'Porcha Meecharoen',
  id : '64130500049',
  pic: './Team/Porcha.jpg'
},
]

defineEmits(['close'])
</script>
 
<template>
  <div class="flex flex-col items-center justify-center h-screen" style="background-color: #2A303C;color: #A6ADBB;">
    <div class="mt-10">
      <p class="text-6xl font-researcher " style="font-family: researcher;color: #A6ADBB;">About My Team</p>
    </div>
    <div class="flex flex-row justify-center w-full h-4/5 ">
      <div v-for="item in teamInfo" class="w-1/5 h-2/3 rounded-xl my-auto m-5" style="background-color: #19202E;">
        <img class="object-cover w-full h-1/2 rounded-xl" :src="item.pic" alt="team member picture">
        <div class="flex flex-col mt-auto">
          <p class="text-6xl my-10 mx-auto font-researcher" style="font-family: researcher;">{{ item.nickName }}</p>
          <p class="text-2xl ml-5">{{ item.name }}</p>
          <p class="text-xl ml-5">{{ item.id }}</p>
        </div>
      </div>
    </div>
    <div class="mb-10">
      <router-link :to="{ name: 'Home' }">
        <button class=" hover:bg-red-400 transition duration-500 ease-in-out text-white rounded-full text-2xl px-8 py-2 bg-gray-600">HOME</button>
      </router-link>
    </div>
  </div>
</template>
 
<style scoped>
@font-face {
  font-family: "researcher";
  src: local("researcher"),
    url(./../assets/Font/researcher/researcher-researcher-bold-700.otf) format("truetype");
}

</style>
