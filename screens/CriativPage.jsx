import { Button, StyleSheet, Text, View } from "react-native";
import * as Notification from "expo-notifications";
import * as Battery from "expo-battery";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";

export default function CriativPage({ navigation }) {
    const [nivelBateria, setNivelBateria] = useState();
    const [statusBateria, setStatusBateria] = useState();
    const [expoToken, setExpoToken] = useState("");

    async function status() {
        const status = await Battery.getBatteryStateAsync();
        setStatusBateria(status);
      }
    
      async function bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
      }

    async function notificarBateria () {
    if (nivelBateria > 50) {
        async function NivelBom(){
            const token = await Notification.scheduleNotificationAsync({
                content: {
                    title: "Você esta com ".nivelBateria+"% de bateria",
                    subtitle: "Você pode continuar utilizando seu celular normalmente",
                    body: "😀👍",
                },
                trigger: { seconds: 3 },
            })
            setExpoToken(token);
        }
        NivelBom();
      } else if (nivelBateria >= 30 && nivelBateria < 50) {
        async function NivelMedio(){
            const token = await Notification.scheduleNotificationAsync({
                content: {
                    title: "Você esta com ".nivelBateria+"% de bateria",
                    subtitle: "Você pode utilizar o seu celular com moderação",
                    body: "🙂✌️",
                },
                trigger: { seconds: 3 },
            })
            setExpoToken(token);
        }
        NivelMedio();
      } else if (nivelBateria >= 1 && nivelBateria < 30) {
        async function NivelRuim(){
            const token = await Notification.scheduleNotificationAsync({
                content: {
                    title: "Você esta com ".nivelBateria+"% de bateria",
                    subtitle: "Você deve carregar o seu celular o mais rápido possível",
                    body: "😮👋",
                },
                trigger: { seconds: 3 },
            })
            setExpoToken(token);
        }
        NivelRuim();
      }
    }

    useEffect(() => {
        bateria();
        status();
      }, []);

  return (
    <View style={styles.container}>
      <Header title="Notificações do usuário" />

      <View>
        <Text  style={{ textAlign: "center", marginTop: 10}}>Expo Token: { expoToken }</Text>
        <View style={{ marginRight: 25, marginLeft: 25, marginTop: 50}}>
        <View style={{ marginTop: 10}}></View>
        <Button 
            title="Notificação Bateria"
            style={{ marginBottom: 15}}
            onPress={async () => notificarBateria()}
        />
      </View>
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
