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
    ScrollView
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';
  import { AntDesign } from '@expo/vector-icons';
  import { ScreenWidth, ScreenHeight } from 'react-native-elements/dist/helpers';
  export default class MbipcInfo extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />

          <Text style={styles.titletext}>𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝</Text> 
          <View style={styles.base}>
            <Text style={styles.course}>𝙲𝚘𝚞𝚛𝚜𝚎 𝙳𝚎𝚝𝚊𝚒𝚕𝚜 :-</Text>
            <Text style={styles.mpc}>𝙼𝙱𝚒𝙿𝙲 ?</Text>

            <Image
            source={require('../assets/MPC-Subjects.jpg')}
            style={styles.mpcImage}></Image>
            <Text style={styles.minfo}>𝙼𝙱𝚒𝙿𝙲 𝚖𝚎𝚊𝚗𝚜 𝙼𝚊𝚝𝚑𝚎𝚖𝚊𝚝𝚒𝚌𝚜, 𝙱𝚒𝚘𝚕𝚘𝚐𝚢, 𝙿𝚑𝚢𝚜𝚒𝚌𝚜 𝚊𝚗𝚍 𝙲𝚑𝚎𝚖𝚒𝚜𝚝𝚛𝚢, 𝙸𝚗 𝚝𝚑𝚒𝚜 𝚜𝚝𝚞𝚍𝚎𝚗𝚝𝚜 𝚌𝚊𝚗 𝚕𝚎𝚊𝚛𝚗 𝚋𝚘𝚝𝚑 𝚜𝚞𝚋𝚓𝚎𝚌𝚝𝚜 𝚝𝚑𝚊𝚝 𝚒𝚜 𝚖𝚊𝚝𝚑𝚎𝚖𝚊𝚝𝚒𝚌𝚜 𝚊𝚗𝚍 𝚋𝚒𝚘𝚕𝚘𝚐𝚢 𝚒𝚗 𝚝𝚑𝚎𝚛𝚎 𝙸𝚗𝚝𝚎𝚛𝚖𝚎𝚍𝚒𝚊𝚝𝚎 𝙵𝚒𝚛𝚜𝚝 𝚈𝚎𝚊𝚛 𝚊𝚗𝚍 𝙸𝚗𝚝𝚎𝚛𝚖𝚎𝚍𝚒𝚊𝚝𝚎 𝚂𝚎𝚌𝚘𝚗𝚍 𝚈𝚎𝚊𝚛.
            </Text>

            <Text style={styles.minfo2}>𝙹𝚘𝚋 𝚘𝚙𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚝𝚢 𝚕𝚒𝚔𝚎 𝙴𝚗𝚐𝚒𝚗𝚎𝚎𝚛𝚒𝚗𝚐 𝚍𝚒𝚜𝚌𝚒𝚙𝚕𝚒𝚗𝚎 , 𝙼𝙱𝙱𝚂 𝚘𝚛 𝙱𝙳𝚂 𝚌𝚘𝚞𝚛𝚜𝚎 , 𝙱𝚊𝚌𝚑𝚎𝚕𝚘𝚛 𝚘𝚏 𝙿𝚑𝚊𝚛𝚖𝚊𝚌𝚢 𝚊𝚗𝚍 𝙰𝚛𝚌𝚑𝚒𝚝𝚎𝚌𝚝𝚞𝚛𝚎 𝚌𝚘𝚞𝚛𝚜𝚎𝚜</Text>
         <TouchableOpacity style = {{marginLeft:20,marginRight:24, marginTop:20}} onPress={() =>
              this.props.navigation.navigate("SDestination")}>
              <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
             
          </View>
         

         
      
      
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
    base:{
    width:"96%"  ,
    height:"150%",
    backgroundColor:"white",
    alignItems:"center",
    borderRadius:30   
    },
    course:{
     textAlign: 'center',
      color: "#DEA5A5",
      fontSize: 20,
      fontWeight: 'BOLD',
      marginLeft:-100,
      marginTop:20, 
    },
    mpc:{
      fontSize:20,
    color:" black",
    marginLeft:-230,
      marginTop:10, 
    },
    minfo:{
       textAlign: 'center',
      color: "#AAAAAA",
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft:-10,
      marginTop:20,
    },
    minfo2:{
      textAlign: 'center',
      color: "#AAAAAA",
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft:-4.50,
      margin:5,
      marginTop:2,
    },
    mpcImage:{
       width: "100%",
      height: "40%",
      marginRight: RFValue(70),
      marginTop: RFValue(30),
      marginLeft: RFValue(60),
      borderRadius:90
    }
    
    
  
 
  });
