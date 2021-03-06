import React from "react";
import { Image, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const HomeMap = (props) => {
    return (
        <View style={{
            height: 300, backgroundColor: '#a0abff',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ width: '100%', height: '100%' }}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
                    <Image
                        style={{ width: 20, height: 20, resizeMode: 'contain' }}
                        source={require('../../assets/images/voiture.jpg')} />
                </Marker>
            </MapView>
        </View>
    );
};



export default HomeMap;