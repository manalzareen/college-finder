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
  export default class MpcInfo extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />

          <Text style={styles.titletext}>𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝</Text> 
          <View style={styles.base}>
            <Text style={styles.course}>𝙲𝚘𝚞𝚛𝚜𝚎 𝙳𝚎𝚝𝚊𝚒𝚕𝚜 :-</Text>
            <Text style={styles.mpc}>𝙼𝙿𝙲 ?</Text>

            <Image
            source={require('../assets/MPC-Subjects.jpg')}
            style={styles.mpcImage}></Image>
            <Text style={styles.minfo}>   𝙼𝙿𝙲 𝚏𝚞𝚕𝚕 𝚏𝚘𝚛𝚖 𝚒𝚗 𝚒𝚗𝚝𝚎𝚛𝚖𝚎𝚍𝚒𝚊𝚝𝚎 𝚜𝚝𝚞𝚍𝚒𝚎𝚜
           𝚒𝚜 𝙼𝚊𝚝𝚑𝚜, 𝙿𝚑𝚢𝚜𝚒𝚌𝚜, 𝚊𝚗𝚍 𝙲𝚑𝚎𝚖𝚒𝚜𝚝𝚛𝚢. 𝙼𝙿𝙲 𝚜𝚞𝚋𝚓𝚎𝚌𝚝𝚜 𝚘𝚏𝚏𝚎𝚛 𝚊 
           </Text><Text style={styles.minfo2}> 𝚠𝚒𝚍𝚎 𝚛𝚊𝚗𝚐𝚎 𝚘𝚏 𝚌𝚊𝚛𝚎𝚎𝚛 𝚘𝚙𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚝𝚒𝚎𝚜 𝚝𝚘 𝚎𝚡𝚙𝚕𝚘𝚛𝚎. 
              𝙴𝚡𝚊𝚖𝚙𝚕𝚎 𝙰𝚛𝚌𝚑𝚒𝚝𝚎𝚌𝚝𝚞𝚛𝚎, 𝙴𝚗𝚐𝚒𝚗𝚎𝚎𝚛𝚒𝚗𝚐, 𝙳𝚎𝚏𝚎𝚗𝚌𝚎 𝚂𝚎𝚛𝚟𝚒𝚌𝚎𝚜,  𝚂𝚝𝚊𝚝𝚒𝚜𝚝𝚒𝚌𝚜, 𝙸𝚗𝚍𝚞𝚜𝚝𝚛𝚒𝚊𝚕 𝙳𝚎𝚜𝚒𝚐𝚗𝚒𝚗𝚐 𝚊𝚗𝚍 𝙳𝚊𝚝𝚊 𝙰𝚗𝚊𝚕𝚢𝚝𝚒𝚌𝚜</Text>
              
         <TouchableOpacity style = {{marginLeft:20,marginRight:24, marginTop:20}} onPress={() =>
              this.props.navigation.navigate("BpcInfo")}>
              <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
               <TouchableOpacity style = {{marginLeft:20,marginRight:24, marginTop:20}} onPress={() =>
              this.props.navigation.navigate("SDestination")}>
            <Text style={{
               textAlign: 'center',
      color: "#DEA5A5",
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft:-4.50,
      margin:5,
      marginTop:2,}}>𝚂𝚔𝚒𝚙</Text>
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
      marginLeft:-30,
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
