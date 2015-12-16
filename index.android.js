/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var Button = require('./Button');
var ReactNativeButton = React.createClass({
  render: function() {
    return(<Button  style={{marginTop:44,marginLeft:13}}
                    imgstyle={{width:80,height:28}}
                    color='blue'
                    pressColor='white'
                    fontSize={15}
                    text='haha'
                    source={require('./images/btn_blue_normal.png')}
                    pressSource={require('./images/btn_blue_press.png')}
                    onPress={()=>{
                      console.log('hello');
                    }}
      />)
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ReactNativeButton', () => ReactNativeButton);
