import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  const csuLogo = {
    url: "https://raw.githubusercontent.com/ChrystalFreeman/CIS340/master/images/Henry.jpg",};


  return (
    <View style={styles.container}>
      
    <Image
      style={StyleSheet.localCSULogo}
      source={require('./assets/icon.png')}
      />
    <Image
    style={styles.urlCSULogo}
    source={{url: "https://raw.githubusercontent.com/ChrystalFreeman/CIS340/master/images/Henry.jpg"}}
    />

    <Image
    style={styles.stretchLogo} 
    source={csuLogo} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretchLogo: {
    height: 200,
    resizeMode: 'stretch',
  }
   
});
