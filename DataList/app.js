import { display } from './element.js';
display();

const addresse = document.querySelector("#addresse");

async function getData() {
    const response = await fetch('data.json');
    const data = await response.json();
    data.addresses.forEach(data => {
        let li = document.createElement("li");
        li.textContent = data;
        document.querySelector("ul").appendChild(li);
    });
}
getData();

//rechercher une adresse dans la liste des adresses
const search = document.querySelector("#search");

search.addEventListener("keyup", (e) => {
    const searchValue = e.target.value; //récupère la valeur de l'input
    const addresses = document.querySelectorAll("li");
    addresses.forEach(address => {
        if (address.textContent.includes(searchValue)) {
            address.style.display = "block"; //si contient valeur : affiche l'adresse
        } else {
            address.style.display = "none"; //si ne contient pas valeur : cache l'adresse
        }
    });
});

document.addEventListener('keyup', function(event) {
    console.log('Key released:', event.key);
});

const order = document.querySelector("select");

order.addEventListener("change", sortList); 
    


function sortList(e) {
    const list = document.querySelector("ul");
    const items = list.querySelectorAll("li");//récupère les éléments de la liste
    const itemsArray = Array.from(items);//transforme les éléments en tableau
    if(e.target.value === "croissant") {
        itemsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));//tri par ordre alphabétique
    } else {
        itemsArray.sort((a, b) => b.textContent.localeCompare(a.textContent));//tri par ordre alphabétique inverse
    }
    list.innerHTML = "";
    itemsArray.forEach(item => {
        list.appendChild(item);
    });
}




