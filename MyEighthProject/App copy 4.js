import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){

      alert("Permission is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  

  return (
    <View style={styles.container}>
     
     <Image source ={{uri:'https://raw.githubusercontent.com/ChrystalFreeman/CIS340/master/images/Henry.jpg'}}
       style={styles.logo}/>

       <Text style = {styles.instructions}> </Text>

     
<TouchableOpacity   style = {styles.button}  onPress = {() => alert ('You have not selected an image yet')}  >
    <Text sytle = {styles.buttonText}>Pick an Image </Text>
</TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "darkgray",
  },

  button: {
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 5
  },

  instructions: {
    fontSize: 18,
    color: "hotpink",
    marginHorizontal: 15,
    marginBottom: 10
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

 buttonText:{
   fontSize: 20,
   color: "lime"
 }

});
