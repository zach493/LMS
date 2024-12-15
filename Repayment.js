import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Repayment = () => {
  const navigation = useNavigation();
  const borrowedAmount = 2000;
  const processingFeeRate = 0.0399;
  const serviceFeeRatePerDay = 0.0043;

  const minDays = 15;
  const maxDays = 61;

  const [selectedDay, setSelectedDay] = useState(minDays);

  const oneTimeProcessingFee = borrowedAmount * processingFeeRate;
  const serviceFee = borrowedAmount * serviceFeeRatePerDay * selectedDay;
  const totalPayment = borrowedAmount + oneTimeProcessingFee + serviceFee;

  const repaymentDate = new Date();
  repaymentDate.setDate(repaymentDate.getDate() + selectedDay);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose when to {'\n'}repay</Text>
      <Text style={styles.subtitle}>
        Select a date between 15 and 61 days from now when you're confident that you can repay.
      </Text>

      <Text style={styles.date}>{repaymentDate.toDateString()}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonGroup}>
        {Array.from({ length: maxDays - minDays + 1 }, (_, i) => minDays + i).map((day) => (
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
          <Text style={styles.value}>PHP {borrowedAmount.toLocaleString()}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>One-time processing fee (3.99%)</Text>
          <Text style={styles.value}>PHP {oneTimeProcessingFee.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Service fee (0.43% / day)</Text>
          <Text style={styles.value}>PHP {serviceFee.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, styles.totalLabel]}>Total Payment</Text>
          <Text style={[styles.value, styles.totalValue]}>
            PHP {totalPayment.toFixed(2)}
          </Text>
        </View>
      </View>
      <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('BorrowedSummary')}>
          <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF9F6",
    justifyContent: "center",
  },
  title: {
    marginLeft: 20,
    marginTop: 70,
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    marginBottom: 10,
  },
  subtitle: {
    marginLeft: 20,
    fontSize: 14,
    color: "#333",
    textAlign: "left",
    marginBottom: 30,
  },
  date: {
    marginTop: 50,
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: -170,
  },
  buttonGroup: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  dayButton: {
    backgroundColor: "#FF6F00",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#F5B301",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  selectedButtonText: {
    color: "#FFF",
  },
  paymentCard: {
    marginLeft: 30,
    width: 300,
    position: "relative",  
    top: -180,               
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  totalLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  totalValue: {
    fontSize: 16,
    color: "#E57300",
  },
  button: {
    marginLeft: 40,
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
