let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`
}

let item1price;
let item2price;
let item3price;
let item4price;

function calculateTotal(){
    let item1 = document.getElementById('item1').value;
    item1price = parseFloat(document.getElementById('item1price').value);

    let item2 = document.getElementById('item2').value;
    item2price = parseFloat(document.getElementById('item2price').value);

    let item3 = document.getElementById('item3').value;
    item3price = parseFloat(document.getElementById('item3price').value);

    let item4 = document.getElementById('item4').value;
    item4price = parseFloat(document.getElementById('item4price').value);

    let groceryTotal = item1price + item2price + item3price + item4price;

    document.getElementById('grocerytotal').innerText = `The total price for ${item1}, ${item2}, ${item3} and ${item4} is ${groceryTotal}`;


}

