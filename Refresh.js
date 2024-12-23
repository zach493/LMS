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

    <Image 
            source={require('./images/time-management.png')} 
            style={styles.image}
          />

      <Text style={styles.amount}>We are getting to know you 
      better!</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>We are still reviewing your application. If your application is approved, you can now proceed to get your loan. Thank you for your patience!</Text>
        
      </View>


      <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('LoanAgreement')}>
          <Text style={styles.buttonText}>Refresh</Text>
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
  
  amount: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#F5B301',
  },

  infoText: {
    alignText: 'left',
    fontSize: 14,
    fontWeight: 'light',
    marginBottom: 180,
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  button: {
    marginLeft: 80,
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
    width: 200,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Approved;
