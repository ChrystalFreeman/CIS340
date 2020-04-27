import React from 'react';
import { Text, View, FlatList } from 'react-native';


  
  export default StatesApp = () => {
    return(
      <View style= {{flex: 1, paddingTop: 22}}>
        <FlatList
          data={[
            {key: 'Alabama'},
            {key: 'Alaska'},
            {key: 'Arizona'},
            {key: 'Colorado'},
            {key: 'Wyoming'},
            {key: 'Utah'},
            {key: 'Texas'},
            {key: 'Oklahoma'},
            {key: 'Louisiana'},
            {key: 'Montana'},
            {key: 'Nebraska'},
            {key: 'Vermont'},
            {key: 'California'},
          ]}
        renderItem={({item})  => <Text style= {{padding: 10, fontSize: 20, height: 44}}> {item.key}  </Text>}
        />
      </View>

        
    
  );
}
