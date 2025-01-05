import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Instruction = () => {
  const navigation = useNavigation();
  const [referenceNumber, setReferenceNumber] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(null);

  const generateReferenceNumber = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let result = "";
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `LMS${result}`; 
  };

  useEffect(() => {
    setReferenceNumber(generateReferenceNumber());

    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken'); 
        if (token) {
          console.log('Token retrieved:', token);
          axios.get('https://lmsdb-lmserver.up.railway.app/paymentinfo', {
            headers: { 
              'Authorization': `Bearer ${token}` 
            }
          })
          .then(response => {
            if (response.data.message === 'Nothing to pay') {
              setPaymentAmount('Nothing to pay');
            } else if (response.data.moneytopay) {
              setPaymentAmount(`PHP ${response.data.moneytopay}`);
            }
          })
          .catch(error => {
            console.error('Error fetching payment info:', error);
            setPaymentAmount('Error fetching payment info');
          });
        } else {
          console.log('Token not found');
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    getToken();
  }, []);

  const markPaymentAsPaid = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        const response = await axios.put('https://lmsdb-lmserver.up.railway.app/markpayment', {
          token: token, 
          paidorno: 'Paid' 
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          console.log('Payment marked as paid successfully');
          navigation.navigate('Panel');
        } else {
          console.error('Failed to mark payment as paid');
        }
      } else {
        console.log('Token not found');
      }
    } catch (error) {
      console.error('Error marking payment as paid:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Repay using GCash</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Payment Amount</Text>
        <Text style={styles.amount}>{paymentAmount || 'Loading...'}</Text>
        <Text style={styles.subtitle}>Includes PHP 20 ECPay convenience fee</Text>

        <Text style={styles.title}>Reference Number</Text>
        <Text style={styles.reference}>{referenceNumber}</Text>
      </View>

      <View style={styles.stepCard}>
        <Image source={require("./images/download.png")} style={styles.icon} />
        <Text style={styles.stepTitle}>1. Download and open the GCash app</Text>
        <Text style={styles.stepDescription}>
          Click Pay Bills, choose Loans, then look for Loan Management System.
        </Text>
      </View>

      <View style={styles.stepCard}>
        <Image source={require("./images/sign-up.png")} style={styles.icon} />
        <Text style={styles.stepTitle}>2. Enter and submit info</Text>
        <Text style={styles.stepDescription}>
          Enter the reference number and amount provided.
        </Text>
      </View>

      <View style={styles.stepCard}>
        <Image source={require("./images/email.png")} style={styles.icon} />
        <Text style={styles.stepTitle}>3. Receive confirmation</Text>
        <Text style={styles.stepDescription}>
          Receive payment confirmation instantly!
        </Text>
      </View>

      <TouchableOpacity style={styles.secondaryButton} onPress={markPaymentAsPaid}>
        <Text style={styles.buttonText}>Mark Payment as Sent</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
  },
  reference: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
  },
  secondaryButton: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#FF0000",
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  stepCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  stepTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  stepDescription: {
    fontSize: 14,
    color: "#666",
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
});

export default Instruction;
