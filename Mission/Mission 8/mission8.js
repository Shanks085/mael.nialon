function addition(){
    var a = document.getElementById("A1").value;
    var b = document.getElementById("A2").value;
    var c = Number(a)+Number(b);

    r1.value = c;
}



function aléatoire(){
    
    c = Math.floor(Math.random()*11)

     r2.value = c;
    
}





function Chiffre(){
    var a = document.getElementById("G1").value;
    var b = document.getElementById("G2").value;
    
    const nombres = [a,b];
    const max = Math.max (...nombres);

    r3.value = max;
    
}