const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "images/coffee1.jpg"
  },

];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
    (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });

}
let total = 0;
function zeilen() {

  // -------------------------------------------------Eingaben aus dem Formular holen---------------------------------------
  //let description = document.getElementById("description").value;
  var description = document.getElementById("description").value;
  var date = document.getElementById("date").value;
  var category = document.getElementById("category").value;
  var amount = document.getElementById("amount").value;


  //-----------------------------------------------als neue Zeilen wiedergebn------------------------------------------------------
  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = description;
  cell2.innerHTML = date;
  cell3.innerHTML = category;
  cell4.innerHTML = amount;
  //--------------------------summe rechnen und einfügen----------------
  total += parseInt(amount);
  cell5.innerHTML = total;

  //----------------------------- im Cache Speichern--------------------------------
  localStorage.setItem(date, JSON.stringify({
    description: description,
    category: category,
    amount: amount,
  }));

  //--------------------------- Die eingaben zurücksetzen----------------------------
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";

}
