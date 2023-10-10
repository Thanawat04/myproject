# PROJECT2-SEC-1-Anonymous
## รหัสนักศึกษา : 64130500025 | ชื่อ-สกุล : นาย เตชธรรม กาญจนสุทธากุล
หน้าที่ความรับผิดชอบ (20%)
---
- มีการทำไฟล์ getGroups.js
- db.json => ช่วยออกแบบโครงสร้างการเก็บข้อมูล
- Component Dice => ทำส่วนของCss และ Templete
- Component TableGame => มีส่วนในการออกแบบตารางเกม แล้ว ทำ function Again,function resetPosition และมีการทำในส่วนของSettimeoutของการวาร์ป
- Component Group =>  ทำ function deleteGroup (แต่ถูกแก้ไขไปแล้ว)
- Component InputUserInfo => ทำOnMounted,ช่วยทำValidate
- Component GroupManagemant => ทำaddNewGroupsแลmodifyGroup แต่มีการถูกแก้ไขไปแล้ว
- Component Popup => ทำเรื่องกดปุ่มplayAgainแล้วจะส่งค่า emit

## รหัสนักศึกษา : 64130500033 | ชื่อ-สกุล : นาย ธนวัฒน์ เฉิน
หน้าที่ความรับผิดชอบ (20%)
---
 #### router 
- ทำ router เชื่อมไปยัง aboutView(view),NotFoundview(view) และ home(comp) <br>
#### view
- AboutView จัดหน้า ,ปุ่ม home(router link)
- NotFoundview จัดหน้า<br>
#### comp
- Dice จัดหน้า
- Nav ทำปุ่ม about us(router link)
- Popup จัดหน้า how to play กับ winner , ปุ่มปิดหน้า how to play
- Home จัดหน้า ,ปุ่ม how to play
- Group จัดหน้า ,ปุ่ม + , ทำฟังก์ชัน checkGroup(), onMounted()
- InputUser จัดหน้า ,ทำฟังก์ชัน  validate() ,เทส prop ส่งไป tablegame (ยังไม่มี json  ไม่ได้ใช้แล้ว)
- TableGame จัดหน้า ,แก้ไข walk(),checkControler(),setUserInfo()
- BinaryPreview (ไม่ได้ใช้แล้ว) 

## รหัสนักศึกษา : 64130500045 | ชื่อ-สกุล : นาย นิธิศ วิศยทักษิณ
หน้าที่ความรับผิดชอบ (20%)
---
- ทำไฟล์ getGroups.js
- วางโครงสร้างไฟล์ db.json ที่ใช้เก็บข้อมูลกลุ่มของผู้เล่นว่า กลุ่มชื่ออะไร มีผู้เล่นกี่คน แต่ละคนชื่ออะไรและตัวหมากใช้สีอะไร
- Component Dice => ทำfunction  rollDice(), animationRoll()
- Component TableGame => จัดelement, ทำfunction callPlay(), walk(), move(), showPlay(), Again(), resetPosition()
- Component Popup => วางโครงpopupของHow to Play, ทำfunction gotoHome() ที่อยู่ในpopup closeWinner	
- Component Home => แก้ปุ่มAbout us
- Component AboutView => แก้ไขelement
- Component GroupManagement => ทำfunction addNewGroups()(ถูกแก้ไขไปแล้ว), editGroup() (ถูกแก้ไขและเปลี่ยนชื่อเป็นmodifyGroup())
- Component Groups => ทำfunction deleteGroup()(ถูกแก้ไขไปแล้ว)


