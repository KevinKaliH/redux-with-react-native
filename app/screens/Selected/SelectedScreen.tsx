import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const SelectedScreen = () => {
  console.log('selected screen');
  const {isLogged, name} = useSelector((state: any) => state.auth);
    
  return (
    <View>
        <Text>What did you write</Text>
        <Text>{name}</Text>
        <Text>{isLogged ? 'is logged' : 'is not logged'}</Text>
    </View>
  )
}

export default SelectedScreen