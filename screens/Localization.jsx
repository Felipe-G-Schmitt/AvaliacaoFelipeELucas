import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, ImageBackground, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Magnetometer } from 'expo-sensors';
import { Feather } from '@expo/vector-icons';
import Header from '../components/Header';

export default function Localization({ navigation }) {
  const [location, setLocation] = useState(null);
  const [compassData, setCompassData] = useState({ x: 0, y: 0, z: 0 });
  const [compassColor, setCompassColor] = useState('#000000');
  const arrowSize = 50;
  const [sentido, setsentido] = useState('Norte');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de acesso à localização negada!');
        console.log('Permissão de acesso à localização negada!');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log(location.coords);
    })();
  }, []);

  useEffect(() => {
    const subscribeToMagnetometer = async () => {
      await Magnetometer.setUpdateInterval(100);
      Magnetometer.addListener((data) => {
        setCompassData(data);
        updateCompassColor(data);
      });
    };

    subscribeToMagnetometer();

    return () => {
      Magnetometer.removeAllListeners();
    };
  }, []);

  const updateCompassColor = (data) => {
    const angle = Math.atan2(data.y, data.x) * (180 / Math.PI) + 180;

    if (angle >= 45 && angle < 135) {
      setCompassColor('#66EAA3'); // Vermelho para leste
      setsentido('Leste');
    } else if (angle >= 135 && angle < 225) {
      setCompassColor('#A32350'); // Verde para sul
      setsentido('Sul');
    } else if (angle >= 225 && angle < 315) {
      setCompassColor('#6750a4'); // Azul para oeste
      setsentido('Oeste');
    } else {
      setCompassColor('#50A3E8'); // Amarelo para norte
      setsentido('Norte');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Localização" />
      {location ? (
        <View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Feather
              name="arrow-up"
              size={arrowSize}
              color={compassColor}
              style={{
                transform: [{ rotate: `${compassData.x}deg` }],
              }}
            />
            <Text style={{ fontSize: 30, color: compassColor }}>{sentido}</Text>
          </View>
          <ImageBackground style={{ width: 350, height: 370, alignSelf: "center" }} source={require('../assets/bussola.png')}>
  <View style={{ alignItems: 'center' }}>
    <View style={{ height: 150, width: 150, alignSelf: 'center', marginTop: 110, overflow: 'hidden', borderRadius: 100, borderWidth: 2, borderColor: "black", marginRight: 3 }}>
      <MapView
        style={{ flex: 1, borderRadius: 60 }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="Localização do dispositivo"
          description="Esta é a atual localização do dispositivo."
        />
      </MapView>
    </View>
  </View>
</ImageBackground>

        </View>
      ) : (
        <Text>Carregando...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});
