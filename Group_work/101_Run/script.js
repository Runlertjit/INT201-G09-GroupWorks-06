import {product1,product2,product3,product4,product5,image} from './product.js'
//จัด Style ให้กับ #topic 
let topic = document.querySelector('#topic')
topic.setAttribute('class','text-center my-5')
topic.setAttribute('style','font : 2.5em bold ; font-variant: small-caps')
//จัด margin ให้กับ #product
let WrapProduct = document.querySelector('#product');
WrapProduct.setAttribute("class", "container row mx-auto")


function display(obj,img) { // สร้าง function เพื่อนำไปใช้ DOM
    const div = document.createElement('div'); // สร้าง Element div 
    div.setAttribute('id',obj.ID); // กำหนดให้ div แต่ละตัวที่รับเข้ามามี ID เป็น ID ของแต่ละ product
    div.setAttribute("class", "container col-4 mx-auto mb-5"); // จัด margin
    const EleImg = document.createElement('img'); // สร้าง Element img 
      EleImg.setAttribute('src',img) // กำหนด source ของรูปภาพที่ต้องการให้แสดง
      EleImg.setAttribute('style', 'width : 250px; height : 200px; margin-bottom: 2rem')
      div.appendChild(EleImg); // กำหนดให้ Element img เป็น child ของ Element div
    for (let i in obj){ // Loop in Object ที่รับเข้ามา
        const Elep = document.createElement('p'); // สร้าง Element p
        Elep.innerHTML = `<b>${i} :</b> ${obj[i]}` // ให้ Element p นำข้อมูลใน Object ไปแสดง
        Elep.style.fontFamily = "font-family: 'Zen Kaku Gothic Antique', sans-serif";
        div.appendChild(Elep); // กำหนดให้ Element p เป็น child ของ Element div
      }
    const button = document.createElement("button"); // สร้าง Element button
    button.setAttribute("type", "button"); // กำหนด type ให้เป็น button
    button.setAttribute("class", "btn btn-outline-primary"); 
    button.textContent = "Buy Now"; // ให้แสดงข้อความของ Button ว่า Buy Now
    div.appendChild(button); // กำหนดให้ button เป็น child ของ Element div
    WrapProduct.appendChild(div); // กำหนดให้ Element div เป็น child ของ WrapProduct
  }

// เรียกใช้ function เพื่อให้แสดงเป็น DOM
display(product1,image[0]);
display(product2,image[1]);
display(product3,image[2]);
display(product4,image[3]);
display(product5,image[4]);

