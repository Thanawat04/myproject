<script setup>
import { ref } from 'vue'
import myFood from './myFood.json'
/////////////// Change Page Scope //////////////////
let page1 = ref(true)
let page2 = ref(false)
let page3 = ref(false)
let page4 = ref(false)
let page5 = ref(false)
// Next Page
    function nextPage(event) {
        if (event.target.id === 'page-1') {
            page1.value = !page1.value
            page2.value = !page2.value
        }
        if (event.target.id === 'page-2') {
            setInfo()
            if (userAge < 0 || userHeight < 0 || userWeight < 0) {
                userMessage.value = "Please don't add negative number"
            }
            else{
                page2.value = !page2.value
                page3.value = !page3.value
            }
        }
        if (event.target.id === 'page-3') {
            page3.value = !page3.value
            page4.value = !page4.value
            activitys()
        }
        if (event.target.id === 'page-4') {
            page4.value = !page4.value
            page5.value = !page5.value
            conObjToArr()
            checkValue()
        }
    }
// Back Page
    function backPage(event) {
        if (event.target.id === 'page-2B') {
            page1.value = !page1.value
            page2.value = !page2.value
        }
        if (event.target.id === 'page-3B') {
            page2.value = !page2.value
            page3.value = !page3.value
            userMessage.value=''
        }
        if (event.target.id === 'page-4B') {
            page3.value = !page3.value
            page4.value = !page4.value
        }
        if (event.target.id === 'page-5B') {
            page4.value = !page4.value
            page5.value = !page5.value
        }
    }
/////////////// Change Page Scope //////////////////

////////////// Get User Input Scope ////////////////
let userInfo = {}
let userAge ,userHeight ,userWeight 
let userMessage = ref('')
// Get User Age Height Weight 
    function setInfo() {
            userInfo.age = userAge
            userInfo.height = userHeight
            userInfo.weight = userWeight
    }
// Get And Set User Gender
    function isWoman() { return userInfo.gender = 'women'}
    function isMan() { return userInfo.gender = 'man'}
////////////// Get User Input Scope ////////////////

/////////// Calculate And Check Scope //////////////
let listOfFoods = ref([])
// For carbCal,fatCal,proCal,totalCla
let carb = [] ,pro = [] ,fat = []
let sumCarb ,sumPro ,sumFat ,total
// Fro sumCal Function
let allForSum = [] ,sumOfAll
// Convert Object To carb,pro,fat Array 
    function conObjToArr () {
        for (let index of listOfFoods.value){
                carb.push(index.carb)
                pro.push(index.protein)
                fat.push(index.fat)
            }
        carbCal()
        proCal()
        fatCal()
        totalCal()          
    }   
// Calculate Carb
    function carbCal (){
        allForSum = carb
        sumCal()
        sumCarb = sumOfAll*4
        sumCarb = Math.ceil(sumCarb)
        carb = []
    }
// Calculate Pro
    function proCal (){
        allForSum = pro
        sumCal()
        sumPro = sumOfAll*4
        sumPro = Math.ceil(sumPro)
        pro = []
    }
// Calculate Fat
    function fatCal (){
        allForSum = fat
        sumCal()
        sumFat= sumOfAll*9
        sumFat = Math.ceil(sumFat)
        fat = []
    }
// Calculate Total
    function totalCal (){
        total = sumCarb+sumFat+sumPro
        total = Math.ceil(total)
    }
    // Sum All Number In Array 
    function sumCal(){
        sumOfAll = 0
            for(let item of allForSum){sumOfAll+=item} 
        allForSum= []
    }
/////////// Calculate And Check Scope //////////////

/////////////////// Select Menu ////////////////////
let customName = ref('')
let customProtein = ref('')
let customCarb = ref('')
let customFat = ref('')
let customMessage = ref('')
// For filterFood Function
let nameList = [] ,selectFood 
// Filter Food(User Select In DropdownSelecter) In myFood Array To listOfFoods Array
    function filterFood() {
        let oneFood
        if(selectFood!==undefined){
            nameList.push(selectFood)
            oneFood = myFood.filter((food) => food.name === nameList[0])
            listOfFoods.value.push(oneFood[0])
            nameList = []
        }
    }
