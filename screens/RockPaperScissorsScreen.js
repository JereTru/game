// Écran spécifique pour le jeu
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';

const RockPaperScissorsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Jeux Sélectionné RockPaperScissors
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
  },
  buttonBack: {
    backgroundColor: '#dd5555'
  }
});

export default RockPaperScissorsScreen;