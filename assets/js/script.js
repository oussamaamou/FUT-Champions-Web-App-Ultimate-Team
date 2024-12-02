
/** Composition Form */
const teamname = document.getElementById("teamname");
const nameteam = document.getElementById("nameteam");
const slctfrmtion = document.getElementById("slctfrmtion");

const prform = document.getElementById("cpstionform");
const sdform = document.getElementById("plyrsform");




prform.addEventListener('submit', (e) => {
    e.preventDefault();
    nameteam.textContent = teamname.value;
    clubinformations();
   

});

sdform.addEventListener('submit', (e) => {
    e.preventDefault();
    placerjoueurs();
    stockerdata();
    plyrnme.value = '';
    ovrlnte.value = '';
    slctpstion.value = '';
    plyrpctr.value = ''; 
    plyrflag.value = '';
    teamlogo.value = '';
    vtss.value = ''; 
    tir.value = ''; 
    pass.value = '';  
    drbl.value = ''; 
    dfnc.value = '';  
    phsq.value = ''; 

    


});


/** Stocker Data */
let plyrsdata = JSON.parse(localStorage.getItem('players')) || [];
let clubdata = JSON.parse(localStorage.getItem('club')) || [];

function stockerdata(){

    let player = {
        name: plyrnme.value  ,
        note:  ovrlnte.value ,
        position: slctpstion.value ,
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
    placerjoueurs();

};



const slctpstion = document.getElementById("slctpstion");
let id = 0;

function placerjoueurs() {

    document.getElementById('lw').innerHTML = '';
    document.getElementById('rw').innerHTML = '';
    document.getElementById('st').innerHTML = '';
    document.getElementById('lm').innerHTML = '';
    document.getElementById('cdm').innerHTML = '';
    document.getElementById('rm').innerHTML = '';
    document.getElementById('lb').innerHTML = '';
    document.getElementById('rb').innerHTML = '';
    document.getElementById('cbr').innerHTML = '';
    document.getElementById('cbl').innerHTML = '';
    document.getElementById('gk').innerHTML = '';
    document.getElementById('sub1').innerHTML = '';
    document.getElementById('sub2').innerHTML = '';
    document.getElementById('sub3').innerHTML = '';
    document.getElementById('sub4').innerHTML = '';
    document.getElementById('sub5').innerHTML = '';
    document.getElementById('sub6').innerHTML = '';

    
        plyrsdata.forEach((joueur, index) => {
            let playerHTML = `

                <div  class="inline absolute xl:left-[3.35rem] xl:top-[-0.20rem]">
                    <i onclick="supprimerjoueur(${index})" class="fa-solid fa-trash hover:text-yellow-500 cursor-pointer"></i>
                </div>

                <div class="player-card-top">
                    <div class="player-master-info">
                        <div class="player-rating">
                            <span>${joueur.note}</span>
                        </div>
                        <div class="player-position">
                            <span>${joueur.position}</span>
                        </div>
                        <div class="player-nation">
                            <img src="${joueur.flag}" alt="Drapeau du Pays">
                        </div>
                        <div class="player-club">
                            <img src="${joueur.logo}" alt="Logo de l'Equipe">
                        </div>
                    </div>
                    <div class="player-picture">
                        <img src="${joueur.photo}" alt="Photo du Joueur">
                    </div>
                </div>
                <div class="player-card-bottom">
                    <div class="player-info">
                        <div class="player-name">
                            <span>${joueur.name}</span>
                        </div>
                        <div class="player-features">
                            <div class="player-features-col">
                                <span>
                                    <span class="player-feature-value">${joueur.pac}</span>
                                    <span class="player-feature-title">PAC</span>
                                </span>
                                <span>
                                    <span class="player-feature-value">${joueur.sho}</span>
                                    <span class="player-feature-title">SHO</span>
                                </span>
                                <span>
                                    <span class="player-feature-value">${joueur.pas}</span>
                                    <span class="player-feature-title">PAS</span>
                                </span>
                            </div>
                            <div class="player-features-col">
                                <span>
                                    <span class="player-feature-value">${joueur.dri}</span>
                                    <span class="player-feature-title">DRI</span>
                                </span>
                                <span>
                                    <span class="player-feature-value">${joueur.def}</span>
                                    <span class="player-feature-title">DEF</span>
                                </span>
                                <span>
                                    <span class="player-feature-value">${joueur.phy}</span>
                                    <span class="player-feature-title">PHY</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uppercase xl:w-[3rem] xl:ml-[4.2rem] xl:mt-[1rem] xl:px-3 xl:py-1.5 xl:text-xs xl:font-semibold text-center text-stone-900 bg-gradient-to-b from-yellow-500 to-yellow-700 xl:rounded-2xl shadow-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    ${joueur.position}
                </div>
            `;

            switch(joueur.position) {
                case 'st':
                    document.getElementById('st').innerHTML = playerHTML;
                    break;
                case 'lw':
                    document.getElementById('lw').innerHTML = playerHTML;
                    break;
                case 'rw':
                    document.getElementById('rw').innerHTML = playerHTML;
                    break;
                case 'cdm':
                    document.getElementById('cdm').innerHTML = playerHTML;
                    break;
                case 'lm':
                    document.getElementById('lm').innerHTML = playerHTML;
                    break;
                case 'rm':
                    document.getElementById('rm').innerHTML = playerHTML;
                    break;
                case 'lb':
                    document.getElementById('lb').innerHTML = playerHTML;
                    break;
                case 'rb':
                    document.getElementById('rb').innerHTML = playerHTML;
                    break;
                case 'cbr':
                    document.getElementById('cbr').innerHTML = playerHTML;
                    break;
                case 'cbl':
                    document.getElementById('cbl').innerHTML = playerHTML;
                    break;
                case 'gk':
                    document.getElementById('gk').innerHTML = playerHTML;
                    break;
                case 'sub1':
                    document.getElementById('sub1').innerHTML = playerHTML;
                    break;
                case 'sub2':
                    document.getElementById('sub2').innerHTML = playerHTML;
                    break;
                    
                case 'sub3':
                    document.getElementById('sub3').innerHTML = playerHTML;
                    break;

                case 'sub4':
                    document.getElementById('sub4').innerHTML = playerHTML;
                    break;
                case 'sub5':
                    document.getElementById('sub5').innerHTML = playerHTML;
                    break;
                    
                case 'sub6':
                    document.getElementById('sub6').innerHTML = playerHTML;
                    break;
                default:
                    break;
            }
        
        });
        
}


function supprimerjoueur(i){

    plyrsdata.splice(i,1);
    localStorage.setItem('players', JSON.stringify(plyrsdata));
    placerjoueurs();
    

}



function clubinformations(){

    let club = {

        clubnom: teamname.value,
        clubfrmtion:slctfrmtion.value

    };
    
    clubdata.push(club);
    localStorage.setItem('clubs', JSON.stringify(clubdata));

};


/** Consommation de l'API */

let url = "https://oussamaamou.github.io/Brief-6-API/";

let pctrcrsl = document.getElementById("pctrcrsl");
let logocrsl = document.getElementById("logocrsl");

async function getimages() {

    const response = await fetch(url);
    const data = await response.json();

    for( let i=0; i < data.players.length; i++){
        pctrcrsl.innerHTML +=`
        
        <img src="${data.players[i].photo}" alt="Image 1" class="slider-image cursor-pointer" onclick="selectImage('${data.players[i].photo}', 'plyrpctr')">
        
        `;


        logocrsl.innerHTML +=`
        
        <img src="${data.players[i].logo}" alt="Image 1" class="slider-image xl:w-[35px] xl:h-[35px] cursor-pointer" onclick="selectImage('${data.players[i].logo}', 'teamlogo')">
        
        `;


        flagcrsl.innerHTML +=`
        
        <img src="${data.players[i].flag}" alt="Image 1" class="slider-image cursor-pointer" onclick="selectImage('${data.players[i].flag}', 'plyrflag')">
        
        `;

    }
    
}
 


let currentSlide = {
    pctrcrsl: 0,
    logocrsl: 0,
    flagcrsl: 0
};

const moveSlide = (direction, carouselId) => {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.getElementsByClassName('slider-image');
    const totalSlides = slides.length;

    currentSlide[carouselId] += direction;

    if (currentSlide[carouselId] < 0) {
        currentSlide[carouselId] = totalSlides - 1;
    } else if (currentSlide[carouselId] >= totalSlides) {
        currentSlide[carouselId] = 0;
    }

    const offset = -currentSlide[carouselId] * 30;
    carousel.style.transform = `translateX(${offset}%)`;
};



function selectImage(imageSrc, targetInputId) {
    const inputElement = document.getElementById(targetInputId);
    inputElement.value = imageSrc;
}


getimages();
placerjoueurs();

console.log(plyrsdata);


    




