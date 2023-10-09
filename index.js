import { NavigationContainer } from "@react-navigation/native";
import DeviceInfo from "./screens/DeviceInfo";
import BatteryInfo from "./screens/BatteryInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import Notify from "./screens/Notify";
import ContactsInfo from "./screens/ContactsInfo";
import MyScreenOrientation from "./screens/MyScreenOrientation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserNotify from "./screens/UserNotify";
import CriativPage from "./screens/CriativPage";
import Sensors from "./screens/Sensors";
import ScreenCapture from "./screens/ScreenCapture";
import LocalAuthentificator from "./screens/LocalAuthentificator";
import location from "./screens/Localization";
import Localization from "./screens/Localization";

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
          name="ContactsInfo"
          component={ContactsInfo}
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
        <Stack.Screen
          name="ScreenCapture"
          component={ScreenCapture}
          options={{
            headerShown: true, 
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="UserNotify"
          component={UserNotify}
          options={{
            headerShown: true, 
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Sensors"
          component={Sensors}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="LocalAuthentificator"
          component={LocalAuthentificator}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Localization"
          component={Localization}
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
        name="HomeScreen"
        component={HomeScreen}
        options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={"#782DE3"} size={26} />
            ),
          }}
      />
    </tabs.Navigator>
  );
}