/**
 * 带背景图片切换的Button提取
 * Author:honaf
 */
'use strict';

var React = require('react-native');
var {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  TouchableOpacity
  } = React;
var Button = React.createClass({
  getInitialState() {
    return {
      onPressed: false
    };
  },
  render: function () {
    return (
      <TouchableOpacity
        {...this.props}
        underlayColor='transparent'
        activeOpacity={1}
        onPressIn={()=>{
          this.setState({
            onPressed:true
          })
        }} onPressOut={()=>{
          this.setState({
            onPressed:false
           })
        }}
        >
        <Image source={this.state.onPressed?this.props.pressSource:this.props.source}
               style={[this.props.imgStyle,styles.imgBtn]}>
          <Text style={[styles.txt,{color:this.state.onPressed?this.props.pressColor:this.props.color}]}>{this.props.text}</Text>
        </Image>
      </TouchableOpacity>
    );
  }
})
var styles = StyleSheet.create({
  imgBtn:{
    justifyContent:'center',
    alignItems:'center'
  },
  txt:{
    backgroundColor:'transparent'
  }
});
module.exports = Button;