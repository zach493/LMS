import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Panel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LMS</Text>

      <View style={styles.topSection}>
        <Image source={require('./images/Loan_Logo_hand.png')} style={styles.topIcon} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>Borrow your way</Text>
            <Text style={styles.cardDescription}>
              Apply once and get continuous {'\n'}access to cash.
            </Text>
          </View>
          <Image source={require('./images/job-seeker.png')} style={styles.card1} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Personal')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>Want to know about us?</Text>
          </View>
          <Image source={require('./images/about-us.png')} style={styles.card2} />
        </View>
        <TouchableOpacity>
          <Text style={styles.linkText}>View here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5B301',
    marginBottom: 20,
    marginTop: 15,
  },
  topSection: {
    marginTop: -10,
    backgroundColor: '#ffcc00',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  topIcon: {
    width: 90,
    height: 60,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  card1: {
    width: 70,
    height: 70,
    marginRight: 10,
    top: 30,
    alignSelf: 'center',
  },
  card2: {
    width: 70,
    height: 70,
    marginRight: 10,
    top: 10,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#FF6600',
    width: 140,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 7,
  },
  linkText: {
    color: '#FF6600',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 40,
    marginTop: -10,
  },
});

export default Panel;
