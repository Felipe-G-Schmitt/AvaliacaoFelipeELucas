import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { Gyroscope, Magnetometer} from "expo-sensors";
import { useState } from "react";
import { useEffect } from "react";

export default function Sensors({ navigation }) {
  const [ giroscopio, setGiroscopio ] = useState({});
  const [ magnetometro, setMagnetometro ] = useState({});

  useEffect(() => {
    Gyroscope.addListener(giroscopioLister);
    Magnetometer.addListener(magnetometroLister);
  }, [])

  const giroscopioLister = (data) => {
    setGiroscopio(data);
  }

  const magnetometroLister = (data) => {
    setMagnetometro(data);
  }

  return (
    <View style={styles.container}>
      <Header title="Sensores" />
        <View style={{margin: 5, padding: 10, marginTop: 25,}}>
          <Text>
            Giroscópio: {'\n'}
            x: { giroscopio.x } {'\n'}
            y: { giroscopio.y } {'\n'}
            z: { giroscopio.z } {'\n'}
          </Text>
          <Text>
            Magnetômetro: {'\n'}
            x: { magnetometro.x } {'\n'}
            y: { magnetometro.y } {'\n'}
            z: { magnetometro.z } {'\n'}
          </Text>

        </View>
        
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
});
