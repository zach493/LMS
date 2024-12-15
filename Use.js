import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Use = () => {
  const navigation = useNavigation();
  const [selectedUse, setSelectedUse] = useState(null); 
  const [selectedYN, setSelectedYN] = useState(null); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./images/left-arrow.png')} style={styles.backArrow} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.label}>What would you like to use your cash for?</Text>
        <View style={styles.radioGroup1}>
          <TouchableOpacity
            style={styles.radioOption1}
            onPress={() => setSelectedUse('Business Expense')}
          >
            <Image
              source={
                selectedUse === 'Business Expense'
                  ? require('./images/new-moon.png')
                  : require('./images/dry-clean.png')
              }
              style={styles.radioIcon1}
            />
            <Text style={styles.radioText1}>Business Expense</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioOption1}
            onPress={() => setSelectedUse('Personal Expense')}
          >
            <Image
              source={
                selectedUse === 'Personal Expense'
                  ? require('./images/new-moon.png')
                  : require('./images/dry-clean.png')
              }
              style={styles.radioIcon1}
            />
            <Text style={styles.radioText1}>Personal Expense</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioOption1}
            onPress={() => setSelectedUse('Pay Bill')}
          >
            <Image
              source={
                selectedUse === 'Pay Bill'
                  ? require('./images/new-moon.png')
                  : require('./images/dry-clean.png')
              }
              style={styles.radioIcon1}
            />
            <Text style={styles.radioText1}>Pay Bill</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>How much money in total did you earn from this job in the last 30 days in PHP?</Text>
        <TextInput style={styles.input} placeholder="Enter digit here" />

        <Text style={styles.label}>What is your primary source of funds?</Text>
        <TextInput style={styles.input} placeholder="Souce of funds" />

        <Text style={styles.label}>Do you have outstanding loans?</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setSelectedYN('Yes')}
          >
            <Image
              source={
                selectedYN === 'Yes'
                  ? require('./images/new-moon.png')
                  : require('./images/dry-clean.png')
              }
              style={styles.radioIcon}
            />
            <Text style={styles.radioText}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setSelectedYN('No')}
          >
            <Image
              source={
                selectedYN === 'No'
                  ? require('./images/new-moon.png')
                  : require('./images/dry-clean.png')
              }
              style={styles.radioIcon}
            />
            <Text style={styles.radioText}>No</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>How much in total did you spend on basic needs, rent, utility, bills, and loans in the last 30 days in PHP?</Text>
        <TextInput style={styles.input} placeholder="Enter digit here" />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ReviewUse')}
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
  radioGroup1: {
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    marginBottom: 20, 
  },
  
  radioOption1: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15, 
  },
  radioIcon1: {
    width: 20,
    height: 20,
    marginBottom: 5,
    marginTop: 7,
    marginLeft: 20,
  },
  radioText1: {
    marginLeft: 15,
    fontSize: 14,
    color: '#333',
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
    marginTop: 90,
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

export default Use;
