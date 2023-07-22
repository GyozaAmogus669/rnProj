import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React, {useState} from 'react'

const Login = () => {

    const[textInputName, setTextInputName] = useState('');
    const[textInputEmail, setTextInputEmail] = useState('');
    const checkTextInput = () => {
        if(!textInputName.trim()){
            alert('Please Enter Name');
            return;
        }
        else if(!textInputEmail.trim()){
            alert('Please Enter Email');
            return;
        }
        else{
            alert('Success');
            return;
        }
    }

  return (
    <View style={styles.container}>
    <TextInput
        placeholder='Enter Name'
        style = {styles.textInputStyle}
        value={textInputName}
        onChangeText={(value)=>{setTextInputName(value)}}
    />
    <TextInput
        placeholder='Enter Email'
        style = {styles.textInputStyle}
        value={textInputEmail}
        onChangeText={(value)=>{setTextInputEmail(value)}}
    />
    <Text>{'\n'}</Text>
    <Button title='Submit'onPress={()=>{
            checkTextInput();
        }}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    textInputStyle:{
        width: '100%',
        height:40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15
    }
})
// export default App;