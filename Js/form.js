// ** 'change' -- test au moment ou l'utilisateur clique dans un autre champs

// On recupère tout le formulaire
let form = document.querySelector('#form_1');

// *------- CHAMPS OBLIGATOIRE-------*
// On selectionne tout les imput qui ont la classe 'obligatoire'
let obligatoire = form.querySelectorAll('.obligatoire');

// ForEach boucle sur tout les imput du tableau
obligatoire.forEach(input => {
    input.addEventListener('change', function() {
    validOblig(this);
    })
});

// On définit la fonction
function validOblig(inputOblig) {
    let msg;
    let valid = false;
    //min 3 caractères
    if(inputOblig.value.length < 2) {
        msg = 'Ce champ est obligatoire';
    }
    //chiffre interdit
    else if (/[0-9]/.test(inputOblig.value)) {
        msg = 'Ce champ ne doit pas contenir de chiffre'
    }
    else {
        valid = true;
    }

    // On recupere la balise 'small'
    let small = inputOblig.nextElementSibling;
    
    // On test 'valid'
    if (valid) {
        small.innerHTML = 'Champ valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};

// *-------ADRESSE MAIL-------*
// Ecoute la modification du champ MAIL
form.mail.addEventListener('change', function() {
    validMail(this);
});

// Création de la reg exp de validation du mail
function validMail(inputMail) {
    let mailRegExp = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    );

    //On recupere la balise small
    let small = inputMail.nextElementSibling;
        
    // On test la reg exp
    if (mailRegExp.test(inputMail.value)) {
        small.innerHTML = 'Adresse valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else {
        small.innerHTML = 'Adresse non valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};

// *-------NUMERO DE TELEPHONE-------*
// Ecoute la modification du champs TEL
form.numero_telephone.addEventListener('change', function() {
    validTel(this);
});

// On définit la fonction
function validTel(inputTel) {
    let msg;
    let valid = false; 
    if(!/[0-9]{10}/.test(inputTel.value)) {
        msg = 'Le numéro doit contenir 10 chiffres'
    }
    else {
        valid = true;
    }
    //On recupere la balise 'small'
    let small = inputTel.nextElementSibling;
    
    //On test 'valid'
    if (valid) {
        small.innerHTML = 'Numéro valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};

// *-------CODE POSTAL-------*
// Ecoute la modification du champs CP
form.code_postal.addEventListener('change', function() {
    validCP(this);
});

// On définit la fonction
function validCP(inputCP) {
    let msg;
    let valid = false; 
    //min 5 chiffres
    if(!/[0-9]{5}/.test(inputCP.value)) {
        msg = 'Le code postal doit contenir 5 chiffres'
    }
    else {
        valid = true;
    }
    //On recupere la balise 'small'
    let small = inputCP.nextElementSibling;
    
    //On test 'valid'
    if (valid) {
        small.innerHTML = 'Code postal valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};

// *------- ADRESSE -------*
// Ecoute la modification du champs ADRESSE
form.adresse.addEventListener('change', function() {
    valid_adresse(this);
});

// On définit la fonction
function valid_adresse(inputAD) {
    let msg;
    let valid = false;
    //min 2 caractères
    if(inputAD.value.length < 2) {
        msg = 'Ce champ est obligatoire';
    }
    else {
        valid = true;
    }

    //On recupere la balise 'small'
    let small = inputAD.nextElementSibling;
    
    //On test 'valid'
    if (valid) {
        small.innerHTML = 'Champ valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    }
    else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};
