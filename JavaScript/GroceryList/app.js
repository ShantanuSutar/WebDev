const inputPro = document.querySelector('#product');
const inputQuan = document.querySelector('#qty');
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const proName = product.value;
    const qtyVal = qty.value;
    const newLI = document.createElement('li');
    newLI.innerText = qtyVal + " " + proName;
    document.querySelector('#list').appendChild(newLI);
    product.value = "";
    qty.value = "";
})