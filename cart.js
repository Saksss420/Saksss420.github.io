window.onload = function() {
    updateCart();
};

function updateCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;

    if (cart.length === 0) {
        document.getElementById("cart-items").innerHTML = "<tr><td colspan='6'>Your cart is empty.</td></tr>";
        document.getElementById("total-price").textContent = "0.00";
    } else {
        let cartHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            cartHTML += `
                <tr class="cart-item">
                    <td class="cart-item-image"><img src="${item.image}" alt="${item.name}"></td>
                    <td class="cart-item-name">${item.name}</td>
                    <td class="cart-item-quantity">${item.quantity}</td>
                    <td class="cart-item-price">$${item.price.toFixed(2)}</td>
                    <td class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</td>
                    <td class="cart-item-action"><button onclick="removeItem(${item.id})">Remove</button></td>
                </tr>
            `;
            totalPrice += item.price * item.quantity;
        });

        document.getElementById("cart-items").innerHTML = cartHTML;
        document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    }
}

function continueShopping() {
    window.location.href = "product.html";
}

function clearCart() {
    localStorage.removeItem("cart");
    updateCart(); 
}

function removeItem(productId) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart();
}

function addToCart(button) {
    let productCard = button.closest('.product-card');
    let productName = productCard.querySelector('.product-name').textContent;
    let productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('Price: $', ''));
    let productImage = productCard.querySelector('.product-image img').src;
    let productQuantity = productCard.querySelector('.quantity-selector').value;

    let product = {
        id: new Date().getTime(),
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: parseInt(productQuantity),
        totalPrice: productPrice * parseInt(productQuantity),
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";
}
