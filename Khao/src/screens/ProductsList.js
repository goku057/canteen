import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';
import axios from "axios";
import { apiUrl } from '../../helper.js';

export function ProductsList ({navigation, route}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        // console.log(product);
        navigation.navigate('ProductDetails', {
          productId: product.product_id,
        });
      }}
      />
    );
  }
  
  const [products, setProducts] = useState([]);
  const[searchedProducts, setSearchedProducts] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const {shopID } = route.params;
    axios.get(`${apiUrl}/products/${shopID}`)
    .then( res => {
      // console.log(res.data);
      setProducts(res.data.products);
      // setSearchedProducts(res.data.products);
    })
    .catch( e => {
      console.log(e);
    })
    
  });
  
  const handleSearch = (e) =>{
    setSearchString(e);
    
    const re = new RegExp(e, "gi");
    setSearchedProducts(products.filter((p) => p.product_name.match(re)));
  }

  return (
    <View>
    <TextInput 
      style = {styles.textInput1}
      placeholder='Search Food'
      onChangeText={ e => handleSearch(e)}
      value = {searchString}
    />

    { searchString && <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.product_id.toString()}
      data={searchedProducts}
      renderItem={renderProduct}
    />}

      { !searchString && <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.product_id.toString()}
        data={products}
        renderItem={renderProduct}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  textInput1: {
    height: 57,
    borderWidth: 1,
    borderColor: "#ff8c52",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
  }
});
