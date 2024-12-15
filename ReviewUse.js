import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ScrollView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ReviewUse = () => {
    const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go Back')}>
          <Image 
            source={require('./images/left-arrow.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review your answer</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.label}>What would you like to use your cash for?</Text>
        <Text style={styles.placeholder}>TBA</Text>
        <Text style={styles.label}>How much money in total did you earn from this job in the last 30 days in PHP?</Text>
        <Text style={styles.placeholder}>TBA</Text>
        <Text style={styles.label}>What is your primary source of funds?</Text>
        <Text style={styles.placeholder}>TBA</Text>
        <Text style={styles.label}>Do you have outstanding loans?</Text>
        <Text style={styles.placeholder}>TBA</Text>
        <Text style={styles.label}>How much in total did you spend on basic needs, rent, utility, bills, and loans in the last 30 days in PHP?</Text>
        <Text style={styles.placeholder}>TBA</Text>
      </ScrollView>

      <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate('Congratulations')}>
      <Text style={styles.buttonText}>Review and continue</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FAF9F6',
    elevation: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  placeholder: {
    marginTop: -10,
    marginLeft: 10,
    fontWeight: 'normal',
    color: '#333',
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
    marginLeft: 20,
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

export default ReviewUse;
