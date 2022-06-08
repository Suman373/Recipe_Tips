const scrollLeftBtn = document.getElementById('slide-left');
const scrollRightBtn = document.getElementById('slide-right');
const imageContainer = document.getElementById('image-container');

const likeBtn = document.getElementById('like-react');
let favMessage=document.getElementById('fav-message');
let favState =false;

// scroll to top

function scrollbutton(){
    window.scrollTo(
        {
            top:0, 
            behaviour:'smooth'
        }
    );
}


//like reaction
likeBtn.addEventListener('click',()=>{
    if(!favState){
        likeBtn.classList.toggle('like-active');
        favMessage.textContent="Added to favourites!";
        setTimeout(()=>{
            favMessage.textContent="";
        },2000);
        favState=true;
    }
    else if(favState){
        likeBtn.classList.toggle('like-active');
        favMessage.textContent="Removed from favourites!";
        setTimeout(()=>{
            favMessage.textContent="";
        },2000);
        favState=false;
    }
    else
         favState=false; 
});

//scrolling horizontally
scrollLeftBtn.addEventListener('click',()=>{
    imageContainer.scrollLeft -= 150;
});
scrollRightBtn.addEventListener('click',()=>{
    imageContainer.scrollLeft += 150;
});

const recipes=[
    {
        name:'Batter Fish Fry',
        image:'src/images/batter-fish-big.jpg',
        tips:'If your fish batter is not crispy enough when cooked try thinning the batter with a little more liquid. Pre-heating the oil to the proper temperature is also very important or the fish will absorb too much of the oil while cooking.'
    },
    {
        name:'Steak Pie',
        image:'src/images/steak-pie-big.jpeg',
        tips:'Sprinkle dried breadcrumbs or crushed cornflakes, or other types of cereal, on the bottom crust before filling and baking in the oven. This will prevent the filling from turning the crust soggy.'
    },
    {
        name:'Cheese Fondue',
        image:'src/images/chees-fondue big.jpg',
        tips:'As best fondue practice, melt cheese very gradually on low, even heat. This will prevent any separation of fats in the melting cheeses. Adding a handful at a time, incorporate shredded cheese until melted.'
    },
    {
        name:'Barbeque Chicken',
        image:'src/images/bbq-chicken-big.jpeg',
        tips:'Brining is simply submerging the chicken in a salt-water solution before grilling. This prevents the chicken from overcooking on the grill and also helps it get great grill marks, as the increased surface moisture and sugars brown quickly.'
    },
    {
        name:'Italian Pizza',
        image:'src/images/pizza-big.webp',
        tips:'Some classic Italian ingredients such as Prosciutto San Daniele, Provolone, artichokes, Italian sausage, salami, black olives, anchovies and of course a few strands of fresh basil are the true "wonder toppings" for an authentic Italian pizza.'

    },
    {
        name:'Fish Orly',
        image:'src/images/fish-orly-big.jpg',
        tips:' Coating fish with flour before cooking enhances its naturally delicate texture by creating a crispy golden-brown outer crust while retaining its inner flakiness. Used most often when pan-frying, the flour coating adds flavor and helps to seal in juices.'
    },
    {
        name:'Spicy Macaroni',
        image:'src/images/macaroni-big.jpg',
        tips:'If you are using a plain tomato (marinara) sauce, stir in seasonings to add extra flavor. Red pepper flakes, dehydrated or fresh garlic, dried oregano, parsley, or basil, or an Italian seasoning blend are all good options.'
    },
    {
        name:'Lobster Thermidor',
        image:'src/images/lobster-termidor-big.jpg',
        tips:'Brush the lobster with melted butter, and season with salt, pepper, and paprika if desired. Place lobster tails in a baking dish, then add just enough water or wine to cover the bottom of the pan, about ½ cup. Bake until the flesh is firm and pinkish-white, about 1 to 2 minutes per ounce.'
    },
    {
        name:'Shish Tawook',
        image:'src/images/shish-tawook.big.jpeg',
        tips:'Marinade the chicken for at least 4 hours, but preferably overnight in the fridge to allow the chicken to tenderize. Cover the chicken immediately with pita bread after grilling and use plain full fat yogurt, not Greek yogurt.'
    },
    {
        name:'Swedish Meatballs',
        image:'src/images/meatball-big.jpg',
        tips:'Meatballs should be cooked until they reach the minimum internal temperature for safe consumption. If you let them simmer or sit in the sauce for too long, you can overcook them, in which case they will become tough at first—and eventually turn soggy and mushy.'
    }  
]

