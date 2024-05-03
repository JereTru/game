//Options de langue
const languages = {
    EN: 'English',
    FR: 'Français',
    ES: 'Español',
  };
  
  // Options de jeu spécifiques personnalisable
  const gameOptions = {
    ticTacToe: {
      gridSize: 3,   // Taille standard de la grille 3x3
    },
    blackjack: {
      decksCount: 6,
      insurance: true,
    },
    poker: {
      maxPlayers: 6,
      blindIncrementTime: 15  // Temps en minutes
    },
    snake: {
      speed: 'medium',  // Vitesse initiale du serpent
    }
  };
  
  // Paramètres par défaut qui peuvent être ajustés par l'utilisateur
  const defaultSettings = {
    language: languages.EN,
    sound: true, 
    notifications: true,
    difficulty: 'normal',
    gameOptions
  };
  
  // Fonction pour charger les paramètres depuis le stockage local ou utiliser les paramètres par défaut
  const loadSettings = () => {
    try {
      const savedSettings = localStorage.getItem('gameSettings');
      return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
    } catch (error) {
      console.error('Failed to load settings', error);
      return defaultSettings;
    }
  };
  
  // Fonction pour sauvegarder les paramètres modifiés dans le stockage local
  const saveSettings = (settings) => {
    try {
      localStorage.setItem('gameSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save settings', error);
    }
  };
  
  export { languages, loadSettings, saveSettings, defaultSettings };
  