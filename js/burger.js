// On déclare une variable correspondant à l'élément du DOM du bouton burger
const burgerBouton = document.getElementById("nav_bar_burger_icon");

// On déclare une variable correspondant à l'élément du DOM du menu burger
const burgerMenu = document.getElementById("nav_bar_burger_block")

//On déclare des variables pointant sur le main et le footer
const main = document.querySelector("main");
const footer = document.querySelector("footer");

//On crée un évènement sur le clic du bouton burger pour afficher le menu
burgerBouton.onclick = () => {
    if(burgerMenu.style.visibility === "hidden"){
        burgerMenu.style.visibility = "visible";
    }
    else{
        burgerMenu.style.visibility = "hidden";    
    }
}

//On crée un évènement pour pouvoir fermer le menu en cliquant n'importe où sur l'écran
main.onclick = () => {
    burgerMenu.style.visibility = "hidden"; 
}

footer.onclick = () => {
    burgerMenu.style.visibility = "hidden"; 
}