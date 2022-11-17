import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {ScrollView} from "react-native"
import ShopOrder from "../../components/ShopOrder";
import { CartContext } from "../../context/CartContext";
import { apiUrl } from "../../../helper";
import axios from "axios";


export default function OrderList() {
  const { shopID } = useContext(CartContext);
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    // console.log(shopID);
    axios.get(apiUrl + "/shopOrderList/" + shopID)
    .then( res => {
      // console.log(res.data)
      setOrders(res.data.orders);
    })
    .catch( e => {
      console.log(e);
    })
  }, [refresh]);

  setTimeout( ()=> {
    setRefresh(!refresh);
    // console.log(refresh);
  }, 3000);
  return (
    <SafeAreaView>
        <ScrollView>
        { orders.map( o => <ShopOrder key={o.order_id} orderID = {o.order_id}/>)}
      </ScrollView>
    </SafeAreaView>
  );
}
