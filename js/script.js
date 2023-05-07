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

let cart={
    items:[],
    total:0,
}

const renderProducts=()=>{
    const productDiv=document.getElementById('products')
    productDiv.innerHTML=''

    products.forEach((item,index)=>{
      productDiv.innerHTML+=
      `
      <div class="p-2"><img style="height:80px;margin-right:30px;" src=${item.image}>
      <div class="d-flex flex-column mb-3">
        <div class="p-2"><h6 style="font-size: smaller;">
        <h6 style="font-size: smaller;"> ${item.name}<i class="bi bi-three-dots"></i></i></h6>
        </h6></div>
        <div class="p-2"><h6 style="font-size: smaller;"> ${item.price} تومان</h6></div>
        <div class="p-2"><button class="full-box"><h6 style="font-size: smaller;" onclick="addToCart(${index})">افزودن به سبد خرید</h6></button></div>
      </div>
      `
    })
}

const renderCartItems=()=>{
 let cartItems=JSON.parse(localStorage.getItem("items"));
 const cartDiv= document.getElementById('cart-items')
 cartDiv.innerHTML=''

 const totalPriceEl=document.querySelector('.cart-total-price')
 let totalPrice=0
 
 console.log(cartItems);
 if(cartItems.items.length===0){
    cartDiv.innerHTML='<h6>محصولی موجود نیست</h6>'
 }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
 cartItems.items.forEach((item)=>{
  totalPrice+=item.total

  cartDiv.innerHTML+=
  `
  <div class="p-2"><img style="height:80px;padding-right: 10px;" src=${item.image}>
     <div class="d-flex flex-row  mb-3">
        <div class="p-1"><i class="bi bi-plus-circle" onclick="addTooCart('${item.name}')"></i></div>
        <div class="p-1"><div class="one"><h5 style="padding-right: 10px;">${item.qty}</h5></div></div>
        <div class="p-1"><i class="bi bi-dash-circle" onclick="removeFromCart('${item.name}')"></i></div>
            </div>
</div>
  `
 })

 totalPriceEl.innerHTML=`<h6>جمع سبد خرید:${totalPrice} تومان</h6>`
}

const addToCart=(productIndex)=>{
  const product=products[productIndex]

  let existingProduct=false

  let newCartItems=cart.items.reduce((state,item)=>{
    if(item.name===product.name){
        existingProduct=true

        const newItem={
         ...item,
         qty:item.qty+1,
         total:(item.qty+1)*item.price
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
}
const removeFromCart=(productName)=>{
   let newCartItems= cart.items.reduce((state,item)=>{
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

const addTooCart=(productName)=>{
    let newCartItems= cart.items.reduce((state,item)=>{
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
renderProducts()
renderCartItems()

//localStorage.setItem("items",cart);
