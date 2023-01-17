let product = JSON.parse(localStorage.getItem("product"));
let promo = 0.0;
let quantity = 1;

// display product values on page
document.getElementById("product-name").innerHTML =
  product.type + " " + product.size;
document.getElementById("product-image").src = product.mockupImageUrl;
document.getElementById("product-price").innerHTML = product.price + " €";
document.getElementById("product-cart").innerHTML = product.price + " €";
document.getElementById("product-quantity").innerHTML = "1";
document.getElementById("breadcrumb-name").innerHTML =
  product.type + " " + product.size;
document.getElementById("cart-product-name").innerHTML = product.type;
document.getElementById("cart-product-variation").innerHTML =
  "Size: " + product.size;

// increment button event listener
document.getElementById("increment-btn").addEventListener("click", function () {
  quantity = parseInt(document.getElementById("product-quantity").innerHTML);
  document.getElementById("product-quantity").innerHTML = quantity + 1;
  updateCart();
});

// decrement button event listener
document.getElementById("decrement-btn").addEventListener("click", function () {
  quantity = parseInt(document.getElementById("product-quantity").innerHTML);
  if (quantity > 1) {
    document.getElementById("product-quantity").innerHTML = quantity - 1;
    updateCart();
  }
});

// redeem event listener
document.getElementById("redeem").addEventListener("click", function (event) {
  event.preventDefault(); // prevent form from submitting
  let promoCode = document.getElementById("promo-input").value;
  let validCodes = ["code1", "code2", "code3"];
  if (validCodes.indexOf(promoCode) !== -1) {
    promo = 0.15; //15% discount

    document.getElementById("promo-code-name").innerHTML = promoCode;
    document.getElementById("promo-code-value").innerHTML = "- 15 %";
    document.getElementById("promo-code-list").classList.remove("d-none");

    updateCart();
  } else {
    promo = 0;
    updateCart();
    document.getElementById("promo-code-list").classList.add("d-none");
  }
});

// update cart function
function updateCart() {
  // Retrieve quantity and price values from the page
  quantity = parseInt(document.getElementById("product-quantity").innerHTML);
  let price = parseFloat(document.getElementById("product-price").innerHTML);

  // Calculate the total price
  let totalPrice = quantity * price * (1 - promo);
  let vat = totalPrice - totalPrice / 1.19;

  // Update the total price and VAT amount on the page
  document.getElementById("total-price").innerHTML =
    totalPrice.toFixed(2) + " €";
  document.getElementById("vat-amount").innerHTML = vat.toFixed(2) + " €";
}

//Event listener for the "stripeButton"
document
  .getElementById("stripeButton")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    let priceId;
    if (product.type === "T-Shirt") {
      priceId = "price_1MO2hSDdvizQIRyjZdp5FPFZ";
    } else if (productType === "Sweatshirt") {
      priceId = "price_1MO2htDdvizQIRyjtxhZ3RNO";
    } else {
    }
    const data = {
      price_id: priceId,
      quantity: quantity,
      success_url: "https://www.google.de/",
    };
    try {
      const response = await fetch(
        "https://hook.eu1.make.com/wjpp1ksrwrbalut1aa790fwyjivs2lf0",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        const json = await response.json();
        const url = json.url;
        window.open(url, "_blank");

        const stripeSessionBody = {
          session_id: json.id,
        };

        var stripeSessionJson = {};

        while (
          stripeSessionJson.payment_status !== "paid" ||
          stripeSessionJson.status !== "complete"
        ) {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          const updatedResponse = await fetch(
            "https://hook.eu1.make.com/dqooacvb2zxhx10o55pb99ixbanuih3q",
            {
              method: "POST",
              body: JSON.stringify(stripeSessionBody),
              headers: { "Content-Type": "application/json" },
            }
          );
          const updatedJson = await updatedResponse.json();

          stripeSessionJson = updatedJson;
          if (
            stripeSessionJson.payment_status === "paid" &&
            stripeSessionJson.status
          ) {
            await printfulPost();
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  });

function showModal() {
  $("#exampleModal").modal("show");
}

function backToIndex() {
  window.location.href = "index.html";
}

async function printfulPost() {
  const data = {
    store_id: 9471577,
    recipient: {
      name:
        document.getElementById("firstName").value +
        " " +
        document.getElementById("lastName").value,
      address1: document.getElementById("address").value,
      city: document.getElementById("city").value,
      state_code: document.getElementById("state").value,
      country_code: document.getElementById("country").value,
      zip: document.getElementById("zip").value,
    },
    items: [
      {
        variant_id: product.variant_id,
        quantity: quantity,
        files: [
          {
            url: product.imageUrl,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(
      "https://hook.eu1.make.com/fgba9xgdjeo4mibbrebn9ge1ybve6wdv",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      // Successful order
      console.log("Order successful!");
      showModal()
    } else {
      // Handle error
      console.error("Error submitting order: " + response.status);
    }
  } catch (error) {
    console.error(error);
  }
}
