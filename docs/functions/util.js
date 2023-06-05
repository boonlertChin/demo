const h1 = (strings, title) => `<h1>${title}</h1>`
const h2 = (strings, title) => `<h2>${title}</h2>`
const h3 = (strings, title) => `<h3>${title}</h3>`
const h4 = (strings, title) => `<h4>${title}</h4>`

const MapActive = '#ff7000'
const MapDefault  = '#00ffff'

const tabName = [
    {tab: '1 บันทึก <br/>Packing', caption: '1 บันทึก Packing'},
    {tab: '2 สอบกลับ<br/>การใช้วัตถุดิบ', caption: '2 สอบกลับการใช้วัตถุดิบ',},
    {tab: '3 Capacity<br/>ประจำวัน', caption: '3 Capacityประจำวัน',},
    {tab: '4 จำนวนเก๊ะ<br/>ผลิตแยกเตา', caption: '4 จำนวนเก๊ะผลิตแยกเตา'},
    {tab: '5 สรุปผล<br/>การดำเนินงาน', caption: '5 สรุปผลการดำเนินงาน'},
    {tab: '6 สรุปไม่เป็น<br/>ไปตามข้อกำหนด', caption: '6 สรุปไม่เป็นไปตามข้อกำหนด'},
    {tab: '7 สรุปรายงาน<br/>บันทึกประจำวัน', caption: '7 สรุปรายงานบันทึกประจำวัน'},
    {tab: '8 ตารางแสดง<br/>รายละเอียด', caption: '8 ตารางแสดงรายละเอียด'},
    {tab: 'A สัดส่วนสูตรผลิต<br/>รายละเอียดการใช้วัตถุดิบ', caption: 'A สัดส่วนสูตรผลิต/รายละเอียดการใช้วัตถุดิบ'},
]

