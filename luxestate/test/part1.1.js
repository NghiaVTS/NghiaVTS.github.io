/*bai 1*/
document.write('Kiem tra 1 so co chia het cho 2 hay khong:')
document.write('<br>')
let t = prompt();

document.write(t % 2 == 0)
document.write('<br>')
document.write('<br>')
/*bai 2*/
document.write('Kiem tra 1 so co chia het cho 3 hay khong:')
document.write('<br>')
if (t % 3 == 0) {
    document.write('So co chia het cho 3')
    document.write('<br>')
    document.write('<br>')
} else {
    document.write('So khong chia het cho 3')
    document.write('<br>')
    document.write('<br>')
}

/*bai 3*/

let a = 4
let b = 12


console.log('a + b = ' + a + b)
console.log('b % a = ' + b % a)
console.log('b / a = ' + b / a)

/*bai 4*/
document.write('In ra ho va ten co khoang cach:')
document.write('<br>')
let ho = 'Truong'
let ten = 'Nghia'

document.write(ho + ' ' + ten)
document.write('<br>')
document.write('<br>')


/*bai 5*/
document.write('Tao ham so sanh a va b:')
document.write('<br>')
function sosanh(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}
document.write(sosanh(1, 2))
document.write('<br>')
document.write('<br>')
/*bai 6*/

let c = 'happy news year'
document.write('Do dai cua chuoi:')
document.write('<br>')
document.write(c.length)
document.write('<br>')
document.write('Vi tri cua ki tu \'y\' dau tien:')
document.write('<br>')
document.write(c.indexOf('y'))
document.write('<br>')
document.write('Vi tri cua ki tu \'y\' cuoi cung:')
document.write('<br>')
document.write(c.lastIndexOf('y'))
document.write('<br>')
document.write('Thay the chu happy:')
document.write('<br>')
document.write(c.replace('happy', 'not happy'))