import React from 'react';
import { Text, Image, ScrollView } from 'react-native';


  const dog = {
    url:'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
    width: 64,
    height: 64
  };
  export default MyScrollViewApp = () => (
    
    <ScrollView style={{padding: 40}}>
      <Text style > Try to scroll down </Text>
      <Image source ={require('./assets/dog.png')} style = {{width: 64, height: 64}}/>
      <Image source ={dog}/> 
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Text style > Try to scroll down again, if you like. </Text>
      <Image source ={dog}/>
      <Image source ={dog}/> 
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Text style > Try to scroll down again, if you like. </Text>
      <Image source ={dog}/>
      <Image source ={dog}/> 
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Text style > Try to scroll down again, if you like. </Text>
      <Image source ={dog}/>
      <Image source ={dog}/> 
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>
      <Image source ={dog}/>

      </ScrollView>

  );

