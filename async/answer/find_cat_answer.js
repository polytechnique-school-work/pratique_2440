// Votre objectif est d'afficher un chat à l'écran via cet API.
// https://api.thecatapi.com/v1/images/search



// Fonction pour afficher l'image
function display(url) {
    const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
    require('child_process').exec(start + ' ' + url);
}


async function code() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    display(data[0].url);
}

code();



