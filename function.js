//FONCTION SUPP PRODUIT//
function deleteProduct(name) {
    let index = tableList.findIndex(function (Produit) {
        return Produit.id === name.id;

    });

    tableList.splice(index, 1);

}


// FONCTION CREATION DE PRODUIT//
function createProduct() {
    productTbody.innerText = "";
    for (const productS of tableList) {
        let tableRow = document.createElement("tr");

        let tdButton = document.createElement("td");
        tdButton.style.textAlign = "right";

        let tdName = document.createElement("td");
        let tdAmount = document.createElement("td");
        //creation input nombre de produit

        let inputAmountNumber = document.createElement("input");
        inputAmountNumber.type = "number";
        inputAmountNumber.min = "1";

        let tdBuyingPrice = document.createElement("td");
        // creation input prix HT produit
        let inputBuyingPrice = document.createElement("input");
        inputBuyingPrice.type = "number";
        inputBuyingPrice.min = "0.01";

        // creation input prix vente HT produit
        let inputSellingPrice = document.createElement("input");
        inputSellingPrice.type = "number";
        inputSellingPrice.min = "0.01";

        // creation input degree
        let inputDegree = document.createElement("input");
        inputDegree.type = "number";
        inputDegree.min = "1";
        inputDegree.max = "100"

        let tdSellingPrice = document.createElement("td");
        let tdMargin = document.createElement("td");
        let tdSellingPriceTtc = document.createElement("td");
        let tdType = document.createElement("td");
        let tdDegree = document.createElement("td");
        let tdButtonSup = document.createElement("td");
        tdButtonSup.style.textAlign = "left"

        let inputSup = document.createElement("button");
        let validatedButton = document.createElement("button");
        let editButton = document.createElement("button");


        tdName.innerText = productS.name;
        tdAmount.innerText = productS.amount;
        tdBuyingPrice.innerText = productS.buyingPrice;
        tdSellingPrice.innerText = productS.sellingPrice;
        tdMargin.innerText = productS.margin;
        tdSellingPriceTtc.innerText = productS.sellingPriceTtc;
        tdType.innerText = productS.type;


        if (productS.type == "boissonAlcoolisee") {
            tdDegree.innerText = productS.degree
        }
        else {
            tdDegree.innerText = "";
        }

        inputSup.innerText = "❌";
        editButton.innerText = "Edit";
        validatedButton.innerText = "✅";



        // inputAmountNumber.value = productS.amount;
        // inputBuyingPrice.value = productS.buyingPrice;
        // inputSellingPrice.value = productS.sellingPrice;

        validatedButton.addEventListener("click", function () {
            validatedButton.style.display = "none";
            editButton.style.display = "inline-block";

            productS.amount = inputAmountNumber.value;
            tdAmount.removeChild(inputAmountNumber);
            tdAmount.innerText = productS.amount;

            productS.buyingPrice = inputBuyingPrice.value;
            tdBuyingPrice.removeChild(inputBuyingPrice);
            tdBuyingPrice.innerText = productS.buyingPrice;

            productS.sellingPrice = inputSellingPrice.value;
            tdSellingPrice.removeChild(inputSellingPrice);
            tdSellingPrice.innerText = productS.sellingPrice;

            productS.degree = inputDegree.value;
            tdDegree.removeChild(inputDegree);
            tdDegree.innerText = productS.degree;
            

            tdMargin.innerText = productS.sellingPrice - productS.buyingPrice;
            productS.margin = productS.sellingPrice - productS.buyingPrice;

            tdSellingPriceTtc.innerText = productS.sellingPrice * 1.2;

            if (productS.amount < 10) {
                tdAmount.style.backgroundColor = "rgba(255, 0, 0, 0.363)";
            }
            else {
                tdAmount.style.backgroundColor = "rgba(32, 192, 32, 0.459)";
            }

            if (checkNumber(productS.amount) == true) {
    
            }

            else {
                tdAmount.innerText = productS.amount;
                alert("la quantité doit etre positive");
            }
        });

        //STYLE//

        //BUTTON STYLE
        validatedButton.style.display = "none"
        editButton.style.width = "8vh";
        validatedButton.style.width = "8vh";

        inputSup.style.height = "5vh";
        editButton.style.height = "5vh";
        validatedButton.style.height = "5vh";

        inputSup.style.backgroundColor = "rgba(255, 255, 255, 0.178)";
        editButton.style.backgroundColor = "rgba(255, 255, 255, 0.178)";
        validatedButton.style.backgroundColor = "rgba(255, 255, 255, 0.178)";

        inputSup.style.color = "rgba(0, 0, 0, 0.479)";
        editButton.style.color = "rgba(0, 0, 0, 0.479)";
        validatedButton.style.color = "rgba(0, 0, 0, 0.479)";

        inputSup.style.border = "rgba(255, 255, 255, 0.178) solid 1px";
        editButton.style.border = "rgba(255, 255, 255, 0.178) solid 1px";
        validatedButton.style.border = "rgba(255, 255, 255, 0.178) solid 1px";

        //BORDER TABLE
        tdName.style.border = "solid 1px black";
        tdAmount.style.border = "solid 1px black";
        tdAmount.style.width = "10%";
        tdBuyingPrice.style.border = "solid 1px black";
        tdBuyingPrice.style.width = "10%";
        tdSellingPrice.style.border = "solid 1px black";
        tdSellingPrice.style.width = "10%";
        tdMargin.style.width = "10%";
        tdSellingPriceTtc.style.width = "10%";
        tdType.style.width = "10%";
        tdMargin.style.border = "solid 1px black";
        tdSellingPriceTtc.style.border = "solid 1px black";
        tdType.style.border = "solid 1px black";
        tdDegree.style.border = "solid 1px black";
        tdDegree.style.width = "10%";
        tableRow.style.height = "33px";


        //STYLE INPUT TABLE
        inputAmountNumber.style.border = "0px"
        inputAmountNumber.style.backgroundColor = "transparent";
        inputAmountNumber.style.width = "25%"
        inputBuyingPrice.style.border = "0px"
        inputBuyingPrice.style.backgroundColor = "transparent";
        inputBuyingPrice.style.width = "25%"
        inputSellingPrice.style.border = "0px"
        inputSellingPrice.style.backgroundColor = "transparent";
        inputSellingPrice.style.width = "25%"
        inputDegree.style.border = "0px"
        inputDegree.style.backgroundColor = "transparent";
        inputDegree.style.width = "25%"


        tdName.style.backgroundColor = "#f0ffff83"
        tdAmount.style.backgroundColor = "#f0ffff83";
        tdBuyingPrice.style.backgroundColor = "#f0ffff83";
        tdSellingPrice.style.backgroundColor = "#f0ffff83";
        tdMargin.style.backgroundColor = "#f0ffff83";
        tdSellingPriceTtc.style.backgroundColor = "#f0ffff83";
        tdType.style.backgroundColor = "#f0ffff83";
        tdDegree.style.backgroundColor = "#f0ffff83"

        if (productS.amount < 10) {
            tdAmount.style.backgroundColor = "rgba(255, 0, 0, 0.363)";
        }
        else {
            tdAmount.style.backgroundColor = "rgba(32, 192, 32, 0.459)";
        }

        //style bouton MOUSEOVER
        tableRow.addEventListener("mouseover", function () {

            tdName.style.backgroundColor = "#d1dadaa9"

            tdBuyingPrice.style.backgroundColor = "#d1dadaa9";
            tdSellingPrice.style.backgroundColor = "#d1dadaa9";
            tdMargin.style.backgroundColor = "#d1dadaa9";
            tdSellingPriceTtc.style.backgroundColor = "#d1dadaa9";
            tdType.style.backgroundColor = "#d1dadaa9";
            tdDegree.style.backgroundColor = "#d1dadaa9";

            inputSup.style.backgroundColor = "#d1dadaa9";
            editButton.style.backgroundColor = "#d1dadaa9";
            validatedButton.style.backgroundColor = "#d1dadaa9";

            inputSup.style.color = "black";
            editButton.style.color = "black";
            validatedButton.style.color = "black";

            inputSup.style.border = "rgba(255, 255, 255, 0.178) solid 1px";
            editButton.style.border = "rgba(255, 255, 255, 0.178) solid 1px";
            validatedButton.style.border = "rgba(255, 255, 255, 0.178) solid 1px";
        });

        //STYLE BOUTON MOUSEOUT
        tableRow.addEventListener("mouseout", function () {

            inputSup.style.backgroundColor = "rgba(255, 255, 255, 0.178)";
            editButton.style.backgroundColor = "rgba(255, 255, 255, 0.178)";
            validatedButton.style.backgroundColor = "rgba(255, 255, 255, 0.178)";

            inputSup.style.color = "rgba(0, 0, 0, 0.479)";
            editButton.style.color = "rgba(0, 0, 0, 0.479)";
            validatedButton.style.color = "rgba(0, 0, 0, 0.479)";

            inputSup.style.border = "rgba(255, 255, 255, 0.178) solid 1px";
            editButton.style.border = "rgba(255, 255, 255, 0.178) solid 1px";
            validatedButton.style.border = "rgba(255, 255, 255, 0.178) solid 1px";



            tdName.style.backgroundColor = "#f0ffff83"

            tdBuyingPrice.style.backgroundColor = "#f0ffff83";
            tdSellingPrice.style.backgroundColor = "#f0ffff83";
            tdMargin.style.backgroundColor = "#f0ffff83";
            tdSellingPriceTtc.style.backgroundColor = "#f0ffff83";
            tdType.style.backgroundColor = "#f0ffff83";
            tdDegree.style.backgroundColor = "#f0ffff83";
        });

        editButton.addEventListener("click", function () {

            if (productS.type != "boissonAlcoolisee") {

                inputDegree.style.display = "none";
            }

            editButton.style.display = "none";
            validatedButton.style.display = "inline-block";

            inputAmountNumber.style.border = "solid 1px black";
            inputAmountNumber.style.backgroundColor = "white";
            inputBuyingPrice.style.border = "solid 1px black";
            inputBuyingPrice.style.backgroundColor = "white";
            inputSellingPrice.style.border = "solid 1px black";
            inputSellingPrice.style.backgroundColor = "white";
            inputDegree.style.border = "solid 1px black";
            inputDegree.style.backgroundColor = "white";

            tdAmount.innerText = "";
            tdAmount.appendChild(inputAmountNumber);
            inputAmountNumber.value = productS.amount;

            tdBuyingPrice.innerText = "";
            tdBuyingPrice.appendChild(inputBuyingPrice);
            inputBuyingPrice.value = productS.buyingPrice;

            tdSellingPrice.innerText = "";
            tdSellingPrice.appendChild(inputSellingPrice);
            inputSellingPrice.value = productS.sellingPrice;

            tdDegree.innerText = "";
            tdDegree.appendChild(inputDegree);
            inputDegree.value = productS.degree;
        });


        //SUPP//
        inputSup.addEventListener("click", function () {
            deleteProduct(productS);
            createProduct();
        });


        tdButton.appendChild(editButton);
        tdButton.appendChild(validatedButton);

        tdButtonSup.appendChild(inputSup);

        tableRow.appendChild(tdButton);

        tableRow.appendChild(tdName);
        tableRow.appendChild(tdAmount);
        tableRow.appendChild(tdBuyingPrice);
        tableRow.appendChild(tdSellingPrice);
        tableRow.appendChild(tdMargin);
        tableRow.appendChild(tdSellingPriceTtc);
        tableRow.appendChild(tdType);
        tableRow.appendChild(tdDegree);
        tableRow.appendChild(tdButtonSup);


        productTbody.appendChild(tableRow);
    }

}

function checkNumber(number) {
    if (number >= 0) {
        return true
    }

    else {
        return false
    }
}
