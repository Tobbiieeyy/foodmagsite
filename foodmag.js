

window.onload = () => {
    showContent('foodmag', this);
};    


//Toggle main menu on click
function showContent(page, clickedButton) {
    // Hide all content
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Show the clicked content
    const selectedContent = document.getElementById(page);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
    document.querySelectorAll('.menu_items').forEach(button => {
        button.classList.remove('active');
    });
    clickedButton.classList.add('active');
}
const r = "3mKm3";
function displayContent(page, clickedButton) {
    // Hide all content
    const contents = document.querySelectorAll('.submenu');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the clicked content
    const selectedContent = document.getElementById(page);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
    document.querySelectorAll('.galleryItems').forEach(button => {
        button.classList.remove('active');
    });
    clickedButton.classList.add('active');
}
function loadContent(page, clickedButton) {
    // Hide all content
    const contents = document.querySelectorAll('.communityMenu');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the clicked content
    const selectedContent = document.getElementById(page);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
    document.querySelectorAll('.communityItems').forEach(button => {
        button.classList.remove('active');
    });
    clickedButton.classList.add('active');
}


// FOR Sign Up Modal
// const modal= document.getElementById("signUpForm");
// const openBtn= document.getElementById("signUpBtn");
// const closeBtn= document.getElementById("close");
// const signIcon= document.getElementById("headerLogin");
// const reg= document.getElementById("reg");


// // FOR Sign In Modal
// const modal1= document.getElementById("signInForm");
// const signin= document.getElementById("signInBtn");
// const close1= document.getElementById("close1");
// // FOR Sign Up Modal
// signIcon.addEventListener('click', function(){
//     reg.style.display = "flex";
// });
// openBtn.addEventListener('click', function()  { 
//     modal.style.display = "flex";
// });
// closeBtn.addEventListener('click', function()  { 
//     modal.style.display = "none";
// });
// // FOR Sign In Modal
// signin.addEventListener('click', function(){
//     modal1.style.display = "flex";
// });
// close1.addEventListener('click', function(){
//     modal1.style.display = "none";
// });




  // FOR SEARCH


const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchTerm');

searchButton.addEventListener('click', function() {
    const fquery = searchInput.value.trim().toLowerCase();
    
    // Show input if it's hidden and focus it
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'inline-block';
        searchButton.style.marginLeft= "-50px";
        searchInput.focus();
    } 
    
    // Perform search if input is not empty
    else if (fquery !== '') {
        search(fquery);
        //displayThreeImages(query);  // Pass the query to the function
        searchInput.style.display = 'none';  // Hide input after search
        searchButton.style.marginLeft= "0px";
        searchInput.value = '';  // Clear the input field
    }
});

//random fuction 
function randomE(x) {
    const randomItem = x.sort(() => Math.random() - 0.5);
    return randomItem;
}

function isaFood(a) {
    fetch('food-list.json').then(resp => resp.json())
    .then(foodList => {
        console.log (foodList.length);
        if (foodList.includes(a)) {
            console.log (a +" is gay");
            return a;
        } else {
            console.log (a +"is not a food");
        }
    });
}
let page = 1;
// Function to fetch images based on query or search
async function search(fquery) { isaFood(fquery);
    const api = j+e+ui+r+k+liu+s+v;
    const endpoint = `https://api.pexels.com/v1/search?query=${encodeURIComponent(fquery)}&page=${page}&per_page=90`;

    // const reci = "";
    // const endoint1 = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=15&apiKey=${reci}`;
    

    const reply = await fetch(endpoint,{
        headers: {Authorization: api},
    });

    if (!reply.ok) throw new Error(`Pexels error ${reply.status}`);


    // const report = await fetch(endoint1);
    // if (!report.ok) throw new Error(`Pexels error ${report.status}`);
    // const recipe = await report.json();
    // const recTit = recipe.results;
/////////////////////////////////////////////////////////////////////////////////


    // for (const element of recTit) {
    //     const newDetail = element.id;
    //     const endoint2 = `https://api.spoonacular.com/recipes/${newDetail}/information?apiKey=${reci}`;
    //     console.log(newDetail);
    //     try {
    //         const resp = await fetch(endoint2);
    //         if (!resp.ok) throw new Error(`Spoonacular error ${resp.status}`);

    //         const resDe = await resp.json();
    //         // const newresDe = resDe.title
    //         // const newresD = resDe.image.original;
    //         console.log(resDe);
    //         console.log('This is the random element'+ randomE(resDe[0]));
            
    //     } catch (error) {
    //         console.error("Fetch failed:",error);
    //     }
    // }




    //console.log(recTit);


    // image reply
    const data = await reply.json();
    const dataP = data.photos;


    doneRand = randomE(dataP);
    displayThreeImages(doneRand);
    displayFoodGallery(doneRand);
     return dataP, doneRand;//, recTit, reci;
    
}



