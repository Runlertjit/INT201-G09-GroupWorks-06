// สร้างที่เก็บสำหรับ Product
const product1 = {
    ID : 'P01',
    Product : 'AirPods Pro',
    Description: 'Active Noise Cancellation for sound.',
    Price : 8990,
    Stock : 10
}

const product2 = {
    ID : 'P02',
    Product : 'Huawei FreeBuds Pro True Wireless',
    Description : 'ตัดเสียงรบกวนได้เบาลงถึง 70%',
    Price : 4950,
    Stock : 9
}

const product3 = {
    ID : 'P03',
    Product : 'Bose QuietComfort Earbuds True Wireless',
    Description:'แบตเตอรี่อายุการใช้งานยาวนาน 6 ชั่วโมง',
    Price : 10690,
    Stock : 5
}

const product4 = {
    ID : 'P04',
    Product : 'marshall',
    Description:'แบตเตอรีใช้งานต่อเนื่อง 5 ชั่วโมง',
    Price : 5990,
    Stock : 9
}

const product5 = {
    ID : 'P05',
    Product : 'Xiaomi Redmi AirDots 2',
    Description : 'ส่งสัญญาณได้ไกล ใช้งานได้ 8-12 ชั่วโมง',
    Price : 3923,
    Stock : 7
}

// รูปภาพสำหรับสินค้าของแต่ละชิ้น
let image = [
    './image/airpods_pro_850x850_1.jfif',
    './image/FreeBuds-Pro-6.jpg',
    './image/QuietComfort-1.jpg',
    './image/marshall.jfif',
    './image/Xiaomi Redmi AirDots 3.jpg'
]
// export Product และ image เพื่อนำใช้ใน DOM
export {product1,product2,product3,product4,product5,image}