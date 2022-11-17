import { Button } from "@rneui/base";
import React, { useState, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import { apiUrl } from "../../../helper";
import { CartContext } from "../../context/CartContext";


export default function SignIn({ navigation }) {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [er, setEr] = useState(false);
  const { setUser, setShop, setUserInfo } = useContext(CartContext);

  const handleSignIn = (e) => {
    // console.log(userName);
    // console.log(userPass);
    axios.post(`${apiUrl}/login`, {
      userID: userName,
      userPass: userPass
    })
    .then(function (response) {
      // console.log(response.data);
      if(response.data.msg == "failed"){
        setEr(true);
      }
      else if(response.data.userInfo.user_type == "student"){
        setUser(response.data.userInfo.user_id);
        setUserInfo(response.data.userInfo);
        navigation.navigate("TabNavigation")
      }
      else if(response.data.userInfo.user_type == "vendor"){
        setShop(response.data.userInfo.user_id);
        setUserInfo(response.data.userInfo);
        navigation.navigate("ShopNavigation");
      }
      setUserName("");
      setUserPass("");
    })
    .catch(function (error) {
      console.log(error);
    });
    // navigation.navigate("TabNavigation")
    
  }
  return (
    <SafeAreaView>
      <View style={StyleSheet.container}>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 20 }}>Sign in with your account</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <TextInput
              placeholder="Enter Student ID"
              style={styles.textInput1}
              value = {userName}
              onChangeText = { e => setUserName(e)}
            />
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              placeholder="Enter password"
              style={styles.textInput2}
              onChangeText = { e => setUserPass(e)}
              value = {userPass}
            />
          </View>
          <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <Button
              color="#ff8c52"
              title="Sign in"
              onPress={handleSignIn}
            />
          </View>
          {er && 
            <View>
            <Text>Invalid username or password</Text>
            </View>
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput1: {
    height: 57,
    borderWidth: 1,
    borderColor: "#ff8c52",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  textInput2: {
    height: 57,
    borderWidth: 1,
    borderColor: "#ff8c52",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
});
