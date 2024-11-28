
/** Composition Form */
const teamname = document.getElementById("teamname");
const nameteam = document.getElementById("nameteam");
const slctfrmtion = document.getElementById("slctfrmtion");

const prform = document.getElementById("cpstionform");
const sdform = document.getElementById("plyrsform");

const slctall = document.querySelectorAll('.slctall');

let id = 0;

prform.addEventListener('submit', (e) => {
    e.preventDefault();

    nameteam.textContent = teamname.value;

   

});

sdform.addEventListener('submit', (e) => {
    e.preventDefault();
    
    stockerdata();


});


function placerjoueurs(){

    

};








/** Stocker Data */
let plyrsdata = JSON.parse(localStorage.getItem('players')) || [];

function stockerdata(){

    let player = {
        name: plyrnme.value  ,
        note:  ovrlnte.value ,
        position: slctall.value ,
        photo: plyrpctr.value  ,
        flag: plyrflag.value ,
        logo:  teamlogo.value ,
        pac: vtss.value  ,
        sho: tir.value  ,
        pas: pass.value   ,
        dri: drbl.value  ,
        def: dfnc.value   ,
        phy: phsq.value  ,
        cartid: id
    };

    plyrsdata.push(player);
    id++;
    localStorage.setItem('players', JSON.stringify(plyrsdata));

};

console.log(plyrsdata);
 




/** Players Form */

/** Slct Option 2 */
const slctpstion = document.getElementById("slctpstion");

const attckctnr = document.getElementById("attckctnr");
const dfncctnr = document.getElementById("dfncctnr");
const mlieuctnr = document.getElementById("mlieuctnr");
const grdtctnr = document.getElementById("grdtctnr");

slctpstion.addEventListener('click', function(){
    
    if(slctpstion.value === 'attack'){
        attckctnr.classList.remove('hidden');
        grdtctnr.classList.add('hidden');
        mlieuctnr.classList.add('hidden');
        dfncctnr.classList.add('hidden');

    }
    else if(slctpstion.value === 'milieu'){
        mlieuctnr.classList.remove('hidden');
        grdtctnr.classList.add('hidden');
        attckctnr.classList.add('hidden');
        dfncctnr.classList.add('hidden');

    }
    else if(slctpstion.value === 'defence'){
        mlieuctnr.classList.add('hidden');
        attckctnr.classList.add('hidden');
        grdtctnr.classList.add('hidden');
        dfncctnr.classList.remove('hidden');


    }
    else{
        grdtctnr.classList.remove('hidden');
        mlieuctnr.classList.add('hidden');
        attckctnr.classList.add('hidden');
        dfncctnr.classList.add('hidden');

    }

});


    








/** Slct Option 2 */
const slctatck = document.getElementById("slctatck");
const slctdfnc = document.getElementById("slctdfnc");
const slctmlieu = document.getElementById("slctmlieu");


