import React from 'react';
import { View, Button, ImageBackground, StyleSheet } from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1631943406801-ba6ccfa4f682?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,  
    height: 60, 
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
});

export default Screen2;
