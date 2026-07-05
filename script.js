

const menuItems = [

    // Cafea
    { name: "Cafea", volume: "40 ml", price: "5 lei", category: "Cafea", icon: "icons/coffee.png" },
    { name: "Frappe", volume: "400 ml", price: "15 lei", category: "Cafea", icon: "icons/coffee.png" },
    { name: "Cappuccino", volume: "200 ml", price: "7 lei", category: "Cafea", icon: "icons/coffee.png" },
    { name: "Ceai", volume: "200 ml", price: "5 lei", category: "Cafea", icon: "icons/coffee.png" },
    { name: "Limonadă", volume: "350 ml", price: "10 lei", category: "Cafea", icon: "icons/racoritoare.png" },
    { name: "Ciocolată Caldă", volume: "-", price: "7 lei", category: "Cafea", icon: "icons/coffee.png" },

    // Racoritoare
    { name: "Apă Plată Borsec", volume: "0.5 L", price: "7 lei", category: "Răcoritoare", icon: "icons/racoritoare.png" },
    { name: "Apă Minerală Borsec", volume: "0.5 L", price: "7 lei", category: "Răcoritoare", icon: "icons/racoritoare.png" },
    { name: "Coca-Cola", volume: "330 ml", price: "10 lei", category: "Răcoritoare", icon: "icons/racoritoare.png" },
    { name: "Fanta", volume: "330 ml", price: "10 lei", category: "Răcoritoare", icon: "icons/racoritoare.png" },
    { name: "Sprite", volume: "330 ml", price: "10 lei", category: "Răcoritoare", icon: "icons/racoritoare.png" },
    { name: "Tymbark Mere-Vișine", volume: "0.25 L", price: "7 lei", category: "Răcoritoare", icon: "icons/racoritoare.png" },
    { name: "Red Bull", volume: "0.25 L", price: "10 lei", category: "Răcoritoare", icon: "icons/racoritoare.png" },
    // Bere
    { name: "Amstel Draft", volume: "400 ml", price: "8 lei", category: "Bere", icon: "icons/beer.png" },
    { name: "Amstel Draft", volume: "4 L", price: "75 lei", category: "Bere", icon: "icons/beer.png" },
    { name: "Heineken Sticlă", volume: "330 ml", price: "10 lei", category: "Bere", icon: "icons/beer.png" },
    { name: "Heineken Fără Alcool", volume: "330 ml", price: "10 lei", category: "Bere", icon: "icons/beer.png" },
    // Cocktailuri
    { name: "Aperol Spritz", volume: "0.5 L", price: "25 lei", category: "Cocktailuri", icon: "icons/cocktails.png" },
    { name: "Hugo Spritz", volume: "0.5 L", price: "25 lei", category: "Cocktailuri", icon: "icons/cocktails.png" },
    { name: "Moscow Mule", volume: "0.5 L", price: "25 lei", category: "Cocktailuri", icon: "icons/cocktails.png" },
    { name: "Gin Tonic", volume: "0.5 L", price: "25 lei", category: "Cocktailuri", icon: "icons/cocktails.png" },
    { name: "Cuba Libre", volume: "0.5 L", price: "25 lei", category: "Cocktailuri", icon: "icons/cocktails.png" },
    { name: "Orange Fizz (Fără Alcool)", volume: "0.5 L", price: "15 lei", category: "Cocktailuri", icon: "icons/cocktails.png" },
    // Tărie
    { name: "Jack Daniel's", volume: "100 ml", price: "30 lei", category: "Spiritoase", icon: "icons/tarie.png" },
    { name: "Jack Daniel's", volume: "700 ml", price: "200 lei", category: "Spiritoase", icon: "icons/tarie.png" },
    { name: "Jack Daniel's Honey", volume: "100 ml", price: "30 lei", category: "Spiritoase", icon: "icons/tarie.png" },
    { name: "Jack Daniel's Honey", volume: "700 ml", price: "200 lei", category: "Spiritoase", icon: "icons/tarie.png" },
    { name: "Vodcă Finlandia", volume: "100 ml", price: "15 lei", category: "Spiritoase", icon: "icons/tarie.png" },
    { name: "Vodcă Finlandia", volume: "700 ml", price: "100 lei", category: "Spiritoase", icon: "icons/tarie.png" },

    // Vin
    { name: "Carafă Crama Darie Alb", volume: "1 L", price: "30 lei", category: "Vin", icon: "icons/vin.png" },
    { name: "Prosecco Corner", volume: "750 ml", price: "40 lei", category: "Vin", icon: "icons/vin.png" },
    { name: "Crama Darie", volume: "250 ml", price: "10 lei", category: "Vin", icon: "icons/vin.png" },

    // Gustări
    { name: "Alune", volume: "50 g", price: "5 lei", category: "Snack", icon: "icons/gustari.png" },
    { name: "Alune", volume: "100 g", price: "10 lei", category: "Snack", icon: "icons/gustari.png" },
    { name: "Alune", volume: "300 g", price: "15 lei", category: "Snack", icon: "icons/gustari.png" },
    { name: "Chips Lays", volume: "125 g", price: "12 lei", category: "Snack", icon: "icons/gustari.png" },
    { name: "Chips Viva", volume: "100 g", price: "12 lei", category: "Snack", icon: "icons/gustari.png" },

];



function renderMenu(category = "Toate") {

    const container = document.querySelector(".menu-container");

    container.innerHTML = "";

    const filtered = category === "Toate"
        ? menuItems
        : menuItems.filter(item => item.category === category);

    filtered.forEach(item => {

        container.innerHTML += `

        <div class="menu-card">

            <div class="menu-left">

                <img src="${item.icon}" alt="">

                <div>

                    <h3>${item.name}</h3>

                    <p>${item.volume}</p>

                </div>

            </div>

            <span class="price">${item.price}</span>

        </div>

        `;

    });

}


document.addEventListener("DOMContentLoaded", () => {

    renderMenu();

    const buttons = document.querySelectorAll(".categories li");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(b => b.classList.remove("active"));

            button.classList.add("active");

            const category = button.querySelector("span").textContent;

            renderMenu(category);

        });

    });

});