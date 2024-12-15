import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Svg, { Path, Circle, Line } from "react-native-svg";

const History = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Borrowing History</Text>
      <View style={styles.currentLoanCard}>
        <Text style={styles.currentLoanText}>Current loan PHP 1,500</Text>

        <Svg height="120" width="100%" style={styles.graphContainer}>
          <Path
            d="M20 100 C 80 60, 160 40, 300 20"
            stroke="#00A9A5"
            strokeWidth="2"
            fill="none"
          />
          <Circle cx="20" cy="100" r="8" fill="#fff" stroke="#00A9A5" strokeWidth="2" />
          <Text x="10" y="90" fill="#333" fontSize="12">PHP 1,000</Text>

          <Circle cx="300" cy="20" r="8" fill="#fff" stroke="#00A9A5" strokeWidth="2" />
          <Text x="290" y="10" fill="#333" fontSize="12">PHP 1,500</Text>
        </Svg>

        <Text style={styles.graphFooter}>2 loans with LMS since Nov, 2024.</Text>
      </View>

      <View style={styles.historyCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.date}>Disbursed 27 Nov 24</Text>
          <Text style={styles.statusActive}>Active</Text>
        </View>
        <View style={styles.cardContent}>
          <Text>Original Loan Amount</Text>
          <Text style={styles.amount}>PHP 1,500</Text>
        </View>
        <View style={styles.cardContent}>
          <Text>Amount Repaid</Text>
          <Text style={styles.amount}>PHP 0</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.totalLabel}>Total Due</Text>
          <Text style={styles.totalAmount}>PHP 1,681</Text>
        </View>
      </View>

      <View style={styles.historyCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.date}>Disbursed 21 Nov 24</Text>
          <Text style={styles.statusPaid}>Paid on time</Text>
        </View>
        <View style={styles.cardContent}>
          <Text>Original Loan Amount</Text>
          <Text style={styles.amount}>PHP 1,000</Text>
        </View>
        <View style={styles.cardContent}>
          <Text>Amount Repaid</Text>
          <Text style={styles.amount}>PHP 1,085</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.totalLabel}>Total Due</Text>
          <Text style={styles.totalAmount}>PHP 0</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF9F6",
    padding: 20,
  },
  header: {
    marginTop: 25,
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
    marginBottom: 20,
  },
  currentLoanCard: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  currentLoanText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  graphContainer: {
    marginVertical: 20,
  },
  graphFooter: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
  },
  historyCard: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  statusActive: {
    color: "#00A9A5",
    fontSize: 14,
    fontWeight: "bold",
  },
  statusPaid: {
    color: "#28A745",
    fontSize: 14,
    fontWeight: "bold",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  amount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E57300",
  },
});

export default History;
