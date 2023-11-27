import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Magnetometer } from 'expo-sensors';
import { Feather } from '@expo/vector-icons';
import Header from '../components/Header';

export default function Localization({ navigation }) {
  const [location, setLocation] = useState(null);
  const [compassData, setCompassData] = useState({ x: 0, y: 0, z: 0 });
  const [compassColor, setCompassColor] = useState('#000000');
  const arrowSize = 40;
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
      setCompassColor('#FF0000'); // Vermelho para leste
      setsentido('Leste');
    } else if (angle >= 135 && angle < 225) {
      setCompassColor('#00FF00'); // Verde para sul
        setsentido('Sul');
    } else if (angle >= 225 && angle < 315) {
      setCompassColor('#0000FF'); // Azul para oeste
      setsentido('Oeste');
    } else {
      setCompassColor('#FFFF00'); // Amarelo para norte
        setsentido('Norte');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Localização" />
      {location ? (
        <View>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          <View style={{ height: 300, width: 300, alignSelf: 'center' }}>
            <MapView
              style={{ flex: 1 }}
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
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 20, color: compassColor }}>Bússola</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Feather
            name="arrow-up"
            size={arrowSize}
            color={compassColor}
            style={{
              transform: [{ rotate: `${compassData.x}deg` }],
            }}
          />
          <Text style={{ fontSize: 20, color: compassColor }}>{sentido}</Text>
        </View>
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
