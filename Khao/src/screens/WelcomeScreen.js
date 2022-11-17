import { Button } from "@rneui/base";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 20,
          marginBottom : 50
        }}
      >
        
        
      
        <Image
        source={
          require("../../assets/ucanteen3.png")
        }
        style={{ height: "100%", width: "100%"}}
      />
      
     
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={StyleSheet.slide1}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: "https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
        </Swiper>
      </View>
      <View
        style={{ flex: 4, justifyContent: "flex-end", marginHorizontal: 20 }}
      >
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Button
            color="#ff8c52"
            title="Sign In"
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  headings: {
    fontWeight: "bold",
  },
});
export default WelcomeScreen;
