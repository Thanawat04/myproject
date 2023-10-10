<script setup>
import { ref,computed,watch } from 'vue'
import Dice from './Dice.vue'
import Popup from './Popup.vue'
import { getGroups } from './../composable/getGroups.js'
const userInfo = ref([])
const props = defineProps({
    gId: { 
        type:Number,
        default:null
    },
    setIdEdit:{
        type:Number,
        default:null
    },
    setAdd:{
        type:String,
        default:null
    }
})
let editId = computed(() => props.setIdEdit)
let groupId = computed(()=> props.gId)
let addSet=computed(()=>props.setAdd)
let singleGroup
let playerNum = ref(Number)
let defaultColor = "#aeaeae"
let playerName = []
let color1 = ref('')
let color2 = ref('')
let color3 = ref('')
let color4 = ref('')
const getUserInfo = async () => {   
    userInfo.value = await getGroups()
} 
async function  checkControler(){
    await getUserInfo()
    let id
    if (editId.value !== null ){id = editId.value}
    else if (groupId.value !== null){id = groupId.value}
    else {
        let allId = []
        for (let item of userInfo.value){allId.push(item.id) }
        id = allId[allId.length-1]
    }
    singleGroup = userInfo.value.filter((i) => i.id === id)
    setUserInfo() 
}
function setUserInfo(){
    for (let item of singleGroup){
    color1.value = item.member[0].color
    color2.value = item.member[1].color
    color3.value = item.member[2].color
    color4.value = item.member[3].color
    playerNum.value = item.numOfPlayer
    playerName[0] = item.member[0].name
    playerName[1] = item.member[1].name 
    playerName[2] = item.member[2].name 
    playerName[3] = item.member[3].name 
  } 
}
watch([groupId,addSet,editId],checkControler)

let whoTurn = ref('')
let winnerIs = ref('')
const showPlay=(rollDice,randomNum,animationRoll)=>{
    random.value=randomNum
    rollDice()
    animationRoll(randomNum)
    callPlay()
}
let randomNumber = computed(() => random.value)
let random =ref(0)
let twoUser = ref(false)
let threeUser = ref(false)
let fourUser = ref(false)
function userControl() {
  if (playerNum.value == 2) {
    twoUser.value = true
    threeUser.value = false
    fourUser.value = false
  } else if (playerNum.value == 3) {
    twoUser.value = true
    threeUser.value = true
    fourUser.value = false
  } else if (playerNum.value == 4) {
    twoUser.value = true
    threeUser.value = true
    fourUser.value = true
  } else {
    twoUser.value = false
    threeUser.value = false
    fourUser.value = false
  }
}
watch(playerNum, userControl)
let p1 = ref('')
let p2 = ref('')
let p3 = ref('')
let p4 = ref('')
let position1 = 0
let position2 = 0
let position3 = 0
let position4 = 0
let turnMessage = ref('')
let turn = 1
let player1 = null;
let player2 = null;
let player3 = null;
let player4 = null;

