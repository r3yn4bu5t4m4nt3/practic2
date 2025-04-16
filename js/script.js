function funcionSuma(){
    var x, y, suma;
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    suma = x + y;
    document.getElementById("sumar").textContent=suma;
}
function funcionResta(){
    var a, b, resta;
    a = parseFloat(document.getElementById("nm1").value);
    b = parseFloat(document.getElementById("nm2").value);
    resta = a - b;
    document.getElementById("restar").textContent=resta;
}
function funcionMul(){
    var c, d, mul;
    c = parseFloat(document.getElementById("n1").value);
    d = parseFloat(document.getElementById("n2").value);
    mul = c * d;
    document.getElementById("multi").textContent=mul;
}
function funcionDiv(){
    var r, s, div;
    r = parseFloat(document.getElementById("m1").value);
    s = parseFloat(document.getElementById("m2").value);
    div = r / s;
    document.getElementById("divi").textContent=div;
}