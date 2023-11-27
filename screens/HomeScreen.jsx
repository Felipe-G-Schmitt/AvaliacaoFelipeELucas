import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

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