## รหัสนักศึกษา : 64130500046 | ชื่อ-สกุล : นาย ปฏิภาณ ศรีตั้งตรง
หน้าที่ความรับผิดชอบ (20%)
---
- Design => UX,UI
- AboutView => จัดหน้า ,ปุ่ม,สร้างข้อมูล และ นำมาจัดแสดง ในรูปแบบ loop
- Dice => จัดหน้า 
- Popup => จัดหน้า Page ทั้งส่วนการแสดงผลข้อมมูลและการตกแต่ง และ จัดทำ Function ของปุ่ม Back Next และปุ่ม ปิด Popup
- Group => จัดหน้า Page ทั้งส่วนการแสดงผลข้อมมูลและการตกแต่ง ทำ Function ตรวจสอบจำนวน Group ไม่ให้เกินจำนวนที่กำหนด (4 Group) 
- Home => Button HowtoPlay CSS บางส่วนของปุ่ม การจัดหน้า การ Import Font
- InputUserInfo => จัดทำส่วนรับข้อมูลและ Preview Check Validate Optimize Code ดั้งเดิม
- TableGames => props หลากหลายตัว get Information from JSON Server เตรียมไฟล์ข้อมูลให้พร้อมสำหรับ Mode ต่างๆ [จากการ Edit Create Play จำเตรียมข้อมมูลของแต่ละ Group ด้วย Function getUserInfo และ checkControler setUserInfo] จัดการการซ่อนตัวหมาก และ Round ของ User ฝั่งซ้ายให้ตรงกับ จำนวน User ที่ Input ข้อมูลเข้ามา [userControl] จัดการ flow ของ Function ด้วย watch ปรับแก้ไข Function หลักของตัวเกมให้รับข้อมูลต่างๆ จาก JSON Server เพื่อเพิ่มประสบการณ์การใช้งานให้ดียิ่งขึ้น bind Color Round ตัวหมาก และการส่งค่า winner ไป 
>< - BinaryPreview (ยกเลิกการใช้งานแล้วเนื่องจากข้อจำกัดของ JSON Server) โดยรวม ออกแบบ และจัดการหน้า page หลากหลายหน้า ในขณะทดสอบการทำงานของ Function มีการทำการส่งค่า props หลายตัวอยู่ ตัดต่อวิดีโอประกอบการนำเสนอ><


## รหัสนักศึกษา : 64130500049 | ชื่อ-สกุล : นางสาว ปอชา มี้เจริญ
หน้าที่ความรับผิดชอบ (20%)
---
- Component Dice : ทำเรื่องการขยับลูกเต๋าโดยไม่ใช้dom,การส่งemit

- Component TableGame : ดูเรื่องการส่ง/รับ prop รับemitจาก Component Dice มาใช้งาน เมื่อกดปุ่มRollแล้วจะให้ทำ ทำเรื่องการที่รู้ได้ว่าผู้เล่นคนไหนเป็นคนเดิน ทำโค้ดที่เลือกได้ว่าการเดินนั้นจะเป็นใคร ทำฟังก์ชันการวาร์ป การตั้งค่าsetTimeOut

- Component PopUp : ทำเรื่องการปิดหน้าHowtoPlay PopUp
- Componenet Nav: ทำเรื่องการปิดเปิดปุ่ม ส่ง emit
- Component InputUserInfo : ทำ validate เช็คเรื่องการใส่ชื่อแล้วลบเป็น empty string แล้วไม่ให้ส่งค่า และvalidate การเลือกสี ว่าต้องเลือกให้ครบถ้าไม่จะไม่สามารถไปหน้าต่อไปได้ ทำฟังก์ชันที่เก็บข้อมูลที่userใส่เข้ามาแล้วทำการส่งค่าจากemit ไปทำ Add,Edit ไปใช้ที่อีก Component หนึ่ง และการรับส่งค่า prop ทำว่าถ้าเป็นโหมด Edit ให้เปลี่ยนปุ่มเป็น Edit ทั้งหมด และถ้าเป็น โหมด Add ให้เป็นปุ่มComfirmทั้งหมด โดยเช็คว่าถ้ามี Id มาให้เป็น โหมด Edit

- Component Home: ทำการส่งค่า emit เพื่อเปิดปิดหน้าเมื่อมีการกดปุ่ม
- Component Group:ทำการส่งค่า emit เมื่อกดปุ่ม play edit delete และปุ่ม + แล้วให้ส่งค่าอะไรไปบ้าง รับส่งค่า prop
- Component GroupManagement : ทำการรับemit ส่งค่า prop ดูเรื่องการFetch POST,PUT ข้อมูล 

- Router : ช่วยดูsyntax ของการใช้งาน router ว่าควรเพิ่มอะไรที่ไหนบ้างเช่นต้อง use ใน main.js ต้องimport RouterLink,RouterView

	- เวลาที่ทำงานแยกกัน จะเป็นคนเอาไฟล์มา merge รวมกันในหลายครั้ง
	- การวาด Component Diagram เป็นคนสร้างโครงการโยงเส้นว่าควรมีอะไรบ้าง
	- ทำไฟล์ Readme.md

--- 
รายการฟีเจอร์ความสามารถของแอป พร้อมคำอธิบาย
---

