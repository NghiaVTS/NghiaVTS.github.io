/*bai 1*/
let a = prompt()

function rand(c) {
    document.write(Math.floor(Math.random() * c) + 1)
}
rand(a)

document.write('<br>')

/*bai 2*/
function b() {
    alert('Seen');
}
setTimeout(b, 4000);

/*bai 3*/

setInterval(function () {
    const d = new Date();
    let clock = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = clock;
}, 1000);

/*bai 4*/
let e = []

let FrontEnd_Newbie = {
    "name": "FrontEnd Newbie",
    "price": "4500000",
    "date": "01/11/2022"
}
let FrontEnd_Master = {
    "name": "FrontEnd Master",
    "price": "14200000",
    "date": "01/11/2022"
}
let Web_Responsive = {
    "name": "Web Responsive",
    "price": "4600000",
    "date": "25/07/2022"
}
let React_JS_Master = {
    "name": "React JS Master",
    "price": "6000000",
    "date": "14/11/2022"
}
e = e.concat(FrontEnd_Newbie, FrontEnd_Master, Web_Responsive, React_JS_Master)
console.log(e)
for (i = 0; i < 4; i++) {
    document.write(e[i].price + '<br>')
}

/*bai 5*/
let car = {
    "name": "",
    "color": "",
    "price": ""
}

document.write(car.hasOwnProperty('speed'))