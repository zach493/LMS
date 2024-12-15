import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Congratulations = () => {
  const navigation = useNavigation();  
  const [value, setValue] = useState('2000');
  const [warning, setWarning] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false); 

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true) 
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false) 
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleValueChange = (text) => {
    const numericValue = parseInt(text);
    if (numericValue > 2000) {
      setWarning('The value cannot exceed PHP 2,000.');
    } else {
      setWarning('');
    }

    setValue(text);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.header}>Congratulations</Text>
            <Text style={styles.subText}>
              Only take what you need, you can always draw more as long as you repay on time.
            </Text>
          </View>

          <View style={styles.amountContainer}>
            <Text style={styles.currency}>PHP</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={handleValueChange}
            />
          </View>

          {warning ? (
            <Text 
              style={[
                styles.warningText, 
                { marginTop: keyboardVisible ? -120 : -190 } 
              ]}
            >
              {warning}
            </Text>
          ) : null}

          <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Approved')}>
              <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  textContainer: {
    marginTop: 100,
    marginBottom: -20, 
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    textAlign: 'left',
    color: '#606060',
    lineHeight: 20,
    marginBottom: 20,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  currency: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#606060',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    fontSize: 24,
    paddingHorizontal: 10,
    height: 40,
    width: 200,
    textAlign: 'center',
  },
  warningText: {
    marginLeft: 30,
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    marginBottom: 20,
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

export default Congratulations;
