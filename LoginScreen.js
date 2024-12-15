import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation(); // Get the navigation prop

  return (
    <View style={styles.container}>
      <Image source={require('./images/Loan_Logo_hand.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Image source={require('./images/dialpad.png')} style={styles.icon} />
        <TextInput
          placeholder="Mobile Number"
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('./images/profile.png')} style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>
        Don't have an account yet?
        <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}> Register</Text>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#f7f7f7',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
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
  registerLink: {
    color: '#F5B301',
    fontWeight: 'bold',
  },
});
