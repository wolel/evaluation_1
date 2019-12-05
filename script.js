//--------------tableau Depenses----------------

var depenses = document.getElementById('depenses');
/**
var charges = document.getElementById('charges');
//var gaz =  document.getElementById('gaz');
//var electricite =  document.getElementById('electricite');
//var eau = document.getElementById('eau');
//var internet = document.getElementById('internet');

//var courses = document.getElementById('courses');
//var transport = document.getElementById('transport');
*/
var plus = document.getElementById('plus');//++++++++++++

// --------------tableau recettes----------------

var salaire = document.getElementById('salaire');
var alloc = document.getElementById('alloc');

//--------------tableau epargnes----------------

var epargne = document.getElementById('ep');

//--------------tableau resultat----------------

var result = document.getElementById('result');
var btnReset = document.getElementById('btnReset');
var btnTotal = document.getElementById('btnTotal');
var totalAll;

var btnTotalDepense = document.getElementById('btnTotalDepense');
var btnTotalRecettes = document.getElementById('btnTotalRecettes');
var btnTotalEpargnes = document.getElementById('btnTotalEpargnes');

var resDep = document.getElementById('resDep');
var resRec = document.getElementById('resRec');
var resEp = document.getElementById('resEp');

//--------------------------------------------------
var tabDepenses = [];
var tabRecettes = [];
var tabEpargnes = [];

    tabDepenses = document.querySelectorAll('#depenses input');
    //console.log(tabDepenses);
    tabRecettes = document.querySelectorAll('#recettes input');
    tabEpargnes = document.querySelectorAll('#epargnes  input');

   //alert(tabDepenses[0].value);

btnTotalDepense.addEventListener("click", function () {
    recupTableauDepenses(tabDepenses);

});
btnTotalRecettes.addEventListener("click", function () {
    recupTableauRecettes(tabRecettes);

});
btnTotalEpargnes.addEventListener("click", function () {
    recupTableauEpargnes(tabEpargnes);

});


/**
 *  declarer une fonction avec un nom 'fictif'(tabParam)
 *  cette fonction va être appeller dans mes 3 bouttons "btnTotalRecettes",
 * "btnTotalEpargnes " et "btnTotalDepense"
 * on va être obligé d'appeler le nom de la fonction: ex recupereTableau(?)
 * tout ce qui se passe dans la fonction "recupere Tableau" a une repercution sur
 * tout mes 'click'btnTotal...etc
 * pr modifier mes boutton, il s'uffit de rajpouter des paramettres dans "recupereTableau()"

 */
function recupTableauDepenses(tabParam){
    var result = 0;
    for (var j = 0; j < tabParam.length; j++ ){
        result += parseFloat(tabParam[j].value);
        //console.log(j);
    }
    resDep.value = result;
}

function recupTableauRecettes(tabParam){
    var result = 0;
    for (var j = 0; j < tabParam.length; j++ ){
        result += parseFloat(tabParam[j].value);
        //console.log(j);
    }
    resRec.value = result;
}

function recupTableauEpargnes(tabParam){
    var result = 0;
    for (var j = 0; j < tabParam.length; j++ ){
        result += parseFloat(tabParam[j].value);
        //console.log(j);
    }
    resEp.value = result;
}



/**
 * function totalDepenses() {
    var charges = parseFloat(document.getElementById('charges').value);
    var gaz =  parseFloat(document.getElementById('gaz').value);
    var electricite =  parseFloat(document.getElementById('electricite').value);
    var eau = parseFloat(document.getElementById('eau').value);
    var internet = parseFloat(document.getElementById('internet').value);
    var courses = parseFloat(document.getElementById('courses').value);
    var transport = parseFloat(document.getElementById('transport').value);

    var oper = document.getElementById('operators').value;


    var totalAll = document.getElementById('result').value = charges + gaz +
        electricite + eau + internet + courses + transport;
        console.log(total);

 */


//TODO: pourquoi je ne sais pas faire juste le total de charges + gaz par ex?