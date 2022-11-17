import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
} from "react-native";

import { getProduct } from "../services/ProductsService.js";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import {apiUrl} from "../../helper"

export function ProductDetails({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(apiUrl + "/single-product/" + productId)
    .then(res => {
      // console.log(res.data);
      setProduct(res.data.products[0])
    })
    .catch(e => {
      console.log(e);
    });
    // setProduct(getProduct(productId));
  }, []);

  function onAddToCart() {
    addItemToCart(product.product_id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={{uri : apiUrl + product.image_link}} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.product_name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button onPress={onAddToCart} title="Add to cart" color="#ff8c52" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
