import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native";
import { Button } from "react-native-paper";

export default function App({ navigation }) {
  return (
  <View style={styles.container}>
    <Text style={{ textAlign: "center", fontSize: 30, marginBottom: 5}}>Seja bem vindo!</Text>
    <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 5}}>Equipe:</Text>

  <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 5 }}>
    <View style={{ alignItems: "center", marginRight: 20 }}>
      <Image source={require('../assets/img-felipe.jpg')} style={{ width: 150, height: 150, marginBottom: 5, borderRadius: 500, borderColor: "#6750a4", borderWidth: 3}} />
      <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 5 }}>Felipe Gabriel</Text>
    </View>

    <View style={{ alignItems: "center" }}>
      <Image source={require('../assets/img-lucas.jpg')} style={{ width: 150, height: 150, marginBottom: 5, borderRadius: 500, borderColor: "#6750a4", borderWidth: 3}} />
      <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 5 }}>Lucas Coelho</Text>
    </View>
  </View>

  <Button
    mode="contained"
    style={{
      color: "#fff",
      marginBottom: 5,
      marginTop: 5,
    }}
    onPress={() => {
      navigation.navigate("Localization");
    }}
  >
    🧭 Bussola 🧭
  </Button>
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
