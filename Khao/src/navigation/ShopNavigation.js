import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { ProductsList } from "../screens/ProductsList.js";
import { ProductDetails } from "../screens/ProductDetails.js";
import { Cart } from "../screens/Cart.js";
import { CartIcon } from "../components/CartIcon.js";
import HomeScreen from "../screens/HomeScreen.js";
import OrderList from "../screens/shopscreens/OrderList"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import ProfileScreen from "../screens/ProfileScreen.js";

export default function ShopNavigation() {
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
        name="OrderList"
        component={OrderList}
        
        options={{
          tabBarIcon: ({}) => <Icon name="home" type="material" />,
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

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});