import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Congratulations = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('2000');
  const [warning, setWarning] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [token, setToken] = useState(null);

  // Fetch the token from AsyncStorage
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        console.log('Auth Token:', authToken);
        if (!authToken) {
          Alert.alert('Error', 'You must be logged in to continue.');
          navigation.navigate('Login'); // Redirect to Login if no token is found
          return;
        }
        setToken(authToken);
      } catch (error) {
        console.error('Error fetching token:', error);
        Alert.alert('Error', 'Failed to retrieve authentication token.');
      }
    };

    fetchToken();

    // Keyboard listeners
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleValueChange = (text) => {
    const numericValue = parseInt(text);
    if (numericValue > 2000) {
      setWarning('The value cannot exceed PHP 2,000.');
    } else {
      setWarning('');
    }
    setValue(text);
  };

  const handleSubmit = async () => {
    if (parseInt(value) > 2000) {
      setWarning('The value cannot exceed PHP 2,000.');
      return;
    }
  
    try {
      const authToken = await AsyncStorage.getItem('authToken'); // Get token dynamically
      const response = await axios.post(
        'https://lmsdb-lmserver.up.railway.app/borrowmon',
        { token: authToken, moneyrecieved: value }, // Send as body
        { headers: { 'Content-Type': 'application/json' } } // Proper headers
      );
  
      if (response.status === 200 || response.status === 201) {
        console.log('Record updated or inserted successfully');
        navigation.navigate('Approved');
      } else {
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.header}>Congratulations</Text>
            <Text style={styles.subText}>
              Only take what you need; you can always draw more as long as you repay on time.
            </Text>
          </View>

          <View style={styles.amountContainer}>
            <Text style={styles.currency}>PHP</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={handleValueChange}
            />
          </View>

          {warning ? <Text style={styles.warningText}>{warning}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  textContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#606060',
    lineHeight: 20,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  currency: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#606060',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    fontSize: 24,
    paddingHorizontal: 10,
    height: 40,
    width: 200,
    textAlign: 'center',
  },
  warningText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF7A00',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Congratulations;
