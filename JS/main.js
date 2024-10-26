
let home = `<div class="homePage">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-3 mb-4">
                        <div class="item rounded-2 position-relative">
                            <img src="images/logo.png" alt="" class="w-100">
                            <div class="layer position-absolute rounded-2 start-0 bottom-0 end-0 bg-light opacity-75 d-flex align-items-center ps-2">
                                <h3 class="text-black">Heyyy</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

let search = `<section id="search">
    <div class="searchPage">
        <div class="container w-75 mt-5">
            <div class="row py-4" >
                <div class="col-md-6">
                    <input onkeyup="searchData(this.value)"  id="byName" type="text" placeholder="Search By Name" class="form-control text-light bg-transparent">
                </div>
                <div class="col-md-6">
                    <input onkeyup="SearchData(this.value)" id="byLetter" type="text" placeholder="Search By First Letter" class="form-control text-light bg-transparent">
                </div>
            </div>
            <div class="data d-flex flex-wrap" id="searchData"></div>
        </div>
    </div></section>`;

let catagory =  `<section id="catagory">
            <div class="catagoryPage">
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-md-3 mb-4">
                                <div class="catagory-item rounded-2 position-relative">
                                    <img src="images/logo.png" alt="" class="w-100">
                                    <div class="meal-layer text-black position-absolute rounded-2 start-0 bottom-0 end-0 bg-light opacity-75 d-flex flex-column text-center">
                                        <h3>Heyyy</h3>
                                        <p >Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div></section>`;

let area = `<section id="area">
            <div class="areaPage">
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-md-3 mb-4">
                            <div class="area-item rounded-2 d-flex flex-column text-center">
                                <i class="fa-solid fa-house-laptop fa-4x"></i>
                                <h3></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div></section>`;

let ingredient = `<section id="ingredient">
            <div class="ingredientPage">
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-md-3 mb-4">
                            <div class="ingredient-item rounded-2 d-flex flex-column text-center">
                                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                                <h3>Heyyy</h3>
                                <p>The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></section>`;

let contact = `<section id="Contact" class="py-5">
    <div class="container ">
    <div class="row gy-3">
        <div class="col-md-4 offset-2">
        <input type="text" id="name" class="form-control mb-2" placeholder="Enter Your Name" oninput="validateForm()">
        <div id="nameAlert" class="alert alert-danger d-none"></div>
        </div>
        <div class="col-md-4">
        <input type="email" id="email" class="form-control mb-2" placeholder="Enter Your Email" oninput="validateForm()">
        <div id="emailAlert" class="alert alert-danger d-none"></div>
        </div>
        <div class="col-md-4 offset-2">
        <input type="number" id="phone" class="form-control mb-2" placeholder="Enter Your Phone" oninput="validateForm()">
        <div id="phoneAlert" class="alert alert-danger d-none"></div>
        </div>
        <div class="col-md-4">
        <input type="number" id="age" class="form-control mb-2" placeholder="Enter Your Age" oninput="validateForm()">
        <div id="ageAlert" class="alert alert-danger d-none"></div>
        </div>
        <div class="col-md-4 offset-2">
        <input type="password" id="password" class="form-control mb-2" placeholder="Enter Your Password" oninput="validateForm()">
        <div id="passwordAlert" class="alert alert-danger d-none"></div>
        </div>
        <div class="col-md-4">
        <input type="password" id="repassword" class="form-control mb-2" placeholder="Repassword" oninput="validateForm()">
        <div id="repasswordAlert" class="alert alert-danger d-none"></div>
        </div>
        <div class="offset-2 col-2">
        <button class="btn btn-outline-danger d-flex justify-content-center" id="submitButton" disabled>Submit</button>
        </div>
    </div>
    </div>
