import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Application = () => {
  const navigation = useNavigation();
  const [selectedSex, setSelectedSex] = useState(null);
  const [isChecked, setIsChecked] = useState(false); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./images/left-arrow.png')} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Please tell us where you live</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Province / City</Text>
        <TextInput style={styles.input} placeholder="Enter Province" />

        <Text style={styles.label}>Barangay</Text>
        <TextInput style={styles.input} placeholder="Barangay" />

        <Text style={styles.label}>Permanent street address (House # / Building / Street)</Text>
        <TextInput style={styles.input} placeholder="Permanent street address (House # / Building / Street)" />

        <Text style={styles.label}>Postal Code (Permanent Address)</Text>
        <TextInput style={styles.input} placeholder="Postal Code (Permanent Address)" />

        <View style={styles.confirmationContainer}>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
            <Image 
              source={isChecked ? require('./images/black-square.png') : require('./images/square.png')}
              style={styles.checkbox}
            />
          </TouchableOpacity>
          <Text style={styles.confirmationText}>
            I confirm that the answer I selected above is true and understand that answering dishonestly will disqualify me from Loan Management System.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ReviewForm')}
        >
          <Text style={styles.buttonText}>Save and continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FAF9F6',
    elevation: 4,
  },
  backArrow: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContainer: {
    padding: 20,
  },
  label: {
    fontSize: 15,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 0,
    paddingHorizontal: 10,
    backgroundColor: '#FAF9F6',
    marginBottom: 15,
  },
  confirmationContainer: {
    marginTop: 220,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginTop: -15,
    width: 20,
    height: 20,
    marginRight: 10,
  },
  confirmationText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FF7A00',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
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

export default Application;
