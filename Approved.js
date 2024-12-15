import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Approved = () => {
  const navigation = useNavigation();

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

      <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Refresh')}>
          <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
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
    color: '#F5B301',
  },
  infoContainer: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bullet: {
    lineHeight: 30,
    fontSize: 14,
    color: '#606060',
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  button: {
    marginBottom: -70,
    backgroundColor: '#FF7A00',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 320,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Approved;
