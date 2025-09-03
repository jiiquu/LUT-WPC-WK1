const myButton = document.getElementById('my-button');
tervehdys = document.getElementById('tervehdys');
const addData = document.getElementById('add-data');
let itemCounter = 0;

myButton.addEventListener('click', function() {
    console.log('hello world');
    
    tervehdys.innerText = 'Moi maailma';
});
addData.addEventListener('click', function() {
    
    const myList = document.getElementById('my-list');
    let newItem = document.createElement("li");
    newItem.innerText = ++itemCounter + ". " + document.getElementById('item').value;
/*    console.log('adding item' + newItem); */
    myList.appendChild(newItem);
});
