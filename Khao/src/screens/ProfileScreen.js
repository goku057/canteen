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

export default function ProfileScreen({ navigation }) {
  const [shops, setShops] = useState([]);
  const { userInfo } = useContext(CartContext);

// console.log(apiUrl + userInfo.image_link);
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{ marginLeft: 10, fontSize: 37, marginBottom : 10 }}>Welcome,</Text>
        <Text style={{ marginLeft: 50, fontSize: 30 }}> {userInfo.first_name + " " + userInfo.last_name}</Text>
        <Image style={styles.image} source={{uri : apiUrl + userInfo.image_link}} />
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        
            <Button
              color="#ff8c52"
              title="Sign Out"
              onPress={() => navigation.navigate("SignIn")}
            />
          </View>
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
