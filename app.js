// CONST INPUT TEXT//
const productName = document.getElementById("productName");
const productAmount = document.getElementById("productAmount");
const buyingPrice = document.getElementById("buyingPrice");
const sellingPrice = document.getElementById("sellingPrice");
const typeDrink = document.getElementById("typeDrink");
const degreeAlcohol = document.getElementById("degreeAlcohol");
const inputDegreeAlcohol = document.getElementById("inputDegreeAlcohol");
const validateButton = document.getElementById("validateButton");
const newProduct = document.getElementById("newProduct");
const enterProduct = document.getElementById("enterProduct");

let productTbody = document.getElementById("productTbody");

var tableList = [];


//AFFICHER DEGRÉ ALCOOL//
typeDrink.addEventListener("input", function (e) {
    if (typeDrink.value == "boissonAlcoolisee") {
        degreeAlcohol.style.display = "inline-block";
    }
    else {
        degreeAlcohol.style.display = "none";
    }
});




//NEW PRODUCT//
newProduct.addEventListener("click", function () {
    productName.innerText = "";
    productAmount.innerText = "";
    buyingPrice.innerText = "";
    sellingPrice.innerText = "";
    enterProduct.style.display = "inline-block"


});




//BOUTON VALIDER//

validateButton.addEventListener("click", function (e) {
    e.preventDefault();
    
    if (productName.value == "") {
        alert("veuillez remplir tous les champs");
    }
    else if (productAmount.value == "") {
        alert("veuillez remplir tous les champs");
    }
    else if (buyingPrice.value == "") {
        alert("veuillez remplir tous les champs");
    }
    else if (sellingPrice.value == "") {
        alert("veuillez remplir tous les champs");
    }

    else {
        let test = null;
        if (typeDrink.value == "boisson") {
            test = new Drink(productName.value, productAmount.value, buyingPrice.value, sellingPrice.value, sellingPrice.value - buyingPrice.value, sellingPrice.value * 1.2, typeDrink.value,)
            tableList.push(test);

            let monObjet_json = JSON.stringify(test);
            let key = test.id
            localStorage.setItem(key,monObjet_json);


        }
        else if (typeDrink.value == "boissonAlcoolisee") {
            test = new Alcohol(productName.value, productAmount.value, buyingPrice.value, sellingPrice.value, sellingPrice.value - buyingPrice.value, sellingPrice.value * 1.2, typeDrink.value, inputDegreeAlcohol.value)
            tableList.push(test);

            let monObjet_json = JSON.stringify(test);
            let key = test.id
            localStorage.setItem(key,monObjet_json);
        }
        else {
            test = new Other(productName.value, productAmount.value, buyingPrice.value, sellingPrice.value, sellingPrice.value - buyingPrice.value, sellingPrice.value * 1.2, typeDrink.value)
            tableList.push(test);

            let monObjet_json = JSON.stringify(test);
            let key = test.id
            localStorage.setItem(key,monObjet_json);
        }


        tableList.sort();

        createProduct();


        productName.value = "";
        productAmount.value = "";
        buyingPrice.value = "";
        sellingPrice.value = "";

        inputDegreeAlcohol.value = "";
        


        enterProduct.style.display = "none";



    }





});



