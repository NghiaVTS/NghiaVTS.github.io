/*bai 1*/
document.write('Bai 1:')
document.write('<br>')
let s = 0
for (let i = 0; i < 10; i++) {
    s += i
    document.write(s + ' ')
}
document.write('<br>')
document.write('<br>')
/*bai 2*/
document.write('Bai 2:')
document.write('<br>')
let i = 20
while (i > 0) {
    if (i % 2 == 0) document.write(i + ' ')
    i--
}
document.write('<br>')
document.write('<br>')

/*bai 3*/
document.write('Bai 3')
document.write('<br>')
let a = [1, 2, 3, 4, 5]
a.splice(3, 2)
document.write(a)
document.write('<br>')
document.write('<br>')
/*bai 4*/
document.write('Bai 4:')
document.write('<br>')
let b = ['FrontEnd Newbie', 'FrontEnd Master', 'Web Responsive', 'React JS Master']
document.write(b.length)
document.write('<br>')
document.write(b[2])
document.write('<br>')
document.write(b)
document.write('<br>')
b.push(1, 2)
document.write(b)
document.write('<br>')
document.write('<br>')

/*bai 5*/
document.write('Bai 5:')
document.write('<br>')
let c = [1, 2, 3, 4, 5]
s = 0
for (i = 0; i < 5; i++) {
    s += c[i]
}
document.write(s)