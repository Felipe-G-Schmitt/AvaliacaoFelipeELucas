import { Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Notification from "expo-notifications";
import * as Battery from "expo-battery";
import * as Device from "expo-device";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import { TextInput } from "react-native-paper";

export default function UserNotify({ navigation }) {
    const [TituloNot, setTituloNot] = useState("");
    const [SubtituloNot, setSubtituloNot] = useState("");
    const [CorpoNot, setCorpoNot] = useState("");
    const [TempoNot, setTempoNot] = useState("");
    const [expoToken, setExpoToken] = useState("");

    async function notificar(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: TituloNot,
                subtitle: SubtituloNot,
                body: CorpoNot,
            },
            trigger: { seconds: parseInt(TempoNot) },
        })
        setExpoToken(token);
    }

  return (
    <View style={styles.container}>
      <Header title="Notificações do usuário" />

      <View>
        <Text  style={{ textAlign: "center", marginTop: 10}}>Expo Token: { expoToken }</Text>
        <View style={{ marginRight: 25, marginLeft: 25, marginTop: 50}}>
        <View style={{ marginTop: 10}}></View>
        <TextInput
            label="Título"
            value={TituloNot}
            style={{ backgroundColor: "#white", color: "black",}}
            onChangeText={text => setTituloNot(text)}
        />
        <View style={{ marginTop: 10}}></View>
        <TextInput
            label="Subtítulo"
            value={SubtituloNot}
            style={{ backgroundColor: "#white", color: "black",}}
            onChangeText={text => setSubtituloNot(text)}
        />
        <View style={{ marginTop: 10}}></View>
        <TextInput
            label="Corpo"
            value={CorpoNot}
            style={{ backgroundColor: "#white", color: "black",}}
            onChangeText={text => setCorpoNot(text)}
        />
        <TextInput
            label="Tempo"
            value={TempoNot}
            style={{ backgroundColor: "#white", color: "black",}}
            onChangeText={text => setTempoNot(text)}
        />
        <View style={{ marginTop: 10}}></View>
        <Button
            title="Notificar"
            onPress={async () => notificar()}
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
