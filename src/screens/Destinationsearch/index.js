import React, {useEffect, useState} from "react";
import { TextInput, View, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import styles from "../../screens/Destinationsearch/styles";

const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState({initialState: null});
    const [destinationPlace, setDestinationPlace] = useState({initialState: null});

    useEffect( {effect: () =>{
        if(originPlace && destinationPlace){
            console.warn({data: 'Redirect to results'});
        }
    }}, {deps:[originPlace, destinationPlace]})

    return(
        <SafeAreaView>
            <View style={styles.container}> 
                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data , details = null) =>{
                        setOriginPlace({value: {data, details}});
                        
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}

                    fetchDetails
                    query={{
                        key:'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI',
                        language: 'fr',
                    }}  
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to'
                    onPress={(data , details = null) =>{
                        setDestinationPlace({value: {data, details}});
                        
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}

                    
                    query={{
                        key:'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI',
                        language: 'fr',
                    }}  
                />
            </View>  
        </SafeAreaView>   
    );
};

export default DestinationSearch;