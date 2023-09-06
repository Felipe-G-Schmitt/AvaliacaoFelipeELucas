import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import * as LocalAuthentication from "expo-local-authentication";

export default function LocalAuthenticator({ navigation }) {
  const [authMethod, setAuthMethod] = useState(null);

  const autenticar = async () => {
    try {
      const disponivel = await LocalAuthentication.hasHardwareAsync();
      console.log(disponivel);
      if (!disponivel) {
        alert("Autenticação não disponível");
        return;
      }

      const authType = authMethod === "face" ? LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION : LocalAuthentication.AuthenticationType.FINGERPRINT;

      const { success, error } = await LocalAuthentication.authenticateAsync({
        authenticationType: authType,
      });

      if (success) {
        alert("Autenticado com sucesso!");
      } else {
        console.log(error);
        alert("Autenticação falhou!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Autenticação Local" />
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.authOption,
            authMethod === "face" ? styles.selectedOption : null,
          ]}
          onPress={() => setAuthMethod("face")}
        >
          <Text style={{ color: "white" }}> Reconhecimento Facial </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.authOption,
            authMethod === "fingerprint" ? styles.selectedOption : null,
          ]}
          onPress={() => setAuthMethod("fingerprint")}
        >
          <Text style={{ color: "white" }}> Impressão Digital </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#6750a4",
          borderWidth: 2,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={autenticar}
      >
        <Text style={{ color: "white" }}> Autenticar </Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  authOption: {
    backgroundColor: "#6750a4",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "45%",
  },
  selectedOption: {
    backgroundColor: "#4CAF50", // Cor diferente para indicar seleção
  },
});
