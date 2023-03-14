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
  export default class HecInfo extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />

          <Text style={styles.titletext}>𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝</Text> 
          <View style={styles.base}>
            <Text style={styles.course}>𝙲𝚘𝚞𝚛𝚜𝚎 𝙳𝚎𝚝𝚊𝚒𝚕𝚜 :-</Text>
            <Text style={styles.mpc}>𝙷𝙴𝙲 ?</Text>

            <Image
            source={require('../assets/hec.png')}
            style={styles.mpcImage}></Image>
           <Text style = {styles.minfo}> 𝙷𝙴𝙲 (𝙷𝚒𝚜𝚝𝚘𝚛𝚢, 𝙴𝚌𝚘𝚗𝚘𝚖𝚒𝚌𝚜, 𝚊𝚗𝚍 𝙲𝚒𝚟𝚒𝚌𝚜) 𝚐𝚛𝚘𝚞𝚙: 𝚃𝚑𝚎 𝚜𝚝𝚞𝚍𝚎𝚗𝚝𝚜 𝚠𝚑𝚘 𝚊𝚛𝚎 𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚎𝚍 𝚒𝚗 𝚝𝚑𝚎 𝙸𝚗𝚍𝚒𝚊𝚗 𝚑𝚒𝚜𝚝𝚘𝚛𝚢. 𝚃𝚑𝚎 𝚐𝚛𝚘𝚞𝚙 𝚑𝚊𝚜 𝚝𝚑𝚎 𝚖𝚘𝚛𝚎 𝚊𝚍𝚟𝚊𝚗𝚝𝚊𝚐𝚎𝚜 𝚝𝚑𝚊𝚝 𝚝𝚑𝚎 𝚜𝚞𝚋𝚓𝚎𝚌𝚝𝚜 𝚊𝚛𝚎 𝚟𝚎𝚛𝚢 𝚑𝚎𝚕𝚙𝚏𝚞𝚕 𝚒𝚗 𝚝𝚑𝚎 𝚌𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚎 𝚎𝚡𝚊𝚖𝚜 𝚘𝚛 𝚛𝚎𝚌𝚛𝚞𝚒𝚝𝚖𝚎𝚗𝚝 𝚎𝚡𝚊𝚖𝚒𝚗𝚊𝚝𝚒𝚘𝚗𝚜.</Text>
           <Text style={styles.minfo3}>𝙲𝚒𝚟𝚒𝚕 𝙴𝚗𝚐𝚒𝚗𝚎𝚎𝚛 (𝙷𝚒𝚐𝚑𝚠𝚊𝚢) ,𝙸𝚃 𝚃𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚢 𝚂𝚎𝚛𝚟𝚒𝚌𝚎𝚜 𝙰𝚜𝚜𝚘𝚌𝚒𝚊𝚝𝚎 ,
𝙸𝚃 𝚃𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚢 𝚂𝚎𝚛𝚟𝚒𝚌𝚎𝚜 𝙰𝚜𝚜𝚘𝚌𝚒𝚊𝚝𝚎 𝚊𝚗𝚍  𝚃𝚎𝚌𝚑 𝙻𝚎𝚊𝚍. .</Text>
           

           
           
              
         <TouchableOpacity style = {{marginLeft:20,marginRight:24, marginTop:20}} onPress={() =>
              this.props.navigation.navigate("MbipcInfo")}>
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
      marginLeft:-5,
      marginTop:20,
    },
    minfo3:{
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
