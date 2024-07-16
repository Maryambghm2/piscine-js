// Exercice 5: Création d'une fonction throttle

function throttle(func, delay) {
    let lastCalled = 0;

    return function(...args) {
        const now = new Date().getTime();

        if (now - lastCalled >= delay) {
            func.apply(this, args);
            lastCalled = now;
        }
    };
}


function traitement() {
    console.log('Traitement effectué');
    // Mettez ici votre logique de traitement
}


const throttledTraitement = throttle(traitement, 1000); // Limite à une exécution toutes les 1000ms (1 seconde)


setInterval(() => {
    throttledTraitement();
}, 500);