// display three images to add image results to the containers
const didsw = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3')
];
function displayThreeImages(g) {
    // three images
    const dataNew = g.slice(1,10);
    didsw.forEach(img => {
        img.src = '';
    });
    didsw[0].src = dataNew[0].src.original;
    didsw[1].src = dataNew[4].src.original;
    didsw[2].src = dataNew[8].src.original;
}


const thisa = document.getElementById("foodGalleryShow");
function displayFoodGallery(g){
    // display the whole gallery image
    g.forEach(img =>{
        const galleryE = document.createElement("div");
        galleryE.setAttribute("class", "foodGalleryItem");
        const newImg = document.createElement("img");
        newImg.src = img.src.original;
        galleryE.appendChild(newImg);
        thisa.appendChild(galleryE);
        console.log("it rreached here")
    });
}

// function for ethical eating 
const eE = document.getElementById("eE");
eE.textContent = "";
const eEArr = [
    "Buy locally grown fruits and vegetables to support nearby farmers.",
    "Choose foods that are in season to reduce transportation emissions.",
    "Eat more plant-based meals throughout the week.",
    "Purchase Fair Trade certified products when available.",
    "Plan your meals to minimize food waste.",
    "Compost fruit and vegetable scraps instead of throwing them away.",
    "Shop at farmers’ markets or join community-supported agriculture programs.",
    "Buy only what you can eat before it spoils.",
    "Store leftovers properly to extend their freshness.",
    "Choose local products over imported ones when possible.",
    "Make tap water or filtered water readily available at home to reduce plastic bottle waste.",
    "Support restaurants that source ingredients ethically.",
    "Grow your own herbs, fruits, or vegetables at home.",
    "Reuse containers, jars, and bags to cut down on waste.",
    "Reduce your intake of highly processed foods.",
    "Cook at home to control ingredients and reduce packaging.",
    "Choose sustainable seafood certified by the Marine Stewardship Council.",
    "Avoid palm oil unless it’s sustainably sourced.",
    "Choose organic options for foods with high pesticide levels.",
    "Donate surplus food instead of wasting it.",
    "Learn about where your food comes from and how it’s made.",
    "Eat mindfully, slow down and appreciate your meals.",
    "Choose a diverse diet to encourage agricultural biodiversity.",
    "Share extra food with neighbors or community.",
    "Teach children and others about ethical food choices.",
    "Use reusable cutlery and straws instead of disposable ones.",
    "Support brands that prioritize regenerative agriculture.",
    "Buy in bulk to reduce packaging waste.",
    "Avoid single-use coffee cups, bring your own reusable one.",
    "Support local bakeries, butchers, and produce shops over large chains.",
    "Reuse cooking water for soups or watering plants.",
    "Support fisheries that use ethical, low-impact methods.",
    "Eat the “ugly” fruits and vegetables they’re just as nutritious.",
    "Freeze leftover meals to reduce spoilage.",
    "Avoid food delivery when possible.",
    "Eat whole foods instead of ultra-processed snacks.",
    "Support brands with transparent supply chains.",
    "Avoid foods with excessive artificial additives or colors.",
    "Try cultural cuisines that use whole, fresh, and seasonal ingredients.",
    "Use all parts of ingredients like stems, peels, and leaves where edible.",
    "Reduce consumption of resource-heavy drinks like bottled soda.",
    "Track your food waste for a week and try to improve it.",
    "Celebrate food. Respect the effort, land, and people behind every meal."
];

const newTips = randomE(eEArr);
const topTips = [newTips[0],newTips[1],newTips[2]];
topTips.forEach(text =>{
    const p = document.createElement("p");
    p.textContent = text;
    console.log(text);
    p.setAttribute("class", "newTip");
    eE.appendChild(p);
    return eE;
});

window.addEventListener('scroll', () => {
    const{ scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50){
        page++;
        search(fquery);
    }
})

// function randomizeImg() {
//     const q = randomE(doneRand);
//     const f = q.src.original;
//     didsw.forEach(img =>{
//         img.classList.add("fadeOut");

//         setTimeout(() => {
//             img.src = f ;
//             img.classList.remove("fadeOut");
//         });
//     });
// }


//function to get recipe details
// function recInfo(info){
//     info.forEach(element => {
//     });
// }














const j = "yCmN";
const e = "l5F8";
const ui = "dibbv";
const k = "m2O75";
const liu = "nDKlxn";
const s = "N9ap8GcQeLWYSaT";
const v = "ggoU1Y3APRKt";


//console.log(api);








//         SEARCH FUNCTION




        


//FOR LIST
let newItems = ["Burger ", "Shawarma", "Pizza ", "Chicken", "Fish","Bread"];

 



