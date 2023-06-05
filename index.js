import { NavigationContainer } from "@react-navigation/native";
import DeviceInfo from "./screens/DeviceInfo";
import BatteryInfo from "./screens/BatteryInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import Notify from "./screens/Notify";
import MyScreenOrientation from "./screens/MyScreenOrientation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DeviceInfo"
          component={DeviceInfo}
          options={{
            headerShown: true, 
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="MyScreenOrientation"
          component={MyScreenOrientation}
          options={{
            headerShown: true, 
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="BatteryInfo"
          component={BatteryInfo}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Notify"
          component={Notify}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <tabs.Navigator>
      <tabs.Screen
        name="DeviceInfo"
        component={DeviceInfo}
        options={{
            tabBarLabel: "Device",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cellphone-information" color={"#782DE3"} size={26} />
            ),
          }}
      />
      <tabs.Screen
        name="BatteryInfo"
        component={BatteryInfo}
        options={{
            tabBarLabel: "Battery",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="battery-charging-100" color={"#782DE3"} size={26} />
            ),
          }}
      />
      <tabs.Screen
        name="MyScreenOrientation"
        component={MyScreenOrientation}
        options={{
            tabBarLabel: "Orientatição Tela",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="screen-rotation" color={"#782DE3"} size={26} />
            ),
          }}
      />
      <tabs.Screen
        name="Notify"
        component={Notify}
        options={{
            tabBarLabel: "Notificação",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={"#782DE3"} size={26} />
            ),
          }}
      />
    </tabs.Navigator>
  );
}