</section>`;

let details = `<section id="detaile">
            <div class="detailsPage">
                <div class="container">
                    <div class="row py-5 g-4">
                        <div class="col-md-4">
                            <div class="image rounded-2">
                                <img src="images/logo.png" alt="" class="w-100">
                            </div>
                            <h2>Lorem, ipsum.</h2>
                        </div>
                        <div class="col-md-8">
                            <h2>Instructions</h2>
                            <p>In the bowl of a stand mixer, add warm water, a big pinch of sugar and yeast. Allow to sit until frothy.
                                Into the same bowl, add 1/2 cup sugar, warm milk, melted butter, eggs and salt, and whisk until combined.
                                Place a dough hook on the mixer, add the flour with the machine on, until a smooth but slightly sticky dough forms.
                                Place dough in a bowl, cover with plastic wrap, and allow to proof for 1 1/2 hours.
                                Cut dough into 12 pieces, and roll out into long oval-like shapes about 1/4 inch thick that resemble a beaver’s tail.
                                In a large, deep pot, heat oil to 350 degrees. Gently place beavertail dough into hot oil and cook for 30 to 45 seconds on each side until golden brown.
                                Drain on paper towels, and garnish as desired. Toss in cinnamon sugar, in white sugar with a squeeze of lemon, or with a generous slathering of Nutella and a handful of toasted almonds. Enjoy!</p>
                            <h3><span>Area :</span>Canadian</h3>
                            <h3><span>Catagory :</span>Canadian</h3>
                            <h3>Recipes :</h3>
                            <ul class="list-unstyled d-flex g-3 flex-wrap">
                                <li class="alert alert-info m-2 p-1">1/2 cup  Water</li>
                            </ul>
                            <h3>Tags :</h3>
                            <ul class="list-unstyled d-flex flex-wrap g-3">
                                <li class="alert alert-danger m-2 p-1">Treat</li>
                            </ul>
                            <div class="buttons">
                                <a class="btn btn-success" href="https://www.tastemade.com/videos/beavertails" target="_blank">Source</a>
                                <a class="btn btn-danger" href="https://www.youtube.com/watch?v=2G07UOqU2e8" target="_blank">Youtube</a>
                            </div>
                            </div>
                    </div>
                </div>
            </div></section>`

// To close & open Navbar: ((:
$('#openNav').on('click',function(){
    $('.nav').animate({'left':'0px'},500);
    $('#closeNav').css('display','block');
    $('#openNav').css('display','none');
    $('.navList a').animate({'top':'0'},650)


})
$('#closeNav').click(function(){
    $('.nav').animate({'left':'-17.85%'},500);
    $('#closeNav').css('display','none');
    $('#openNav').css('display','block');
    $('.navList a').animate({'top':'200px'},500)
})



// Going to Search Page:
document.querySelector('#searchLink').addEventListener('click',function(){
    document.getElementById('home').innerHTML = search;
    $('#search').css('display','block');
})
// Going to Catagory Page:
document.querySelector('#catagoryLink').addEventListener('click',function(){
    document.getElementById('home').innerHTML = catagory;
    displaycatagoryMeals()
})
// Going to Area Page:
document.querySelector('#areaLink').addEventListener('click',function(){
    document.getElementById('home').innerHTML = area;
    displayAreaMeals()
})
// Going to Ingredient Page:
document.querySelector('#ingredLnk').addEventListener('click',function(){
    document.getElementById('home').innerHTML = ingredient;
    displayIngredientMeals()
})
// Going to Contact Us Page:
document.querySelector('#cntactLink').addEventListener('click',function(){
    document.getElementById('home').innerHTML = contact;
})



// Home Page:
let rundomMeals = [];
async function getRundomMeals() {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    data = await data.json();
    rundomMeals = data.meals;
    console.log(data.meals);
    displayRundomMeals(rundomMeals);
}
getRundomMeals()

function displayRundomMeals(arr){
    let box = '';
    for (let i=0 ; i < arr.length ; i++){
        box += `<div class="col-md-3 mb-4">
                        <div class="item rounded-2 position-relative" id=${arr[i].idMeal} onclick=(getDetailsMeals(${arr[i].idMeal}))>
                            <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-2">
                            <div class="layer position-absolute rounded-2 start-0 bottom-0 end-0 bg-light opacity-75 d-flex align-items-center ps-2">
                                <h3 class="text-black">${arr[i].strMeal}</h3>
                            </div>
                        </div>
                    </div>`
    };
    document.querySelector('.row').innerHTML = box ; 
} 


// Details Page:
let detailsList = [];
async function getDetailsMeals(params){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params}`)
    data = await data.json();
    detailsList = data.meals;
    console.log(data.meals);
    
    let ingredientList = [data.meals[0].strIngredient1,
                            data.meals[0].strIngredient2,
                            data.meals[0].strIngredient3,
                            data.meals[0].strIngredient4,
                            data.meals[0].strIngredient5,
                            data.meals[0].strIngredient6,
                            data.meals[0].strIngredient7,
                            data.meals[0].strIngredient8,
                            data.meals[0].strIngredient9,
                            data.meals[0].strIngredient10,
                            data.meals[0].strIngredient11,
                            data.meals[0].strIngredient12,
                            data.meals[0].strIngredient13,
                            data.meals[0].strIngredient14,
                            data.meals[0].strIngredient15,
                            data.meals[0].strIngredient16,
                            data.meals[0].strIngredient17,
                            data.meals[0].strIngredient18,
                            data.meals[0].strIngredient19,
                            data.meals[0].strIngredient20,];
    let cartoona = ``;
    for(let i = 0 ; i < ingredientList.length ; i++){
    if(ingredientList[i] != null && ingredientList[i].length > 0){
        cartoona += `<li class="alert alert-info m-2 p-1">${ingredientList[i]}</li>`
    }}
    let box =  ``;
    box += `<div class="col-md-4">
                            <div class="image rounded-2">
                                <img src="${data.meals[0].strMealThumb}" alt="" class="w-100">
                            </div>
                            <h2>${data.meals[0].strMeal}</h2>
                        </div>
                        <div class="col-md-8">
                            <h2>Instructions</h2>
                            <p>${data.meals[0].strInstructions}</p>
                            <h3><span>Area :</span>${data.meals[0].strArea}</h3>
                            <h3><span>Catagory :</span>${data.meals[0].strCategory}</h3>
                            <h3>Recipes :</h3>
                            <ul class="list-unstyled d-flex g-3 flex-wrap">${cartoona}
                            </ul>
                            <h3>Tags :</h3>
                            <ul class="list-unstyled d-flex flex-wrap g-3">
                                <li class="alert alert-danger m-2 p-1">${data.meals[0].strTags?data.meals[0].strTags: 'No Tags'}</li>
                            </ul>
                            <div class="buttons mb-3">
                                <a class="btn btn-success" href="${data.meals[0].strSource}" target="_blank">Source</a>
                                <a class="btn btn-danger" href="${data.meals[0].strYoutube}" target="_blank">Youtube</a>
                            </div>
                            </div>`;
    document.querySelector('.row').innerHTML = box ;
}

