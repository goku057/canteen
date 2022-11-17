import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { ProductsList } from "../screens/ProductsList.js";
import { ProductDetails } from "../screens/ProductDetails.js";
import { Cart } from "../screens/Cart.js";
import { CartIcon } from "../components/CartIcon.js";
import HomeScreen from "../screens/HomeScreen.js";
import { Checkout } from "../screens/Checkout.js";
import OnlinePayment from "../screens/OnlinePayment.js";

export default function ClientNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "All Restaurants",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Products"
        component={ProductsList}
        options={({ navigation }) => ({
          title: "Products",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation }) => ({
          title: "Product details",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          title: "My cart",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={({ navigation }) => ({
          title: "Checkout",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="OnlinePayment"
        component={OnlinePayment}
        options={({ navigation }) => ({
          title: "Online Payment",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});
