import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeScreen = ({navigation}: any) => {
  console.log('home screen');
  
  return (
    <View>
        <Text>Home screen</Text>
        <View style={{marginBottom: 40, marginTop: 40}}>
        <Button title='Form' onPress={() => navigation.navigate('Form')}/>
        </View>
        <Button title='Value' onPress={() => navigation.navigate('Selected')}/>
    </View>
  )
}

export default HomeScreen