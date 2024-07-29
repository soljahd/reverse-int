module.exports = function reverse(n) {
    const num = Math.abs(n);
    let numArr = Array.from(String(num), ((x) => Number(x)));
    return (Number(numArr.reverse().join('')));
}