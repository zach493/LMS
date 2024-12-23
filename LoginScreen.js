import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import axios from 'axios'; 


export default function LoginScreen() {
  const navigation = useNavigation();

  const [mobile, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!mobile || !password) {
      Alert.alert('Error', 'Please enter both mobile number and password.');
      return;
    }

    setLoading(true); 

    const apiUrl = 'https://lmsdb-lmserver.up.railway.app/login'; 

    try {
      const response = await axios.post(apiUrl, {
        mobile: mobile,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json', 
        }
      });

      if (response.status === 200 && response.data.token) {
        const authToken = response.data.token; 
        await AsyncStorage.setItem('authToken', authToken); 
        Alert.alert('Success', 'Login successful!');
        navigation.navigate('Panel'); 
      } else {
        Alert.alert('Error', 'Authentication token not found.');
      }
    } catch (error) {
      console.error(error);

      if (error.response) {
        Alert.alert('Server Error', error.response.data.message || 'Something went wrong.');
      } else if (error.request) {
        Alert.alert('Network Error', 'Unable to reach the server. Please try again later.');
      } else {
        // Other errors
        Alert.alert('Error', 'An unexpected error occurred.');
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./images/Loan_Logo_hand.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Image source={require('./images/dialpad.png')} style={styles.icon} />
        <TextInput
          placeholder="Mobile Number"
          style={styles.input}
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobileNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./images/profile.png')} style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#333" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Don't have an account yet? 
        <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}> Register</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5B301',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#f7f7f7',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
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
  registerLink: {
    color: '#F5B301',
    fontWeight: 'bold',
  },
});