//Push Custom Menu To listOfFoods
    function customAddFood() {
        if(customName.value === ''){
            customMessage.value = "Please add food name"
        }
        else if (customProtein.value < 0 || typeof customProtein.value === 'string'){
            customMessage.value = "Please add number and don't add negative number"
        }
        else if (customCarb.value < 0 || typeof customCarb.value=== 'string'){
            customMessage.value = "Please add number and don't add negative number"
        } 
        else if (customFat.value < 0 || typeof customFat.value === 'string'){
            customMessage.value = "Please add number and don't add negative number"
        }    
        else {
            customMessage.value = ''
            listOfFoods.value.push({ "name": customName.value, "carb": customCarb.value, "protein": customProtein.value, "fat": customFat.value })
        }
    }
    // Remove Memu Out Of listOfFoods
    function removeFood(index) {
        listOfFoods.value.splice(index, 1)
        conObjToArr()
    }
/////////////////// Select Menu ////////////////////

//////////// BMR Calculate And Check //////////////
let bmr
let statusImg
let status

    // checkValue Check Var 
    function checkValue() {
        let error = []
        status = ''
        if (activity === ''){
            error.push("We don't know your Activity")
        }
        if (userAge <= 0 || userAge === undefined ){
            error.push("We don't know your Age")
        }
        if (userWeight <= 0 || userWeight === undefined ){
            error.push("We don't know your Weight.")
        }
        if (userHeight <= 0 || userHeight === undefined ){
            error.push("We don't know your Height.")
        }
        if (userInfo.gender === undefined){
            error.push("We don't know your Gender.")
        }
        if (error.length !== 0 ){
            bmr=error
            statusImg = '/BodyType/sorry.png'
        }else {doBMR()}
    }
    //  Use BMR Calculate Function
    function doBMR(){
        if (userInfo.gender === 'women') {
            womanBMRCalculate()
        }else if(userInfo.gender === 'man') {
            manBMRCalculate()
        }
    }
    // BMR Calculate For Man
    function manBMRCalculate() {
        bmr = (66 + (13.7 * userWeight) + (5 * userHeight) - (6.8 * userAge))* valueActivity
        bmr = Math.ceil(bmr)
        statusImg = '/BodyType/M' 
        bmrCheck()
    }
    // BMR Calculate For Woman
    function womanBMRCalculate() {
        bmr = (655 + (9.6 * userWeight) + (1.8 * userHeight) - (4.7 * userAge)) * valueActivity 
        bmr = Math.ceil(bmr)
        statusImg = '/BodyType/W'
        bmrCheck()
    }
    // BMR Check Body Logic
    function bmrCheck() {
            if (total > bmr + 200) { 
                status = 'OMG คุณทานอาหารมากเกินไป :O'
                statusImg=statusImg+'/Fat.png'
            }
            else if (total >= bmr - 200) { 
                status = 'เยี่ยมมม คุณทานอาหารกำลังพอดีเลย :)'
                statusImg=statusImg+'/Norm.png' 
            }
            else if (total < bmr - 200) { 
                status = 'โอ๊ะ!! เหมือนว่าคุณทานอาหารน้อยเกินไปนะ :(' 
                statusImg=statusImg+'/Thin.png'  
            }
        let bmrInFunction = bmr
        bmr =[]
        bmr.push(bmrInFunction)
    }
//////////// BMR Calculate And Check //////////////
let activity=''
let activities=['ไม่ได้ออกกำลังกายเลย','ออกกำลังกายหรือเล่นกีฬาเล็กน้อย ประมาณอาทิตย์ละ 1-3 วัน','ออกกำลังกายหรือเล่นกีฬาปานกลาง ประมาณอาทิตย์ละ 3-5 วัน','ออกกำลังกายหรือเล่นกีฬาอย่างหนัก ประมาณอาทิตย์ละ 6-7 วัน','ออกกำลังกายหรือเล่นกีฬาอย่างหนักทุกวันเช้าเย็น']
let valueActivity = 0
function activitys(){
    if (activity==='ไม่ได้ออกกำลังกายเลย'){
        valueActivity=1.2
    }else if (activity==='ออกกำลังกายหรือเล่นกีฬาเล็กน้อย ประมาณอาทิตย์ละ 1-3 วัน'){
        valueActivity=1.375
    }else if (activity==='ออกกำลังกายหรือเล่นกีฬาปานกลาง ประมาณอาทิตย์ละ 3-5 วัน'){
        valueActivity=1.55
    }else if (activity==='ออกกำลังกายหรือเล่นกีฬาอย่างหนัก ประมาณอาทิตย์ละ 6-7 วัน'){
        valueActivity=1.725
    }else if (activity==='ออกกำลังกายหรือเล่นกีฬาอย่างหนักทุกวันเช้าเย็น'){
        valueActivity=1.9
    }
}
///////////// Dark Mode //////////////
let darkMode = ref(false)
///////////// Dark Mode //////////////
</script>

