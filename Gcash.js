import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function GCash() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gcashNumber, setGcashNumber] = useState('');
  const [moneyReceived, setMoneyReceived] = useState(null);
  const serviceFee = 15;

  useEffect(() => {
    const fetchMoneyReceived = async () => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        if (!authToken) {
          Alert.alert('Error', 'You must be logged in to proceed.');
          return;
        }

        const response = await axios.get(
          'https://lmsdb-lmserver.up.railway.app/borrowmoneyrec',
          {
            params: { token: authToken },
          }
        );

        if (response.status === 200) {
          setMoneyReceived(response.data.moneyrecieved);
        } else {
          console.error('Error:', response.data.message);
        }
      } catch (error) {
        console.error('Axios error:', error);
        Alert.alert('Error', 'Failed to fetch money received.');
      }
    };

    fetchMoneyReceived();
  }, []);

  const handleClaim = async () => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      if (!authToken) {
        Alert.alert('Error', 'You must be logged in to proceed.');
        return;
      }

      const payload = {
        token: authToken,
        namegcash: fullName,
        nogcash: phoneNumber,
        gcashsent: gcashNumber,
      };

      const response = await axios.post(
        'https://lmsdb-lmserver.up.railway.app/gcashpayment',
        payload
      );

      if (response.status === 200) {
        Alert.alert('Success', 'Your GCash details have been submitted successfully!');
        navigation.navigate('Panel');
      } else {
        console.error('Error:', response.data.message);
        Alert.alert('Error', response.data.message || 'Failed to submit details.');
      }
    } catch (error) {
      console.error('Axios error:', error);
      Alert.alert('Error', 'Failed to submit details. Please try again.');
    }
  };

  const amountToReceive = moneyReceived ? moneyReceived - serviceFee : 0;

  return (
    <View style={styles.container}>
      <View style={styles.header1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./images/left-arrow.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title1}>GCash</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Confirm your details</Text>

        <Text style={styles.label}>Full name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Phone number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text style={styles.label}>Receiving GCash mobile number:</Text>
        <TextInput
          style={styles.input}
          placeholder="11 digit mobile number"
          keyboardType="number-pad"
          maxLength={11}
          value={gcashNumber}
          onChangeText={setGcashNumber}
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Review your loan</Text>
          <Text style={styles.cardText}>
            <Text style={styles.bold}>Processing Time:</Text> Instant
          </Text>
          <Text style={styles.cardText}>
            <Text style={styles.bold}>Service fee:</Text> PHP {serviceFee.toFixed(2)}
          </Text>
          <Text style={styles.cardText}>
            <Text style={styles.bold}>You'll receive:</Text>{' '}
            {moneyReceived ? `PHP ${amountToReceive.toFixed(2)}` : 'Loading...'}
          </Text>
        </View>

        <Text style={styles.disclaimer}>
          *Service fees are calculated and charged by the cash-out partner.
        </Text>

      <TouchableOpacity style={styles.button} onPress={handleClaim}>
        <Text style={styles.buttonText}>Claim my limit</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9F6',
  },
  header1: {
    top: -10,
    backgroundColor: '#FFC107',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  icon: {
    top: 30,
    width: 24,
    height: 24,
    marginRight: 8,
  },
  header1t: {
    fontSize: 24,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  title1: {
    marginTop: 3,
    marginLeft: 40,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FDF9F6',
    borderWidth: 1,
    borderColor: '#DDD',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#333',
  },
  card: {
    backgroundColor: '#F5F1E7',
    padding: 16,
    marginTop: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  disclaimer: {
    fontSize: 12,
    color: '#777',
    marginTop: 10,
  },
  button: {
    marginBottom: 30,
    marginLeft: 15,
    backgroundColor: '#FF7A00',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 300,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
