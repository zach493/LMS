import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const Personal = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Your Application</Text>
        <Text style={styles.subtitle}>Welcome, let’s get started on your{'\n'}
        application!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Use')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5B301',
    justifyContent: 'center',
    alignItems: 'left',
    padding: 20,
  },
  content: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginLeft: 20,
  },
  buttonText: {
    color: '#fcb900',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Personal;
