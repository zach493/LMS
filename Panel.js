import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Panel = () => {
  const navigation = useNavigation();


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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LMS</Text>

      <View style={styles.topSection}>
        <Image source={require('./images/Loan_Logo_hand.png')} style={styles.topIcon} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>Borrow your way</Text>
            <Text style={styles.cardDescription}>
              Apply once and get continuous {'\n'}access to cash.
            </Text>
          </View>
          <Image source={require('./images/job-seeker.png')} style={styles.card1} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Personal')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

      {/* 
      <View style={styles.row}>
          <View>
              <Text style={styles.boldText}>To pay on January 26, 2025</Text>
            <Text style={styles.label}>
              Total Service Fee: <Text style={styles.value}>26.2% (PHP 393.00)</Text>
            </Text>
            <Text style={styles.label}>
              Repayment Date: <Text style={styles.value}>January 26, 2025</Text>
            </Text>
          </View>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Repayment')}
        >
          <Text style={styles.buttonText}>Make a Payment</Text>
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
          <Image source={require('./images/history.png')} style={styles.card3} />
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
          <Image source={require('./images/invest.png')} style={styles.card2} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Money')}>
        <Text style={styles.linkText}>View my LMS limit</Text>
      </TouchableOpacity>
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 20,
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5B301',
    marginBottom: 20,
    marginTop: 25,
  },
  topSection: {
    marginTop: -10,
    backgroundColor: '#F5B301',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
  card1: {
    width: 70,
    height: 70,
    marginRight: 10,
    top: 30,
    alignSelf: 'center',
  },
  card2: {
    width: 70,
    height: 70,
    marginRight: 10,
    top: 10,
    alignSelf: 'center',
  },
  card3: {
    width: 70,
    height: 70,
    marginRight: 10,
    top: 10,
    alignSelf: 'center',
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
  button1: {
    marginTop: 20,
    backgroundColor: '#FF6600',
    width: 140,
    height: 35,
    borderRadius: 25,
    alignItems: 'center',
    top: 60,
    left: -270,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  button: {
    backgroundColor: '#FF6600',
    height: 35,
    width: 120, 
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 7,
  },
  logoutButtonText: {
    color: '#FF6600',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: -365,
    marginLeft: 300,
  },
  linkText: {
    color: '#FF6600',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 40,
    marginTop: -10,
  },
});

export default Panel;
