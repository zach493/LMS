import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BorrowedSummary() {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('./images/left-arrow.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Borrowed Summary</Text>
      </View>

      <ScrollView>
        <Text style={styles.infoText}>*A copy will be in your Borrowing History tab.</Text>

        <View style={styles.summaryBox}>
          <View style={styles.row}>
            <Text style={styles.label}>Repayment date</Text>
            <Text style={styles.value}>12/16/2024</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Borrowed Amount</Text>
            <Text style={styles.value}>PHP 2,000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>One-time Processing Fee</Text>
            <Text style={styles.value}>PHP 79</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Service Fee</Text>
            <Text style={styles.value}>PHP 524</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total Payment</Text>
            <Text style={styles.value}>PHP 2,603</Text>
          </View>
        </View>

        <View>
          <Text style={styles.sectionTitle}>One-time Processing Fee</Text>
          <Text style={styles.sectionText}>
            A one-time 3.99% processing fee is applied to your borrowed amount when you receive your money.
          </Text>

          <Text style={styles.sectionTitle}>Service Fee</Text>
          <Text style={styles.sectionText}>
            A daily rate of PHP 0.43% is applied to your borrowed amount until a full payment is made or until the maximum 61-day term.
          </Text>

          <Text style={styles.sectionTitle}>Monthly Interest Rate</Text>
          <Text style={styles.sectionText}>
            The combination of Processing Fee and Service Fee will equal a 14.86% Effective Interest Rate (EIR) per month on the 61-day term.
          </Text>

          <Text style={styles.sectionTitle}>Conditional Charges that May Apply</Text>
          <Text style={styles.sectionText}>
            - Late fee: 5.00% of the outstanding amount if unpaid by day 61.{'\n'}
            - Cash out/Cash in fee: See link.
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={toggleCheckbox}>
            <Image
              source={
                isChecked
                  ? require('./images/black-square.png') 
                  : require('./images/square.png')
              }
              style={styles.checkbox}
            />
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            I agree to the Terms and Conditions and to repay as per the billing due date schedule.
          </Text>
        </View>
        <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isChecked ? '#FF7A00' : '#dcdcdc' },
        ]}
        disabled={!isChecked}
        onPress={() => navigation.navigate('Choose')} 
      >
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9F6',
    padding: 20,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginTop: -30,
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 7,
  },
  summaryBox: {
    backgroundColor: '#F5F1E7',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#444',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
  sectionText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    flex: 1,
    color: '#444',
  },
  button: {
    marginBottom: 20,
    marginLeft: 9,
    backgroundColor: '#FF7A00',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 300,
    },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
