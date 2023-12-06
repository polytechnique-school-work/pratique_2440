// Trouver qu'est-ce que ça fait.
async function bob() {
    const myBool = false;
    const promise = new Promise((_, rejected) => {
        setTimeout(() => {
            if(!myBool) return rejected("Bob a raté");
            _("Bob universe");
        }, 1000);
    })


    promise.then((bob) => {
        console.log(bob);
    }).catch((err) => {
        console.log(err);
    })
}

bob();

