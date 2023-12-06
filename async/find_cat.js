// Votre objectif est d'afficher un chat à l'écran via cet API.
// https://api.thecatapi.com/v1/images/search



// Fonction pour afficher l'image : c'est un petit cadeau pour vous simplifier la tâche 😉
function display(url) {
    const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
    require('child_process').exec(start + ' ' + url);
}


// Vous devez modifier la fonction code pour réaliser ça.
function code() {
    
}

code();

