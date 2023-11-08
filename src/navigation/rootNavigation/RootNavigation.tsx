
import {WebViewUI} from '../../screens/webViewUI';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/home/Home';
import WebToNative from '../../screens/webToNative/WebToNative';

export type RootStackParams = {
  WebViewUI: undefined;
  Home: undefined;
  WebToNative:undefined
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WebViewUI" component={WebViewUI} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WebToNative" component={WebToNative} />
    </Stack.Navigator>
  );
};
