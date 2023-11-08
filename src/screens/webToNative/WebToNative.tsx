import React, {useRef} from 'react';
import {ActivityIndicator, SafeAreaView, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/rootNavigation/RootNavigation';
import {styles} from './styles';

type RootTabNavigationProps = StackNavigationProp<RootStackParams>;

const WebToNative = () => {
  const navigation = useNavigation<RootTabNavigationProps>();
  const webviewRef = useRef<WebView>(null);

  const onMessage = (data: any) => {
    Alert.alert(data.nativeEvent.data);
    console.log(data.nativeEvent.data);
    navigation.navigate('Home');
  };

  const LoadingIndicatorView = () => {
    return (
      <ActivityIndicator
        color="#009b88"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  };
  return (
    <>
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{
            html: `<body style="display:flex; justify-content:center;flex-direction:column;align-items:center">
            <h1 style="color:black">Welcome</h1>
                     <h2 style="color:red">React native webview</h2>
                     <h2 style="color:black">React native webview data transfer between webview to native</h2>
                     <button style="color:green; height:100;width:300;font-size:30px"
                      onclick="myFunction()">Send data to Native</button>
                     <p id="demo"></p>
                     <script>
                       const data = [
                           'Javascript',
                           'React',
                           'React Native',
                           'graphql',
                           'Typescript',
                           'Webpack',
                           'Node js',
                        ];
                      const myFunction=()=> {
                        window.ReactNativeWebView.postMessage(JSON.stringify(data))
                      }
                      var i, len, text;
                      for (i = 0, len = data.length, text = ""; i < len; i++) {
                      text += data[i] + "<br>";
                      }
                     document.getElementById("demo").innerHTML = text;
                    </script>
                 </body>`,
          }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          ref={webviewRef}
          onMessage={onMessage}
        />
      </SafeAreaView>
    </>
  );
};

export default WebToNative;
