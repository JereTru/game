//nombres aléatoires peuvent être utilisés pour des tirages au sort, des placements aléatoires de cartes, de mines, etc.

/**
 * Génère un nombre aléatoire entre min (inclus) et max (exclus).
 * @param {number} min - Valeur minimale (inclus).
 * @param {number} max - Valeur maximale (exclus).
 * @returns {number} Un nombre aléatoire entre min et max.
 */
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Mélange aléatoirement les éléments d'un tableau.
 * @param {Array} array - Le tableau à mélanger.
 * @returns {Array} Le tableau mélangé.
 */
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomNumber(0, i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export { getRandomNumber, shuffleArray };
