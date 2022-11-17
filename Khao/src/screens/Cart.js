import { Button } from "@rneui/themed";
import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { apiUrl } from "../../helper";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Moment from "moment";

export function Cart({ navigation }) {

  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    // console.log(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: false,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  //date time picker ends
  const { items, getItemsCount, getTotalPrice, clearCart, userID, shopID } =
    useContext(CartContext);
  const [msg, setMsg] = useState(false);

  
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>TK {total}</Text>
      </View>
    );
  }

  function addHoursToDate(date, hours) {
    return new Date(new Date(date).setHours(date.getHours() + hours));
  }

  function renderItem({ item }) {
    return (
      <View>
        <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>
            {item.product.product_name} x {item.qty}
          </Text>
          <Text style={styles.lineRight}>TK {item.totalPrice}</Text>
        </View>
      </View>
    );
  }

  const handlePlaceOrder = async ()=>{
    // console.log(userID);
    // console.log(shopID);
    // console.log(items);
    if(items.length == 0){
      console.log("cart is empty!!!");
      return;
    }

    let newDate = addHoursToDate(date, 6);

    let data = {
      userID,
      shopID,
      items,
      scheduledTime : newDate
    }
    // console.log(data);
    // console.log(date);
    let res;
    try {
      res = await axios.post(apiUrl + "/postOrder", {data});
    } catch (error) {
      console.log(error);
    }
    setMsg(true);
    clearCart(); 
  } 


  return (
    <View>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={Totals}
      />
      <Text></Text>
      <Button
        title="Go To Checkout"
        color="#ff8c52"
        onPress={ () => navigation.navigate("Checkout")}
      ></Button>
      
      <Button
        title="Clear Cart"
        color="red"
        onPress={ () => clearCart()}
      ></Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
