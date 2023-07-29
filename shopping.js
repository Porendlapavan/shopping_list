let groceryul = document.querySelector('#grocery-list ul');

groceryul.addEventListener('click', deleteElement);

function deleteElement(event) {
    let targetElement = event.target;

    if (targetElement.className == 'delete') {
        targetElement.parentElement.remove();
    }
}

//  add an item
let formitem = document.getElementById('add-item');
formitem.addEventListener("submit", addItemToList);

function addItemToList(event) {
    event.preventDefault();
    let inputvalue = formitem.querySelector('input[type=text]').value;

    let ulElement = document.getElementsByTagName('ul')[0];
    const lielement = document.createElement('li');
    const itemselement = document.createElement('span');
    const deleteitem = document.createElement('span');

    itemselement.textContent = inputvalue;
    deleteitem.textContent = 'Delete';

    itemselement.classList.add('item');
    deleteitem.classList.add('delete');
    lielement.appendChild(itemselement);
    lielement.appendChild(deleteitem);

    ulElement.appendChild(lielement);

}
// hide elements

let hidecheckbox = document.getElementById('hide');
hidecheckbox.addEventListener('change', hidingcontent);

function hidingcontent() {
    let groceryItems = document.getElementById('grocery-list');
    if (hidecheckbox.checked) {
        groceryItems.style.display = 'none';
    } else {
        groceryItems.style.display = 'block';
    }
}

// search element
let searchElement = document.forms['search-item'].querySelector('input[type=text]');
searchElement.addEventListener('keyup', (event) => {
    let searchText = event.target.value.toLowerCase();
    const groceriesList = document.querySelector('#grocery-list ul');
    let groceries = groceriesList.getElementsByTagName('li');
    groceries = Array.from(groceries);
    groceries.forEach((grocery) => {
        let groceryName = grocery.firstElementChild.textContent.toLowerCase();
        if (groceryName.indexOf(searchText) != -1) {
            grocery.style.display = "block";
        } else {
            grocery.style.display = 'none';
        }
    });
});