import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Pay = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose where to repay</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Instruction')}
      >
        <View style={styles.row}>
          <View>
            <Text style={styles.boldText}>Gcash (Instapay)</Text>
            <Text style={styles.label}>
              Processing Time: <Text style={styles.value}>Instant</Text>
            </Text>
            <Text style={styles.label}>
              Service fee: <Text style={styles.value}>PHP 15</Text>
            </Text>
            <Text style={styles.label}>
              You'll receive: <Text style={styles.value}>PHP 1,985</Text>
            </Text>
          </View>
          <Image
            source={require('./images/GCash.png')} 
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9F6',
    padding: 16,
  },
  title: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    color: '#000',
    fontWeight: 'bold',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
}); 

export default Pay;