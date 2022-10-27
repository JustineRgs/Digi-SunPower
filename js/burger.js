// On déclare une variable correspondant à l'élément du DOM du bouton burger
const burgerBouton = document.getElementById("nav_bar_burger");

// On déclare une variable correspondant à l'élément du DOM du menu burger
const burgerMenu = document.getElementById("nav_bar_burger_block")

//On déclare des variables pointant sur le main et le footer
const main = document.querySelector("main");
const footer = document.querySelector("footer");

//On crée un évènement sur le clic du bouton burger pour afficher le menu
burgerBouton.addEventListener("touchstart", () => {
    if(burgerMenu.style.visibility === "hidden"){
        burgerMenu.style.visibility = "visible";
    }
    else{
        burgerMenu.style.visibility = "hidden";    
    }
});

//On crée un évènement pour pouvoir fermer le menu en cliquant n'importe où sur l'écran
main.addEventListener("touchstart", () => {
    burgerMenu.style.visibility = "hidden"; 
});

footer.addEventListener("touchstart", () => {
    burgerMenu.style.visibility = "hidden"; 
});