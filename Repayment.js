import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Repayment = () => {
  const navigation = useNavigation();
  const [moneyReceived, setMoneyReceived] = useState(null); // Money received from API
  const [totalPayment, setTotalPayment] = useState(0); // To store the total payment calculation result
  const [selectedDay, setSelectedDay] = useState(15); // Default selected day

  useEffect(() => {
    const fetchMoneyReceived = async () => {
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
          const moneyReceived = response.data.moneyrecieved || 0;
          setMoneyReceived(parseFloat(moneyReceived)); // Ensure it's a number
        } else {
          Alert.alert('Error', 'Failed to retrieve the amount');
        }
      } catch (error) {
        console.error('Error fetching money:', error);
        Alert.alert('Error', 'Something went wrong while fetching data');
      }
    };

    fetchMoneyReceived();
  }, []);

  useEffect(() => {
    if (moneyReceived !== null && !isNaN(moneyReceived)) {
      const borrowedAmount = moneyReceived;

      // Ensure the selectedDay is valid and within the reasonable range (15 to 61)
      if (selectedDay < 15 || selectedDay > 61) {
        console.error('Invalid selectedDay:', selectedDay);
        return;
      }

      // Calculate processing fee (3.99% of borrowed amount)
      const processingFee = borrowedAmount * 0.0399;
      console.log('Processing Fee:', processingFee);

      // Calculate service fee (0.43% of borrowed amount per day, times the selected day)
      const serviceFee = borrowedAmount * 0.0043 * selectedDay;
      console.log('Service Fee:', serviceFee);

      // Total payment calculation
      const calculatedTotalPayment = borrowedAmount + processingFee + serviceFee;
      console.log('Calculated Total Payment:', calculatedTotalPayment);

      setTotalPayment(calculatedTotalPayment);
    } else {
      console.log('Money Received is null or invalid');
    }
  }, [moneyReceived, selectedDay]);

  // Ensure totalPayment is a number and is valid before calling .toFixed()
  const totalPaymentFormatted = isNaN(totalPayment) ? '0.00' : totalPayment.toFixed(2);

  const handleContinue = async () => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      if (!authToken) {
        Alert.alert('Error', 'You must be logged in to proceed');
        return;
      }

      const response = await axios.post(
        'https://lmsdb-lmserver.up.railway.app/updatemoneytopay',
        {
          token: authToken,
          moneyToPay: totalPayment,
        }
      );

      if (response.status === 200) {
        Alert.alert('Success', 'Total payment updated successfully');
        console.log('Selected Day',selectedDay)
        navigation.navigate('BorrowedSummary', {selectedDay});

      } else {
        Alert.alert('Error', 'Failed to update total payment');
      }
    } catch (error) {
      console.error('Error updating total payment:', error);
      Alert.alert('Error', 'Something went wrong while updating the payment');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose when to {'\n'}repay</Text>
      <Text style={styles.subtitle}>
        Select a date between 15 and 61 days from now when you're confident that you can repay.
      </Text>

      <Text style={styles.date}>{totalPaymentFormatted}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonGroup}>
        {Array.from({ length: 61 - 15 + 1 }, (_, i) => 15 + i).map((day) => (
          <TouchableOpacity
            key={day}
            style={[styles.dayButton, selectedDay === day && styles.selectedButton]}
            onPress={() => setSelectedDay(day)}
          >
            <Text style={[styles.buttonText, selectedDay === day && styles.selectedButtonText]}>{day} Days</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.paymentCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Borrowed Amount</Text>
          <Text style={styles.value}>PHP {moneyReceived !== null ? moneyReceived.toLocaleString() : 'Loading...'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>One-time processing fee (3.99%)</Text>
          <Text style={styles.value}>PHP {(moneyReceived * 0.0399).toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Service fee (0.43% / day)</Text>
          <Text style={styles.value}>PHP {(moneyReceived * 0.0043 * selectedDay).toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, styles.totalLabel]}>Total Payment</Text>
          <Text style={[styles.value, styles.totalValue]}>PHP {totalPaymentFormatted}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9F6',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 20,
    marginTop: 70,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    marginLeft: 20,
    fontSize: 14,
    color: '#333',
    textAlign: 'left',
    marginBottom: 30,
  },
  date: {
    marginTop: 50,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: -170,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  dayButton: {
    backgroundColor: '#FF6F00',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#F5B301',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: '#FFF',
  },
  paymentCard: {
    marginLeft: 55,
    width: 300,
    position: 'relative',
    top: -180,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalValue: {
    fontSize: 16,
    color: '#E57300',
  },
  button: {
    marginLeft: 65,
    top: -74,
    backgroundColor: '#FF7A00',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 280,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Repayment;
