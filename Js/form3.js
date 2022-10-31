//---------------------------------------------------------------------------------------------------------------
export default function formulaire3() {
    // On recupère tout le formulaire
    let form = document.querySelector('#form_3');
    // *------- CHAMPS OBLIGATOIRE-------*
    // On selectionne tout les imput qui ont la classe 'obligatoire'
    let obligatoire = form.querySelectorAll('.obligatoire3');
    var verif = false;

    // ForEach boucle sur tout les imput du tableau
    obligatoire.forEach(input => {
        input.addEventListener('change', function() {
            validOblig(input);
        })
    });
    // check si tout les éléments sont ok, dés que 1 n'est pas ok -> sortie de la boucle
    function fin_boucle() {
        for (const input of obligatoire) {
            validOblig(input);
            if (!verif) {
                return false;
            }
            input.addEventListener('change', function() {
                validOblig(input);
            })
        }
        return true;
    }

    // On définit la fonction
    function validOblig(inputOblig) {
        let msg;
        let valid = false;
        verif = false;
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
            verif = true
        }
        else {
            small.innerHTML = msg;
            small.classList.remove('text-success');
            small.classList.add('text-danger');
        }
    };

    // *-------ADRESSE MAIL-------*
    // Ecoute la modification du champ MAIL
    form.mail3.addEventListener('change', function() {
        validMail(this);
    });

    // Création de la reg exp de validation du mail
    function validMail(inputMail) {
        let valid = false;
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
            valid = true;
        }
        else {
            small.innerHTML = 'Adresse non valide';
            small.classList.remove('text-success');
            small.classList.add('text-danger');
        }
        return valid;
    };

    // *-------NUMERO DE TELEPHONE-------*
    // Ecoute la modification du champs TEL
    form.numero_telephone3.addEventListener('change', function() {
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
        return valid;

    };

    // *-------CODE POSTAL-------*
    // Ecoute la modification du champs CP
    form.code_postal3.addEventListener('change', function() {
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
        return valid;

    };

    // *------- ADRESSE -------*
    // Ecoute la modification du champs ADRESSE
    form.adresse3.addEventListener('change', function() {
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
        return valid;
    };

    // *------- PROJET -------*
    // Ecoute la modification du champs PROJET
    form.projet3.addEventListener('change', function() {
        valid_projet(this);
    });

    // On définit la fonction
    function valid_projet(inputP) {
        let msg;
        let valid = false;
        //min 20 caractères
        if(inputP.value.length < 20) {
            msg = 'Format attendue : 20 caractères minimum';
        }
        else {
            valid = true;
        }

        //On recupere la balise 'small'
        let small = inputP.nextElementSibling;
        
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
        return valid;
    };


    //BUTTON DOWNLOAD FILES 
    let fichier = document.querySelector('.projet_fichier_input');
    let files = document.querySelector('.file_selection');

    //Je demande qu'au changement de fichier, la div "files" récupere la selection et l'insere en html
    // Si vide ou undefined -> msg erreur
    if (!fichier.files[0]) {
        files.innerHTML = 'Aucun fichier selectionné'
    }
    fichier.addEventListener('change', () => {
        if ((fichier?.files[0]?.name) === undefined || (fichier.files[0]) === null) {
            files.innerHTML = 'Aucun fichier selectionné'
        }
        else {
            files.innerHTML = (fichier?.files[0]?.name)
        }
    })


    // *------- SUBMIT FORM -------*
    //Ecoute soumission du formulaire
    let modalvalide = document.querySelector("#modal_valide");
    form.button3.addEventListener('click', (e) => {
        e.preventDefault();
        obligatoire.forEach(input => {validOblig(input)});
        validMail(form.mail3);
        validTel(form.numero_telephone3);
        validCP(form.code_postal3);
        valid_adresse(form.adresse3);
        valid_projet(form.projet3);
        // si tout les éléments return true alors display block
        if (fin_boucle() && validMail(form.mail3) && validTel(form.numero_telephone3) && validCP(form.code_postal3) && valid_adresse(form.adresse3) && valid_projet(form.projet3)) {
            modalvalide.style.display = "block";
        }
    })
}
