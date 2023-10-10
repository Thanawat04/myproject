<script setup>
import { ref, onMounted, computed,watch} from 'vue'


onMounted( ()=> {

  if (props.moregroup === undefined) {
    updateGroup.value = {
      groupName: "",
      numOfPlayer: "",
      member: [
        {
          player: 1,
            name: "",
            color: ""
        },
        {
          player: 2,
            name: "",
            color: ""
        },
        {
          player: 3,
            name: "",
            color: ""
        },
        {
          player: 4,
            name: "",
            color: ""
        }
      ]
    }
  }
})
let playerArr = ref([])
let show = ref(false)
let edit=computed(()=>props.moregroup)
function createPlayer() {
  if(edit.value!==undefined){
    updateGroup.value=edit.value
    show.value = true 
  playerArr.value = []
    for (let index = 0; index < updateGroup.value.numOfPlayer; index++) {
        playerArr.value.push("Player" + (index + 1))
    }
  }
else{
  show.value = true 
  playerArr.value = []
    for (let index = 0; index < updateGroup.value.numOfPlayer; index++) {
        playerArr.value.push("Player" + (index + 1))
    }
  }
}
const updateGroup = ref({})
const props = defineProps({
  moregroup: {
    type: Object
  },
  setIdEdit: { type: Number },
  error :{type:Boolean}
})
const setId = computed(() => props.setIdEdit)
let errorMes = computed(()=>props.error)

defineEmits(['add', 'edit'])

let editOpen = ref(true)
function editOrCreate(){
  if (setId.value !== null) {
    editOpen.value = false
  }
  createPlayer()
}
watch(setId, editOrCreate)
</script>

<template>
  <div style="color: #A6ADBB;">
    <div class="h-screen flex flex-col bg-black" id="page2" >
      <div v-show="editOpen" class="flex flex-row">
        <div class="w-1/2 h-full flex flex-col ">
          <div class="flex flex-col w-1/2 justify-center m-auto">
            <p class="text-center pb-4 text-2xl">Choose the number of players</p>
            <label for="underline_select" class="sr-only text-white">Underline select</label>
            <select v-model="updateGroup.numOfPlayer" 
              class="block appearance-none border-gray-400 text-black hover:border-gray-500 px-4 py-2 pr-8 rounded-full shadow bg-white">
              <option value=2> 2 Person</option>
              <option value=3> 3 Person</option>
              <option value=4> 4 Person</option>
            </select>

            <span class="flex justify-center"><button v-show="setId" @click="createPlayer"
                class=" bg-white text-black font-bold m-3 pt-2 pb-2 rounded-full w-1/3 hover:bg-red-400 transition duration-500 ease-in-out">EDIT</button></span>
            <span class="flex justify-center"><button v-show="!setId" @click="createPlayer"
                class=" bg-white text-black font-bold m-3 pt-2 pb-2 rounded-full w-1/3 hover:bg-red-400 transition duration-500 ease-in-out" >CONFIRM</button></span>
          </div>
        </div>

        <div class="w-1/2 ">
          <img class="w-screen h-screen object-cover" src="../assets/Pic/Page2BG.png">
        </div>
      </div>

      <div class=" text-white bg-black pt-12 flex-col" v-show="show" >
        <div class=" flex flex-row">
          <div class="w-1/2 text-5xl p-5">Your Info</div>
          <div class="w-1/2 text-5xl p-5">Preview</div>
        </div>
        <hr class="my-5"/>

        <div>
          <p class=" text-3xl">
          
          </p>
        </div>

        <div class="flex flex-row">
          <div class="w-1/2 p-5 text-3xl">
            <p class=" text-3xl">Group Name : <input class="rounded-full w-1/2  p-1 m-2 mr-10 text-black border text-xl border-gray-400 hover:border-gray-500 bg-white" type="text"
            placeholder="Group Name" v-model="updateGroup.groupName"></p>
            
          </div>

          <div class="w-1/2 flex flex-row">
            <span class="flex flex-col">
              <p class=" m-6 text-3xl">{{ updateGroup.groupName !== '' ? `Group Name : `+ updateGroup.groupName : '' }}</p>
            </span>
          </div>
        </div>


        <div class="flex flex-row" v-for="(item, index) in playerArr " :key="index">
          <div class="w-1/2 p-5 text-3xl">
            <p class=" text-3xl">{{ item }}</p>
            <input class="rounded-full w-1/2 p-1 m-2 mr-10 text-black border text-xl border-gray-400 hover:border-gray-500 bg-white" type="text"
              placeholder="Player Name" v-model="updateGroup.member[index].name">
            <input class="" type="color" v-model="updateGroup.member[index].color">
          </div>


          <div class="w-1/3 flex flex-row ">
            <span class="mt-6 w-screen mr-2">
              <div class=" py-7 mb-3 mx-2 rounded-2xl" :style="{ backgroundColor: updateGroup.member[index].color }">
                <p class="text-white text-center text-2xl">{{ updateGroup.member[index].name}}</p>
              </div>
            </span>
          </div>
        </div>


        <div style="text-align: center;" v-show="show">
          <p class="text-red-600 text-bold text-xl">{{ errorMes}}</p>
          <button v-if="setId"  ref='edit' class="font-bold bg-white m-10 pt-2 pb-2 w-1/12 rounded-full text-black hover:bg-red-400 transition duration-500 ease-in-out"
            @click="$emit('edit',updateGroup,setId)">EDIT</button>
          <button v-else class="font-bold bg-white m-10 pt-2 pb-2 w-1/12 rounded-full text-black hover:bg-red-400 transition duration-500 ease-in-out"
            @click="$emit('add', updateGroup)">COMFIRM</button>
        </div>
      </div>
    </div>

  </div>
</template>
 
<style scoped>
.scroll-element {
  height: 1000px;
}</style>
