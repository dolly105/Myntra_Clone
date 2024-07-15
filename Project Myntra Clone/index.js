// scripts/index.js
document.addEventListener('DOMContentLoaded', () => {
    const addBagButtons = document.querySelectorAll('.btn-add-bag');
    const bagItemCountElement = document.getElementById('bagItemCount');
    let bagItems = {};

    addBagButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemContainer = button.parentElement;
            const itemId = itemContainer.getAttribute('data-id');
            const itemName = itemContainer.getAttribute('data-name');
            const itemPrice = itemContainer.getAttribute('data-price');

            if (bagItems[itemId]) {
                bagItems[itemId].quantity += 1;
            } else {
                bagItems[itemId] = {
                    id: itemId,
                    name: itemName,
                    price: parseFloat(itemPrice),
                    quantity: 1
                };
            }

            updateBagItemCount();
        });
    });

    function updateBagItemCount() {
        const itemCount = Object.values(bagItems).reduce((sum, item) => sum + item.quantity, 0);
        bagItemCountElement.textContent = itemCount;
    }
});
