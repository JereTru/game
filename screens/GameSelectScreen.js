// Écran de sélection du jeu où l'utilisateur peut choisir quel jeu jouer
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';

const GameSelectScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Button
            title={"Go Choose a Room"}
            onPress={() => navigation.navigate("HomeScreen")}
        />

        <Text style={styles.text}>
            Sélection de Jeux 
        </Text>

        <Button
            title={"BlackjackScreen"}
            onPress={() => navigation.navigate("BlackjackScreen")}
        />
        <Button
            title={"CardBattleScreen"}
            onPress={() => navigation.navigate("CardBattleScreen")}
        />
        <Button
            title={"ConnectFourScreen"}
            onPress={() => navigation.navigate("ConnectFourScreen")}
        />
        <Button
            title={"MemoryScreen"}
            onPress={() => navigation.navigate("MemoryScreen")}
        />
        <Button
            title={"MinesweeperScreen"}
            onPress={() => navigation.navigate("MinesweeperScreen")}
        />
        <Button
            title={"PokerScreen"}
            onPress={() => navigation.navigate("PokerScreen")}
        />
        <Button
            title={"RockPaperScissorsScreen"}
            onPress={() => navigation.navigate("RockPaperScissorsScreen")}
        />
        <Button
            title={"Snake"}
            onPress={() => navigation.navigate("SnakeScreen")}
        />
        <Button
            title={"TicTacToe (Morpion!)"}
            onPress={() => navigation.navigate("TicTacToeScreen")}
        />

        <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  }
});

export default GameSelectScreen;