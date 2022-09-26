import { StatusBar } from "expo-status-bar";
import React,{useState, useEffect} from "react";
import { ProgressViewIOSComponent, StyleSheet,Text, TouchableOpacity, View } from "react-native";

export default function Botao(props){
    return (
    <View style={styles.vwNumber}>
        <TouchableOpacity onPress={()=>props.logicCalc()} style={styles.toNumbers}>
        <Text style={styles.txtNumber}>{props.number}</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles=StyleSheet.create({
    vwNumber:{
        backgroundColor:'black', 
        borderColor:'white',
        borderWidth:1,
        width:'33.3%',
        height:'25%',
    },
    txtNumber:{
        fontSize:24,
        color:'white',
    },
    toNumbers:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
});
