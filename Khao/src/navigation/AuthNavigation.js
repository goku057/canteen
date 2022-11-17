import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../screens/authscreens/SignIn";
import WelcomeScreen from "../screens/WelcomeScreen";
import ClientNavigation from "./ClientNavigation";
import ShopNavigation from "./ShopNavigation";
import TabNavigation from "./TabNavigation";

export default function AuthNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShopNavigation"
        component={ShopNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
