// Services pour récupérer et mettre à jour les scores globaux

import axios from 'axios';

const API_URL = 'https://mon-api.com/scores';

const getLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to retrieve leaderboard: ' + error.response.data.message);
  }
};

const updateScore = async (userId, score) => {
  try {
    const response = await axios.put(`${API_URL}/update`, { userId, score });
    return response.data;
  } catch (error) {
    throw new Error('Failed to update score: ' + error.response.data.message);
  }
};

export { getLeaderboard, updateScore };
