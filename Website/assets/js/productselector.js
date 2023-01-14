let imageUrl = localStorage.getItem('imageUrl');
let promptText = localStorage.getItem('promptText');


function selectType(element) {
    let types = document.querySelectorAll('.type-button');
    types.forEach(type => type.classList.remove('active'));
    element.classList.add("active");
    changeSelection();
}

function selectSize(element) {
    let sizes = document.querySelectorAll('.size-button');
    sizes.forEach(size => size.classList.remove('active'));
    element.classList.add("active");
    changeSelection();
}

function changeSelection() {
    var selectedType = document.querySelector("button.type-button.active").dataset.type;
    var selectedSize = document.querySelector("button.size-button.active").innerHTML;
    var productName = document.querySelector("#product-name");
    var productPrice = document.querySelector("#product-price");

    var prices = {
        "T-Shirt": {
            "Small": 10,
            "Medium": 15,
            "Large": 20
        },
        "Hoodie": {
            "Small": 30,
            "Medium": 35,
            "Large": 40
        }
    }

    productName.innerHTML = selectedType + " - " + selectedSize;
    productPrice.innerHTML = "$" + prices[selectedType][selectedSize];
}