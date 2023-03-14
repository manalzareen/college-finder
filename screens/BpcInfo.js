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
  export default class BpcInfo extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />

          <Text style={styles.titletext}>𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝</Text> 
          <View style={styles.base}>
            <Text style={styles.course}>𝙲𝚘𝚞𝚛𝚜𝚎 𝙳𝚎𝚝𝚊𝚒𝚕𝚜 :-</Text>
            <Text style={styles.mpc}>𝙱𝚒𝙿𝙲 ?</Text>

            <Image
            source={require('../assets/BIPC.png')}
            style={styles.mpcImage}></Image>
            <Text style={styles.minfo}>   𝚃𝚑𝚎 𝚏𝚞𝚕𝚕 𝚏𝚘𝚛𝚖 𝚘𝚏 𝙱𝚒𝙿𝙲 𝚒𝚜 𝙱𝚒𝚘𝚕𝚘𝚐𝚢, 𝙿𝚑𝚢𝚜𝚒𝚌𝚜 𝚊𝚗𝚍 𝙲𝚑𝚎𝚖𝚒𝚜𝚝𝚛𝚢 𝚠𝚑𝚒𝚌𝚑 𝚊𝚛𝚎 𝚝𝚑𝚎 𝚜𝚞𝚋𝚓𝚎𝚌𝚝   𝚗𝚊𝚖𝚎𝚜 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚒𝚗𝚝𝚎𝚛𝚖𝚎𝚍𝚒𝚊𝚝𝚎 𝚜𝚞𝚋𝚓𝚎𝚌𝚝 𝚌𝚘𝚖𝚋𝚒𝚗𝚊𝚝𝚒𝚘𝚗 𝚘𝚏 𝙱𝚒𝙿𝙲 𝚒𝚗 𝚝𝚑𝚎 𝚜𝚌𝚒𝚎𝚗𝚌𝚎 𝚜𝚝𝚛𝚎𝚊𝚖.</Text>
          <Text style={styles.minfo2}> 𝚢𝚘𝚞 𝚌𝚊𝚗 𝚎𝚡𝚙𝚕𝚘𝚛𝚎 𝚕𝚞𝚌𝚛𝚊𝚝𝚒𝚟𝚎 𝚌𝚊𝚛𝚎𝚎𝚛𝚜 𝚒𝚗 𝚛𝚎𝚜𝚎𝚊𝚛𝚌𝚑, 𝚊𝚌𝚊𝚍𝚎𝚖𝚒𝚊, 𝚖𝚎𝚍𝚒𝚌𝚊𝚕 𝚓𝚘𝚞𝚛𝚗𝚊𝚕𝚒𝚜𝚖, 𝚊𝚗𝚍 𝚘𝚝𝚑𝚎𝚛 𝚏𝚒𝚎𝚕𝚍𝚜 𝚒𝚗 𝚊𝚍𝚍𝚒𝚝𝚒𝚘𝚗 𝚝𝚘 𝚝𝚑𝚎 𝚖𝚎𝚍𝚒𝚌𝚊𝚕 𝚏𝚒𝚎𝚕𝚍.
              </Text>
              
         <TouchableOpacity style = {{marginLeft:20,marginRight:24, marginTop:20}} onPress={() =>
              this.props.navigation.navigate("CecInfo")}>
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
      marginLeft:-2,
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
