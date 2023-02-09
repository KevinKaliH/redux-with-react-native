import React, {useState} from 'react';
import {Alert, Button, Switch, Text, TextInput, View} from 'react-native';
import SelectedScreen from '../Selected/SelectedScreen';
import FormScreenController from './FormScreen.controller';

const FormScreen = () => {
  console.log('form screen')
  const {onPressSubmit, setTextValue, textValue, toggle, value, _signOut} =
    FormScreenController();

  return (
    <View>
      <Text>Please select with the switch</Text>

      <TextInput
        placeholder="Please enter the name"
        onChangeText={text => setTextValue(text)}
        value={textValue}
      />
      <Switch onValueChange={toggle} value={value} />

      <View style={{marginBottom: 40, marginTop: 40}}>
        <Button title="submit" onPress={onPressSubmit} />
      </View>

      <Button title="sign out" onPress={_signOut} />
    </View>
  );
};

export default FormScreen;
