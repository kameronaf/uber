import React, {useState,useRef} from "react";

import { View, Text, StyleSheet, StatusBar,Dimensions,TextInput} from "react-native";

import Header from "./index";
import { colors,title, parameters } from "./styles";
import * as Animatable from "react-native-animatable";

import { Icon } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";


export default function Log(){

    const[textInput2Fossued,setTextInput2Fossued] = useState(false)

    const textInput = useRef(1)
    const textInput2 = useRef(2)

    return(
        <View style={styles.container}> 
            <StatusBar
                barStyle = "light-content"
                backgroundColor = {colors.statusbar}
            />
            <Header title ="MY ACCOUNT " type= "arrow-left"/>

            <View style= {{alignItems:"center", marginTop:15}}>
                <Text style ={title}>Sign-In</Text>
            </View>
            <View style= {{marginTop:20}}>
                <View>
                  <TextInput
                    style= {styles.TextInput}
                    placeholder = "Email"
                    ref ={textInput}
                  />  
                </View>
                
            
            <View style= {styles.TextInput2}>
                <Animatable.View>
                    <Icon
                        name ="lock"
                        iconStyle= {{color:colors.grey3}}
                        type = "material"
                        style = {{}}
                    />
                </Animatable.View>
                    <TextInput
                        style= {{width: "80%"}}
                        placeholder = "Password"
                        ref ={textInput2}
                        onFocus = {()=>{
                            setTextInput2Fossued(false)
                        }}
                        onBlur= {()=>{
                            setTextInput2Fossued(true)
                        }}
                    />
                <Animatable.View animation = {textInput2Fossued?"":"fadeInLeft"} duration={400}>
                    <Icon
                        name ="visibility-off"
                        iconStyle= {{color:colors.grey3}}
                        type = "material"
                        style= {{marginRight:10}}
                    />
                </Animatable.View>
                </View>
            </View>


             <View style = {{ marginHorizontal:20, marginVertical:30}}>
                <Button
                    title = "SIGN-IN"
                    buttonStyle = {parameters.styleButton}
                    titleStyle = {parameters.buttonTitle}
                />
            </View>
            
        </View>

    )    
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    TextInput:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15,
    },
    TextInput2:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
       flexDirection:"row",
       justifyContent: "space-between",
       alignItems: "center",
       alignContent: "center",
       paddingLeft: 15,
       marginTop: 40,
    },

})