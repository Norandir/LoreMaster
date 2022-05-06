//@ts-nocheck
import { StyleSheet, Image } from 'react-native';




import { Text, View } from '../components/Themed';


//import { Inputs } from '../components/Classes/Inputs';


/* let test = new DnDCharacter();
let test2 = new DnDCharacter();

test.name = "Bob";
test.classLevel = "2";

localStorage.setItem('Bob', JSON.stringify(test));
var storage= JSON.parse(localStorage.getItem('Bob')as string) ; */
//const videoTest = require('Videos/test.mp4');





export default function TabOneScreen({ navigation }: RootTabScreenProps<'MainScreen'>) {
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Loremaster!</Text>
      
      
      <View style = {styles.container}>
     <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{ width: 100, height: 100 }} 
      />
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