const recipe1 = document.getElementById('1');
const recipe2 = document.getElementById('2');
const recipe3 = document.getElementById('3');
const recipe4 = document.getElementById('4');
const recipe5 = document.getElementById('5');
const recipe6 = document.getElementById('6');
const recipe7 = document.getElementById('7');
const recipe8 = document.getElementById('8');
const recipe9 = document.getElementById('9');
const recipe10 = document.getElementById('10');
let recipeName = document.getElementById('recipe-name');
let imageHolder = document.getElementById('recipe-image-holder');
let contentHolder = document.getElementById('recipe-content-holder');

recipe1.addEventListener('click', ()=>{
    recipeName.textContent = recipes[0].name;
    imageHolder.innerHTML = `
    <div class="recipe-image-holder"       id="recipe-image-holder">
    <img src='${recipes[0].image}'>
    </div>`
    contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[0].tips}</p>
  </div>`
});
recipe2.addEventListener('click', ()=>{
    recipeName.textContent = recipes[1].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[1].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[1].tips}</p>
  </div>`
  likeBtn.classList.remove('like-active');
});
recipe3.addEventListener('click', ()=>{
    recipeName.textContent = recipes[2].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[2].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[2].tips}</p>
  </div>`
});
recipe4.addEventListener('click', ()=>{
    recipeName.textContent = recipes[3].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[3].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[3].tips}</p>
  </div>`
});
recipe5.addEventListener('click', ()=>{
    recipeName.textContent = recipes[4].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[4].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[4].tips}</p>
  </div>`
});
recipe6.addEventListener('click', ()=>{
    recipeName.textContent = recipes[5].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[5].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[5].tips}</p>
  </div>`
});
recipe6.addEventListener('click', ()=>{
    recipeName.textContent = recipes[5].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[5].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[5].tips}</p>
  </div>`
});
recipe7.addEventListener('click', ()=>{
    recipeName.textContent = recipes[6].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[6].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[6].tips}</p>
  </div>`
});
recipe8.addEventListener('click', ()=>{
    recipeName.textContent = recipes[7].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[7].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[7].tips}</p>
  </div>`
});
recipe9.addEventListener('click', ()=>{
    recipeName.textContent = recipes[8].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[8].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[8].tips}</p>
  </div>`
});
recipe10.addEventListener('click', ()=>{
    recipeName.textContent = recipes[9].name;
   imageHolder.innerHTML = `
   <div class="recipe-image-holder"       id="recipe-image-holder">
   <img src='${recipes[9].image}'>
   </div>`
   contentHolder.innerHTML=`
   <div class="recipe-content-holder" id="recipe-content-holder">
  <p id="recipe-tips">${recipes[9].tips}</p>
  </div>`
});

// For rating icons
let icons = document.querySelectorAll('.fa-star');
let rateIcons =[
    'rate-icon1','rate-icon2','rate-icon3','rate-icon4',
    'rate-icon5'
]

function oneStar(){
    let star1= document.getElementById(`${rateIcons[0]}`);
    star1.style.color = "yellow";
}
function twoStar(){
    for(let i=0;i<2;i++){
        document.getElementById(`${rateIcons[i]}`).style.color += 'yellow';
    }
    
}
function threeStar(){
    for(let i=0;i<3;i++){
        document.getElementById(`${rateIcons[i]}`).style.color += 'yellow';
    }
}
function fourStar(){
    for(let i=0;i<4;i++){
        document.getElementById(`${rateIcons[i]}`).style.color += 'yellow';
    }
}
function fiveStar(){
    for(let i=0;i<5;i++){
        document.getElementById(`${rateIcons[i]}`).style.color += 'yellow';
    }
}
