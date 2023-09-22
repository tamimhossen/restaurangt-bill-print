const itemName = document.getElementById("Item-name");
const quantity = document.getElementById("quantity");
const price = document.getElementById("Price");
const addBtn = document.getElementById("item-add-btn");
const tableBody = document.getElementById("table-body");

let html = ''

addBtn.addEventListener("click", () => {
    html += '<tr>';
    html += `<td> ${itemName.value} </td> <td> ${quantity.value} </td> <td> ${price.value} </td> <td> ${price.value * quantity.value} </td>`;
    html += '</tr>'
    tableBody.innerHTML = html;
})

document.getElementById("printBtn").addEventListener("click", () => {
    print();
})