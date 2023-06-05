import { Button, StyleSheet, Text, View } from "react-native";
import * as Notification from "expo-notifications";
import * as Battery from "expo-battery";
import * as Device from "expo-device";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";

export default function Notify({ navigation }) {
    const [expoToken, setExpoToken] = useState("");

    const [nivelBateria, setNivelBateria] = useState();
    const [statusBateria, setStatusBateria] = useState();

    async function atualizarTudo() {
        bateria();
    }

    async function status() {
        const status = await Battery.getBatteryStateAsync();
        setStatusBateria(status);
    }

    async function bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
    }

    useEffect(() => {
        bateria();
        status();
    }, []);

    async function notificarBateria(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Nivel da bateria",
                subtitle: "fazueli",
                body: nivelBateria+"%",
            },
            trigger: { seconds: 3 },
        })
        setExpoToken(token);
    }

    async function notificarAparelho(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Aparelho",
                subtitle: "fazueli",
                body: "O seu aparelho "+Device.modelName+" é incrivel",
            },
            trigger: { seconds: 3 },
        })
        setExpoToken(token);
    }

  return (
    <View style={styles.container}>
      <Header title="Notificações" />

      <View>
        <Text  style={{ textAlign: "center", marginTop: 10}}>Expo Token: { expoToken }</Text>
        <View style={{ marginRight: 25, marginLeft: 25, marginTop: 50}}>
        <Button 
            title="Notificação bateria"
            style={{ marginBottom: 15}}
            onPress={async () => notificarBateria()}
        />
        <Button 
            title="Notificação aparelho"
            style={{ marginBottom: 15}}
            onPress={async () => notificarAparelho()}
        />
        <Button title="ler notificações não lidas"/>
      </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#EACBF8",
  },
});
