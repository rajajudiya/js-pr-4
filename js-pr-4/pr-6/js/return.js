const mathFormula = (a, b) => {

    return (ans = ((a * a) + (2 * a * b) + (b * b)));
}

let ans, a = 10, b = 20;

ans = mathFormula(a, b);

document.getElementById("a").innerHTML = (`A is = ${a}`);
document.getElementById("b").innerHTML = (`B is = ${b}`);
document.getElementById("answer").innerHTML = (`Answer is = ${ans}`);