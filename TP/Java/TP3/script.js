function affichage(){
    document.write (" <table border=2px width=30%>");
    for(let i=0; i<=5; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table")
}

function affichage2(){
    var x=prompt("combient de ligne")
    document.write("<table border=2px width=30%>");
    for(let i=0; i<=x-1; i++){
        document.write("<tr><td>"+(i+1)+"</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table")

}

function seconnexion(){
    var login=prompt("donnez un nom d'user");
    var password=prompt("donnez un mot de passe d'user");
    if (login=="admin" && password=="admin")
        {document.write("bienvenue :" + login);}
    else{alert("acces refuser")}

    
}

function seconnexion2(){
    window.location.href="id.html"
}

function login(){
    var login=document.getElementById("t1").value;
    var mdp=document.getElementById("t2").value;
    if  (login=="admin" && mdp=="admin")
        {window.location.href="yes.html"}
    else{window.location.href="no.html"}
}

function seconnexion3(){
    i=0;
    do{
        var login=prompt("donnez un nom d'user");
        var password=prompt("donnez un mot de passe d'user");
        if (login=="admin" && password=="admin")
            {document.write("bienvenue :" + login); break; }
        else{alert("acces refuser");i+=1;}

    }
    while(i<3)
    if (i==3){alert("délai dépassé")}
}

function ligne(){
    window.location.href="ajout.html"
}

function ajout(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    if(a ==""||b==""){alert("un ou deux champs vide");}
    else if((Number(b)<10||Number(b)>20)){alert("age invalide");}
    else{
        var table=document.getElementById("myTable");
        var newRow=table.insertRow(-1);
        var call1=newRow.insertCell(0);
        var call2=newRow.insertCell(1);
        call1.innerHTML=document.getElementById("t1").value;
        call2.innerHTML=document.getElementById("t2").value;
    }
}