// Agreement.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';
const Agreement = () => {
  const navigation = useNavigation();
  const { authToken, logout } = useAuth(); 
  useEffect(() => {
    if (!authToken) {
      Alert.alert('Not Logged In', 'Please log in to proceed');
      navigation.navigate('Login'); 
    }
  }, [authToken, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Allow us to know {'\n'}you better so we {'\n'}can process your {'\n'}application
      </Text>
      <Text style={styles.subtitle}>
        Loan Management System prioritizes your data privacy and rest assured
        that the information you share is confidential.
      </Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Image source={require('./images/outgoing-call.png')} style={styles.icon} />
            <Text style={styles.infoText}>
              <Text style={styles.infoTitle}>Call Data{'\n'}</Text>
              Used to securely link your account to your device and prevent fraud.
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Image source={require('./images/communication.png')} style={styles.icon} />
            <Text style={styles.infoText}>
              <Text style={styles.infoTitle}>SMS Data{'\n'}</Text>
              Used to assess financial activity and determine eligibility for our services.
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Image source={require('./images/contact.png')} style={styles.icon} />
            <Text style={styles.infoText}>
              <Text style={styles.infoTitle}>Contacts{'\n'}</Text>
              Used to prevent fraud and determine eligibility for our services. Loan Management System will never contact friends and family.
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Image source={require('./images/placeholder.png')} style={styles.icon} />
            <Text style={styles.infoText}>
              <Text style={styles.infoTitle}>Location{'\n'}</Text>
              Used to verify your address for compliance and provide personalized loan offers.
            </Text>
          </View>
        </View>
      </ScrollView>

      <Text style={styles.footerText}>
        By tapping "Start My Application" you consent to sharing this information and accept the terms of our Privacy Policy.
      </Text>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Panel')}
      >
        <Text style={styles.buttonText}>Start My Application</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.denyButton}
        onPress={() => {
          logout(); 
          navigation.navigate('Panel'); 
        }}
      >
        <Text style={styles.denyText}>Deny</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF9F6',
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginBottom: 20,
    lineHeight: 22,
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 85,
  },
  infoItem: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  icon: {
    marginTop: 10,
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 10,
  },
  infoText: {
    marginTop: -5,
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  footerText: {
    backgroundColor: '#F5F1E7',
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: '#FF6600',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  denyButton: {
    alignItems: 'center',
  },
  denyText: {
    color: '#FF6600',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Agreement;
