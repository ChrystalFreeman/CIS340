import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){

      alert("Permission is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true){
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };

  let openSharingDialogAsync = async() => {
    if (!(await Sharing.isAvailableAsync())){
      alert('Sharing is not availableon my phone.');
      return;
    }

    Sharing.shareAsync(selectedImage.localUri);
  }




  if (selectedImage !== null){
    return(
      <View style = {styles.container}>
        <Image source = {{uri: selectedImage.localUri}} style = {styles.selImage}/>

<TouchableOpacity onPress={openSharingDialogAsync} style= {styles.button}>
  <Text style = {styles.buttonText}>Share My Photo </Text>
</TouchableOpacity>

      </View>
    )
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
 },

 selImage: {
   width: 300,
   height: 300,
   resizeMode: 'contain'
 }

});
