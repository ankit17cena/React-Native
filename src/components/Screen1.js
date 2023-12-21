import React from 'react';
import { View, Button, ImageBackground, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww' }}
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
    height: 260, 
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
});

export default Screen1;

