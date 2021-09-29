let a = undefined;
let b = undefined;
let NumeroMenu = undefined;
let result = undefined;
let result1 = undefined;
let result2 = undefined;
let result3 = undefined;


const prompt = require('prompt-sync')();

// L'utilisateur rentre a et b, il y a une addition entre a et b
function additionner(a,b){
    console.log("additionner");
    a = parseInt(prompt("choisissez un nombre : "));
    b = parseInt(prompt("choisissez un 2eme nombre : "));
    result = a+b;
    console.log(result);
}

// L'utilisateur rentre a et b, il y a une soustraction entre a et b
function soustraire(a,b){
    console.log("soustraire");
    a = prompt("choisissez un nombre : ");
    b = prompt("choisissez un 2eme nombre : ");
    result1 = a-b;
    console.log(result1);
}

// L'utilisateur rentre a et b, il y a une multiplication entre a et b
function multiplier(a,b){
    console.log("multiplier");
    a = prompt("choisissez un nombre : ");
    b = prompt("choisissez un 2eme nombre : ");
    result2 = a*b;
    console.log(result2);
}

// L'utilisateur rentre a et b, il y a une division entre a et b
function diviser(a,b){
    console.log("diviser");
    a = prompt("choisissez un nombre : ");
    b = prompt("choisissez un 2eme nombre : ");
    result3 = a/b;
    console.log(result3);
}

// Si l'utilisateur fait un choix entre 0, 1, 2 , 3, 4:
// 0 - le programme se termine
// 1 - la fonction "additionner" est lancée, puis la fonction "menu" est relancée pour un nouveau choix
// 2 - la fonction "soustraire" est lancée, puis la fonction "menu" est relancée pour un nouveau choix
// 3 - la fonction "mutliplier" est lancée, puis la fonction "menu" est relancée pour un nouveau choix
// 4 - la fonction "diviser" est lancée, puis la fonction "menu" est relancée pour un nouveau choix
function menu(){
    console.log("Bienvenue dans la Calculatrice ! ")
    NumeroMenu = parseInt(prompt("Que voulez-vous faire ? \nAdditionner (1), Soustraire (2), Multiplier (3) ou Diviser (4) : "));
    if(NumeroMenu === 1){
        additionner(a,b);
        menu();
    }
    else if(NumeroMenu === 2){
        soustraire(a,b);
        menu();
    }
    else if(NumeroMenu === 3){
        multiplier(a,b);
        menu();
    }
    else if(NumeroMenu === 4){
        diviser(a,b);
        menu();
    }
    else if(NumeroMenu === 0){
        console.log("aurevoir");
        process.exit();
    }
}

menu();

