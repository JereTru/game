import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import GameSelectScreen from './screens/GameSelectScreen';

import BlackjackScreen from './screens/BlackjackScreen';
import CardBattleScreen from './screens/CardBattleScreen';
import ConnectFourScreen from './screens/ConnectFourScreen';
import MemoryScreen from './screens/MemoryScreen';
import MinesweeperScreen from './screens/MinesweeperScreen';
import PokerScreen from './screens/PokerScreen';
import RockPaperScissorsScreen from './screens/RockPaperScissorsScreen';
import SnakeScreen from './screens/SnakeScreen';
import TicTacToeScreen from './screens/TicTacToeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Choose Room' }} />
        <Stack.Screen name="GameSelectScreen" component={GameSelectScreen} options={{ title: 'Choose Game' }} />

        <Stack.Screen name="BlackjackScreen" component={BlackjackScreen} options={{ title: 'Blackjack' }} />
        <Stack.Screen name="CardBattleScreen" component={CardBattleScreen} options={{ title: 'CardBattle' }} /> 
        <Stack.Screen name="ConnectFourScreen" component={ConnectFourScreen} options={{ title: 'ConnectFour' }} />
        <Stack.Screen name="MemoryScreen" component={MemoryScreen} options={{ title: 'Memory' }} />
        <Stack.Screen name="MinesweeperScreen" component={MinesweeperScreen} options={{ title: 'Minesweeper' }} />
        <Stack.Screen name="PokerScreen" component={PokerScreen} options={{ title: 'Poker' }} />
        <Stack.Screen name="RockPaperScissorsScreen" component={RockPaperScissorsScreen} options={{ title: 'RockPaperScissors' }} />
        <Stack.Screen name="SnakeScreen" component={SnakeScreen} options={{ title: 'Snake' }} />
        <Stack.Screen name="TicTacToeScreen" component={TicTacToeScreen} options={{ title: 'TicTacToe' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
