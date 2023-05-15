import { View, StyleSheet, Text, Button } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import * as Battery from 'expo-battery';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      gap: 10
  },
  content: {
      flex: 1,
      gap: 20,
      padding: 20,
      alignSelf: 'center',
  },
  contentTextStyle: {
      padding: 5,
      textAlignVertical: 'center',
      minHeight: 50,
      backgroundColor: '#969',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
  },
  content: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: 'center',
    marginTop: 230,
  }
});


export default function BatteryInfo() {
  const [ nivelBateria, setNivelBateria ] = useState()
  const [ statusBateria, setStatusBateria ] = useState()

  async function atualizarTudo() {
    bateria()
  }

  async function status() {
    const status = await Battery.getBatteryStateAsync()
    setStatusBateria(status)
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync()
    setNivelBateria(nivel * 100)
  }

  useEffect(() => {
    bateria()
    status()
  }, []);

  return (
    <View style={styles.container}>
        <Header title="Bateria"/>
          <View style={styles.content}>
            <Text style={{ textAlign: "center"}}> 
              { nivelBateria }%
            </Text>
            <Text style={{ textAlign: "center"}}> 
              { statusBateria }
            </Text>
            <Button title="Atualizar" onPress={atualizarTudo}/>
          </View>
        <Footer />
    </View>
  );
}