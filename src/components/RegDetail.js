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
import { CommonActions, useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Auth from '@react-native-firebase/auth';

export default function HomeScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [location, setLocation] = useState('');
  const navigation = useNavigation();

  const handleAddData = async () => {
    try {
      const response = await database().ref('users/2').set({
        fullName,
        email,
        dateOfBirth,
        location,
      });

      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    await Auth().signOut();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Tabs' }],
      })
    );
  };

  return (
    <ImageBackground
      source={{
        uri:
          'https://images.unsplash.com/photo-1505682634904-834259f3c9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color:'blue' }}>
          User Information
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Full Name"
          value={fullName}
          onChangeText={(value) => setFullName(value)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="YYYY-MM-DD"
          value={dateOfBirth}
          onChangeText={(value) => setDateOfBirth(value)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Location"
          value={location}
          onChangeText={(value) => setLocation(value)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddData}>
          <Text style={{ color: '#fff' }}>Save Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={{ color: '#fff' }}>Logout</Text>
        </TouchableOpacity>
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
  inputBox: {
    width: width - 30,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
  },
  logoutButton: {
    width: width * 0.8,
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginVertical: 20,
  },
});
