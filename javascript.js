var farine = document.getElementById('farine');
var eau = document.getElementById('eau');
var huile = document.getElementById('huile');
var levure = document.getElementById('levure');
var sucre = document.getElementById('sucre');
var sel = document.getElementById('sel');
var input = document.getElementById('input');
const btn = document.getElementById('btn');
var boule = document.getElementById('boule');
var poid = document.getElementById('poid');
var date = document.getElementById('date');

var f = 0;
var e = 0;
var h = 0;
var l = 0;
var s = 0;
var se = 0;
var total = 0;

function ingrediant() {
    farine.innerHTML = f;
    eau.innerHTML = e;
    huile.innerHTML = h;
    levure.innerHTML = l;
    sucre.innerHTML = s;
    sel.innerHTML = se;
}

function number(userChoise) {
    if (userChoise < 150) {
        alert("Tu ne peux pas faire une pizza avec si peu de farine");
    }
    if (userChoise > 100000) {
        alert("Woww tu vas ouvrir une usine de pizza!")
    }
}

setInterval(function dailly() {
    let live = new Date()
    let liveTime = live.getHours() + ':' + live.getMinutes() + ':' + live.getSeconds()
    date.innerHTML = live.getDate() + "/" + live.getMonth() + "/" + live.getFullYear() + "   " + liveTime
}, 1000)

function recette(user) {
    user = input.value;
    f = user / 1000;
    e = (user * 55) / 100;
    h = (user * 5) / 100;
    l = (user * 2) / 100;
    s = (user * 2) / 100;
    se = (user * 2) / 100;
    total = f * 1000 + e + h + l + s + se;
    ingrediant();
    number(user);
}

function pizza(users) {
    boule.innerHTML = parseInt(total / 250) + " Pizza";
    poid.innerHTML = total / 1000 + "Kg de pate";
}

function myFunction() {
    recette();
    pizza();
}
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        myFunction();
    }
});
dailly()
btn.addEventListener("click", myFunction)