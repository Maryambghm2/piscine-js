// Exercice 3: Créer une fonction de débogage
// Définition des niveaux de journalisation 
const logLevels = { DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4 };
// Niveau de journalisation courant:
let currentLogLevel = logLevels.DEBUG;

// Fonction débogage :
function debug(level, message, variable = null) {
    if (logLevels[level] >= currentLogLevel) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${level}: ${message}`;

        if (variable !== null) {
            console.log(logMessage, variable);
        } else {
            console.log(logMessage);
        }
    }
}
// Exemple d'utilisation :
const exempleVariable = { nom: "Alice", age: 25 };
debug("INFO", "Démarrage de l\'application.");
debug("DEBUG", "Valeur de exempleVariable:", exempleVariable);
debug("WARN", "Attention, quelque chose semble étrange.");
debug("ERROR", "Une erreur s\'est produite.");


// Si on change 
currentLogLevel = logLevels.WARN;
debug("DEBUG", "Ce message ne sera pas affiché.");
debug("WARN", "Ce message sera affiché.");