function addToCart(button) {
    let productCard = button.closest('.product-card');
    let productName = productCard.querySelector('.product-name').textContent;
    let productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('Price: $', '').trim());
    let productImage = productCard.querySelector('.product-image img').src;
    let productQuantity = parseInt(productCard.querySelector('.quantity-selector').value) || 1;

    let product = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: productQuantity,
        totalPrice: productPrice * productQuantity,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById('cart-count').textContent = cart.length;
}
