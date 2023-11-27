import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Header from '../components/Header';

export default function Localization ({ navigation }) {
    const [location, setLocation] = useState(null);

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

    return (
        <View style={styles.container}>
            <Header title='Localização' />
            {location ? (
                <View style={{ flex: 1 }}>
                    <Text>Latitude: {location.latitude}</Text>
                    <Text>Longitude: {location.longitude}</Text>
                    <View style={{ flex: 1, width: 300 }}>
                        {/*<MapView
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
                        </MapView>*/}
                    </View>
                </View>
            ) : (
                <Text>Carregando...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
});
