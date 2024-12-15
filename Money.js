import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Money = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/money.png')} 
        style={styles.icon}
      />
      <Text style={styles.title}>Your LMS limit is PHP 2, 000.00</Text>
      <Text style={styles.description}>
        You will always have access to at least your current limit.*
      </Text>
      <Text style={styles.description}>
        Continue repaying on time to help your limits grow up to PHP 25,000.00.
      </Text>
      <Text style={styles.terms}>*Terms and Conditions apply</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Okay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
    padding: 20,
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginVertical: 5,
    lineHeight: 22,
  },
  terms: {
    marginLeft: -180,
    fontSize: 12,
    color: '#999',
    textAlign: 'left',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FF6600',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 20,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',

  },
});

export default Money;
