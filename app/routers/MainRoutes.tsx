import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FormScreen from '../screens/Form/FormScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import SelectedScreen from '../screens/Selected/SelectedScreen';

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  console.log('main routes')
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Selected" component={SelectedScreen} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