function callPlay() {
    if (playerNum.value == 2) {
        if (turn % 2 != 0) {
            turnMessage.value.innerText = 'Turn :'+playerName[0]
            walk('player1', 'position1', 20, randomNumber.value)
            setTimeout(() => {
                move('player1', position1, 20)
            }, 1000)
            whoTurn.value = 1
        }
        else if (turn % 2 == 0) {
            turnMessage.value.innerText = 'Turn :'+playerName[1]
            walk('player2', 'position2', 55, randomNumber.value)
            setTimeout(() => {
                move('player2', position2, 55)
            }, 1000)
            whoTurn.value = 2
        }
    }
    if (playerNum.value == 3) {
        if ((turn - 1) % playerNum.value + 1 == 1) {
            turnMessage.value.innerText = 'Turn :'+playerName[0]
            walk('player1', 'position1', 20, randomNumber.value)
            setTimeout(() => {
                move('player1', position1, 20)
            }, 1000)

            whoTurn.value = 1
        }
        else if ((turn - 1) % playerNum.value + 1 == 2) {
            turnMessage.value.innerText = 'Turn :'+playerName[1]
            walk('player2', 'position2', 55, randomNumber.value)
            setTimeout(() => {
                move('player2', position2, 55)
            }, 1000)
            whoTurn.value = 2
        }
        else if ((turn - 1) % playerNum.value + 1 == 3) {
            turnMessage.value.innerText = 'Turn :'+playerName[2]
            walk('player3', 'position3', 90, randomNumber.value)
            setTimeout(() => {
                move('player3', position3, 90)
            }, 1000)
            whoTurn.value = 3
        }
    }
    if (playerNum.value == 4) {
        if ((turn - 1) % playerNum.value + 1 == 1) {
            turnMessage.value.innerText = 'Turn :'+playerName[0]
            walk('player1', 'position1', 20, randomNumber.value)
            setTimeout(() => {
                move('player1', position1, 20)
            }, 1000)
            whoTurn.value = 1
        }
        else if ((turn - 1) % playerNum.value + 1 == 2) {
            turnMessage.value.innerText = 'Turn :'+playerName[1]
            walk('player2', 'position2', 55, randomNumber.value)
            setTimeout(() => {
                move('player2', position2, 55)
            }, 1000)
            whoTurn.value = 2
        }
        else if ((turn - 1) % playerNum.value + 1 == 3) {
            turnMessage.value.innerText = 'Turn :'+playerName[2]
            walk('player3', 'position3', 90, randomNumber.value)
            setTimeout(() => {
                move('player3', position3, 90)
            }, 1000)
            whoTurn.value = 3
        }
        else if ((turn - 1) % playerNum.value + 1 == 4) {
            turnMessage.value.innerText = 'Turn :'+playerName[3]
            walk('player4', 'position4', 125, randomNumber.value)
            setTimeout(() => {
                move('player4', position4, 125)
            }, 1000)
            whoTurn.value = 4
        }
    }
    turn = turn + 1
}
function getPlayerElement(player) {
    let playerElement = null;
    switch(player) {
        case 'player1':
            if (!player1) {player1 = p1.value;}
            playerElement = player1;
            break;
        case 'player2':
            if (!player2) {player2 = p2.value;}
            playerElement = player2;
            break;
        case 'player3':
            if (!player3) {player3 = p3.value}
            playerElement = player3;
            break;
        case 'player4':
            if (!player4) {player4 = p4.value
}
            playerElement = player4;
            break;
        default:
            break;
    }
    return playerElement;
}
function walk(player, position, direction, numberOfWalk) {
    let sum
    if (position == 'position1') {
        position1 = position1 + numberOfWalk
       if (position1 == 1) {
            setTimeout(() => {
                position1 = 38
            }, 500)
        }
        if (position1 == 4) {
            setTimeout(() => {
                position1 = 57
            }, 500)
        }
        if (position1 == 8) {
            setTimeout(() => {
                position1 = 30
            }, 500)

        }
        if (position1 == 21) {
            setTimeout(() => {
                position1 = 42
            }, 500)
        }
        if (position1 == 28) {
            setTimeout(() => {
                position1 = 70
            }, 500)

        }
        if (position1 == 50) {
            setTimeout(() => {
                position1 = 88
            }, 500)
        }

   
        if (position1 == 32) {
            setTimeout(() => {
                position1 = 10
            }, 500)
        }
        if (position1 == 36) {
            setTimeout(() => {
                position1 = 15
            }, 500)
        }
        if (position1 == 75) {
            setTimeout(() => {
                position1 = 18
            }, 500)
        }
        if (position1 == 80) {
            setTimeout(() => {
                position1 = 54
            }, 500)
        }

        sum = position1
    }
    if (position == 'position2') {
        position2 = position2 + numberOfWalk
         if (position2 == 1) {
            setTimeout(() => {
                position2 = 38
            }, 500)
        }
        if (position2 == 4) {
            setTimeout(() => {
                position2 = 57
            }, 500)
        }
        if (position2 == 8) {
            setTimeout(() => {
                position2 = 30
            }, 500)

        }
        if (position2 == 21) {
            setTimeout(() => {
                position2 = 42
            }, 500)
        }
        if (position2 == 28) {
            setTimeout(() => {
                position2 = 70
            }, 500)

        }
        if (position2 == 50) {
            setTimeout(() => {
                position2 = 88
            }, 500)
        }

        if (position2 == 32) {
            setTimeout(() => {
                position2 = 10
            }, 500)
        }
        if (position2 == 36) {
            setTimeout(() => {
                position2 = 15
            }, 500)
        }
        if (position2 == 75) {
            setTimeout(() => {
                position2 = 18
            }, 500)
        }
        if (position2 == 80) {
            setTimeout(() => {
                position2 = 54
            }, 500)
        }

        sum = position2
    }
    if (position == 'position3') {
        position3 = position3 + numberOfWalk
        if (position3 == 1) {
            setTimeout(() => {
                position3 = 38
            }, 500)
        }
        if (position3 == 4) {
            setTimeout(() => {
                position3 = 57
            }, 500)
        }
        if (position3 == 8) {
            setTimeout(() => {
                position3 = 30
            }, 500)

        }
        if (position3 == 21) {
            setTimeout(() => {
                position3 = 42
            }, 500)
        }
        if (position3 == 28) {
            setTimeout(() => {
                position3 = 70
            }, 500)

        }
        if (position3 == 50) {
            setTimeout(() => {
                position3 = 88
            }, 500)
        }

        
        if (position3 == 32) {
            setTimeout(() => {
                position3 = 10
            }, 500)
        }
        if (position3 == 36) {
            setTimeout(() => {
                position3 = 15
            }, 500)
        }
        if (position3 == 75) {
            setTimeout(() => {
                position3 = 18
            }, 500)
        }
        if (position3 == 80) {
            setTimeout(() => {
                position3 = 54
            }, 500)
        }
        
        sum = position3
    }
    if (position == 'position4') {
        position4 = position4 + numberOfWalk
        if (position4 == 1) {
            setTimeout(() => {
                position4 = 38
            }, 500)
        }
        if (position4 == 4) {
            setTimeout(() => {
                position4 = 57
            }, 500)

        }
        if (position4 == 8) {
            setTimeout(() => {
                position4 = 30
            }, 500)
        }
        if (position4 == 21) {
            setTimeout(() => {
                position4 = 42
            }, 500)
        }
        if (position4 == 28) {
            setTimeout(() => {
                position4 = 70
            }, 500)
        }
        if (position4 == 50) {
            setTimeout(() => {
                position4 = 88
            }, 500)
        }

        if (position4 == 32) {
            setTimeout(() => {
                position4 = 10
            }, 500)
        }
        if (position4 == 36) {
            setTimeout(() => {
                position4 = 15
            }, 500)

        }
        if (position4 == 75) {
            setTimeout(() => {
                position4 = 18
            }, 500)

        }
        if (position4 == 80) {
            setTimeout(() => {
                position4 = 54
            }, 500)
        }
        
        sum = position4
    }
    
    let playerElement=getPlayerElement(player)
    if(playerElement){
    playerElement.style.transition = `linear all .5s`
    
    if (sum < 10) {
        playerElement.style.left = `${(sum - 1) * 70}px`
        playerElement.style.top = `${-0 * 70 - direction}px`
    }

    else if (sum >= 100) {
        if (player == 'player1') {
            return
        }
        else if (player == 'player2') {
            return
        }
        else if (player == 'player3') {
            return
        }
        else if (player == 'player4') {
            return
        }
    }

    else {

        let numarr = Array.from(String(sum))
        let n1 = numarr.shift()
        let n2 = numarr.pop()

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                playerElement.style.left = `${(9) * 70}px`
                playerElement.style.top = `${(-n1 + 1) * 70 - direction}px`
            }
            else {
                playerElement.style.left = `${(9 - (n2 - 1)) * 70}px`
                playerElement.style.top = `${-n1 * 70 - direction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                playerElement.style.left = `${(0) * 70}px`
                playerElement.style.top = `${(-n1 + 1) * 70 - direction}px`
            }
            else {

                playerElement.style.left = `${(n2 - 1) * 70}px`
                playerElement.style.top = `${-n1 * 70 - direction}px`
            }

        }
    }
}
}



function move(player, sum, direction) {
    let playerElement=getPlayerElement(player)
if(playerElement){
    playerElement.style.transition = `linear all .5s`
    
    if (sum < 10) {
        playerElement.style.left = `${(sum - 1) * 70}px`
        playerElement.style.top = `${-0 * 70 - direction}px`
    }

    else if (sum >= 100) {
        if (player == 'player1') {
            winnerIs.value = playerName[0]
            closeWin.value=true
        }
        else if (player == 'player2') {
            winnerIs.value = playerName[1]
            closeWin.value=true
        }
        else if (player == 'player3') {
            winnerIs.value = playerName[2]
            closeWin.value=true
        }
        else if (player == 'player4') {
            winnerIs.value = playerName[3]
            closeWin.value=true
        }
        
    }

    else {

        let numarr = Array.from(String(sum))
        let n1 = numarr.shift()
        let n2 = numarr.pop()

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                playerElement.style.left = `${(9) * 70}px`
                playerElement.style.top = `${(-n1 + 1) * 70 - direction}px`
            }
            else {
                playerElement.style.left = `${(9 - (n2 - 1)) * 70}px`
                playerElement.style.top = `${-n1 * 70 - direction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                playerElement.style.left = `${(0) * 70}px`
                playerElement.style.top = `${(-n1 + 1) * 70 - direction}px`
            }
            else {

                playerElement.style.left = `${(n2 - 1) * 70}px`
                playerElement.style.top = `${-n1 * 70 - direction}px`
            }

        }
    }
}
}

