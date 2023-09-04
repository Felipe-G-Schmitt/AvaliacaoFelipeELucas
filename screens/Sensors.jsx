import React, { useState, useEffect } from 'react';
import { Magnetometer, Gyroscope } from 'expo-sensors';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function Sensors({ navigation }) {
    const [Magneto, setMagneto] = useState({});
    const [Girioscopio, setGirioscopio] = useState({});
    //const [getColorBackground, setColorBackground] = useState('#fff')

    const getGyroscopeList = (data) => {
        setGirioscopio(data);
    };

    const MagnetometerList = (data) => {
        setMagneto(data);
    };

    useEffect(() => {
        Gyroscope.addListener(getGyroscopeList);
        Magnetometer.addListener(MagnetometerList);

        let BackgroundColor;

        if (Magneto.x = 0){
            BackgroundColor = styles.DefaultColor;
        } else if (Magneto.x <= -90){
            BackgroundColor = styles.RedColor;
        } else if (Magneto.x <= -180){
            BackgroundColor = styles.GreenColor;
        } else if (Magneto.x <= -270){
            BackgroundColor = styles.PurpleColor;
        } else {
            BackgroundColor = styles.DefaultColor;
        }

        /*let PhonePosition;

        if (Magneto.x = 0){
            PhonePosition = "Reto";
        } else if (Magneto.x <= -90){
            PhonePosition = "Deitado";
        } else if (Magneto.x <= -180){
            PhonePosition = "Deitado";
        } else if (Magneto.x <= -270){
            PhonePosition = "Deitado";
        } else {
            PhonePosition = "Reto";
        }

        if (Magneto.x == 0) {
            setColorBackground('#FFFFFF')
        } else if (Magneto.x <= -90) {
            setColorBackground('#EB0109')
        } else if (Magneto.x <= -180) {
            setColorBackground('#00EA3A')
        } else if (Magneto.x <= -270) {
            setColorBackground('#8500EB')
        } else {
            setColorBackground('#FFFFFF')
        };*/

    }, []);

    return (
        <View style={styles.container}>
            <Header title='Sensores' />
            <View style={styles.BackgroundColor}>
                <View>
                    <Text>
                        Magnetometro: {'\n'}
                        x:{Magneto.x}{'\n'}
                        y:{Magneto.y}{'\n'}
                        z:{Magneto.z}{'\n'}
                    </Text>
                    <Text>
                        Girioscopio: {'\n'}
                        x:{Girioscopio.x}{'\n'}
                        y:{Girioscopio.y}{'\n'}
                        z:{Girioscopio.z}{'\n'}
                    </Text>
                </View>
            </View>
        </View>
    )
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    DefaultColor: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    RedColor: {
        flex: 1,
        backgroundColor: '#EB0109',
    },
    GreenColor: {
        flex: 1,
        backgroundColor: '#00EA3A',
    },
    PurpleColor: {
        flex: 1,
        backgroundColor: '#8500EB',
    },
});
