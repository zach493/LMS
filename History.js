import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const History = () => {
  const [borrowHistory, setBorrowHistory] = useState([]);

  useEffect(() => {
    const fetchBorrowHistory = async () => {
      const authToken = await AsyncStorage.getItem("authToken");

      if (!authToken) {
        Alert.alert("Error", "You must be logged in to view your history.");
        return;
      }

      try {
        const response = await axios.get(
          "https://lmsdb-lmserver.up.railway.app/history",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status === 200) {
          setBorrowHistory(response.data);
        } else {
          Alert.alert("Error", "Unable to fetch borrowing history.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "An error occurred while fetching history.");
      }
    };

    fetchBorrowHistory();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Borrowing History</Text>

      {borrowHistory.length === 0 ? (
        <Text style={styles.noHistory}>No borrowing history available.</Text>
      ) : (
        borrowHistory.map((entry, index) => (
          <View key={index} style={styles.historyCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.date}>
                Deadline: {new Date(entry.deadline).toLocaleDateString()}
              </Text>
              <Text
                style={
                  entry.paidorno
                    ? styles.statusPaid
                    : styles.statusActive
                }
              >
                {entry.paidorno ? "Paid" : "Unpaid"}
              </Text>
            </View>
            <View style={styles.cardContent}>
              <Text>GCash Sent:</Text>
              <Text style={styles.amount}>PHP {entry.gcashsent}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text>GCash No:</Text>
              <Text style={styles.amount}>{entry.nogcash}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text>GCash Name:</Text>
              <Text style={styles.amount}>{entry.namegcash}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text>Money Received:</Text>
              <Text style={styles.amount}>PHP {entry.moneyrecieved}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text>Money to Pay:</Text>
              <Text style={styles.amount}>PHP {entry.moneytopay}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text>Status:</Text>
              <Text style={styles.totalAmount}>
                {entry.paidorno ? "Paid" : "Unpaid"}
              </Text>
            </View>
          </View>
        ))
      )}
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
  noHistory: {
    textAlign: "center",
    color: "#777",
    fontSize: 16,
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
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E57300",
  },
});

export default History;
