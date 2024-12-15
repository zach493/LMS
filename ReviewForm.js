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


const ReviewForm = () => {
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
        <Text style={styles.label}>First Name: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Middle Name: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Last Name: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Date of Birth: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Place of Birth: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Civil Status: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Mother's Maiden Name: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Sex: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Email Address: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Alternative Phone Number: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Province / City: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Barangay: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Permanent Address: <Text style={styles.placeholder}>TBA</Text></Text>
        <Text style={styles.label}>Postal Code: <Text style={styles.placeholder}>TBA</Text></Text>
      </ScrollView>

      <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate('CA')}>
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
    fontWeight: 'normal',
    color: '#333',
    fontSize: 14,
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

export default ReviewForm;
