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


export default function HomeScreen({ navigation }) {
  const [shops, setShops] = useState([]);
  const { setShop, clearCart } = useContext(CartContext);

  useEffect(  () => {
    
    let shops;
    axios.get(`${apiUrl}/shops`)
    .then(res => {
      setShops(res.data.products);
      // console.log(res.data.products);
      // console.log(shops);
    })
    .catch(e => {
      console.log(e);
    });
  }, []);

  const handlePress = (id) => {
    navigation.navigate("Products", {shopID : id});
    clearCart();
    setShop(id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{ marginLeft: 50, fontSize: 37 }}>Available Canteen</Text>
        {shops.map( (s) => {
          // console.log(s.first_name);
            return(
          <TouchableOpacity key={s.user_id}
            style={styles.touchableCard}
            onPress={ () => handlePress(s.user_id)}
          >
            <Image
              source={{
                uri: apiUrl + s.image_link,
              }}
              style={{ height: "80%", width: "100%" }}
            />
            <Text style={{ fontSize: 30, fontWeight: "500" }}>
              {s.first_name + " " + s.last_name}
            </Text>
            </TouchableOpacity>
            );
        })}
      </ScrollView>
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
});
