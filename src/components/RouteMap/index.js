import React from "react";
import { Image, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI';

const RouteMap = (props) => {

    const origin= {
        latitude: 37.78825,
        longitude: -122.4324,
    };

    const destination= {
        latitude: 37.78825,
        longitude: -122.7324,
    };

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
            <MapViewDirections
                origin = {origin}
                destination = {destination}
                apikey = {GOOGLE_MAPS_APIKEY}
                strokeWidth= {3}
                strokeColor= "hotpink"/>
                
            </MapView>
        </View>
    );
};



export default RouteMap;