import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const LoginScreen=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        const isUserLogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        setMessage('');
        // console.log(isUserLogin);
        navigation.dispatch(StackActions.replace('Home'));
      } else {
        alert('Please Enter All Data');
      }
    } catch (err) {
      console.log(err);
      setMessage(err.message);
    }
  };

  return (
    <ImageBackground
      source={{
        uri:
          'https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity
            style={styles.signup}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            <Text style={styles.signupText}>New User Signup ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 15,
    width: width - 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  inputBox: {
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 15,
    borderRadius: 50,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
  signup: {
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
