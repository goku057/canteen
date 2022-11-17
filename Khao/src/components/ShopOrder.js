import React, { useEffect, useState } from "react";
import { Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import axios from "axios";
import { apiUrl } from "../../helper";
import Moment from 'moment';

export default function ShopOrder({orderID}) {
  const[order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  const [c, setC] = useState(true);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios.get(apiUrl + "/orderList/" + orderID)
    .then( res => {
      setOrder(res.data.orders)
      setStatus(res.data.orders[0].order_status);
      setDate(res.data.orders[0].scheduled_time);

      if(status != "pending"){
        setShow(false);
      }
      if(status == "pending"){
        setShow(true);
      }
      if(c){
        let totalPrice = 0
        res.data.orders.map( o => {
          // console.log(o.price);
          totalPrice += o.price;
        });
        setTotal(totalPrice);
        setC(false);
      }
    })
    .catch(e => {
      console.log(e);
    })
  }, []);


  const handleAccept = () =>{
    setStatus("Accepted");
    axios.post(apiUrl + "/manageOrder", {
      status : "Accepted",
      orderID
    })
  }

  const handleReject = () =>{
    setStatus("Cancelled");
    axios.post(apiUrl + "/manageOrder", {
      status : "Cancelled",
      orderID
    })
  }
  return (
    <View style={styles.container}>
    <View>
    <Text>Order#</Text>
    <Text>{orderID}</Text>
    <Text>Scheduled At:</Text>
    <Text>{Moment(date).format('DD MMM')}</Text>
    <Text>{Moment(date).format('hh:mm A')}</Text>
  </View>
  <View>
    <Text>Description</Text>
    {order.map( o => <Text key={o.id}>{o.product_name} x {o.qty}</Text>)}
    <Text>Total </Text>
  </View>
  <View>
    <Text>Price</Text>
    {order.map( o => <Text key={o.id}>{o.price}</Text>)}
    <Text>{total}</Text>
  </View>
  <View>
    <Text>Status</Text>
    <Text >{status}</Text>
  </View>
      {<Icon
        type="material-community"
        name="check-circle-outline"
        size={32}
        color="green"
        onPress={handleAccept}
      />}
      {<Icon
        type="material-community"
        name="delete-forever-outline"
        size={35}
        color="red"
        onPress={handleReject}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 5,
    borderColor: "#ff8c52",
    borderWidth: 2,
    margin: 10,
    // height: 100,
    paddingVertical: 15,
  },
});

