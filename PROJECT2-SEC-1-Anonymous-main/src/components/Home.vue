<script setup>
import Popup from './Popup.vue'
import {ref} from 'vue'
import Nav from './Nav.vue'
let howToPlayPopup = ref('')

function popTo(){
  howToPlayPopup.value++
}

defineEmits(['close'])
</script>
 
<template>
<div>
  <div class="h-screen flex flex-row" id="page1" style="color: #A6ADBB;">
      <div class="w-1/2 h-screen flex justify-center" style="background-color: #2A303C;">
        <div class="flex flex-col my-auto">
          <div style="font-family: researcher;">
            <span style="display: block;letter-spacing:  6px; text-align: center"
              class="text-6xl lg:text-8xl" >GALACTIC</span>
            <span style="display: block;letter-spacing: 26px; text-align: center;"
              class="text-xl pl-7 lg:text-2xl ">SERPENT CLIMB</span>
          </div>
          <div style="text-align: center;" class="text-xl  flex pt-10"> A snake and ladder game that will take everyone to
            the distant space.</div>

          <div class="flex flex-col lg:flex-row items-center">
            <button class="buttonFirstPage shadow hover:text-pink-500  m-4" style="margin-top: 30px" 
            @click="$emit('close',true)">START<i></i></button>

            <button class="buttonFirstPage shadow hover:text-pink-500 m-4" style="margin-top: 30px;"
            @click="popTo"><span>HOW TO PLAY</span><i></i></button>
            <Nav/>
            <div v-show="howToPlayPopup">
              <Popup :pop-status="howToPlayPopup"/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 ">
        <img class="w-screen h-screen object-cover" src="../assets/Pic/Page1BG.png" alt="">
      </div>
    </div>
</div>
</template>
 
<style scoped>
.buttonFirstPage {
  font-size: 26px;
  border-radius: 50px;
  padding: 14px 32px;
  transition: 0.5s;
  position: relative;
  background: #333;
  border: none;
}

.shadow :hover {
  color: #1A2B56;
  border-radius: 50px;
  box-shadow: 0 0 45px #ff1867;
}
button i {
  position: absolute;
  inset: 0;
  display: block;
}

button i::before {
  border-radius: 50px;
  content: '';
  position: absolute;
  border: 2px solid #ff1867;
  width: 7px;
  height: 4px;
  top: -3.5px;
  left: 80%;
  transform: translateX(-50%);
  transition: 0.5s;
}

button:hover i::before {
  border-radius: 50px;
  width: 20px;
  left: 20%;
}

button i::after {
  border-radius: 30px;
  content: '';
  position: absolute;
  border: 2px solid #ff1867;
  width: 7px;
  height: 4px;
  bottom: -3.5px;
  left: 20%;
  transform: translateX(-50%);
  transition: 0.5s;
}

button:hover i::after {
  border-radius: 30px;
  width: 20px;
  left: 80%;
}

@font-face {
  font-family: "researcher";
  src: local("researcher"),
    url(../assets/Font/researcher/researcher-researcher-bold-700.otf) format("truetype");
}
</style>