import React, { Component } from 'react';
  import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';
  import { ScreenWidth, ScreenHeight } from 'react-native-elements/dist/helpers';
  export default class Home extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />

          <Text style={styles.titletext}>𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝</Text> 
          <Text style={styles.text}>𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝</Text>

          <Image
            source={require('../assets/image.jpg')}
            style={styles.bookImage}></Image>
         
         <Text style={styles.text1}>𝚆𝚊𝚗𝚝 𝚝𝚘 𝚏𝚒𝚗𝚍 𝚝𝚑𝚎 𝚋𝚎𝚜𝚝 𝚌𝚘𝚕𝚕𝚎𝚐𝚎𝚜 ?</Text>

          <TouchableOpacity
        style={styles.getbox}
        onPress={() => this.props.navigation.navigate("Towlichowki")}>
          <Text style={styles.gettext}>Get Started </Text>
        </TouchableOpacity>
  
      
      
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
     flex:1,
     height:ScreenHeight,
     width:ScreenWidth,
     borderRadius:"3px",
    },
    androidView: {
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
     titletext: {
      textAlign: 'center',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: -15,
      marginTop:35,
    },
  text:{
    textAlign: 'center',
      color: "#DEA5A5",
      fontSize: 20,
      fontWeight:'BOLD',
      marginLeft: -14,
      marginTop:40,
  },
  text1:{
    textAlign: 'center',
      color: "#DEE0E0",
      fontSize: 21,
      fontWeight:'BOLD',
      marginLeft: -10,
      marginTop:10,
  },
  
   bookImage: {
      width: "70%",
      height: "40%",
      marginRight: RFValue(70),
      marginTop: RFValue(30),
      marginLeft: RFValue(60),
      borderRadius:80
    },
    getbox:{
      width: "60%",
      height:"11%",
      backgroundColor: '#FFFBEB',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: RFValue(70)  ,
      alignSelf:'center',  
      marginTop:10
    },
    gettext:{
      fontSize: RFValue(25),
      color: '#FAAB78',
      alignSelf:'center',
      fontWeight:"bold",
    },
  });
