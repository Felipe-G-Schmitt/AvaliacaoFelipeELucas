import { StyleSheet, Text, View } from "react-native";
import * as ScreenCapture from 'expo-screen-capture';
import { Button } from "react-native";
import { useEffect } from "react";
import * as MediaLibrary from 'expo-media-library';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function ScreenCap( navigation ) {

    useEffect(() => {
        if (permissao()){
            const listener = ScreenCapture.addScreenshotListener(() => {
                alert("Você fez uma captura de tela!")
            }
    )}
    }, [])

    const permissao = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync()
        return status === 'granted'
    }

    useEffect(() => {
        
    })


    const desativar = async () => {
        await ScreenCapture.preventScreenCaptureAsync()
    }

    const ativar = async () => {
        await ScreenCapture.allowScreenCaptureAsync()
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextStyle}>Captura de tela</Text>
        <Button onPress={ativar} title="Ativar"/>
        <Button onPress={desativar} title="desativar"/>
      </View>

    </View>
  );
}