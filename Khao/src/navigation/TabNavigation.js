import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClientNavigation from "./ClientNavigation";
import OrderHistory from "./../screens/OrderHistory";
import { Icon } from "@rneui/themed";
import ProfileScreen from "../screens/ProfileScreen";
export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ff8c52",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ClientNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => <Icon name="home" type="material" />,
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderHistory}
        options={{
          tabBarIcon: ({}) => <Icon name="history" type="material" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        
        options={{
          tabBarIcon: ({}) => <Icon name="person" type="material" />,
        }}
      />
    </Tab.Navigator>
  );
}
