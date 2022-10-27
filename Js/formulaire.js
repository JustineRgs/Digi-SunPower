var modal = document.getElementById("modal_1");

var contact1 = document.getElementById("contact_1");

var span_close = document.getElementsByClassName("close")[0];

contact1.onclick = function(){
    modal.style.display ="block";
}

span_close.onclick = function() {
    modal.style.display="none";
}

window.onclick = function(event){
    if(event.target === modal) {
        modal.style.display = "none";
    }
}