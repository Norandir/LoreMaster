/* import React, { Component, useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import DnDCharacter from '../components/Classes/DnDCharacter';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import DatePicker from 'react-native-date-picker';




export default function Calender(this: any, { navigation }: RootTabScreenProps<'Calender'>) {
    const [date, setDate] = useState(new Date());
    let players = 0;

  return (
    <View style={styles.container}>
      <Text>Set Game Date</Text>
      <DatePicker date={date} onDateChange={setDate} />

      <Text>Can you make it?</Text>
      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {players + 1}
               }>
               <Text style = {styles.submitButtonText}> Yes </Text>
            </TouchableOpacity>
            <Text>Players who can come = {players}</Text>
        
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
 */