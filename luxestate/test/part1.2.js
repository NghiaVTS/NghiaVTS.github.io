/*bai 1*/
function judge(a) {
    if (a > 8) {
        document.write('Excellence')
    } else if (7 <= a && a <= 8) {
        document.write('Good')
    } else if (4 <= a && a <= 6) {
        document.write('Not Good')
    } else {
        document.write('Bad')
    }
}
let t = prompt();
judge(t)


/*bai 2*/
let b = prompt()

function titleCase(string) {
    //1. Tách các từ, cụm từ trong chuỗi ban đầu
    let sentence = string.toLowerCase().split(" ");

    //2. Tạo vòng lặp và viết hoa chữ cái đầu tiên của các từ, cụm từ trên
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    //3. Nối các từ, cụm từ đã xử lý ở trên và trả về kết quả
    return sentence.join(" ");
}
let result = titleCase(b);
console.log(result)

/*bai 3*/
let c = prompt()
function dinhdang(c) {
    return c.padStart(2, '0')
}

document.write(dinhdang(c))

/*bai 4*/
let d = prompt()

function trichxuat(d) {
    let k = d.indexOf('@')
    let l = d.length
    return d.substring(k + 1, l)
}
document.write(trichxuat(d))
//dung split
/*bai 5*/
let e = prompt()

function trans(e) {
    return e.replaceAll(' ', '-')
}
document.write(trans(e))