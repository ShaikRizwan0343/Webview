import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './styles';
import Button from '../../components/button/Button';
import { RootStackParams } from '../../navigation/rootNavigation/RootNavigation';

type RootTabNavigationProps = StackNavigationProp<RootStackParams>;

export const Home = () => {
  const navigation = useNavigation<RootTabNavigationProps>();
  return (
    <View style={styles.main}>
      <View style={{rowGap: 24}}>
        <Button
          text="React Native Community"
          textColor="white"
          onPress={() => navigation.navigate('WebViewUI')}
        />
        <Button
          text="welcome to Web To Native"
          textColor="white"
          onPress={() => navigation.navigate('WebToNative')}
        />
      </View>
    </View>
  );
};
