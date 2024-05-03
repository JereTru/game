import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Blackjack from '../games/Blackjack/Blackjack';
import { useNavigation } from '@react-navigation/native';

const BlackjackScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Blackjack />
      <Button
        title="Back to Home"
        onPress={() => navigation.goBack()}
        color="#1e90ff"
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
  }
});

export default BlackjackScreen;