// Catagories Page:
let catagoryList = [];
async function getcatagoryMeals() {
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    data = await data.json();
    catagoryList = data.categories;
    console.log(data);
}
getcatagoryMeals();

function displaycatagoryMeals(){
    box = '';
    for (let i=0 ; i < catagoryList.length; i++){
        box += `
                <div class="col-md-3 mb-4">
                                <div class="catagory-item rounded-2 position-relative" onclick="getCatag('${catagoryList[i].strCategory}')">
                                    <img src="${catagoryList[i].strCategoryThumb}" alt="" class="w-100">
                                    <div class="meal-layer text-black position-absolute rounded-2 start-0 bottom-0 end-0 bg-light opacity-75 d-flex flex-column text-center">
                                        <h3>${catagoryList[i].strCategory}</h3>
                                        <p>${catagoryList[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                                    </div>
                                </div>
                            </div>`
        }
    document.querySelector('.row').innerHTML = box ;
}
let catagList =[];
async function getCatag(ele){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ele}`);
    data = await data.json();
    catagList = data.meals;
    console.log(data.meals);
    displayCatag()
}

function displayCatag(){
    let box = ``;
    for(let i=0; i < catagList.length; i++){
        box += `<div class="col-md-3 mb-4">
                        <div class="item rounded-2 position-relative" onclick=(getDetailsMeals('${catagList[i].idMeal}'))>
                            <img src="${catagList[i].strMealThumb}" alt="" class="w-100 rounded-2">
                            <div class="layer position-absolute rounded-2 start-0 bottom-0 end-0 bg-light opacity-75 d-flex align-items-center ps-2">
                                <h3 class="text-black">${catagList[i].strMeal}</h3>
                            </div>
                        </div>
                    </div>`
    };
    document.querySelector('.row').innerHTML = box ;
}

// Area Page:
let areaList = [];
async function getAreaMeals() {
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    data = await data.json();
    areaList = data.meals;
    console.log(data.meals);
    
}
getAreaMeals();

function displayAreaMeals(){
    box = '';
    for (let i=0 ; i < areaList.length ; i++){
        box += `<div class="col-md-3 mb-4">
                            <div class="area-item rounded-2 d-flex flex-column text-center" onclick="GitArea('${areaList[i].strArea}')">
                                <i class="fa-solid fa-house-laptop fa-4x"></i>
                                <h3>${areaList[i].strArea}</h3>
                            </div>
                        </div>`
        }
    document.querySelector('.row').innerHTML = box ;
}

let Area = [];
async function GitArea(para){
    let data = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?a=${para}`);
    data = await data.json();
    Area = data.meals;
    console.log(data);
    DisplayArea();
}

