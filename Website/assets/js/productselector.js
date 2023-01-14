let imageUrl = localStorage.getItem('imageUrl');
let promptText = localStorage.getItem('promptText');
let mockupImageUrl = "";
let product = {};

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
            "Small": { price: 39.99, variationId: "ts-s" },
            "Medium": { price: 39.99, variationId: "ts-m" },
            "Large": { price: 39.99, variationId: "ts-l" }
        },
        "Hoodie": {
            "Small": { price: 69.99, variationId: "h-s" },
            "Medium": { price: 69.99, variationId: "h-m" },
            "Large": { price: 69.99, variationId: "h-l" }
        }
    }

    productName.innerHTML = selectedType + " - " + selectedSize;
    productPrice.innerHTML = "$" + prices[selectedType][selectedSize].price;

    product = {
        "type": selectedType,
        "size": selectedSize,
        "price": prices[selectedType][selectedSize].price,
        "variationId": prices[selectedType][selectedSize].variationId,
        "imageUrl": imageUrl,
        "mockupImageUrl": mockupImageUrl,
        "promptText": promptText
    }

    localStorage.setItem('product', JSON.stringify(product));
}

async function generateTshirtMockup(imageUrl) {

    console.log("generateTshirtMockup wurde aufgerufen!", imageUrl)

    let imageUrlJson = { imageurl: imageUrl };

    await fetch("https://hook.eu1.make.com/fj7wuptvvhfh4rrdydr4h0i5vgatq43a", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(imageUrlJson),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            mockupImageUrl = data.mockupurl;
            let img = document.querySelector("#tshirt-mockup-image");
            img.src = mockupImageUrl;
            product.mockupImageUrl = mockupImageUrl;
            localStorage.setItem('product', JSON.stringify(product));
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function redirectToShippingDetails() {
    window.location.href = "shipping-details.html";
}