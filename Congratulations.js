import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';


const Congratulations = () => {
  const navigation = useNavigation(); 
  const [value, setValue] = useState(2000);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Congratulations</Text>
      <Text style={styles.subText}>
        Only take what you need, you can always draw more as long as you repay on time.
      </Text>

      <Text style={styles.currency}>PHP</Text>
      <Text style={styles.amount}>{value.toLocaleString()}</Text>

      <View style={styles.sliderContainer}>
        <Text style={styles.rangeText}>PHP 1,000</Text>
        <Slider
          style={styles.slider}
          minimumValue={1000}
          maximumValue={2000}
          step={100}
          value={value}
          onValueChange={(val) => setValue(val)}
          minimumTrackTintColor="#FF6F00"
          maximumTrackTintColor="#D3D3D3"
          thumbImage={require('./images/new-moon.png')}
        />
        <Text style={styles.rangeText}>PHP 2,000</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Approved')}>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#606060',
    marginBottom: 30,
  },
  currency: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  rangeText: {
    fontSize: 14,
    color: '#606060',
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF6F00',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Congratulations;