let playagain = false
let closeWin=ref(true)
function Again(playAgain) {
    closeWin.value=!playAgain
    playagain = playAgain
    if(playagain === true){
        position1 = 0
        position2 = 0
        position3 = 0
        position4 = 0
        turn = 1
        resetPosition()
        playagain = false
    }
}
function resetPosition() {
    player1.style.left = `${-70}px`
    player1.style.top = `${-20}px`
    player2.style.left = `${-70}px`
    player2.style.top = `${-55}px`
    player3.style.top = `${-90}px`
    player3.style.left = `${-70}px`
    player4.style.top = `${-125}px`
    player4.style.left = `${-70}px`
}
</script>
 
<template>
    <div>           
    <div class="flex bg-black w-screen h-screen">          
            <div class="w-1/3 flex flex-col m-auto">
            <div class="flex flex-col ">
                        <div class=" py-7 mb-3 mx-2 rounded-2xl" v-show="twoUser" :style="{ backgroundColor: whoTurn == 1 ? color1 : defaultColor }">
                            <p class="text-white text-center text-2xl">{{ playerName[0]}}</p>
                        </div>
                        <div class=" py-7 mb-3 mx-2 rounded-2xl" v-show="twoUser" :style="{ backgroundColor: whoTurn == 2 ? color2 : defaultColor }">
                            <p class="text-white text-center text-2xl">{{ playerName[1]}}</p>
                        </div>
                        <div class=" py-7 mb-3 mx-2 rounded-2xl" v-show="threeUser" :style="{ backgroundColor: whoTurn == 3 ? color3 : defaultColor }">
                            <p class="text-white text-center text-2xl">{{ playerName[2]}}</p>
                        </div>
                        <div class=" py-7 mb-3 mx-2 rounded-2xl" v-show="fourUser" :style="{ backgroundColor: whoTurn == 4 ? color4 : defaultColor }">
                            <p class="text-white text-center text-2xl">{{ playerName[3]}}</p>
                        </div>
                    </div>
            
            <div class="mx-auto">
                <Dice @plays="showPlay"/>
            </div>
        </div>
            <div class="m-auto">
                <div class=" boxs grid-cols-10 mt-2 text-white">

                    <div class="box" id="b100">100</div>

                    <div class="box" id="b99">99</div>

                    <div class="box" id="b98">98</div>

                    <div class="box" id="b97">97</div>

                    <div class="box" id="b96">96</div>

                    <div class="box" id="b95">95</div>

                    <div class="box" id="b94">94</div>

                    <div class="box" id="b93">93</div>

                    <div class="box" id="b92">92</div>

                    <div class="box" id="b91">91</div>

                    <div class="box" id="b81">81</div>

                    <div class="box" id="b82">82</div>

                    <div class="box" id="b83">83</div>

                    <div class="box" id="b84">84</div>

                    <div class="box" id="b85">85</div>

                    <div class="box" id="b86">86</div>

                    <div class="box" id="b87">87</div>

                    <div class="box" id="b88"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b89">89</div>

                    <div class="box" id="b90">90</div>

                    <div class="box" id="b80"><img src="../assets/Pic/black-hole-red.png"></div>

                    <div class="box" id="b79">79</div>

                    <div class="box" id="b78">78</div>

                    <div class="box" id="b77">77</div>

                    <div class="box" id="b76">76</div>

                    <div class="box" id="b75"><img src="../assets/Pic/black-hole-red.png"></div>

                    <div class="box" id="b74">74</div>

                    <div class="box" id="b73">73</div>

                    <div class="box" id="b72">72</div>

                    <div class="box" id="b71">71</div>

                    <div class="box" id="b61">61</div>

                    <div class="box" id="b62">62</div>

                    <div class="box" id="b63">63</div>

                    <div class="box" id="b64">64</div>

                    <div class="box" id="b65">65</div>

                    <div class="box" id="b66">66</div>

                    <div class="box" id="b67">67</div>

                    <div class="box" id="b68">68</div>

                    <div class="box" id="b69">69</div>

                    <div class="box" id="b70"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b60">60</div>

                    <div class="box" id="b59">59</div>

                    <div class="box" id="b58">58</div>

                    <div class="box" id="b57"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b56">56</div>

                    <div class="box" id="b55">55</div>

                    <div class="box" id="b54"><img src="../assets/Pic/black-hole-red.png"></div>

                    <div class="box" id="b53">53</div>

                    <div class="box" id="b52">52</div>

                    <div class="box" id="b51">51</div>

                    <div class="box" id="b41">41</div>

                    <div class="box" id="b42"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b43">43</div>

                    <div class="box" id="b44">44</div>

                    <div class="box" id="b45">45</div>

                    <div class="box" id="b46">46</div>

                    <div class="box" id="b47">47</div>

                    <div class="box" id="b48">48</div>

                    <div class="box" id="b49">49</div>

                    <div class="box" id="b50"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b40">40</div>

                    <div class="box" id="b39">39</div>

                    <div class="box" id="b38"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b37">37</div>

                    <div class="box" id="b36"><img src="../assets/Pic/black-hole-red.png"></div>

                    <div class="box" id="b35">35</div>

                    <div class="box" id="b34">34</div>

                    <div class="box" id="b33">33</div>

                    <div class="box" id="b32"><img src="../assets/Pic/black-hole-red.png"></div>

                    <div class="box" id="b31">31</div>

                    <div class="box" id="b21"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b22">22</div>

                    <div class="box" id="b23">23</div>

                    <div class="box" id="b24">24</div>

                    <div class="box" id="b25">25</div>

                    <div class="box" id="b26">26</div>

                    <div class="box" id="b27">27</div>

                    <div class="box" id="b28"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b29">29</div>

                    <div class="box" id="b30"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b20">20</div>

                    <div class="box" id="b19">19</div>

                    <div class="box" id="b18"><img src="../assets/Pic/black-hole-red.png"></div>

                    <div class="box" id="b17">17</div>

                    <div class="box" id="b16">16</div>

                    <div class="box" id="b15"><img src="../assets/Pic/black-hole-red.png"></div>

                    <div class="box" id="b14">14</div>

                    <div class="box" id="b13">13</div>

                    <div class="box" id="b12">12</div>

                    <div class="box" id="b11">11</div>

                    <div class="box" id="b01"><img src="../assets/Pic/black-hole-blue.png">
                        <p id="player1" v-show="twoUser" ref="p1" :style="{ backgroundColor: color1}"></p>
                        <p id="player2" v-show="twoUser" ref="p2" :style="{ backgroundColor: color2}"></p>
                        <p id="player3" v-show="threeUser" ref="p3" :style="{ backgroundColor: color3}"></p>
                        <p id="player4" v-show="fourUser" ref="p4" :style="{ backgroundColor: color4}"></p>
                    </div>

                    <div class="box" id="b02">2</div>

                    <div class="box" id="b03">3</div>

                    <div class="box" id="b04"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b05">5</div>

                    <div class="box" id="b06">6</div>

                    <div class="box" id="b07">7</div>

                    <div class="box" id="b08"><img src="../assets/Pic/black-hole-blue.png"></div>

                    <div class="box" id="b09">9</div>

                    <div class="box" id="b10"><img src="../assets/Pic/black-hole-red.png"></div>

                </div>
                    <p class="turnMessage text-white" ref="turnMessage"></p>
            </div>

            <div v-show="closeWin">
                <Popup :winner-is="winnerIs" @playAgain="Again"/>
            </div>
    </div>
