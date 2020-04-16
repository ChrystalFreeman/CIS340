import React from 'react';
import {Text} from 'react-native';

export default function MyApp() {

  function getFullName(fName, mName,lName){
    return fName + " " + mName + " " + lName;
  }

  const pet = "6 dogs";
  return (
    
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340. {"\n"}
        My full name is {getFullName("Chrystal","R","Freeman")} {"\n"}
        I have {pet}!
      </Text>
    
  );
}


