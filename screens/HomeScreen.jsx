import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DeviceInfo from "./DeviceInfo";
import BatteryInfo from "./BatteryInfo";
import ContactsInfo from "./ContactsInfo";
import CriativPage from "./CriativPage";
import MyScreenOrientation from "./MyScreenOrientation";
import Notify from "./Notify";
import ScreenCapture from "./ScreenCapture";
import Sensors from "./Sensors";
import UserNotify from "./UserNotify";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ textAlign: "center"}}>Seja bem vindo!</Text>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("DeviceInfo");
          }}
        >
          Device
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("BatteryInfo");
          }}
        >
          Battery
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("ContactsInfo");
          }}
        >
          Contacts
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("CriativPage");
          }}
        >
          CriativPage
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("MyScreenOrientation");
          }}
        >
          MyScreenOrientation
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("Notify");
          }}
        >
          Notify
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("ScreenCapture");
          }}
        >
          ScreenCapture
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("Sensors");
          }}
        >
          Sensors
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("UserNotify");
          }}
        >
          UserNotify
        </Button>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
  },
});
