import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const ApplicationEdit = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { authToken } = route.params;  // Get authToken passed from previous screen
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch the existing data from the server using the token
    const fetchData = async () => {
      try {
        const response = await axios.get('https://your-api-url/userinfo', {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        setUserData(response.data);  // Pre-fill the form with existing data
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch user data');
      }
    };

    fetchData();
  }, [authToken]);

  const handleEditSave = async () => {
    try {
      const response = await axios.put('https://your-api-url/userinfo', { ...userData, token: authToken }, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Data updated successfully');
        navigation.navigate('ReviewForm');
      } else {
        Alert.alert('Error', 'Failed to update data');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Your Information</Text>

      <TextInput
        style={styles.input}
        value={userData.firstname}
        onChangeText={(text) => setUserData({ ...userData, firstname: text })}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={userData.middlename}
        onChangeText={(text) => setUserData({ ...userData, middlename: text })}
        placeholder="Middle Name"
      />
      {/* Add similar inputs for other fields */}

      <TouchableOpacity style={styles.button} onPress={handleEditSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: { height: 40, borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 },
  button: { backgroundColor: '#FF7A00', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default ApplicationEdit;
