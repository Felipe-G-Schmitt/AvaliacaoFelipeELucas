import React, { useState, useEffect } from 'react';
import { Magnetometer, Gyroscope } from 'expo-sensors';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function Sensors({ navigation }) {
    const [Magneto, setMagneto] = useState({});
    const [Girioscopio, setGirioscopio] = useState({});

    const [ getColorBackground, setColorBackground ] = useState('#fff')

    const getGyroscopeList = (data) => {
        setGirioscopio(data);
    };

    const MagnetometerList = (data) => {
        setMagneto(data);
    };

    useEffect(() => {
        Gyroscope.addListener(getGyroscopeList);
        Magnetometer.addListener(MagnetometerList);
    
        if(Magneto.x == 0){
            setColorBackground('white')
        }else if(Magneto.x <= -90){
            setColorBackground('red')
        }else if(Magneto.x <= -180){
            setColorBackground('blue')
        }else if(Magneto.x <= -270){
            setColorBackground('green')
        }else{
            setColorBackground('white')
        };

    }, []);

    return(
        <View>
            <View style={[styles.container, {backgroundColor: getColorBackground}]}>
                <Header title='Sensores' />
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

    },
  });