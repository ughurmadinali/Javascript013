1
//верните абсолютное значение числа
let num1 = -4;
Math.abs(num1)

2
//верните кубический корень числа
let num2 = 27;
Math.cbrt(num2)

3
//округлите число к большему целому
let num3 = 5.1;
Math.ceil(num3)

4
//округлите число к меньшему целому
let num4 = 5.9;
Math.floor(num4)

5
function points(a, b) {
    return (a * 2) + (b * 3)
}
console.log(points(7, 5));
console.log(points());

6
function stringName(b, a) {
    return b + a
}
console.log(stringName('Java', 'Script'));

7
function lessThan(a, b) {
    if(a + b < 100){
        return true
    }
    else{
        return false
    }
}
console.log(lessThan(5, 40));
console.log(lessThan());

8
function printArray(a) {
    let arr = []
    for (let i = 1; i <= a; i +=1){
        arr.push(i)
    }
    return arr
}

console.log(printArray(6));

9
function animals(a, b, c) {
    return (a * 2) + (b * 3) + (c * 5)
}
console.log(animals(2, 4, 4));