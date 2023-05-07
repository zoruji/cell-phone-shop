const products=[
  {
      id:1,
      name:'گوشی موبایل گلکسیA73 سامسونگ 5G حافظه256',
      price:17345000,
      color:'سفید',
      image:'./img/0031695_گوشی-موبایل-گلکسی-a33-سامسونگ-5g-حافظه-128-گیگابایت-رم-6-گیگابایت_415.jpeg.webp'
  },

  {
      id:2,
      name:'گوشی موبایل گلکسی A73 سامسونگ5G حافظه128',
      price:15389000,
      color:'آبی',
      image:'./img/0031613_گوشی-موبایل-گلکسی-a53-سامسونگ-5g-حافظه-256-گیگابایت-رم-8-گیگابایت_415.jpeg.webp'
  },

  {
      id:3,
      name:'گوشی موبایل گلکسیA53 سامسومگ5G حافظه256',
      price:19509000,
      color:'آبی',
      image:'./img/0030279_گوشی-موبایل-گلکسی-a53-سامسونگ-5g-حافظه-256-گیگابایت-رم-8-گیگابایت_100.webp'
  },

  {
      id:4,
      name:'گوشی موبایل گلکسیA53 سامسومگ5G حافظه128',
      price:12279000,
      color:'صورتی',
      image:'./img/0031605_گوشی-موبایل-سامسونگ-گلکسی-a23-حافظه-128-گیگابایت-رم-4-گیگابایت_415.jpeg.webp'
  },
]



let cartItems=JSON.parse(localStorage.getItem("items"));
const shopping=document.getElementById("shop-kadr");
const buy=document.getElementById("cart-itemss");
const totalPriceEl=document.getElementById("cart-total-pricee");
let totalPrice=0
if(cartItems.items.length===0){
  buy.innerHTML='<h6 style="margin-left:800px;">سبد خرید شما خالی است!</h6>'
}

cartItems.items.forEach((item,index)=>{
  totalPrice+=item.total
  totalPriceEl.innerHTML=`<h6 class="empty">جمع سبد خرید:${totalPrice} تومان</h6>`
  
})

let cart={
    items:[],
    total:0,
}

shopping.innerHTML='';
cartItems.items.forEach((item)=>{
shopping.innerHTML +=
` 
<div class="shop-kadr">
<div class="d-flex justify-content-start">
            <img style="padding-top:10px;padding-right:25px;width:100px;height:100px;" src="${item.image}">
              <div class="d-flex flex-column mb-3">
                <div class="p-6"><h6 style="padding-top:20px ;">${item.name}</h6></div>
                <div class="p-6"><h6>گیگابایت</h6></div>
                <div class="d-flex flex-row mb-8">
                    <div class="p-2"><i style="color: rgb(58, 58, 241);" class="bi bi-circle-fill"></i></div>
                    <div class="p-2"><h6>رنگ:${item.color}</h6></div>
                  </div>
                 
                  <div class="d-flex flex-row mb-3">
                    <div  class="p-6"> <i class="bi bi-award"></i></div>
                    <div class="p-6"><h6>گارانتی 18 ماهه شرکتی (تضمین اصالت کالا، رجیستر شده)</h6></div>
                    
                  </div>
                  <div class="d-flex flex-row  mb-3">
                    <div class="p-1"><h6>تعداد:</h6></div>
                    <div class="p-1"><i class="bi bi-plus-circle" onclick="addToCart('${item.name}')"></i></div>
                    <div class="p-1"><div class="one"><h5 style="padding-right: 10px;">${item.qty}</h5></div></div>
                    <div class="p-1"><i class="bi bi-dash-circle" onclick="removeFromCart('${item.name}')"></i></div>
                    
                </div>
                <div class="d-flex justify-content-around">
                    <h6 style="margin-right:60px;color: rgb(58, 58, 241);cursor: pointer" onclick="removeeFromCart('${item.name}')">حذف کالا</h6>
                    
                    <h5 style="margin-right:320px ;">${item.total} تومان</h5>
                </div>
              </div>
           </div>
           </div>

           
`
})

