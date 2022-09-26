import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity , View } from 'react-native';
import Botao from './Botao';

export default function App() {
  console.disableYellowBox = true;
const [firstNumber,setFirstNumber]=useState(0);
const [secondNumber,setSecondNumber]=useState(0);
const [signal,setSignal]=useState("");
const [stringCalculation,setStringCalculation]=useState("0");
var numbers=[];
for(var i=0; i<=9; i++){
  numbers.push(i);
}

function logicCalc(){

}


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.txtResult}>{stringCalculation}</Text>
        </View>
        <View style={styles.signals}>
          <TouchableOpacity style={styles.sign}>
            <Text style={{fontSize:24, color:'white'}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.sign}>
            <Text style={{fontSize:24, color:'white'}}>-</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.sign}>
            <Text style={{fontSize:24, color:'white'}}>/</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.sign}>
            <Text style={{fontSize:24, color:'white'}}>*</Text>
          </TouchableOpacity >
        </View>
        <View style={styles.numbers}>
          {
          numbers.map(function(e){
            return(<Botao number={e} logicCalc={logicCalc}></Botao>);
          })
          }
        </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
  },
  top:{
    marginTop:35,
    padding:10,
    borderColor:'black',
    borderBottomWidth:2,
    height:'16.6%',
    justifyContent:'center',
    paddingLeft:20,
  },
  txtResult:{
    fontSize:24,
    color:'white',
  },
  signals:{
    flexDirection:'row',
    height:'16.6%',
    alignItems:'center',

  },
  numbers:{
    flexDirection:'row',
    flexWrap:'wrap',
    borderTopColor:'black',
    borderTopWidth:2,
    height:'60%'
  },
  sign:{
    width:'25%',
    backgroundColor:'rgb(20,20,20)',
    justifyContent:'center', 
    height:'100%',
    alignItems:'center',
  },
});
