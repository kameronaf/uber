import React from "react";
 import {View, Text,Image} from "react-native";
import HomeMap from "../../components/HomeMap";
import styles from './styles.js'

import Ionicons from "react-native-vector-icons/Ionicons";

 const UberTypesRow = (props) =>{
     return(
         <View style={styles.container}>

             <Image style={styles.image} source = {require('../../assets/images/voiture.jpg')}/>
             
            <View style={styles.middleContainer}>
                <Text style = {styles.type}>
                    UberX{' '}
                    <Ionicons name = {'person'} size= {16}/>
                    3
                </Text>
                <Text style = {styles.time}>
                    8:03PM drop off
                </Text>
            </View>

            <View style={styles.rightContainer}>
                <Ionicons name = {'pricetag'} size= {18} color={'#42d742'}/>
                
                <Text style = {styles.price}>
                    est.27
                </Text>
            </View>

         </View>
     );
 };

 export default UberTypesRow;