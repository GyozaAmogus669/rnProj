import { View, Text, Button } from 'react-native'
import React from 'react'

const SecondPage = ({navigation}) => {
    return (
      <View style= {{flex:1,alignItems: 'center', justifyContent: 'center'}}>
         <Text>This is the Second Page of the app</Text>
         <Button
         title="Go back"
         onPress={()=>navigation.goBack()}
         />
        <Button
         title="Go to Second page again"
         onPress={()=>navigation.push('Second')}
         />
        <Button
         title="Go to First page"
         onPress={()=>navigation.navigate('First')}
         />
         <Button
         title="Go to Third page"
         onPress={()=>navigation.navigate('Third')}
         />
      </View>
    )
}

export default SecondPage