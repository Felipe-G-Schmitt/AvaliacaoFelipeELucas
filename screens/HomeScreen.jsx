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
import LocalAuthentificator from "./LocalAuthentificator";
import Localization from "./Localization";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 5}}>Seja bem vindo!</Text>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 5,
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
            marginBottom: 5,
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
            marginBottom: 5,
          }}
          onPress={() => {
            navigation.navigate("MyScreenOrientation");
          }}
        >
          Orientação de tela
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 5,
          }}
          onPress={() => {
            navigation.navigate("Notify");
          }}
        >
          Notificação
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 5,
          }}
          onPress={() => {
            navigation.navigate("ContactsInfo");
          }}
        >
          Contatos
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 5,
          }}
          onPress={() => {
            navigation.navigate("UserNotify");
          }}
        >
          Usuário
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 5,
          }}
          onPress={() => {
            navigation.navigate("CriativPage");
          }}
        >
          Criative Page
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 5,
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
            marginBottom: 5,
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
            marginBottom: 5,
          }}
          onPress={() => {
            navigation.navigate("LocalAuthentificator");
          }}
        >
          LocalAuthentificator
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
            marginBottom: 5,
          }}
          onPress={() => {
            navigation.navigate("Localization");
          }}
        >
          Localization
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
