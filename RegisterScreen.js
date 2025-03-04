import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useAuth } from './AuthContext'; 

const generateRandomToken = () => {
  return Math.random().toString(36).substr(2); 
};

export default function RegisterScreen({ navigation }) {
  const { setToken } = useAuth(); 
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    const netState = await NetInfo.fetch();
    if (!netState.isConnected) {
      Alert.alert('Network Error', 'No internet connection. Please try again.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Passwords do not match');
      return;
    }

    const token = generateRandomToken(); 

    const userData = { mobile, email, password, token }; 

    try {
      console.log('Sending data:', userData);
      const response = await axios.post(
        'https://lmsdb-lmserver.up.railway.app/users',
        userData,
        { timeout: 20000 }
      );

      console.log('Response:', response.data);

      if (response.status === 201) {
     
        const responseToken = response.data.token || token;
        console.log('Auth Token:', responseToken); 

        if (responseToken) {
          await AsyncStorage.setItem('authToken', responseToken); 
          setToken(responseToken); 
          navigation.navigate('Agreement'); 
        } else {
          Alert.alert('Error', 'Authentication token is missing');
        }
      } else {
        Alert.alert('Error', response.data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);

      if (error.response) {
        Alert.alert('Server Error', error.response.data.message || 'Something went wrong');
      } else if (error.request) {
        Alert.alert('Network Error', 'Unable to reach the server. Please try again.');
      } else {
        Alert.alert('Error', 'An unexpected error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Mobile Number"
        style={styles.input}
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Already have an account?
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}> Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5B301',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f7f7f7',
  },
  button: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
  },
  registerText: {
    fontSize: 14,
    color: '#333',
    marginTop: 15,
  },
  loginLink: {
    color: '#F5B301',
    fontWeight: 'bold',
  },
});
