
/** Composition Form */
const teamname = document.getElementById("teamname");
const nameteam = document.getElementById("nameteam");

const prform = document.getElementById("cpstionform");

prform.addEventListener('click', (e) => {
    e.preventDefault();

    nameteam.textContent = teamname.value;

});

/** Players Form */

