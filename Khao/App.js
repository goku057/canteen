import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./src/context/CartContext.js";
import TabNavigation from "./src/navigation/TabNavigation.js";
import AuthNavigation from "./src/navigation/AuthNavigation"
import {colors, parameters} from "./src/config/Styles"
import {StatusBar} from "react-native"

function App() {
  return (
    <CartProvider>
      <NavigationContainer> 
        <StatusBar barStyle={'dark-content'}
        backgroundColor = {colors.statusBarColor}
      ></StatusBar>
        <AuthNavigation />
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
