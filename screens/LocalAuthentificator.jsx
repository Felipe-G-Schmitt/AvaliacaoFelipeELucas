import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import * as LocalAuthentication from "expo-local-authentication";

export default function LocalAuthenticator({ navigation }) {
  const [authType, setAuthType] = useState("Biometria");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const [numTentativas, setNumTentativas] = useState(0);


  const autenticar = async () => {
    if (numTentativas >= 3) {
      alert("Você excedeu o número máximo de tentativas. Por favor, tente novamente mais tarde.");
      return;
    }

    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: customMessage,
      });
  
      if (result.success) {
        alert("Autenticado com sucesso!");
      } else {
        alert("Não clique fora da área de biometria.");
        setNumTentativas(numTentativas + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const selectBiometria = () => {
    setAuthType("Biometria");
  };

  const selectRosto = () => {
    setAuthType("Rosto");
  };

  return (
    <View style={styles.container}>
      <Header title="Autenticação Local" />
      <TextInput
          value={customMessage}
          style={{ 
            width: "95%",
            marginTop: 10,
            marginLeft: 10,
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,}}
          placeholder={"Escreve ai"}
          onChangeText={(text) => setCustomMessage(text)}
        />
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.authOption,
          ]}
          onPress={selectRosto}
        >
          <Text style={{ color: "white" }}> Reconhecimento Facial </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.authOption,
          ]}
          onPress={selectBiometria}
        >
          <Text style={{ color: "white" }}> Impressão Digital </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#6750a4",
          borderWidth: 2,
          marginTop: 10,
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
    marginTop: 10,
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
    backgroundColor: "#4CAF50",
  },
});