<template>
    <!-- Dark Mode -->
    <div :class="darkMode? 'green':'greenlight'">
        <div class="w-full flex flex-row space-x-2 justify-end p-2 " :class="darkMode? 'green':'greenlight'">
            <label class="switch">
             <input type="checkbox" v-model="darkMode">
             <span class="slider"></span>
            </label>  
        </div>
        <!-- H1 KCal Cla -->
        <div :class="darkMode? 'green':'greenlight'">
            <p class="font-rbtB font-black text-center text-5xl pb-14 md:text-7xl md:p-50" >KCal Cal</p>
        </div>
        
        <!-- หน้า 1 -->
        <div id="page1" class="flex flex-col w-screen h-screen" v-show="page1" :class="darkMode? 'bg_green':'bg_greenlight'">
            <div class="w-full my-5 flex justify-center ">       
                    <!-- Img Tutoreal -->            
                    <div class=" flex-row" :class="darkMode? 'cardDark': 'cardLight'">
                        <p><span><img src="./assets/Card/C1.png"></span></p>
                        <p><span><img src="./assets/Card/C2.png"></span></p>
                        <p><span><img src="./assets/Card/C3.png"></span></p>
                        <p><span><img src="./assets/Card/C4.png"></span></p>
                        <p><span><img src="./assets/Card/C5.png"></span></p>                      
                    </div>
            </div>
            <!-- Start Button -->
            <div class="flex-col flex justify-center">
                <button @click="nextPage" id="page-1"
                class="m-auto hover:bg-greenHover text-6xl text-center px-10 py-3 rounded-full" :class="darkMode?'green':'greenlight'">Start</button>
            </div>
        </div>
        <!-- จบหน้า 1 -->


        <!-- หน้า 2 -->
        <div id="page2" class="flex flex-col  w-screen h-screen " v-show="page2" :class="darkMode? 'bg_green':'bg_greenlight'">
            <!-- Input User Information -->
            <div class="p-24">
                <div class="flex flex-col text-4xl space-y-5">
                    <p class=" text-center font-semibold">How old are you?</p>
                    <input v-model="userAge" type="number" class="border border-gray-300 rounded-full text-center pb-1 sm:m-auto" placeholder="Age(year)" :class="darkMode? 'green':'greenlight'">
                    <p class=" text-center font-semibold">Height</p>
                    <input v-model="userHeight" type="number" class="border border-gray-300 rounded-full text-center pb-1 sm:m-auto" placeholder="Height(cm.)" :class="darkMode? 'green':'greenlight'">
                    <p class=" text-center font-semibold">Weight</p>
                    <input v-model="userWeight" type="number" class=" border border-gray-300 rounded-full text-center pb-1 sm:m-auto" placeholder="Weight(kg.)" :class="darkMode? 'green':'greenlight'">
                </div>
                <div  class="flex justify-center mt-3 text-red">
                    {{ userMessage }}
                </div>
            </div>
            <!-- Next And Back Button -->
            <div class="flex flex-row" >               
                <button @click="backPage" id="page-2B"
                class="m-auto hover:bg-greenHover text-3xl text-center px-5 py-3 rounded-full" :class="darkMode?'green':'greenlight'">Back</button>                              
                <button @click="nextPage" id="page-2" 
                class="m-auto hover:bg-greenHover text-3xl text-center px-5 py-3 rounded-full" :class="darkMode?'green':'greenlight'">Next</button>              
            </div>
        </div>
        <!-- จบหน้า2 -->


        <!-- หน้า 3 -->
        <div id="page3" class="flex flex-col w-screen h-screen space-y-7" v-show="page3" :class="darkMode? 'bg_green':'bg_greenlight'">
            <div class=" space-y-5">
                <!-- Input User Gender -->
                <div class="text-4xl text-center mt-16">
                    <p>What gender you are</p>
                    <div class="flex flex-col md:justify-center m-auto w-1/3 md:flex-row ">
                        <div class="mt-10 md:mr-10" ><button @click="isWoman" class=" bg-pink rounded-full  md:m-auto hover:bg-pinkFocus focus:bg-pinkFocus butGender">Woman</button></div>
                        <div class=" mt-10 mb-10 md:ml-10 "> <button @click="isMan" class="bg-blue rounded-full  md:m-auto hover:bg-blueFocus focus:bg-blueFocus butGender">Man</button></div>
                    </div>
                </div>
                <!-- Input Activity -->
                <div class="text-center">
                    <p class="text-4xl">What kind of activity is your activity?</p>
                    <div class="flex justify-center  mt-10 m-auto md:flex-row">
                        <label for="underline_select" class="sr-only">Underline select</label>
                        <select style="width: 27%; height: 10%;"
                            v-model="activity"
                            class="block appearance-none p-2 border-gray-400 hover:border-gray-500 rounded-full shadow" :class="darkMode? 'green':'greenlight'">
                            <option v-for="(act,index) in activities" :key="index" selected>{{ act }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- Next And Back Button -->
            <div class="flex flex-row" >               
                <button @click="backPage" id="page-3B"
                class="m-auto hover:bg-greenHover text-3xl text-center px-5 py-3 rounded-full" :class="darkMode?'green':'greenlight'">Back</button>                              
                <button @click="nextPage" id="page-3" 
                class="m-auto hover:bg-greenHover text-3xl text-center px-5 py-3 rounded-full" :class="darkMode?'green':'greenlight'">Next</button>              
            </div>
        </div>
   
        <!-- จบหน้า3 -->
        
        <!-- หน้า4 -->
        <div class="flex flex-col w-full md:h-full" v-show="page4" :class="darkMode? 'bg_green':'bg_greenlight'">
            <div class="md:flex flex-row">
                <div class="md:w-1/2 "> 
                    <!-- Autometic Selecter Mode -->
                    <div class="mb-4 p-8 m-7 rounded-3xl" :class="darkMode? 'green':'greenlight'">
                        <h1 class="text-center mb:p-3 text-2xl ">Automatic Mode</h1>
                            <label for="underline_select" class="sr-only">Underline select</label>
                                <select v-model="selectFood" class="block appearance-none w-full p-2 bg-white border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-full shadow" :class="darkMode? 'box_green':'box_greenlight'">
                                        <option v-for="(myFoods, index) in myFood " :key="index" selected>{{ myFoods.name }}</option>
                                </select>
                             <!-- Add Button  -->
                            <span class="flex justify-center mt-3">
                                <button @click="filterFood" class="bg-blue hover:bg-blueFocus text-center w-30 rounded-full p-3">Add</button>
                            </span>
                    </div>
                    <!-- Custiom Input Mode -->
                    <div class="mb-4 p-8 m-7 rounded-3xl bg-gray-200" :class="darkMode? 'green':'greenlight'">
                        <h1 class="text-center   mb:p-3 text-2xl">Custom Mode</h1> 

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6 flex justify-start">
                                <p class="pr-3 pt-2">Name: </p>
                            </div>
                            
                            <div class="w-5/6">
                                <input class="w-full p-2 bg-white border border-gray-400 hover:border-gray-500 rounded-full" type="text" placeholder="food name" v-model="customName" :class="darkMode? 'box_green':'box_greenlight'">
                            </div>
                        </div>

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6 flex justify-start">
                                <p class="pr-2 pt-2">Protein:</p>
                            </div>
                            <div class="w-5/6">
                                <input min="0" class="w-full p-2 bg-white border border-gray-400 hover:border-gray-500 rounded-full" type="number" placeholder="number(g)" v-model="customProtein" :class="darkMode? 'box_green':'box_greenlight'">
                            </div>
                        </div>
                            
                        <div class="flex flex-row mt-3">
                            <div class="w-1/6 flex justify-start">
                                <p class="pr-2 pt-2">Carb: </p>
                            </div>
                            <div class="w-5/6">
                                <input min="0" class="w-full p-2 bg-white border border-gray-400 hover:border-gray-500 rounded-full" type="number" placeholder="number(g)" v-model="customCarb" :class="darkMode? 'box_green':'box_greenlight'">
                            </div>
                        </div>

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6 flex justify-start">
                                <p class="pr-2 pt-2">Fat:</p>
                            </div>
                            <div class="w-5/6">
                                <input min="0" class="w-full p-2 bg-white border border-gray-400 hover:border-gray-500 rounded-full" type="number" placeholder="number(g)" v-model="customFat" :class="darkMode? 'box_green':'box_greenlight'">
                            </div>
                        </div>

                        <div  class="flex justify-center mt-3 text-red">
                            {{ customMessage }}
                        </div>
                        <!-- Add Button -->
                        <div  class="flex justify-center mt-3">
                            <button @click="customAddFood" class="bg-blue hover:bg-blueFocus text-center w-30 rounded-full p-3">Add</button>
                        </div>
                    </div>
                </div>
                <!-- Foods List -->
                <div class="mb-4 p-8 m-7 rounded-3xl md:w-1/2" :class="darkMode? 'green':'greenlight'">
                        <h2 class="text-center p-3 text-3xl">List Of Foods</h2> 
                        <ul>
                            <div v-for="(item,index) in listOfFoods" :key="index" class="flex flex-row m-5">
                                <li class="border-b border-gray-400 w-full" >{{ item.name }}</li> 
                                <div class="flex justify-end ">
                                    <button @click="removeFood(index)" class="bg-red hover:bg-redFocus text-center w-30 rounded-full p-1">Remove</button>
                                </div>  
                            </div>
                        </ul>       
                </div>              
            </div>
            <!-- Next And Back Button -->
            <div class="flex flex-row mb-40">               
                <button @click="backPage" id="page-4B"
                class="m-auto hover:bg-greenHover text-3xl text-center px-5 py-3 rounded-full " :class="darkMode?'green':'greenlight'">Back</button>                              
                <button @click="nextPage" id="page-4" 
                class="m-auto hover:bg-greenHover text-3xl text-center px-5 py-3 rounded-full" :class="darkMode?'green':'greenlight'">Calculate</button> 
            </div> 
        </div>
        <!-- จบหน้า4 -->

        <!-- หน้า5 -->
        <div id="page5" class="flex flex-col w-screen  bg-green-100 md:h-screen" v-show="page5" :class="darkMode? 'bg_green':'bg_greenlight'">
            <div>
                <div class="flex flex-col  md:flex-row ml-5 mr-5 mt-10" >               
                    <div class="m-auto w-full h-full mr-10 mt-5 space-y-5 py-28 rounded-xl" :class="darkMode? 'green':'greenlight'">
                        <div class="mx-10">
                            <!-- Output Table -->
                            <table class="m-auto w-full bg-red-300 border-spacing-24 space-x-5">
                                <thead class="border-b-2 border-t-2" :class="darkMode? 'borderLight':'borderDark'">                            
                                    <tr>
                                        <th class="font-rbtB text-3xl tracking-widest text-center px-5 py-2 bg-green-500 border-y-2 border-black ">Nutrient</th>
                                        <th class="text-center text-3xl font-rbtB tracking-widest px-5 bg-green-500 border-y-2 border-black">Energy</th>
                                    </tr>                       
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center text-2xl font-rbtM py-2">Fat</td>
                                        <td class="text-center text-2xl font-rbtM">{{ sumFat }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center text-2xl font-rbtM py-2">Carb</td>
                                        <td class="text-center text-2xl font-rbtM">{{ sumCarb }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center text-2xl font-rbtM py-2">Protein</td>
                                        <td class="text-center text-2xl font-rbtM">{{ sumPro }}</td>
                                    </tr>                          
                                    <tr>
                                        <td class="text-center text-3xl font-rbtB  py-2 border-y-2 bg-green-300 border-black">Total</td>
                                        <td class="text-center text-3xl border-y-2 border-black bg-green-300 font-rbtB">{{ total }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Body Checking -->
                    <div class="flex flex-col w-full h-full m-auto mt-5 space-y-5 mr-5 rounded-xl" :class="darkMode? 'green':'greenlight'">
                        <div class="flex w-full h-full flex-col">
                            <div class=" bg-green-400 rounded-3xl mx-auto space-y-12 ">
                                <p class="flex text-3xl font-rbtB justify-center pt-6  ">Result</p>
                                <div class="flex flex-col text-2xl">
                                    <p v-for="(item, index) in bmr " :key="index" selected class="text-center font-rbtM justify-center"><span style="color: yellow;">{{ item }}</span></p>
                                    <p class="text-center justify-center lbmL">{{ status }}</p>
                                </div>
                            </div>
                        </div> 
                        <div class=" mx-auto">
                            <img style="height: 284px;"  :src="statusImg">
                        </div>
                    </div>    
                </div>
            </div>

            <!-- Next And Back Button -->
            <div class="flex justify-center mt-10 mb-40">
                <button @click="backPage" id="page-5B"
                    class="m-auto text-3xl text-center px-5 py-3 rounded-full hover:bg-greenHover" :class="darkMode?'green':'greenlight'">Back</button>
            </div>
        </div>
        <!-- จบหน้า5 -->
    </div>
</template>

<style scoped>
.borderLight{
    border-color: whitesmoke;
}
.borderDark{
    border-color: black;
}
.greenlight{
    background-color: #00a291;
    color: black;
}
.green{
    background-color: #00675c;
    color: white;
    
}
.bg_greenlight{
    background-color: whitesmoke;
}
.bg_green{
    background-color: #1a1a1a;
    color: white;
}
.boder_greenlight{
    border-color: #00a291;
    color: black;
}
.boder_green{
    border-color: #00675c;
    color: white;
}
.box_greenlight{
    background-color: whitesmoke;
    color: black;
}
.box_green{
    background-color: #1a1a1a;
    color: white;
}
.circle_greenlight{
    background-color: #03f7de;
    color: black;
}
.circle_green{
    background-color: #00675c;
    color: white;
}
.bg5_greenlight{
    background-color: rgb(255, 255, 255);
    color: black;
}
.bg5_green{
    background-color: #1a1a1a;
    color: white;
}
.square_greenlight{
    background-color: rgb(22, 163, 74);
    color: black;
}

.square_green{
    background-color: rgb(12, 88, 40);
    color: white;
}
.butGender{
    width: 220px;
    height: 80px;
    color: white;
}
.big_circlegreeenlight{
    background-color: rgb(22, 163, 74);
    color: black;
}
.big_circlegreen{
    background-color: rgb(12, 88, 40);
    color: white;
}
.cardLight {
    width: 600px;
    height: 600px;
    border-radius: 4px;
    display: flex;
    gap: 5px;
    padding: .4em;
}
.cardLight p{
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    transition: all .5s;
    background: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cardLight p:hover {
    flex: 4;
}
.cardLight p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    transform: rotate(360deg);
    transition: all .5s;
    text-transform: uppercase;
    letter-spacing: .1em;
}
.cardLight p:hover span {
    transform: rotate(0);
}
.cardDark {
    width: 600px;
    height: 600px;
    border-radius: 4px;
    display: flex;
    gap: 5px;
    padding: .4em;
}
.cardDark p{
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    transition: all .5s;
    background: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cardDark p:hover {
    flex: 4;
}

.cardDark p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    transform: rotate(360deg);
    transition: all .5s;
    text-transform: uppercase;
    letter-spacing: .1em;
}

.cardDark p:hover span {
  transform: rotate(0);
}
/* ///////////////////////////////// */

/* The switch - the box around the slider */
.switch {
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    --size-of-icon: 1.4em;
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
}
/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: .4s;
    border-radius: 30px;
}
.slider:before {
    position: absolute;
    content: "";
    height: var(--size-of-icon,1.4em);
    width: var(--size-of-icon,1.4em);
    border-radius: 20px;
    left: var(--slider-offset,0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg,#0f72f5,#67f7a3 70%);
    transition: .4s;
}
input:checked + .slider {
    background-color: #303136;
}   
input:checked + .slider:before {
    left: calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)));
    background: #303136;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
}
</style>
