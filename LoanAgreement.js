import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoanAgreement = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Management System Agreement</Text>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          This User Agreement (the “Agreement”) is an end-user license agreement between you (“user”, “you”, “your”)
          and Loan Management System, a corporation organized and registered under the laws of the Republic of the
          Philippines, with SEC Registration No. CS201710582, TIN 009-614-758, and Certificate of Authority No.: 1132
          (hereinafter referred to as “LMS,” “we,” or “us”).
        </Text>
        <Text style={styles.paragraph}>
          The Agreement governs all your use of the Loan Management System application, services, software, and
          support (collectively, the “LMS App” or “App”) that we offer.
        </Text>

        <Text style={styles.sectionTitle}>1. TERMS OF USE</Text>
        <Text style={styles.paragraph}>
          By using the Loan Management System App, you agree to the following terms:
          {'\n'}• You will only use the App for lawful purposes.
          {'\n'}• You agree to provide accurate and updated information when registering for an account.
          {'\n'}• You are responsible for keeping your login credentials confidential.
        </Text>

        <Text style={styles.sectionTitle}>2. DATA PRIVACY</Text>
        <Text style={styles.paragraph}>
          We value your privacy and will process your data following applicable laws and regulations. Your personal
          information will only be used to provide and improve the services of the LMS App.
        </Text>

        <Text style={styles.sectionTitle}>3. PROHIBITED USE</Text>
        <Text style={styles.paragraph}>
          You must not:
          {'\n'}• Use the App for illegal purposes.
          {'\n'}• Modify, reverse-engineer, or duplicate the software.
          {'\n'}• Violate any intellectual property rights associated with the App.
        </Text>

        <Text style={styles.sectionTitle}>4. TERMINATION</Text>
        <Text style={styles.paragraph}>
          We reserve the right to terminate or suspend your access to the App if you violate this Agreement.
        </Text>

        <Text style={styles.sectionTitle}>5. LIABILITY LIMITATION</Text>
        <Text style={styles.paragraph}>
          We will not be liable for indirect, incidental, or consequential damages arising from your use of the LMS App.
        </Text>
      </ScrollView>

      <Text style={styles.footerText}>
        By tapping “Agree” below, I understand and agree to the 
        Loan Management System App User Agreement and the 
        Loan Management System Wallet Terms and Conditions.
      </Text>

      <TouchableOpacity
        style={styles.buttonText}
        onPress={() => navigation.navigate('Repayment')}
      >
        <Text style={styles.buttonAgree}>Agree</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonText1}
        onPress={() => navigation.navigate('Panel')}
      >
        <Text style={styles.buttonCancel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 15,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  scrollView: {
    flex: 9,
    marginBottom: -30,
  },
  scrollContent: {
    paddingBottom: -10,
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  footerText: {
    marginLeft: -30,
    backgroundColor: '#F5F1E7',
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    width: 390,
  },
  buttonText: {
    backgroundColor: '#FF6600',
    padding: 10,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText1: {
    backgroundColor: '#C2C1BF',
    padding: 10,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonAgree: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  buttonCancel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoanAgreement;
