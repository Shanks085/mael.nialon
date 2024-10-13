function test_age(){

    let age =prompt("quelle est votre age ? ");
    if (age<18)
        {
            document.write("accès refusé vous étes mineur");
            document.body.style.background ="red";
        }
        else
        {
            document.write("ok vous étes majeur");
            document.body.style.background ="green";
        }
}


function affichage(){

    let prenom = prompt("saisir votre prénom");
    let nom = prompt("saisir votre nom");
    document.write("<div style='border:5px solid blue; widh:400px;height:300px; margin:auto;font-size:2em'>");
    document.write ("hello "+ prenom +" "+nom);
    document.write("</div>");

}

function couleur(){
    let couleur= prompt("donner une couleur")
    if (couleur == "rouge"){
        document.body.style.background ="red"

    }

    else if (couleur == "bleu"){
        document.body.style.background = "blue"
    }

    else if (couleur == "vert"){
        document.body.style.background = "green"
    }

    else if ( couleur == "home"){
        document.body.style.background = "crimson"
    }

    else{
        document.write("couleur comprise")
    }
}

function calcul_moyenne(){
    var n1 = prompt("1er note :");
    var n2 = prompt("2eme note :");
    var n3 = prompt(" 3eme note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("voici votre moyenne : "+moyenne+"<br>");

    if (moyenne<10){

        document.write("vous n'étes pas admis");
    }

    else if (moyenne<14){

        document.write ("admis mes il faut faire plus");
    }

    else{
        document.write("admis t'inquite");
    }

}