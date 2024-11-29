// fonction pour les execice

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

function nombres(){
    let a = document.getElementById("M1").value
    let b = a.toString();
    let c = b.length;

    r4.value = c;
}

function date(){
    let a = document.getElementById("D1").value;
    let date1 = new Date(a)
    let b = document.getElementById("D2").value;
    let date2 = new Date(b)
    let c = date2-date1

    let d = c /(1000 * 60 * 60 * 24)

    r5.value = d;
}

function minute(){
    var a = document.getElementById("h1").value;
    var c = Number(a)*60

    r6.value = c;
}

function salut(){
    let a = document.getElementById("s1").value;
    let b = document.getElementById("s2").value;
    let c = ("bonjour "+a+" "+b+" comment ça va ?")

    r7.value = c;
}

function motdepasse(){
    var login=document.getElementById("mdp1").value;
    var mdp=document.getElementById("mdp2").value;
    var c =  (login=="admin" && mdp=="admin" ? "Valide": "Incorrecte" );

    r8.value = c;
        
}

function temperature(){
    var a = document.getElementById("t1").value;
    var c = (Number(a)*9/5) + 32 

    t2.value = c;
}

function mot(){
    let a = document.getElementById("n1").value;
    const b = a === "" ? 0 : a.split(/\s+/).length;

    r10.value = b;
}

function produit(){
    var a = document.getElementById("c1").value;
    var b = document.getElementById("c2").value;
    var c = document.getElementById("c3").value;

    var d = Number(b)*Number(c)
    var e = Number(d)/Number(a)

    r11.value = e;
    
}


function pair(){

    var a = document.getElementById("p1").value;
    var c = (Number(a) % 2===0 ? "pair" : "impair");

    r12.value = c;
}

function metre(){
    var a = document.getElementById("KM1").value;
    var c = Number(a)*1000;

    r13.value = c;
}

function miles(){
    var a = document.getElementById("mi1").value;
    var c = Number(a)*0.621371;

    r14.value = c;
}

function dolar(){
    var a = document.getElementById("e1").value;

    var c = Number(a)*1.05;

    r15.value = c;
}

//fennetre pour la solution

function code1(){
    var o = document.getElementById("o1");
    var f = document.getElementById("f1");
    var m = document.getElementById("js1");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code2(){
    var o = document.getElementById("o2");
    var f = document.getElementById("f2");
    var m = document.getElementById("js2");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code3(){
    var o = document.getElementById("o3");
    var f = document.getElementById("f3");
    var m = document.getElementById("js3");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code4(){
    var o = document.getElementById("o4");
    var f = document.getElementById("f4");
    var m = document.getElementById("js4");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code5(){
    var o = document.getElementById("o5");
    var f = document.getElementById("f5");
    var m = document.getElementById("js5");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code6(){
    var o = document.getElementById("o6");
    var f = document.getElementById("f6");
    var m = document.getElementById("js6");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code7(){
    var o = document.getElementById("o7");
    var f = document.getElementById("f7");
    var m = document.getElementById("js7");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code8(){
    var o = document.getElementById("o8");
    var f = document.getElementById("f8");
    var m = document.getElementById("js8");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code9(){
    var o = document.getElementById("o9");
    var f = document.getElementById("f9");
    var m = document.getElementById("js9");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code10(){
    var o = document.getElementById("o10");
    var f = document.getElementById("f10");
    var m = document.getElementById("js10");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code11(){
    var o = document.getElementById("o11");
    var f = document.getElementById("f11");
    var m = document.getElementById("js11");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code12(){
    var o = document.getElementById("o12");
    var f = document.getElementById("f12");
    var m = document.getElementById("js12");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code13(){
    var o = document.getElementById("o13");
    var f = document.getElementById("f13");
    var m = document.getElementById("js13");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code14(){
    var o = document.getElementById("o14");
    var f = document.getElementById("f14");
    var m = document.getElementById("js14");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}

function code15(){
    var o = document.getElementById("o15");
    var f = document.getElementById("f15");
    var m = document.getElementById("js15");

    o.addEventListener('click' ,() =>{
        m.style.display ='block' ;
    })

        f.addEventListener('click' ,() =>{
        m.style.display ='none' ;
    });
}