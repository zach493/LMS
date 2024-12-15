import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Agreement from './Agreement';
import Panel from './Panel';
import Personal from './Personal';
import Application from './Application';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Agreement" component={Agreement} />
        <Stack.Screen name="Panel" component={Panel} />
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="Application" component={Application} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
