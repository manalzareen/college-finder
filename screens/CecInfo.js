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
  export default class CecInfo extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />

          <Text style={styles.titletext}>𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝</Text> 
          <View style={styles.base}>
            <Text style={styles.course}>𝙲𝚘𝚞𝚛𝚜𝚎 𝙳𝚎𝚝𝚊𝚒𝚕𝚜 :-</Text>
            <Text style={styles.mpc}>𝙲𝙴𝙲 ?</Text>

            <Image
            source={require('../assets/cec.svg')}
            style={styles.mpcImage}></Image>
            <Text style={styles.minfo}>   𝙲𝙴𝙲 𝚜𝚝𝚊𝚗𝚍𝚜 𝚏𝚘𝚛 𝙲𝚒𝚟𝚒𝚌𝚜 𝙴𝚌𝚘𝚗𝚘𝚖𝚒𝚌 𝙲𝚘𝚖𝚖𝚎𝚛𝚌𝚎. 𝙷𝚘𝚠𝚎𝚟𝚎𝚛, 𝚝𝚑𝚎 𝙲𝙴𝙲 𝚌𝚘𝚞𝚛𝚜𝚎 𝚌𝚘𝚟𝚎𝚛𝚜 𝚊 𝚕𝚘𝚝 𝚖𝚘𝚛𝚎 𝚝𝚑𝚊𝚗 𝚓𝚞𝚜𝚝 𝚌𝚒𝚟𝚒𝚌𝚜 𝚊𝚗𝚍 𝚎𝚌𝚘𝚗𝚘𝚖𝚒𝚌𝚜. 𝚃𝚑𝚎 𝚜𝚢𝚕𝚕𝚊𝚋𝚞𝚜</Text>  
            <Text style={styles.minfo2}>𝚊𝚕𝚜𝚘 𝚒𝚗𝚌𝚕𝚞𝚍𝚎𝚜 𝚋𝚞𝚜𝚒𝚗𝚎𝚜𝚜 𝚜𝚝𝚞𝚍𝚒𝚎𝚜, 𝚠𝚑𝚒𝚌𝚑 𝚖𝚊𝚔𝚎𝚜 𝚒𝚝 𝚚𝚞𝚒𝚝𝚎 𝚍𝚒𝚏𝚏𝚎𝚛𝚎𝚗𝚝 𝚏𝚛𝚘𝚖 𝚘𝚝𝚑𝚎𝚛 𝚌𝚘𝚞𝚛𝚜𝚎𝚜 𝚒𝚗 𝚝𝚑𝚎 𝚏𝚒𝚎𝚕𝚍 𝚘𝚏 𝚜𝚘𝚌𝚒𝚊𝚕 𝚜𝚌𝚒𝚎𝚗𝚌𝚎𝚜 𝙹𝚘𝚋 𝚘𝚙𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚝𝚢 </Text>
            <Text style = {styles.minfo2}> 𝚕𝚒𝚔𝚎 𝙰𝚌𝚌𝚘𝚞𝚗𝚝𝚊𝚗𝚝, 𝙰𝚗𝚊𝚕𝚢𝚜𝚝, 𝙼𝚊𝚗𝚊𝚐𝚎𝚛, 𝙲𝚑𝚊𝚛𝚝𝚎𝚛𝚎𝚍 𝙰𝚌𝚌𝚘𝚞𝚗𝚝𝚊𝚗𝚝 𝚊𝚗𝚍 𝙼𝚊𝚛𝚔𝚎𝚝 𝙰𝚗𝚊𝚕𝚢𝚜𝚝.
</Text>
           
           
              
         <TouchableOpacity style = {{marginLeft:20,marginRight:24, marginTop:20}} onPress={() =>
              this.props.navigation.navigate("MecInfo")}>
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
      marginLeft:-4.30,
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
