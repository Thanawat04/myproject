<script setup>
import { ref,computed,watch} from 'vue';
let howto = [
    {pic : './howToPlay/1.jpeg'},
    {pic : './howToPlay/2.jpeg'},
    {pic : './howToPlay/3.jpeg'},
    {pic : './howToPlay/4.jpeg'},
    {pic : './howToPlay/5.jpeg'},
    {pic : './howToPlay/6.jpeg'},
    {pic : './howToPlay/7.jpeg'}
]
const props = defineProps({
    popStatus : {
      tyepe:Number,
      default:0
    },
    winnerIs: {
        type: String,
        default: 'noWin'
    }
})
let closeHowto  = ref(false)
let closeWinner = ref(false)
let popupStatus = computed(()=> props.popStatus) 
let popupWinner = computed(()=>props.winnerIs) 

function popupControl(){
    if (popupStatus.value > 0){closeHowto.value = true
    }
    if (popupWinner.value !== 'noWin' ){
        closeWinner.value =  true
    }
}
watch ([popupWinner,popupStatus],popupControl)
defineEmits(['playAgain'])

function goToHome(){
    location.reload()
}

const MAX_LENGTH = 6
const MIN_LENGTH = 0
let current = ref(0)
const onClickNext = () => {
    if(current.value === MAX_LENGTH) {
        current.value = 0  
    }
    else {
        current.value++  
    }
}
const onClickPrev = () => {
    if( current.value === MIN_LENGTH){
        current.value = MAX_LENGTH  
    }
    else{
        current.value--  
    }
}
</script>
 
<template>
<div v-show="closeHowto">
            <div class="popup">
              <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-screen h-screen bg-black opacity-60">
              </div>
          </div>
        <div class="popup">
            <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-5/6 h-5/6 bg-white rounded-xl">
                <div>
                    <button @click="closeHowto = false" class="hover:bg-red-400 transition duration-500 ease-in-out bg-gray-300 fixed right-10 top-10 text-gray-800 font-bold text-2xl  pt-1 pb-2 px-4 rounded-full">x</button>
                    <p class="text-black text-center text-5xl  mt-16 ">How To Play</p>
                </div>
                <div class="flex flex-row text-xs">
                    <div class="flex flex-row w-full">
                        <p class=" object-cover  m-auto rounded-xl"><img :src="howto[current].pic " alt=""></p>
                    </div>
                </div>
                <div class="fixed bottom-10 left-1/2 -translate-x-1/2 ">
                    <button @click="onClickPrev" class="bg-gray-300 text-gray-800 font-bold text-2xl py-2 px-4 border-r-8 rounded-l-full hover:bg-red-400 transition duration-500 ease-in-out ">Back</button>
                    <button @click="onClickNext" class="bg-gray-300 text-gray-800 font-bold text-2xl py-2 px-4 rounded-r-full hover:bg-red-400 transition duration-500 ease-in-out ">Next</button>
                </div>
            </div>
        </div>
</div>

<div v-show = "closeWinner">
       <div class="popup">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-screen h-screen bg-black opacity-60">
            </div>
        </div>
        <div class="popup">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-1/3 h-5/6 bg-white rounded-xl">
                <div class="top-10">
                    <p class="text-black text-center text-4xl  mt-16 ">THE WINNER IS</p>
                    <p class="text-center text-6xl  mt-16 text-purple-700">{{ popupWinner }}</p>
                </div>
                <div class="">
                    <img class="w-1/2 m-auto mt-20" src="./../assets/Pic/trophy.png" alt="">
                </div>
                <div class=" flex flex-col fixed bottom-10 left-1/2 -translate-x-1/2 ">
                        <button
                        class=" text-center font-bold bg-gray-300 but text-gray-800 m-2 p-4 mb-4 text-2xl rounded-full hover:bg-red-400 transition duration-500 ease-in-out flex-col"
                        @click="$emit('playAgain',true)">PLAY AGAIN</button>
                        <button 
                        class=" bg-gray-300 font-bold but text-gray-800  m-auto p-4 text-2xl  rounded-full hover:bg-red-400 transition duration-500 ease-in-out flex-col"
                        @click="goToHome()">HOME</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.popup {
    z-index: 9999;
}
@font-face {
  font-family: "researcher";
  src: local("researcher"),
   url(./assets/Font/researcher/ttf/researcher-researcher-bold-700.ttf) format("truetype");
}
</style>
