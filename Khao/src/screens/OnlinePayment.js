import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { apiUrl } from "../../helper";
import { Button } from "@rneui/base";

export default function OnlinePayment({ navigation }) {
  const [shops, setShops] = useState([]);
  const { userInfo } = useContext(CartContext);

// console.log(apiUrl + userInfo.image_link);
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{ marginLeft: 10, fontSize: 37, marginBottom : 10 }}>This feature is Coming Soon!!!</Text>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchableCard: {
    height: 300,
    marginBottom: 20,
  },
  image: {
    height: 300,
    width: "100%",
  }
});
