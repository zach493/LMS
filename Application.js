import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Application = () => {
  const navigation = useNavigation();
  const [selectedSex, setSelectedSex] = useState(null); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./images/left-arrow.png')} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Please tell us about yourself</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Legal First Name</Text>
        <TextInput style={styles.input} placeholder="First Name" />

        <Text style={styles.label}>Legal Middle Name</Text>
        <TextInput style={styles.input} placeholder="Middle Name: 'N/A' if not applicable" />

        <Text style={styles.label}>Legal Last Name</Text>
        <TextInput style={styles.input} placeholder="Last Name" />

        <Text style={styles.label}>Date of Birth mm/dd/yyyy</Text>
        <TextInput style={styles.input} placeholder="mm / dd / yyyy" />

        <Text style={styles.label}>Place of Birth</Text>
        <TextInput style={styles.input} placeholder="Enter here" />

        <Text style={styles.label}>Civil Status</Text>
        <TextInput style={styles.input} placeholder="Select answer..." />

        <Text style={styles.label}>Mother's Maiden Name</Text>
        <TextInput style={styles.input} placeholder="Mother's Maiden Name" />

        <Text style={styles.label}>Sex</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setSelectedSex('Male')}
          >
            <Image
              source={
                selectedSex === 'Male'
                  ? require('./images/new-moon.png')
                  : require('./images/dry-clean.png')
              }
              style={styles.radioIcon}
            />
            <Text style={styles.radioText}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setSelectedSex('Female')}
          >
            <Image
              source={
                selectedSex === 'Female'
                  ? require('./images/new-moon.png')
                  : require('./images/dry-clean.png')
              }
              style={styles.radioIcon}
            />
            <Text style={styles.radioText}>Female</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} placeholder="example@email.com" />

        <Text style={styles.label}>Alternative Phone Number (optional)</Text>
        <TextInput style={styles.input} placeholder="Please provide an alternative phone number" />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CF')}
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
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  radioOption: {
    alignItems: 'center',
  },
  radioIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  radioText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
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