function DisplayArea(){
    let box = ``;
    for(let i=0; i < Area.length; i++){
        box += `<div class="col-md-3 mb-4">
                        <div class="item rounded-2 position-relative" onclick=(getDetailsMeals('${Area[i].idMeal}'))>
                            <img src="${Area[i].strMealThumb}" alt="" class="w-100 rounded-2">
                            <div class="layer position-absolute rounded-2 start-0 bottom-0 end-0 bg-light opacity-75 d-flex align-items-center ps-2">
                                <h3 class="text-black">${Area[i].strMeal}</h3>
                            </div>
                        </div>
                    </div>`
    };
    document.querySelector('.row').innerHTML = box ;
}

// Ingredient Page:
let ingredientList = [];
async function getIngredientMeals() {
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    data = await data.json();
    ingredientList = data.meals;
    console.log(data.meals);
    
}
getIngredientMeals();

function displayIngredientMeals(){
    box = '';
    for (let i=0 ; i < 20 ; i++){
        box += `<div class="col-md-3 mb-4">
                            <div class="ingredient-item rounded-2 d-flex flex-column text-center" onclick="GitIngredient('${ingredientList[i].strIngredient}')">
                                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                                <h3>${ingredientList[i].strIngredient}</h3>
                                <p>${ingredientList[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                            </div>
                        </div>`
        }
    document.querySelector('.row').innerHTML = box ;
    }

    let Ingredient = [];
    async function GitIngredient(para){
        let data = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${para}`);
        data = await data.json();
        Ingredient = data.meals;
        console.log(data);
        DisplayIngredient();
    }
    
    function DisplayIngredient(){
        let box = ``;
        for(let i=0; i < Ingredient.length; i++){
            box += `<div class="col-md-3 mb-4">
                            <div class="item rounded-2 position-relative" onclick=(getDetailsMeals('${Ingredient[i].idMeal}'))>
                                <img src="${Ingredient[i].strMealThumb}" alt="" class="w-100 rounded-2">
                                <div class="layer position-absolute rounded-2 start-0 bottom-0 end-0 bg-light opacity-75 d-flex align-items-center ps-2">
                                    <h3 class="text-black">${Ingredient[i].strMeal}</h3>
                                </div>
                            </div>
                        </div>`
        };
        document.querySelector('.row').innerHTML = box ;
    }

// To Search By Name:

let searchList =[];
async function searchData(params){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params}`);
    data = await data.json();
    searchByName(data.meals)
}

