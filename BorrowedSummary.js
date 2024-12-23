import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BorrowedSummary() {
  const route = useRoute();
  const { selectedDay } = route.params || {}; // Ensure we use selectedDay from route params
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [repaymentDate, setRepaymentDate] = useState('');
  const [borrowedAmount, setBorrowedAmount] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0); 

  const toggleCheckbox = () => setIsChecked(!isChecked);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');

        if (!authToken) {
          Alert.alert('Error', 'You must be logged in to view this information');
          return;
        }

        const response = await axios.get(
          'https://lmsdb-lmserver.up.railway.app/borrowmoneyinfo',
          { params: { token: authToken } }
        );

        if (response.status === 200) {
          const moneyReceived = parseFloat(response.data.moneyrecieved) || 0;
          setBorrowedAmount(moneyReceived);

          // Calculate processing and service fees using selectedDay from route params
          const processing = moneyReceived * 0.0399;
          const service = moneyReceived * 0.0043 * (selectedDay ? parseInt(selectedDay) : 15); // Use selectedDay passed via route params
          const total = moneyReceived + processing + service;

          setProcessingFee(processing);
          setServiceFee(service);

          // Ensure totalPayment is a valid number
          if (!isNaN(total)) {
            setTotalPayment(total);
          } else {
            setTotalPayment(0);
          }

          // Calculate repayment date based on selectedDay
          const today = new Date();
          today.setDate(today.getDate() + (selectedDay ? parseInt(selectedDay) : 15)); // Use selectedDay passed via route params
          setRepaymentDate(today.toLocaleDateString());
        } else {
          Alert.alert('Error', 'Failed to retrieve the borrowed information');
        }
      } catch (error) {
        console.error('Error fetching borrowed data:', error);
        Alert.alert('Error', 'Something went wrong while fetching data');
      }
    };

    fetchData();
  }, [selectedDay]); // Re-run the effect if selectedDay changes

  const totalPaymentFormatted = totalPayment && !isNaN(totalPayment) ? totalPayment.toFixed(2) : '0.00';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./images/left-arrow.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Borrowed Summary</Text>
      </View>

      <ScrollView>
        <Text style={styles.infoText}>*A copy will be in your Borrowing History tab.</Text>

        <View style={styles.summaryBox}>
          <View style={styles.row}>
            <Text style={styles.label}>Repayment date</Text>
            <Text style={styles.value}>{repaymentDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Borrowed Amount</Text>
            <Text style={styles.value}>PHP {borrowedAmount.toLocaleString()}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>One-time Processing Fee</Text>
            <Text style={styles.value}>PHP {processingFee.toFixed(2)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Service Fee</Text>
            <Text style={styles.value}>PHP {serviceFee.toFixed(2)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total Payment</Text>
            <Text style={styles.value}>PHP {totalPaymentFormatted}</Text>
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

          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={toggleCheckbox}>
            <Image
              source={isChecked ? require('./images/black-square.png') : require('./images/square.png')}
              style={styles.checkbox}
            />
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            I agree to the Terms and Conditions and to repay as per the billing due date schedule.
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: isChecked ? '#FF7A00' : '#dcdcdc' }]}
          disabled={!isChecked}
          onPress={async () => {
            const authToken = await AsyncStorage.getItem('authToken');
            if (!authToken) {
              Alert.alert('Error', 'You must be logged in to proceed');
              return;
            }

            // Call the backend to update the money to pay
            try {
              await axios.post('https://lmsdb-lmserver.up.railway.app/updatemoneytopay', {
                token: authToken,
                moneyToPay: totalPayment,
              });
              Alert.alert('Success', 'Payment information updated');
              navigation.navigate('Choose');
            } catch (error) {
              console.error('Error updating payment information:', error);
              Alert.alert('Error', 'Failed to update payment information');
            }
          }}
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
    marginLeft: 35,
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
