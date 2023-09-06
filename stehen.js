function aiiSym(x, y) {
    let sum = x + y;
    let sub = sum - 10;
    let mult = sub * 3;
    let div = mult / 2;
    let modu = div % 4;
    return `${sum} ${sub} ${mult} ${div} ${modu}`
}
console.log(aiiSym(30, 40))