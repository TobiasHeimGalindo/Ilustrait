let product = JSON.parse(localStorage.getItem("product"));
let promo = 0.0;

// display values with product.* here
document.getElementById("product-name").innerHTML =
  product.type + " " + product.size;
document.getElementById("product-image").src = product.imageUrl;
document.getElementById("product-price").innerHTML = product.price + " €";
document.getElementById("product-cart").innerHTML = product.price + " €";
document.getElementById("product-quantity").innerHTML = "1";
document.getElementById("breadcrumb-name").innerHTML =
  product.type + " " + product.size;

document.getElementById("increment-btn").addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementById("product-quantity").innerHTML
  );
  document.getElementById("product-quantity").innerHTML = quantity + 1;
  updateCart();
});

document.getElementById("decrement-btn").addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementById("product-quantity").innerHTML
  );
  if (quantity > 1) {
    document.getElementById("product-quantity").innerHTML = quantity - 1;
    updateCart();
  }
});

document.getElementById("redeem").addEventListener("click", function (event) {
  event.preventDefault(); // prevent form from submitting
  let promoCode = document.getElementById("promo-input").value;
  let validCodes = ["code1", "code2", "code3"];
  if(validCodes.indexOf(promoCode) !== -1){
      promo = 0.15;  //15% discount

      document.getElementById("promo-code-name").innerHTML = promoCode;
      document.getElementById("promo-code-value").innerHTML = "- 15 %";
      document.getElementById("promo-code-list").classList.remove("d-none");

      updateCart()
  } else {
    promo = 0
    updateCart()
    document.getElementById("promo-code-list").classList.add("d-none");

  }
});

function updateCart() {
  // Retrieve quantity and price values from the page
  let quantity = parseInt(
    document.getElementById("product-quantity").innerHTML
  );
  let price = parseFloat(document.getElementById("product-price").innerHTML);

  // Calculate the total price
  let totalPrice = quantity * price * (1 - promo);
  let vat = totalPrice - (totalPrice / 1.19)

  // Update the total price and VAT amount on the page
  document.getElementById("total-price").innerHTML =
    totalPrice.toFixed(2) + " €";
  document.getElementById("vat-amount").innerHTML = vat.toFixed(2) + " €";
}
