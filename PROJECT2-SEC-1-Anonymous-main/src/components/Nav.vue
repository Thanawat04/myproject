<script setup>
import { RouterLink } from 'vue-router'
defineEmits(['close'])
</script>

<template>
  <div class="p-2">
    <RouterLink :to="{name:'About'}"><button class="buttonFirstPage shadow hover:text-pink-500  m-4" style="margin-top: 30px"  @click="$emit('close',false)">ABOUT US<i></i> </button></RouterLink>
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
  color: #ff1867;
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
    url(./assets/Font/researcher/researcher-researcher-bold-700.otf) format("truetype");
}
</style>