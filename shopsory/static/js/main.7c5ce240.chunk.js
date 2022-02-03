(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{27:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),i=c.n(s),n=c(20),r=c.n(n),l=(c(27),c(10)),o=c(7),d=function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),i=c[0],n=c[1],r=Object(s.useState)("0"),d=Object(o.a)(r,2),h=d[0],j=d[1];Object(s.useEffect)((function(){var e=0;i.forEach((function(t){console.log(t.title+": "+t.amount),e+=t.price*t.amount}));var t=Math.round(100*e)/100;t=t.toFixed("2"),j(t)}),[i]);var u={addItem:function(e){var t=Object(l.a)(i),c=!1;t.forEach((function(a){a.id===e.id&&(a.amount++,c=!0,n(t))})),c||(e.amount=1,t.push(e),n(t))},addedItems:i,removeItem:function(e){for(var t=Object(l.a)(i),c=0;c<t.length;c++)if(t[c].id===e.id){t.splice(c,1);break}n(t)},incrementItem:function(e){var t=Object(l.a)(i);t.forEach((function(t){t.id===e.id&&t.amount++})),n(t)},decrementItem:function(e){var t=Object(l.a)(i);t.forEach((function(t){t.id===e.id&&t.amount>0&&t.amount--})),n(t)},setItemAmount:function(e,t){var c=Object(l.a)(i);c.forEach((function(c){c.id===e.id&&(c.amount<0?c.amount=0:c.amount=t)})),n(c)},totalPrice:h,getItemAmount:function(e){var t=Object(l.a)(i),c=0;return t.forEach((function(t){e.id===t.id&&(c=t.amount)})),c}};return Object(a.jsx)(v.Provider,{value:u,children:e.children})},h=c(8),j=c(2);c(18);var u=function(){var e=Object(s.useContext)(v);return Object(a.jsxs)("nav",{children:[Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)("h1",{children:"SHOPSORY"})}),Object(a.jsxs)("ul",{children:[Object(a.jsx)(h.b,{to:"/shop",children:Object(a.jsx)("li",{children:"Shop"})}),Object(a.jsx)(h.b,{to:"/about",children:Object(a.jsx)("li",{children:"About"})})]}),Object(a.jsxs)(h.b,{to:"/cart",className:"cart-icon",children:[Object(a.jsx)("i",{className:"fas fa-shopping-cart"}),Object(a.jsx)("span",{children:0!==e.addedItems.length?"("+e.addedItems.length+")":null})]})]})},m=function(e){var t=Object(s.useContext)(v);return Object(a.jsx)("div",{className:"popup",onClick:function(t){return e.togglePopup()},children:Object(a.jsxs)("div",{className:"popup-inner",onClick:function(e){e.stopPropagation()},children:[Object(a.jsx)("img",{src:"."+e.element.src,alt:e.element.title}),Object(a.jsxs)("div",{className:"popup-content",children:[Object(a.jsx)("h2",{children:e.element.title}),Object(a.jsx)("p",{children:e.element.description}),Object(a.jsxs)("div",{className:"price",children:[Object(a.jsxs)("span",{children:["Price: ",e.element.price+"\u20ac"]}),Object(a.jsx)("button",{className:"add-cart-btn",onClick:function(c){return t.addItem(e.element)},children:"Add to cart"}),0!==t.getItemAmount(e.element)?Object(a.jsxs)("p",{className:"current-cart",children:["Currently in cart: ",e.element.amount]}):null]}),Object(a.jsx)("button",{className:"close-btn",onClick:function(t){return e.togglePopup()},children:"Close"})]})]})})},b=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),i=c[0],n=c[1],r=Object(s.useState)(null),l=Object(o.a)(r,2),d=l[0],h=l[1],j=function(e){h(i?null:e),n(!i)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsx)("div",{className:"items",children:e.items.map((function(e){return Object(a.jsxs)("div",{className:"card-item",onClick:function(t){return j(e)},children:[Object(a.jsx)("div",{className:"image-overflow",children:Object(a.jsx)("img",{src:"."+e.src,alt:e.title},"img-"+e.id)}),Object(a.jsx)("span",{children:e.title}),Object(a.jsx)("span",{children:e.price+"\u20ac"})]},"div-"+e.id)}))}),i?Object(a.jsx)(m,{element:d,togglePopup:j}):null]})},p=[{id:"watch-1",src:"/assets/watch-1.jpg",title:"FOSSIL Hybrid FG",price:"202.00",description:"Wristwatch made with the best quality in mind. Other than showing time this watch has a stopwatch functionality. It even has an alarm function, so you can wake up at your desired time by having the watch vibrate or make a beeping sound.",amount:0},{id:"watch-2",src:"/assets/watch-2.jpg",title:"Pocket Watch Sekonda",price:"129.99",description:"A pocket watch of the best quality. Stay classy while knowing the time. Goes together perfectly with a dark suit & vest.",amount:0},{id:"watch-3",src:"/assets/watch-3.jpg",title:"DW FF-042",price:"99.90",description:"DW watch for those who want a simple, minimalist watch. Perfect for everyday use.",amount:0},{id:"watch-4",src:"/assets/watch-4.jpg",title:"Emporio Armani GG",price:"315.30",description:"The watch of watches. Water resistant up to 150m. Higher end of wristwatches",amount:0},{id:"watch-5",src:"/assets/watch-5.jpg",title:"FOSSIL Hybrid XG",price:"191.90",description:"Perfect everyday use wristwatch. Made with the best quality in mind.",amount:0},{id:"watch-6",src:"/assets/watch-6.jpg",title:"Lotus BAG",price:"75.00",description:"Best watch for a person who wants to stay in style while not breaking the bank.",amount:0}],O=[{id:"wallet-1",src:"/assets/wallet-1.jpg",title:"Clip Wallet",price:"14.40",description:"A minimalist and small wallet with a clip inside to hold all your cash. No coin-pocket",amount:0},{id:"wallet-2",src:"/assets/wallet-2.jpg",title:"Wallet-TRAD 02",price:"19.90",description:"A traditional looking wallet. Best for people who want to carry some cash with a lot of card space.",amount:0},{id:"wallet-3",src:"/assets/wallet-3.jpg",title:"Wallet-TRAD 03",price:"22.90",description:"A traditional looking wallet that also has a separate coin-pocket. Good for carrying lots of cash, cards and coins",amount:0},{id:"wallet-4",src:"/assets/wallet-4.jpg",title:"Wallet-Notes 3",price:"34.10",description:"Made with quality leather. Includes a small notebook and it all fits in your pocket!",amount:0},{id:"wallet-5",src:"/assets/wallet-5.jpg",title:"Wallet-Diary 944",price:"29.40",description:"A wallet with small dimensions that includes a notebook inside it. Made with quality leather.",amount:0}],x=[{id:"other-1",src:"/assets/hat.jpg",title:"Gray Hat",price:"12.00",description:"A gray hat. Most people who like gray hats will like this gray hat.",amount:0},{id:"other-2",src:"/assets/lighter.jpg",title:"Stainless Steel Lighter",price:"15.90",description:"A lighter made of stainless steel. Foolproof and stylish. Functions include producing a flame.",amount:0},{id:"other-3",src:"/assets/sunglasses.jpg",title:"Black Sunglasses",price:"11.00",description:"Black polarizing sunglasses.",amount:0},{id:"other-4",src:"/assets/diary.jpg",title:"Blank Diary",price:"9.30",description:"Blank diary for taking notes or sketching. 60 pages.",amount:0},{id:"other-5",src:"/assets/calendar.jpg",title:"Calendar-1 2021",price:"8.40",description:"A small and minimalist calendar for 2021",amount:0}];var f=function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(!0),r=Object(o.a)(n,2),l=r[0],d=r[1],h=Object(s.useState)(!1),j=Object(o.a)(h,2),u=j[0],m=j[1];function f(e,t,c){if(e)return Object(a.jsx)(b,{items:t,title:c})}return Object(a.jsxs)("div",{className:"shop",children:[Object(a.jsxs)("div",{className:"side",children:[Object(a.jsx)("label",{htmlFor:"watches-box",children:"Watches"}),Object(a.jsx)("input",{type:"checkbox",id:"watches-box",checked:c,onChange:function(e){return i(!c)}}),Object(a.jsx)("label",{htmlFor:"wallets-box",children:"Wallets"}),Object(a.jsx)("input",{type:"checkbox",id:"wallets-box",checked:l,onChange:function(e){return d(!l)}}),Object(a.jsx)("label",{htmlFor:"other-box",children:"Other"}),Object(a.jsx)("input",{type:"checkbox",id:"other-box",checked:u,onChange:function(e){return m(!u)}})]}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h1",{children:"shop"}),f(c,p,"Watches"),f(l,O,"Wallets"),f(u,x,"Other")]})]})};var g=function(){return Object(a.jsxs)("div",{className:"about",children:[Object(a.jsx)("h1",{children:"about"}),Object(a.jsx)("p",{children:"Example shop page with a shopping cart. Checkout and payments not implemented."}),Object(a.jsx)("p",{className:"stack",children:"Made with React"}),Object(a.jsxs)("a",{href:"https://www.github.com",children:[Object(a.jsx)("i",{className:"fab fa-github"}),Object(a.jsx)("span",{children:"Github"})]})]})},w=function(){var e=Object(s.useContext)(v);return Object(a.jsxs)("div",{className:"cart-container",children:[Object(a.jsx)("h1",{children:"shopping cart"}),Object(a.jsxs)("div",{className:"items",children:[0===e.addedItems.length?Object(a.jsx)("h3",{children:"cart is empty"}):null,e.addedItems.map((function(t){return Object(a.jsxs)("div",{className:"cart-item",children:[Object(a.jsx)("img",{src:"."+t.src,alt:""}),Object(a.jsxs)("div",{className:"item-content",children:[Object(a.jsx)("h2",{children:t.title}),Object(a.jsxs)("p",{children:["Price: ",t.price,"\u20ac"]}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsxs)("div",{className:"quantity",children:[Object(a.jsx)("p",{children:"Quantity: "}),Object(a.jsx)("input",{type:"number",value:t.amount,onChange:function(c){!function(t,c){t.target.value<0?e.setItemAmount(c,0):e.setItemAmount(c,t.target.value)}(c,t)}})]}),Object(a.jsx)("button",{className:"edit-number decrement",onClick:function(c){e.decrementItem(t)},children:"-"}),Object(a.jsx)("button",{className:"edit-number increment",onClick:function(c){e.incrementItem(t)},children:"+"}),Object(a.jsx)("button",{className:"remove-element",onClick:function(c){e.removeItem(t)},children:"Remove item"})]})]})]},"cart-"+t.id)})),0===e.addedItems.length?null:Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("p",{children:["Total price: ",e.totalPrice,"\u20ac"]}),Object(a.jsx)("button",{id:"checkout-btn",children:"Checkout"})]})]})]})},v=i.a.createContext();var k=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsx)("div",{className:"short",children:Object(a.jsx)("h1",{children:"ACCESSORY SHOP"})})})},y=function(){return Object(a.jsx)(h.a,{basename:"/shopsory",children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(j.c,{children:Object(a.jsxs)(d,{children:[Object(a.jsx)(u,{}),Object(a.jsx)(j.a,{path:"/",exact:!0,component:k}),Object(a.jsx)(j.a,{path:"/about",component:g}),Object(a.jsx)(j.a,{path:"/shop",component:f}),Object(a.jsx)(j.a,{path:"/cart",component:w})]})})})})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7c5ce240.chunk.js.map