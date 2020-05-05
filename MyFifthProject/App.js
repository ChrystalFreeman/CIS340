import React from 'react';
import {View} from 'react-native';

export default function App() {
  return (
    <View style = {{flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline'}}>
    <View style={{height: 50, backgroundColor: 'hotpink', alignSelf: 'stretch'}}/>
    <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
    <View style={{width: 50,height: 50, backgroundColor: 'teal'}}/>
      
    </View>
 
);
}
