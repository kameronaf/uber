import React from "react";
import { ViewBase, Text, View } from "react-native";

import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";

const HomeScreen = (props) => {
    return(
        <View> 
            <HomeMap/>


            
            <HomeSearch/>
        </View>
    );
};

export default HomeScreen;