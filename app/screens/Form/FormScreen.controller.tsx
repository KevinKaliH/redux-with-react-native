import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logIn, signOut} from '../../redux/authReducer/auth.slice';
import {AuthStateModel} from '../../redux/authReducer/authState';

const FormScreenController = () => {
  const {isLogged, name} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const [value, setValue] = useState<boolean>(isLogged);
  const [textValue, setTextValue] = useState<string>(name);

  const toggle = () => setValue(pre => !pre);

  const onPressSubmit = () => {
    Alert.alert(textValue, value ? 'Hello' : 'Error');
    dispatch(logIn({isLogged: value, name: textValue}));
  };

  const _signOut = () => {
    dispatch(signOut());
  }

  return {
    value,
    setTextValue,
    textValue,
    toggle,
    onPressSubmit,
    _signOut
  };
};

export default FormScreenController;
