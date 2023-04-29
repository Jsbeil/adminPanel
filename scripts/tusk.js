function tusk1(){
    let a = prompt("Введиде значение для a");
    let b = prompt("Введиде значение для b");
    let count = a + b < 4 ? "мало" : "много";
    alert(count);
}
function tusk2(){
    let x = 5 , n=3;

    let y = 2 * Math.pow(Math.E,x)+1;
    let z = Math.log(x)/x;

    let w = x < Math.pow(z,2) ? x*y : n*x +2 ;

    alert("первый пример " + w);

    
    let a = 7, b = 9

    x1 = Math.sqrt(2.3+Math.pow(a,2))/Math.log10(Math.pow(b,3)) + 8.77;
    y1 = Math.asin(Math.pow(a,2)/Math.pow(b,3))/x1;

    k = x1 < Math.sqrt(Math.pow(y1,5)) ? 2 * Math.pow(x1,2) - 3 * y1 - 19 * Math.pow(y1,2) : Math.pow(x1,2) - 6 * Math.pow(y1,2) 

    alert("третий пример " + k.toFixed(2));


    let x2 = 0.8 , y2 = -3.75;

    a1 = Math.pow(Math.cos,2)*(4*x2) - 1 + Math.cos(4*y2)/2;

    r = a1 < Math.sin(Math.pow(y2,2)) ? Math.PI/4 - x2 : Math.tan(x2) + Math.tan(Math.PI/4 * x2);

    alert("второй пример" + r);


}