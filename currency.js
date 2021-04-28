const a = 1
function roundTwo (amount) {
    return Math.round(amount*100)/100
}
// 输出了一个匿名函数， 通过candintous 这个变量可以访问到
module.exports.candintous = c => {
    return roundTwo(c)
}
// exports 指向 module.exports

