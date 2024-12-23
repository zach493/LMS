import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthContext';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Agreement from './Agreement';
import Panel from './Panel';
import Personal from './Personal';
import Application from './Application';
import CF from './CF';
import ReviewForm from './ReviewForm';
import CA from './CA';
import Use from './Use';
import ReviewUse from './ReviewUse';
import Congratulations from './Congratulations';
import Approved from './Approved';
import Refresh from './Refresh';
import LoanAgreement from './LoanAgreement';
import Repayment from './Repayment';
import BorrowedSummary from './BorrowedSummary';
import Choose from './Choose';
import History from './History';
import Gcash from './Gcash';
import Money from './Money';
import Instruction from './Instruction';
import Pay from './Pay';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Agreement" component={Agreement} />
        <Stack.Screen name="Panel" component={Panel} />
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="Application" component={Application} />
        <Stack.Screen name="CF" component={CF} />
        <Stack.Screen name="ReviewForm" component={ReviewForm} />
        <Stack.Screen name="CA" component={CA} />
        <Stack.Screen name="Use" component={Use} />
        <Stack.Screen name="ReviewUse" component={ReviewUse} />
        <Stack.Screen name="Congratulations" component={Congratulations} />
        <Stack.Screen name="Approved" component={Approved} />
        <Stack.Screen name="Refresh" component={Refresh} />
        <Stack.Screen name="LoanAgreement" component={LoanAgreement} />
        <Stack.Screen name="Repayment" component={Repayment} />
        <Stack.Screen name="BorrowedSummary" component={BorrowedSummary} />
        <Stack.Screen name="Choose" component={Choose} />
        <Stack.Screen name="Gcash" component={Gcash} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Money" component={Money} />
        <Stack.Screen name="Pay" component={Pay} />
        <Stack.Screen name="Instruction" component={Instruction} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}
