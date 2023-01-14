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
            "Small": {price: 39.99, variationId: "ts-s"},
            "Medium": {price: 39.99, variationId: "ts-m"},
            "Large": {price: 39.99, variationId: "ts-l"}
        },
        "Hoodie": {
            "Small": {price: 69.99, variationId: "h-s"},
            "Medium": {price: 69.99, variationId: "h-m"},
            "Large": {price: 69.99, variationId: "h-l"}
        }
    }

    productName.innerHTML = selectedType + " - " + selectedSize;
    productPrice.innerHTML = "$" + prices[selectedType][selectedSize].price;

    let product = {
        "type": selectedType,
        "size": selectedSize,
        "price": prices[selectedType][selectedSize].price,
        "variationId": prices[selectedType][selectedSize].variationId,
        "imageUrl": imageUrl,
        "promptText": promptText
    }

    localStorage.setItem('product', JSON.stringify(product));
}

function redirectToShippingDetails() {
    window.location.href = "shipping-details.html";
};