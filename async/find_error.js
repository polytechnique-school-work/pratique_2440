// Question 1 : Trouvez l'erreur
async function bob() {
    const test = new Promise(() => {
        setTimeout(() => {
            console.log("Salutation 1");
        }, 1000);    
    })
    
    console.log("BOB");
    
    await test;
    
    console.log("BOB2");
}

bob();
