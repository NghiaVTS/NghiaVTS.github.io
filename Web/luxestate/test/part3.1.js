let e = []

let FrontEnd_Newbie = {
    "name": "FrontEnd Newbie",
    "price": 4500000,
    "date": "01/11/2022"
}
let FrontEnd_Master = {
    "name": "FrontEnd Master",
    "price": 14200000,
    "date": "01/11/2022"
}
let Web_Responsive = {
    "name": "Web Responsive",
    "price": 4600000,
    "date": "25/07/2022"
}
let React_JS_Master = {
    "name": "React JS Master",
    "price": 6000000,
    "date": "14/11/2022"
}
e = e.concat(FrontEnd_Newbie, FrontEnd_Master, Web_Responsive, React_JS_Master)
//in ra so luong khoa hoc
document.write(e.length)
document.write('<br>')
//in ra ten khoa hoc vi tri thu 2
console.log(e[2])
//in ra chuoi ten khoa hoc cach nhau bang dau phay
let a = []

for (let i = 0; i < e.length; i++) {
    a.push(e[i]["name"])
}

document.write(a)
document.write('<br>')
//tong gia cac khoa hoc
let b = []

for (let i = 0; i < e.length; i++) {
    b.push(e[i]["price"])
}

document.write(b)
document.write('<br>')

let s = 0
b.forEach(myFunction)
function myFunction(item) {
    s += item;
}

document.write(s)
document.write('<br>')

//cach 2
//in ra chuoi ten khoa hoc cach nhau bang dau phay
function show(array) {
    const result = array.reduce(function (total, curentValue) {
        return total + curentValue['name'] + ', '
    }, '')
    return result
}
console.log(show(e))

//tong gia cac khoa hoc
function price(array) {
    const result = array.reduce(function (total, curentValue) {
        return total + curentValue['price']
    }, 0)
    return result
}
console.log(price(e))


/*bai 2*/
s = 0
let d = [1, 3, 4]
d.forEach(myFunction)

document.write(s)
document.write('<br>')
/*bai 3*/
let k = ['cho', 'meo', 'ga']
let character = '-'

test(k, character)

function test(array, character) {
    let result = array.join(character)
    document.write(result)
}
document.write('<br>')

//cach 2
function chuoi(array, character) {
    const result = array.reduce(function (total, curentValue) {
        return total + curentValue + character
    }, '')
    const test = result.slice(0, -1)
    return test
}

console.log(chuoi(k, character))

/*bai 4*/
let user = {
    'ten': 'Dang Ngheo',
    'tuoi': 22,
    'dia chi': 'somewhere',
    friend: ['a', 'b', 'c'],
}

console.log(user.friend)


document.write((user.friend)[user.friend.length - 1])
document.write('<br>')

document.write(user["dia chi"])
document.write('<br>')

user.friend.push('d')
document.write(user.friend.length)

/*bai 5*/
let mang = [2, 4, 5, 7, 32, 67, 30, 100]

console.log(mang.map(x => x * 2))