</div>
</template>
 
<style scoped>

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
}
.boxs {
    display: grid;
    width: 700px;
    height: 700px;
    margin: auto;
    background-color: #410365;
}

.boxs div {
    width: 70px;
    height: 70px;
    border: 0.2px solid black;
    padding: 20px;
    text-align: center;
}

#b01 {
    background-color: black;
    width: 70px;
    height: 70px;
    text-align: center;
}

#player1,
#player2,
#player3,
#player4 {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    position: relative;
    border: 3px solid black;
}

#player1 {
    position: relative;
  top: -20px;
  transition: all linear 0.5s; 
   left: -70px;
} 

 #player2 { 
  position: relative;
  top: -55px;
  left: -70px;
  transition: all linear 0.5s;
}

#player3 {
    position: relative;
  top: -90px;
  transition: all linear 0.5s;

  left: -70px; 

 }  

 #player4 { 

    position: relative;
  top: -125px;
  transition: all linear 0.5s; 

  left: -70px;
 
 }

 #b01,
#b38{
    background-color: rgb(184, 104, 13);
}

#b04,
#b57{
    background-color: rgb(205, 50, 50);
}
#b08,
#b30{
    background-color: rgb(207, 163, 17);
}
#b21,
#b42{
    background-color: rgb(50, 205, 140);
}
#b28,
#b70{
    background-color: rgb(226, 245, 159);
}
#b50,
#b88{
    background-color: rgb(223, 17, 137);
}

/* ลงล่าง */
#b32,
#b10{
    background-color: rgb(29, 103, 201);
}
#b36,
#b15{
    background-color: rgb(141, 14, 192);
}
#b75,
#b18{
    background-color: rgb(0, 143, 36);
}
#b80,
#b54{
    background-color: rgb(199, 199, 199);
}
</style>