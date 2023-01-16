let imageUrl = localStorage.getItem('imageUrl');
let promptText = localStorage.getItem('promptText');
let mockupImageUrl = "assets/img/product/tshirt.png";
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
            "Small": { price: 39.99, variationId: "4011" },
            "Medium": { price: 39.99, variationId: "4011" },
            "Large": { price: 39.99, variationId: "4011" }
        },
        "Sweatshirt": {
            "Small": { price: 69.99, variationId: "13261" },
            "Medium": { price: 69.99, variationId: "13261" },
            "Large": { price: 69.99, variationId: "13261" }
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
  console.log("generateTshirtMockup wurde aufgerufen!", imageUrl);

  let imageUrlJson = { imageurl: imageUrl };

  // Add spinner and text
  let img = document.querySelector("#tshirt-mockup-image");
  let spinner = document.createElement("div");
  spinner.classList.add("spinner-border", "text-primary", "spinner-position");
  spinner.setAttribute("role", "status");
  let text = document.createElement("p");
  text.classList.add("text-center", "spinner-position");
  text.innerHTML = "generating T-Shirt";
  img.parentNode.insertBefore(spinner, img);
  spinner.parentNode.insertBefore(text, spinner.nextSibling);

  // replace later:
  // https://hook.eu1.make.com/fj7wuptvvhfh4rrdydr4h0i5vgatq43a

  await fetch("https://hook.eu1.make.com/pyjymqcjum4haeuj4l0g8u3762aw2j4o", {
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
      img.src = mockupImageUrl;
      product.mockupImageUrl = mockupImageUrl;
      localStorage.setItem("product", JSON.stringify(product));
      // remove spinner and text
      img.parentNode.removeChild(spinner);
      img.parentNode.removeChild(text);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function redirectToShippingDetails() {
    window.location.href = "shipping-details.html";
}