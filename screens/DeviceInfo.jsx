import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Device from "expo-device";
import Header from "../components/Header";

export default function DeviceInfo({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Header title="Informações do Aparelho" />

      <View>
        <View style={{ margin: 5, padding: 10, marginTop: 25, backgroundColor: "#B379FD" }}>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            O nome do seu aparelho é:
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {Device.modelName}
          </Text>
        </View>

        <View style={{ margin: 5, padding: 10, marginTop: 10, backgroundColor: "#B379FD" }}>
        <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            A marca do aparelho é:
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {Device.brand}
          </Text>
        </View>

        <View style={{ margin: 5, padding: 10, marginTop: 10, backgroundColor: "#B379FD" }}>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            O modelo do aparelho é:
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {Device.modelName}
          </Text>
        </View>

        <View style={{ margin: 5, padding: 10, marginTop: 10, backgroundColor: "#B379FD" }}>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            O nome completo do aparelho é:
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {Device.deviceName}
          </Text>
        </View>

        <View style={{ margin: 5, padding: 10, marginTop: 10, backgroundColor: "#B379FD" }}>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            O Design do aparelho é:
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {Device.designName}
          </Text>
        </View>

        <View style={{ margin: 5, padding: 10, marginTop: 10, backgroundColor: "#B379FD" }}>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            O Ano do lançamento é:
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {Device.deviceYearClass}
          </Text>
        </View>

        <View style={{ margin: 5, padding: 10, marginTop: 10, backgroundColor: "#B379FD" }}>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            A memória do aparelho é:
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {Device.totalMemory}
          </Text>
        </View>

        <View style={{ margin: 5, padding: 10, marginTop: 10, backgroundColor: "#B379FD" }}>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            A versão do sistema é a:
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {Device.osBuildId}
          </Text>
        </View>

        <View style={{ margin: 5, padding: 10, marginTop: 10, marginBottom: 20, backgroundColor: "#B379FD" }}>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            A arquitetura do aparelho é:
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginLeft: 5}}>
            {Device.osInternalBuildId}
          </Text>
        </View>
      </View>
      </ScrollView>
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
