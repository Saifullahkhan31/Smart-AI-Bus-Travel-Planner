import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import OnboardingScreen1 from '../screens/auth/OnboardingScreen1';
import OnboardingScreen2 from '../screens/auth/OnboardingScreen2';
import OnboardingScreen3 from '../screens/auth/OnboardingScreen3';

// Placeholder screens for now
const LoginScreen = () => null;
const RegisterScreen = () => null;

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#EEF2F7' },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          animationTypeForReplace: 'pop',
        }}
      />

      <Stack.Group
        screenOptions={{
          animationTypeForReplace: 'pop',
          // animationEnabled: true,
        }}
      >
        <Stack.Screen
          name="OnboardingStack"
        >
          {() => (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="Onboarding1"
                component={OnboardingScreen1}
              />
              <Stack.Screen
                name="Onboarding2"
                component={OnboardingScreen2}
              />
              <Stack.Screen
                name="Onboarding3"
                component={OnboardingScreen3}
              />
            </Stack.Navigator>
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
