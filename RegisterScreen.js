import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput placeholder="Mobile Number" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
       <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />

     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agreement')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Already have an account?
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}> Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
      width: 100,
      height: 80,
      marginBottom: 20,
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5B301',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f7f7f7',
  },
  button: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
  },
  registerText: {
    fontSize: 14,
    color: '#333',
    marginTop: 15,
  },
  loginLink: {
    color: '#F5B301',
    fontWeight: 'bold',
  },
});
