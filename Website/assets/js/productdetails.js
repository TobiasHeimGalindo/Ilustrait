function updateCart() {
    // Retrieve quantity and price values from the page
    let quantity = parseInt(document.getElementById("product-quantity").innerHTML);
    let price = parseFloat(document.getElementById("product-price").innerHTML);

    let promo = 0.00;
  
    // Calculate the total price
    let totalPrice = (quantity * price) * (1-promo);
    let vat = totalPrice / 1.19;


  
    // Update the total price and VAT amount on the page
    document.getElementById("total-price").innerHTML = totalPrice.toFixed(2) + " €";
    document.getElementById("vat-amount").innerHTML = vat.toFixed(2) + " €";
  }