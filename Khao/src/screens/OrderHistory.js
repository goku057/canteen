import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {ScrollView} from "react-native"
import Order from "../components/Order";
import axios from "axios";
import { apiUrl } from "../../helper";
import { CartContext } from "../context/CartContext";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const { userID } = useContext(CartContext);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    // console.log("rendered " + userID);
    axios.get(apiUrl + "/userOrderList/" + userID)
    .then((res) => {
      // console.log(res.data);
      setOrders(res.data.orders);
    })
    .catch(e => {
      console.log(e);
    })
  }, [refresh]); 

  setTimeout( ()=> {
    setRefresh(!refresh);
    // console.log(refresh);
  }, 3000);
  return (
    <SafeAreaView>
      <ScrollView>{orders.map( o => <Order key={o.order_id} orderID={o.order_id}></Order>)}</ScrollView>
    </SafeAreaView>
  );
}