cartItems.items.forEach((item,index)=>{
buy.innerHTML=''
buy.innerHTML +=
`
<div class="shop-kadr1">
                <div style="margin:20px ;" class="d-flex justify-content-between">
                    <h6 style="color: rgb(93, 84, 84);">قیمت کالاها</h6>
                    <h6 style="color: rgb(93, 84, 84);">${totalPrice} تومان</h6>
                      
                </div>
                <div style="margin-right: 10px;" class="d-flex justify-content-between">
                    <h6 style="margin-right: 15px;color: red;">تخفیف‌ها</h6>
                    <h6 style="margin-left: 18px;color: red;">0 تومان</h6>
                </div>
                <div class="d-flex justify-content-between">
                     <h6 class="box">جمع سبد خرید</h6>
                     <h6 class="box1">${totalPrice} تومان</h6>
                      
                </div>
                <hr style="border-width:2px;width:300px;margin-right:22px;">
                <h6 style="margin-right:20px ;color: rgb(93, 84, 84);">هزینه ارسال</h6>
               <button class="warning2"><h6>ادامه خرید</h6></button>
            </div>
            <hr style="width:350px;color: cadetblue;border-width:3px;">
            <div  class="d-flex mb-3">
                <div class="p-2"><i style="margin-right:40px;" class="bi bi-award"></i>
                <h6 style="font-size: small;">ضمانت اصل بودن کالا</h6>
                </div>
                <div  class="p-2"><i style="margin-right:40px;" class="bi bi-truck"></i>
                <h6 style="font-size: small;">ارسال سریع سفارش</h6>
                </div>
                <div class="p-2"><i style="margin-right:40px;" class="bi bi-box-seam"></i>
                  <h6 style="font-size: small;">فرصت 7 روزه بازگشت کالا</h6>
                  </div>
              </div>
`
})



const addToCart=(productName)=>{
  let newCartItems= cartItems.items.reduce((state,item)=>{
   if(item.name===productName){
     const newItem={
       ...item,
       qty:item.qty+1,
       total:(item.qty+1)*item.price
     }

     if(newItem.qty>0){
       return[...state,newItem]
     }else{
       return state
     }
   }

   return[...state,item]
   },[])

   cart={
     ...cart,
     items:newCartItems
   }

   renderCartItems()
   localStorage.setItem("items",JSON.stringify(cart));
}



const removeFromCart=(productName)=>{
  let newCartItems= cartItems.items.reduce((state,item)=>{
   if(item.name===productName){
     const newItem={
       ...item,
       qty:item.qty-1,
       total:(item.qty-1)*item.price
     }

     if(newItem.qty>0){
       return[...state,newItem]
     }else{
       return state
     }
   }

   return[...state,item]
   },[])

   cart={
     ...cart,
     items:newCartItems
   }
   renderCartItems()
   localStorage.setItem("items",JSON.stringify(cart));
  }

  
 
    const renderCartItems=()=>{}
    const product=products[productIndex]

    let existingProduct=false

    let newCartItems= cartItems.items.reduce((state,item)=>{
      console.log(product);
     if(item.name===product.name){
      existingProduct=true

       const newItem={
         ...item,
         qty:item.qty-1,
         total:(item.qty-1)*item.price
       }
       return[...state,newItem]
      
     }
       return[...state,item]
    
     },[])
      if(!existingProduct){
        newCartItems.push({
          ...product,
          qty:1,
          total:product.price,
        })
      }
     cart={
       ...cart,
       items:newCartItems,
     }
     renderCartItems()
     localStorage.setItem("items",JSON.stringify(cart));
    
  
  
// //totalPriceEl.innerHTML=`جمع:${totalPrice}تومان`



