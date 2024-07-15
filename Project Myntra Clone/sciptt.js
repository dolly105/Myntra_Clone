// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-bag-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = productElement.getAttribute('data-price');
            
            const bagItem = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            };

            addToBag(bagItem);
        });
    });
});

function addToBag(bagItem) {
    const bagItemsContainer = document.getElementById('bag-items');
    const existingBagItem = document.querySelector(`#bag-items li[data-id="${bagItem.id}"]`);

    if (existingBagItem) {
        const quantityElement = existingBagItem.querySelector('.quantity');
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    } else {
        const bagItemElement = document.createElement('li');
        bagItemElement.setAttribute('data-id', bagItem.id);
        bagItemElement.innerHTML = `${bagItem.name} - $${bagItem.price} x <span class="quantity">${bagItem.quantity}</span>`;
        bagItemsContainer.appendChild(bagItemElement);
    }
}
