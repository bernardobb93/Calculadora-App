import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity , View } from 'react-native';
import Botao from './Botao';

export default function App() {

const [firstNumber,setFirstNumber]=useState(0);
const [secondNumber,setSecondNumber]=useState(0);
const [signal,setSignal]=useState("");
const [stringCalculation,setStringCalculation]=useState("0");
var numbers=[];
for(var i=0; i<=9; i++){
  numbers.push(i);
}

function logicCalc(n){
  if (signal==""){
    setFirstNumber(parseInt(firstNumber.toString()+n.toString()));
    setStringCalculation(parseInt(firstNumber.toString()+n.toString()));
  }
  if ((n=="/"||n=="*"||n=="+"||n=="-") && secondNumber==0 ){
    setStringCalculation(firstNumber.toString()+n);
    setSignal(n);
  }
  if(signal!=""){
    setSecondNumber(parseInt(secondNumber.toString()+n.toString()));
    setStringCalculation(firstNumber+signal+parseInt(secondNumber.toString()+n.toString()));
  }
  if(n=="="){
    let result=0;
    if(signal=="+"){
      result=firstNumber+secondNumber;
    }else if(signal=="-"){
      result=firstNumber-secondNumber;
    }else if(signal=="/"){
      result=firstNumber/secondNumber;
    }else if(signal=="*"){
      result=firstNumber*secondNumber;
    }
    setStringCalculation(result);
    setSignal("");
    setFirstNumber(result);
    setSecondNumber(0);
  }
  if(n=="clear"){
    setStringCalculation(0);
    setSignal("");
    setFirstNumber(0);
    setSecondNumber(0);
  }
  if((n=="back")&&(signal=="")&&(firstNumber.toString().length>1)){ 
    console.log(stringCalculation);
    setStringCalculation(stringCalculation.toString().substring(0,stringCalculation.toString().length-1));
    setFirstNumber(firstNumber.toString().substring(0,firstNumber.toString().length-1));

    console.log(firstNumber.toString().length);
  }
  if((n=="back")&&(signal=="")&&(firstNumber.toString().length==1)){ 
    console.log(stringCalculation);
    setFirstNumber(0);
    setStringCalculation(firstNumber.toString());
    console.log(firstNumber.toString().length);
  }
  if((n=="back")&&(signal!="")&&(secondNumber==0)){ 
    console.log(stringCalculation);
    setStringCalculation(stringCalculation.substring(0,stringCalculation.length-1));
    console.log(firstNumber.toString().length);
    setSignal("");
  }
  if((n=="back")&&(signal!="")&&(secondNumber<=9)){ 
    console.log(stringCalculation);
    setSecondNumber(0);
    setStringCalculation(stringCalculation.substring(0,stringCalculation.length-1));
    console.log(firstNumber.toString().length);
  }
  if((n=="back")&&(signal!="")&&(secondNumber>9)){ 
    console.log(stringCalculation);
    setSecondNumber(secondNumber.toString().substring(0,secondNumber.toString().length-1));
    setStringCalculation(stringCalculation.substring(0,stringCalculation.length-1));
    console.log(secondNumber.toString().length);
  }
    
  

}


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.txtResult}>{stringCalculation}</Text>
        </View>
        <View style={styles.signals}>
          <TouchableOpacity onPress={()=>logicCalc('+')} style={styles.sign}>
            <Text style={{fontSize:24, color:'white'}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>logicCalc('-')} style={styles.sign}>
            <Text style={{fontSize:24, color:'white'}}>-</Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={()=>logicCalc('/')} style={styles.sign}>
            <Text style={{fontSize:24, color:'white'}}>/</Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={()=>logicCalc('*')} style={styles.sign}>
            <Text style={{fontSize:24, color:'white'}}>*</Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={()=>logicCalc('=')} style={styles.sign}>
            <Text style={{fontSize:24, color:'white'}}>=</Text>
          </TouchableOpacity >
        </View>
        <View style={styles.numbers}>
          {
          numbers.map(function(e){
            return(<Botao number={e} logicCalc={logicCalc}></Botao>);
          })
          }
        </View>
        <View style={styles.clbk}>
          <TouchableOpacity onPress={()=>logicCalc('clear')} style={styles.toClbk}>
            <Text style={{fontSize:24, color:'white'}}>CLEAR</Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={()=>logicCalc('back')} style={styles.toClbk}>
            <Text style={{fontSize:24, color:'white'}}>BACK</Text>
          </TouchableOpacity >
        </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgb(41, 107, 52)',
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
    height:'50%'
  },
  sign:{
    width:'20%',
    backgroundColor:'rgb(0, 122, 21)',
    justifyContent:'center', 
    height:'100%',
    alignItems:'center',
    borderColor:'white',
    borderWidth:1,
  },
  clbk:{
    flexDirection:'row',
    height:'10%',
    alignItems:'center',
  },
  toClbk:{
    width:'50%',
    backgroundColor:'rgb(0, 122, 21)',
    justifyContent:'center', 
    height:'100%',
    alignItems:'center',
    borderColor:'white',
    borderWidth:1,
  },
});