function searchByName(searchList){
    let box = ``;
        for(let i=0; i < searchList.length; i++){
            box += `<div class="col-md-3 mb-4 ps-3">
                            <div class="item rounded-2 position-relative" id="${searchList[i].idMeal}" onclick="getDetailsMeals('${searchList[i].idMeal}')">
                                <img src="${searchList[i].strMealThumb}" alt="" class="w-100 rounded-2">
                                <div class="layer position-absolute rounded-2 start-0 bottom-0 end-0 bg-light opacity-75 d-flex align-items-center ps-2">
                                    <h3 class="text-black">${searchList[i].strMeal}</h3>
                                </div>
                            </div>
                        </div>`
        };
        document.querySelector('#search .data').innerHTML = box ;
        
}

// To Search By First Letter

let SearchList =[];
async function SearchData(params){
    params == "" ? params = "a" : "";
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${params}`);
    data = await data.json();
    SearchByLetter(data.meals)
}

function SearchByLetter(SearchList){
    let box = ``;
        for(let i=0; i < SearchList.length; i++){
            box += `<div class="col-md-3 mb-4 ps-3">
                            <div class="item rounded-2 position-relative" id="${SearchList[i].idMeal}" onclick="getDetailsMeals('${SearchList[i].idMeal}')">
                                <img src="${SearchList[i].strMealThumb}" alt="" class="w-100 rounded-2">
                                <div class="layer position-absolute rounded-2 start-0 bottom-0 end-0 bg-light opacity-75 d-flex align-items-center ps-2">
                                    <h3 class="text-black">${SearchList[i].strMeal}</h3>
                                </div>
                            </div>
                        </div>`
        };
        document.querySelector('#search .data').innerHTML = box ;
}


// Contact Us Page:

function validateForm() {
    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const age = document.getElementById('age').value.trim();
    const password = document.getElementById('password').value.trim();
    const repassword = document.getElementById('repassword').value.trim();

    // Validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    // Clear previous alerts
    clearAlerts();

    // Validation checks
    let isValid = true;
    if (name === '') {
        showAlert('nameAlert', 'Name is required');
        isValid = false;
    }
    if (!emailRegex.test(email)) {
        showAlert('emailAlert', 'Invalid email format');
        isValid = false;
    }
    if (!phoneRegex.test(phone) || phone.length < 10) {
        showAlert('phoneAlert', 'Invalid phone number');
        isValid = false;
    }
    if (isNaN(age) || age < 0) {
        showAlert('ageAlert', 'Invalid age');
        isValid = false;
    }
    if (password === '') {
        showAlert('passwordAlert', 'Password is required');
        isValid = false;
    }
    if (password !== repassword) {
        showAlert('repasswordAlert', 'Passwords do not match');
        isValid = false;
    }

    // Enable or disable the submit button based on validation
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = !isValid; // Disable if not valid, enable if valid

    if (isValid) {
        const data = {
            name: name,
            email: email,
            phone: phone,
            age: age,
            password: password,
            repassword: repassword
        };
        sendAjaxRequest(data);
    }
}

function showAlert(alertId, message) {
    const alertDiv = document.getElementById(alertId);
    alertDiv.classList.remove('d-none');
    alertDiv.textContent = message;
}

function clearAlerts() {
    const alertIds = ['nameAlert', 'emailAlert', 'phoneAlert', 'ageAlert', 'passwordAlert', 'repasswordAlert'];
    alertIds.forEach(id => {
        const alertDiv = document.getElementById(id);
        alertDiv.classList.add('d-none');
        alertDiv.textContent = '';
    });
}

function sendAjaxRequest(data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'your-server-endpoint-url', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            if (xhr.status === 200 && response.success) {
                alert('Form submitted successfully');
            } else {
                alert(response.message || 'An error occurred');
            }
        }
    };
    xhr.send(JSON.stringify(data));
}