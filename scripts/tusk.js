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
}

function tusk2_tusk2(){
    let x =0.8;
    let y =-3.75;

    let a = Math.pow(Math.cos,2)*(4 * x) - 1 + Math.cos(4 * y)/2;

    let r = a < Math.sin(Math.pow(y,2)) ? Math.PI/4 - x : Math.tan(x) + Math.tan(Math.PI/4*x);

    alert(r);

    let m = Math.sin(5), n = Math.pow(Math.E,m), k= m + n ;

     let a1 = Math.log(2)**2  + m ;
     let b = Math.acos(k) / a1;

     let w = a1 < Math.pow(b,3) ? Math.sqrt(a1+1) : Math.sqrt(a1 + 2);
     alert(w.toFixed(2));
}

function tusk3(){
    let style = ["Джас", "Блюз"];
    style.push("Рок-н-Ролл");
    console.log(style)
    style[style.length - 2] = "Классика";
    console.log(style);
    style.shift();
    console.log(style);
    style.unshift("Рэп","Регги");
    console.log(style);
}
function tusk4(){
    let style = ["Джас", "Блюз", 2 ,3 ,3 ,5 ,6];
    console.log(style);
   console.log(style.lastIndexOf());
}