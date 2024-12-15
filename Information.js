import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Information = () => {
  const navigation = useNavigation();
  const [civilStatus, setCivilStatus] = useState('');
  const [gender, setGender] = useState('Male');
  const radioProps = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Legal First Name (as seen on your ID)</Text>
      <TextInput style={styles.input} placeholder="Enter your first name" />

      <Text style={styles.label}>Legal Middle Name (as seen on your ID)</Text>
      <TextInput style={styles.input} placeholder="Enter 'NA' if not applicable" />

      <Text style={styles.label}>Legal Last Name (as seen on your ID)</Text>
      <TextInput style={styles.input} placeholder="Enter your last name" />

      <Text style={styles.label}>Date of Birth (mm/dd/yyyy)</Text>
      <View style={styles.dobContainer}>
        <TextInput style={[styles.input, styles.dobInput]} placeholder="mm" />
        <TextInput style={[styles.input, styles.dobInput]} placeholder="dd" />
        <TextInput style={[styles.input, styles.dobInput]} placeholder="yyyy" />
      </View>

      <Text style={styles.label}>Place of Birth</Text>
      <Picker
        selectedValue={civilStatus}
        style={styles.picker}
        onValueChange={(itemValue) => setCivilStatus(itemValue)}
      >
        <Picker.Item label="Select province" value="" />
        <Picker.Item label="Province 1" value="Province 1" />
        <Picker.Item label="Province 2" value="Province 2" />
      </Picker>

      <Text style={styles.label}>Civil Status</Text>
      <Picker
        selectedValue={civilStatus}
        style={styles.picker}
        onValueChange={(itemValue) => setCivilStatus(itemValue)}
      >
        <Picker.Item label="Select Answer..." value="" />
        <Picker.Item label="Single" value="Single" />
        <Picker.Item label="Married" value="Married" />
        <Picker.Item label="Divorced" value="Divorced" />
        <Picker.Item label="Widowed" value="Widowed" />
      </Picker>

      <Text style={styles.label}>Mother's Maiden Name</Text>
      <TextInput style={styles.input} placeholder="Enter mother's maiden name" />

      <Text style={styles.label}>Gender</Text>
      <RadioForm
        radio_props={radioProps}
        initial={0}
        formHorizontal={true}
        labelHorizontal={true}
        buttonColor={'#ff6600'}
        selectedButtonColor={'#ff6600'}
        onPress={(value) => setGender(value)}
        style={styles.radioForm}
      />

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save and Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dobInput: {
    flex: 1,
    marginRight: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  radioForm: {
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#ff6600',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Information;
