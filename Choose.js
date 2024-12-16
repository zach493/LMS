import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Choose() {
  const navigation = useNavigation();
  
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

        const response = await axios.get('https://lmsdb-lmserver.up.railway.app/borrowmoneyrec', {
          params: { token: authToken },
        });

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

  const amountToReceive = moneyReceived ? moneyReceived - serviceFee : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose where to claim your loan</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Gcash')}
      >
        <View style={styles.row}>
          <View>
            <Text style={styles.boldText}>Gcash (Instapay)</Text>
            <Text style={styles.label}>
              Processing Time: <Text style={styles.value}>Instant</Text>
            </Text>
            <Text style={styles.label}>
              Service fee: <Text style={styles.value}>PHP {serviceFee.toFixed(2)}</Text>
            </Text>
            <Text style={styles.label}>
              You'll receive: <Text style={styles.value}>
                {moneyReceived ? `PHP ${amountToReceive.toFixed(2)}` : 'Loading...'}
              </Text>
            </Text>
          </View>
          <Image
            source={require('./images/GCash.png')} 
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9F6',
    padding: 16,
  },
  title: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    color: '#000',
    fontWeight: 'bold',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
