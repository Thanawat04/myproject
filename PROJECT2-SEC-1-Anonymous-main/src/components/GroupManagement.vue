<script setup>
import TableGame from './TableGame.vue'
import Group from './Groups.vue'
import InputUserInfo from './InputUserInfo.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue';

const groups = ref([])
let groupShow = ref(false)
let addGroup = ref(false)
let showPlay = ref(false)
let numOfPlayer = ref()
let setIdEdit = ref()
const onShowAdd = (but, set) => {
  setIdEdit.value = set
  if (but === 'add') {
    addGroup.value = true
    groupShow.value = set
  }
}
const editItem = ref()
const editId=ref()
const onShowEdit = (item, id,set) => {
    addGroup.value = set
    groupShow.value = !set
    editItem.value = item
    editId.value=id
}
const showGroup = (show) => {
  groupShow.value = show
  router.value = !show
}
let addCall=ref()
let errorMes =ref()
let finish=ref()
let addNewGroups = (async (newGroup) => {
  if (newGroup.numOfPlayer !== null || newGroup.numOfPlayer  !== undefined) {
    for (let index =0;index<newGroup.numOfPlayer;index++){
        if (newGroup.groupName=='') {
        errorMes.value = 'Enter Your Group Name.'
        return
    }
    else if (newGroup.member[index].name=='') {
      errorMes.value = 'Enter Your Name'
      return
    }
      else if (newGroup.member[index].color=='') {
      errorMes.value = 'Enter Your Color'
      return
    }
} finish.value=true
}     
if(finish.value===true) {
    addCall.value='add'
  try {
    const res = await fetch('http://localhost:3000/groups', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify({
        groupName: newGroup.groupName,
        numOfPlayer: newGroup.numOfPlayer,
        member: newGroup.member
      })
    })
    if (res.status === 201) {
      const addNewGroups = await res.json()
      groups.value.push(addNewGroups)
    }
    else {
      throw Error('cannot add!!')
    }
  }
  catch (err) {
    console.log(err)
  }
  showPlay.value = true
  addGroup.value = false
}
else {
      showPlay.value = false
      addGroup.value = true
  }
})
defineEmits(['playerControl'])
let setEdit=ref()
let modifyGroup = (async (edit,setId) => {
if (edit.numOfPlayer !== null || edit.numOfPlayer  !== undefined) {
for (let index =0;index<edit.numOfPlayer;index++){
    if (edit.groupName=='') {
    errorMes.value = 'Enter Your Group Name.'
    return
  }
  else if (edit.member[index].name=='') {
    errorMes.value = 'Enter Your Name'
    return
  }
    else if (edit.member[index].color=='') {
    errorMes.value = 'Enter Your Color'
    return
  }
} finish.value=true
}
if(finish.value==true){
  showPlay.value = true
  addGroup.value = false
  setEdit.value=setId
  try {
    const res = await fetch(`http://localhost:3000/groups/${setId}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        groupName: edit.groupName,
        numOfPlayer: edit.numOfPlayer,
        member: edit.member
      })
    })
    if (res.status === 200) {
      const modify = await res.json()
      groups.value = groups.value.map((group) => {
        if (group.id === modify.id) {
          group.groupName = modify.groupName
          group.numOfPlayer = modify.numOfPlayer
        }
        return group
      })
      edit.value = undefined
    }
    else {
      throw Error('cannot add!!')
    }
  }
  catch (err) {
    console.log(err)
  }
}
else {
  showPlay.value = false
  addGroup.value = true
}
})
  let idToPlay=ref()
  const gotoGame=(id,set)=>{
  idToPlay.value=id
  showPlay.value=set
  groupShow.value=!set
}
let router=ref(true)
</script>
 
<template>
 <div class="flex flex-col">
    <div v-show="router">
    <RouterView @close="showGroup"/> 
  </div>
    <div v-show="groupShow">
      <Group @onShow="onShowAdd" @onEdit="onShowEdit" @onPlay="gotoGame" />
    </div>
    <div v-show="addGroup">
      <InputUserInfo @add="addNewGroups" :set-id-edit="editId" :moregroup="editItem" @edit="modifyGroup" :error="errorMes" />
    </div>
    <div v-show="showPlay">
      <div class="flex">
        <div class="w-full flex" id="page4">
          <div class="flex-cols bg-gray-900 w-full">
            <TableGame :g-id="idToPlay" :set-id-edit="setEdit" :set-add="addCall"/>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
 
<style scoped>
@font-face {
  font-family: "researcher";
  src: local("researcher"),
    url(../assets/Font/researcher/researcher-researcher-bold-700.otf) format("truetype");
}
</style>