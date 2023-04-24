import { Text, View } from "react-native";
import * as Device from 'expo-device';
import { Button } from "react-native";

export default function DeviceInfo() {
    return (
        <View>
            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginBottom: 10, borderRadius: 10, }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 25,}}>Informações do Aparelho</Text>
            </View>

            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginTop: 5, marginBottom: 5, borderRadius: 5,}}>
                <Text>O nome do seu aparelho é:
                    {Device.modelName}
                </Text>
            </View>
            
            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginTop: 5, marginBottom: 5, borderRadius: 5,}}>
            <Text>A marca do aparelho é:
                {Device.brand}
            </Text>
            </View>

            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginTop: 5, marginBottom: 5, borderRadius: 5,}}>
            <Text>O modelo do aparelho é:
                {Device.modelName}
            </Text>
            </View>

            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginTop: 5, marginBottom: 5, borderRadius: 5,}}>
            <Text>O nome completo do aparelho é:
                {Device.deviceName}
            </Text>
            </View>

            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginTop: 5, marginBottom: 5, borderRadius: 5,}}>
            <Text>O Design do aparelho é:
                {Device.designName}
            </Text>
            </View>

            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginTop: 5, marginBottom: 5, borderRadius: 5,}}>
            <Text>O Ano do lançamento é:
                {Device.deviceYearClass}
            </Text>
            </View>

            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginTop: 5, marginBottom: 5, borderRadius: 5,}}>
            <Text>A memória do aparelho é:
                {Device.totalMemory}
            </Text>
            </View>

            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginTop: 5, marginBottom: 5, borderRadius: 5,}}>
            <Text>
                A versão do sistema é a:
                {Device.osBuildId}
            </Text>
            </View>

            <View style={{ backgroundColor: "#B8F5C1", borderWidth: 5, borderColor: "#9BDEB8", marginTop: 5, marginBottom: 5, borderRadius: 5,}}>
            <Text>A arquitetura do aparelho é:
                {Device.osInternalBuildId}
            </Text>
            </View>

            <View style={{ marginTop: 30}}>
                <Button title="Sair" color="#2E4237" mode="contained"/>
            </View>
        </View>
    )
}