1. HowToPlay
 	* เมื่อกดปุ่ม HowToPlay จะมีหน้า popup เด้งขึ้นมา ภายในหน้านั้นจะมีปุ่ม Back และ Next เป็นปุ่มที่จะเปลี่ยนหน้า กลับหน้าก่อนหน้าได้ และมีการทำไว้ว่าถ้าหากกดปุ่มครบรอบข้อมูลใน Array จะย้อนกลับไปข้อมูลแรก 

2. สามารถทำ Router
 	* โดยมีการผูกไว้กับหน้า Home และหน้า AboutUs

3. สามารถเก็บค่าข้อมูลที่ผู้เล่นกรอกเข้ามาเป็นรูปแบบGroup เพื่อทำการ Create, Edit, Delete และ View ใช้การ Fetch Api
	* คือจะมีการบังคับให้Add Group ซึ่งจะส่งค่าไปเก็บข้อมูลที่ json server โดยmethod POST และมีปุ่มที่สามารถกด Edit ข้อมูลได้โดยส่งข้อมูลผ่าน Method PUT และทำการกดปุ่ม Delete ได้ โดยส่งข้อมูลผ่าน Method DELETE และนำข้อมูลที่เก็บไว้ Fetch ออกมาใช้งาน ด้วยMethod GET

4. สามารถตรวจสอบถ้าหากกรอกค่าไม่ครบจะมีการแจ้งเตือน
    * เมื่อลืมกรอกในส่วน input ประเภทไหนก็จะมีการแจ้งเตือนสำหรับประเภทนั้นๆ เช่นลืมใส่สีก็จะมีการแจ้งเตือนของการลืมใส่สี ลืมใส่ชื่อก็จะมีการแจ้งเตือนของลืมใส่ชื่อ เป็นต้น

5. สามารถกดRollลูกเต๋าแล้วลูกเต๋าเปลี่ยนหน้า
    * เปลี่ยนหน้าลูกเต๋าตามค่าที่สุ่มมา

6. สามารถบอกTurn ผู้เล่นได้
    * จะมีรายชื่อพร้อมสีใส่กรอบไว้และเมื่อถึงTurnของผู้เล่นคนนั้น สีของกรอบก็จะเปลี่ยนเป็นสีที่Userเลือกเข้ามา
7. สามารถเดินหมากไปตามช่อง
    * หมากสามารถเดินไปตามช่องโดยสัมพันธ์กับลูกเต๋าที่เปลี่ยนหน้าจากเลขที่สุ่ม
8. PlayAgain/แสดงชื่อผู้ชนะ
    * จะมีหน้า popupที่แสดงชื่อผู้ชนะก็คือผู้ที่เดินถึงช่อง100นั่นเอง เด้งขึ้นมา พร้อมปุ่ม playAgain ซึ่งเมื่อกดแล้ว หมากก็จะกลับมาอยู่จุดเริ่มต้นและสามารถเล่นใหม่ได้ และมีปุ่มHome เพื่อกลับไปหน้าหลักเผื่อ User อยาก setค่าเพิ่มเติม


---
คู่มือการใช้งานแอปพลิเคชัน
---
[LINKคู่มือการใช้งานแอปพลิเคชัน](https://www.youtube.com/watch?v=ZymeJbd2dCk)
---
แหล่งข้อมูลอ้างอิงหรือเป็นแรงบันดาลใจในการพัฒนาแอปพลิเคชัน 
--
 * แรงบันดาลใจในการทำแอปนี้คือเริ่มจากการที่พวกเราคิดว่าอยากทำเกมที่สามารถเล่นด้วยกันได้ เลยลองหาพวกเกี่ยวกับบอร์ดเกมพวกเราเสนอกันหลายอย่างแต่ก็มาจบที่บันไดงูเพราะคิดว่าน่าจะครอบคลุมเรื่องที่เราเรียนได้พอสมควร และตอบโจทย์ที่เกมนี้สามารถเล่นด้วยกันกับเพื่อนได้นั่นเอง

    * การทำกระดานการเดินตัวหมากและหลุมวาร์ป
      * ref: https://www.youtube.com/watch?v=dcRqXrl5804
    * การทำลูกเต๋า
      * ref: https://www.youtube.com/watch?v=XTF5jXDr2H8
    * รูปภาพหน้า1และ2
      * ref: https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F
    * ปุ่ม
      * ref: https://uiverse.io/buttons?page=4
    * การดูการเปลี่ยนแปลงของค่าแล้วอยากให้ทำงาน การใช้ watch() in vue
      * ref: https://vuejs.org/api/reactivity-core.html#watch











