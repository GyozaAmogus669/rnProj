import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailScreen = ({navigation}) => {
  return (
    <View style= {{flex:1,alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <Button
       title="Go to Details... Again"
       onPress={()=>navigation.push('Detail')}
       />
       <Button
       title="Go to Home"
       onPress={()=>navigation.navigate('Home')}
       />
       <Button
       title="Go Back"
       onPress={()=>navigation.goBack()}
       />
    </View>
  )
}

export default DetailScreen