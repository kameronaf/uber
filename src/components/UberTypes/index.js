import React from "react";
 import {View, Text} from "react-native";
import styles from './styles'
import UberTypesRow from "../UberTypeRow";

 const UberTypes = (props) =>{
     return(
         <View>
             <UberTypesRow/>
             <UberTypesRow/>
             <UberTypesRow/>
         </View>
     );
 };

 export default UberTypes;