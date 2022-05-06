import React, { Component, useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import DnDCharacter from '../components/Classes/DnDCharacter';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';



/* let test = new DnDCharacter();
let test2 = new DnDCharacter();

test.name = "Bob";
test.classLevel = "2";

localStorage.setItem('Bob', JSON.stringify(test));
var storage= JSON.parse(localStorage.getItem('Bob')as string) ; */
//const videoTest = require('Videos/test.mp4');
let test = new DnDCharacter();





export default function CreateCharacter() {
 // test2 = storage;
 const [name, setName] = useState('');
 const [level, setLevel] = useState('');
 const [str, setStr] = useState('');
 const [dex, setDex] = useState('');
 const [con, setCon] = useState('');
 const [wis, setWis] = useState('');
 const [cha, setCha] = useState('');
 const [int, setInt] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
     {/*  <Text>{test2.name}</Text>
      <Text>{test2.classLevel}</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     {/*  */}

     <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {newText => setName(newText)}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Level"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {newText => setLevel(newText)}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Str"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {newText => setStr(newText)}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Dex"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {newText => setDex(newText)}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Int"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {newText => setInt(newText)}/>
               
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Wis"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {newText => setWis(newText)}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Con"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {newText => setCon(newText)}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Cha"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {newText => setCha(newText)}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {test.name = name;
                  test.classLevel = parseInt(level);
                  test.str = parseInt(str);
                  test.dex = parseInt(dex);
                  test.wis = parseInt(wis);
                  test.cha = parseInt(cha);
                  localStorage.setItem(test.name, JSON.stringify(test));
                 
                }
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>

        
    </View>
  );
}

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
