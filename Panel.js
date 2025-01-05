import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Panel = () => {
  const navigation = useNavigation();
  const [borrowingHistory, setBorrowingHistory] = useState(null);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      Alert.alert('Success', 'You have been logged out successfully.');
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  const fetchBorrowingHistory = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const response = await fetch(`https://lmsdb-lmserver.up.railway.app/historypanel`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch borrowing history');
      }

      const data = await response.json();
      setBorrowingHistory(data);
    } catch (error) {


    }
  };

  useEffect(() => {
    fetchBorrowingHistory();
  }, []);


  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
      <Text style={styles.header}>LMS</Text>



      {borrowingHistory ? (
        borrowingHistory.map((item, index) => (
          <View key={index} style={styles.row}>
            <View>
              <Text style={styles.boldText}>To pay on {item.deadline}</Text>
              <Text style={styles.label}>
                Total Service Fee: <Text style={styles.value}>{item.moneytopay} (PHP {item.moneyrecieved})</Text>
              </Text>
              <Text style={styles.label}>
                Repayment Date: <Text style={styles.value}>{item.deadline}</Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.buttonLarge}
              onPress={() => navigation.navigate('Pay')}
            >
              <Text style={styles.buttonText}>Make a Payment</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>No borrowing history found.</Text>
      )}


      
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>Borrow your way</Text>
            <Text style={styles.cardDescription}>
              Apply once and get continuous {'\n'}access to cash.
            </Text>
          </View>
          <Image source={require('./images/job-seeker.png')} style={styles.cardImage} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Personal')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>View borrowing history</Text>
            <Text style={styles.cardDescription}>
              Track progress and get growth tips
            </Text>
          </View>
          <Image source={require('./images/history.png')} style={styles.cardImage} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Text style={styles.linkText}>Get started</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>Borrow anytime after you repay</Text>
          </View>
          <Image source={require('./images/invest.png')} style={styles.cardImage} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Money')}>
          <Text style={styles.linkText}>View my LMS limit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5B301',
    marginBottom: 30,
    marginTop: 25,
  },
  topIcon: {
    width: 80,
    height: 70,
  },
  card: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardImage: {
    width: 70,
    height: 70,
    top: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#FF6600',
    height: 35,
    width: 120,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonLarge: {
    marginTop: 20,
    backgroundColor: '#FF6600',
    height: 35,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    elevation: 5,
     marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    alignSelf: 'flex-end',
    marginTop: 30,
    marginBottom: -55,

  },
  logoutButtonText: {
    color: '#FF6600',
    fontWeight: 'bold',
    fontSize: 16,

  },
  linkText: {
    color: '#FF6600',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  value: {
    fontWeight: 'bold',
    color: '#FF6600',
  },
});

export default Panel;
