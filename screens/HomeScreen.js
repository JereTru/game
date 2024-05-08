// Écran d'accueil de l'application
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Afficher les rooms 
        </Text>
        <Button
            title={"Go Choose a Game"}
            onPress={() => navigation.navigate("GameSelectScreen")}
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
  }
});

export default HomeScreen;