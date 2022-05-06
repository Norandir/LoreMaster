//@ts-nocheck
import React, { Component, useState, SafeAreaView, FlatList } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import DnDCharacter from '../components/Classes/DnDCharacter';
import { Dice } from '../components/Classes/Dice';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { RadioButton } from 'react-native-paper';

let die = new Dice();
var storage= JSON.parse(localStorage.getItem('John')) ;
let test2 = new DnDCharacter();
test2 = storage;




   
    

export default function Character() {

  const [ID, setID] = useState('');

  const [checked, setChecked] = useState('first');

  const [roll, setRoll] = useState("");
  
    const roller = () => {
      setRoll(die.roll(1,test2.str));}
    return(
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>

<View style={{ flex: 1}}>
        <View>
        <Text>Character Name: {test2.name} </Text>
        <Text>Character Level: {test2.classLevel} </Text>
        <Text>Str: {test2.str} </Text>
        <Text>Dex: {test2.dex} </Text>
        <Text>Wis: {test2.wis} </Text>
        <Text>Int: {test2.int} </Text>
        <Text>Cha: {test2.cha} </Text>
        <Text>Con: {test2.con} </Text>
        <Text>Character Level: {test2.classLevel} </Text>
        </View>
        
        <View>
         
      <RadioButton
        value="str"
        status={ checked === 'str' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('str')}
      />
      <Text>Str</Text>  
      <RadioButton
        value="dex"
        status={ checked === 'dex' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('dex')}
      />
<Text>Dex</Text>  
<RadioButton
        value="wis"
        status={ checked === 'wis' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('wis')}
      />
      <Text>Wis</Text>  
      <RadioButton
        value="int"
        status={ checked === 'int' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('int')}
      />
<Text>Int</Text>  
<RadioButton
        value="cha"
        status={ checked === 'cha' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('cha')}
      />
      <Text>Cha</Text>  
      <RadioButton
        value="con"
        status={ checked === 'con' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('con')}
      />
      <Text>Con</Text>  
    </View>
    

      <Button
  onPress={() => setRoll(() => die.roll(1,test2.str))}
  title="Roll"
  color="#841584"
/>
        <Text >{roll}</Text>   
        

    </View>

    <View style={{ flex: 1}}>
<Text>Character List</Text>
<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Type Id"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {newText => setID(newText)}/>
    </View>
    </View>
    
    );}
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
     },
     container2: {
       flex: 1,
       backgroundColor: '#FFFFFF',
       marginTop: 100,
     },
     title: {
       fontSize: 20,
       fontWeight: 'bold',
     },
     separator: {
       marginVertical: 30,
       height: 1,
       width: '80%',
     },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
   });
   