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

// --------------tableau recettes----------------

var salaire = document.getElementById('salaire');
var alloc = document.getElementById('alloc');

//--------------tableau epargnes----------------

var epargne = document.getElementById('ep');

//--------------tableau resultat----------------

var resultFinal = document.getElementById('resultFinal');
var btnReset = document.getElementById('btnReset');
var btnTotalAll = document.getElementById('btnTotalAll');


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
    recupTableauDepenses(tabDepenses,resDep);

});
btnTotalRecettes.addEventListener("click", function () {
    recupTableauDepenses(tabRecettes,resRec);

});
btnTotalEpargnes.addEventListener("click", function () {
    recupTableauDepenses(tabEpargnes,resEp);

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
function recupTableauDepenses(tabParam,resParam){
    var result = 0;
    for (var j = 0; j < tabParam.length; j++ ){
        result += parseFloat(tabParam[j].value);
        console.log(tabParam);
    }
    resParam.value = result;
}


var totalAll = 0;
btnTotalAll.addEventListener("click", function () {
    totalAll = parseFloat(resRec.value) + parseFloat(resDep.value) + parseFloat(resDep.value) ;

resultFinal.value = totalAll;
   console.log(resultFinal.value);
});

function addFields() {
    document.getElementById('depenses').innerHTML += '<input id="transport" type="number" placeholder="new input" value="0"><br>';

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