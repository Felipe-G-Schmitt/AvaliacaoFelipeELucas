import{ StyleSheet, Text, View, Button} from 'react-native';
import Header from '../components/Header';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useState } from 'react';

export default function MyScreenOrientation({ navigation }) {
const [BackgroundColor, setBackgroundColor] = useState("");

async function padrao() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT,
        setBackgroundColor("red")
        );
}

async function direita() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
        setBackgroundColor("green")
        );
}

async function esquerda() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT,
        setBackgroundColor("green")
        );
}

async function padraoForcado() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT,
        setBackgroundColor("red")
        );
}

async function inverterForcado() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_DOWN,
        setBackgroundColor("white")
        );
}

async function padraoForcado2() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT,
        setBackgroundColor("red")
        );
}

return (
<View style={{ height: "100%", backgroundColor: BackgroundColor,}}>
    <Header title="Orientação da tela"/>
    <View  style={{justifyContent:"center", alignContent: "center", }}>
    <View style={{ marginBottom: 30}}/>
    <View style={{ marginLeft: 10, marginRight: 10}}>
        <Button title="Normal" onPress={padrao}></Button>
    </View> 
    <View style={{ marginTop: 20}}/>
    <View style={{ marginLeft: 10, marginRight: 10}}>
        <Button title="direita" onPress={direita}></Button>
    </View>
    <View style={{ marginTop: 20}}/>
        <View style={{ marginLeft: 10, marginRight: 10}}>
        <Button title="esquerda" onPress={esquerda}></Button>
        <View style={{ marginTop: 20}}/>
    </View>
    <View style={{ marginLeft: 10, marginRight: 10}}>
        <Button title="padraoForcado" onPress={padraoForcado}></Button>
        <View style={{ marginTop: 20}}/>
    </View>
    <View style={{ marginLeft: 10, marginRight: 10}}>
        <Button title="inverterForcado" onPress={inverterForcado}></Button>
    <View style={{ marginTop: 20}}/>
    </View>
    <View style={{ marginLeft: 10, marginRight: 10}}>
        <Button title="padraoForcado2" onPress={padraoForcado2}></Button>
    </View>
    </View>
</View>
);
}

export const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    backgroundColor: "#FFFFFF",
},
});