import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Application = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./images/left-arrow.png')} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Please tell us where you live</Text>
      </View>

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
        <Text>Male</Text>
        <Text>Female</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F4F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    marginBottom: 15,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FF7A00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Application;
