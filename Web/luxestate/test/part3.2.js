let arr = [1, 5, 10, 15, 20]
function rand(array) {
    return array[Math.floor(Math.random() * array.length)]
}
console.log(rand(arr))

/*bai 2*/

let student = {}
student['name'] = 'Dang Ngheo'
student['age'] = '20'
student['name'] = 'Dang Nghia'
console.log(student)

delete student['age']
console.log(student)

/*bai 3*/
let mang = [
    {
        'name': 'Dang Ngheo',
        tb: 7
    },
    {
        'name': 'Dang Nghia',
        tb: 5
    },
    {
        'name': 'Dang Nghia2',
        tb: 6
    }
]

function getTB(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]['tb'] > 5) {
            console.log(array[i])
        }
    }
}

getTB(mang)

// Cach 2
const filterScore = (mang) => {
    const result = mang.filter(mang => mang.tb > 5)
    console.log(result)
}

filterScore(mang)

/*bai 4*/
let cty = {
    'nhan vien': ['Dang Ngheo', 'a', 'b', 'c'],
    'tien luong': [5000, 2000, 1000, 500]
}

function tong(array) {
    let s = 0;
    for (let i = 0; i < array['tien luong'].length; i++) {
        s += array['tien luong'][i]
    }
    return s
}
console.log(tong(cty))

//cach 2 
function price(array) {
    const result = array['tien luong'].reduce(function (total, curentValue) {
        return total + curentValue
    }, 0)
    return result
}
console.log(price(cty))

/*bai 5*/
let a = [2, 4, 5, 7, 32, 67, 30, 100]

for (let i = 0; i < a.length; i++) {
    if (a[i] > 20) {
        console.log(a[i])
        break
    }
}

//cach 2
function tim(array) {
    return array.find(x => x > 20)
}
console.log(tim(a))

/*bai 6*/
let diemso = [5, 7, 8, 9, 3]
const test = x => x >= 5

if (diemso.every(test)) {
    console.log('Du diem do')
} else {
    console.log('Khong du diem do')
}