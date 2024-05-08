// Écran spécifique pour le jeu
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';

const CardBattleScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Jeux Sélectionné CardBattle
        </Text>
        <Button
            title={"<< Go Back"}
            onPress={() => navigation.goBack()}
            style={styles.buttonBack}
        />
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
  },
  buttonBack: {
    backgroundColor: '#dd5555'
  }
});

export default CardBattleScreen;