import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Instruction = () => {
  const navigation = useNavigation();
  const [referenceNumber, setReferenceNumber] = useState("");

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
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Repay using GCash</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Payment Amount</Text>
        <Text style={styles.amount}>PHP 1,701.00</Text>
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

      <TouchableOpacity style={styles.secondaryButton}>
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
  stepCard: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stepDescription: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    backgroundColor: "#FF6F00",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  secondaryButton: {
    backgroundColor: "#FFA726",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Instruction;