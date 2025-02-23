    // Add to Cart functionality
    document.querySelectorAll('.product-btn').forEach((button) => {
        button.addEventListener('click', () => {
            const productCard = button.parentElement;  // Get the entire product card
            const productName = productCard.querySelector('.product-name').innerText; // Get product name
            const productPrice = productCard.querySelector('.product-price').innerText; // Get product price

            // Get existing cart from localStorage or initialize an empty cart
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product already exists in the cart, if it does, just increase quantity
            const productIndex = cart.findIndex(item => item.name === productName);
            if (productIndex !== -1) {
                cart[productIndex].quantity += 1; // Increase quantity if the product exists
            } else {
                // Add product to cart with quantity 1
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1,
                });
            }

            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Custom alert message
            alert(`Great choice! The ${productName} has been successfully added to your cart.`);
            
            // Redirect to cart page
            window.location.href = "cart.html"; // Redirect to cart page
        });
    });
