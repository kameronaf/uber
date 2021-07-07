import React from "react";
import { Text, View } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

import styles from './styles.js';

const HomeSearch = (props) => {
    return(
        <View> 
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>

                <View style={styles.timeContainer}> 
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                    <Text >Now</Text>
                    <MaterialIcons name={'keynoard-arrow-down'} size={16}/>
                </View>
            
            </View>
             <View style={styles.row}>
                  <View style={styles.iconContainer}>
                     <AntDesign name={'clockcircle'} size={20} color={'#ffffff'}/> 
                  </View>
                  <Text style={styles.destinationText}>Spin Nightclub</Text>
             </View>
             <View style={styles.row}>
                  <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                     <Entypo name={'home'} size={20} color={'#ffffff'}/> 
                  </View>
                  <Text style={styles.destinationText}>Spin Nightclub</Text>
             </View>
        </View>

    );
};

export default HomeSearch;