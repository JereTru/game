 // Fonctions de validation pour les entrées des utilisateurs
 
/**
 * Vérifie si une adresse email est valide.
 * @param {string} email - L'adresse email à vérifier.
 * @returns {boolean} Vrai si l'email est valide, faux sinon.
 */
const isValidEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
};

/**
 * Vérifie si un mot de passe est suffisamment fort.
 * @param {string} password - Le mot de passe à vérifier.
 * @returns {boolean} Vrai si le mot de passe est fort, faux sinon.
 */
const isValidPassword = (password) => {
    return password.length >= 8;
};

export { isValidEmail, isValidPassword };
