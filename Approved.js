import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity 
} from 'react-native';

const Approved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.approvedText}>You're approved</Text>
      <Text style={styles.amount}>PHP 2,000</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>LMS credit line:</Text>
        <Text style={styles.bullet}>• Continues access. No need to reapply!</Text>
        <Text style={styles.bullet}>• Choose your repayment date</Text>
        <Text style={styles.bullet}>• Grow your LMS limit up to PHP 25,000</Text>
      </View>

      <Image 
        source={require('./images/celebration.png')} 
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={() => console.log('Continue pressed')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
  },
  approvedText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6F00',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Approved;
