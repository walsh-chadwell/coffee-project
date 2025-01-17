"use strict"

function renderCoffee(coffee) {
    var html = '';
    html += "<div class='d-flex coffee-box justify-content-center align-items-center'>"
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p class="ml-2">' + coffee.roast + '</p>';
    html += "</div>"

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            if (coffee.name.toLowerCase().includes(selectedName)) {
                filteredCoffees.push(coffee);
            }
        }
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(selectedName)) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    console.log(newName.value);
    coffees.push({
        id: coffees.length + 1,
        name: newName.value,
        roast: newRoast.value
    });
    console.log(coffees);
    renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

var coffeeDiv = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#name-selection');
var newName = document.querySelector("#new-name");
var newRoast = document.querySelector("#new-roast");
var submitNew = document.querySelector("#submit-new");


coffeeDiv.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
nameSelection.addEventListener("input", updateCoffees);
roastSelection.addEventListener("change", updateCoffees);
submitNew.addEventListener('click', addCoffee);
submitNew.addEventListener('click', updateCoffees);
