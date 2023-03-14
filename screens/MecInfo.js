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
  export default class MecInfo extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />

          <Text style={styles.titletext}>𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝</Text> 
          <View style={styles.base}>
            <Text style={styles.course}>𝙲𝚘𝚞𝚛𝚜𝚎 𝙳𝚎𝚝𝚊𝚒𝚕𝚜 :-</Text>
            <Text style={styles.mpc}>𝙼𝙴𝙲 ?</Text>

            <Image
            source={require('../assets/MEC.png')}
            style={styles.mpcImage}></Image>
           
           <Text style={styles.minfo}>
           𝙼𝙴𝙲 𝚜𝚝𝚊𝚗𝚍𝚜 𝚏𝚘𝚛 𝚌𝚘𝚖𝚖𝚎𝚛𝚌𝚎 𝚜𝚞𝚋𝚓𝚎𝚌𝚝𝚜 – 𝙼𝚊𝚝𝚑𝚎𝚖𝚊𝚝𝚒𝚌𝚜, 𝙴𝚌𝚘𝚗𝚘𝚖𝚒𝚌𝚜 𝚊𝚗𝚍 𝙲𝚘𝚖𝚖𝚎𝚛𝚌𝚎. 𝙼𝙴𝙲 𝚐𝚛𝚘𝚞𝚙 𝚒𝚜 𝚊𝚕𝚜𝚘 𝚔𝚗𝚘𝚠𝚗 𝚊𝚜 𝚝𝚑𝚎 𝚑𝚎𝚊𝚛𝚝 𝚘𝚏 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚎𝚛𝚌𝚎 𝚜𝚝𝚛𝚎𝚊𝚖. 𝙾𝚗𝚎 𝚘𝚛 𝚝𝚠𝚘 𝚘𝚏 𝚝𝚑𝚎𝚜𝚎 𝚜𝚞𝚋𝚓𝚎𝚌𝚝𝚜 𝚌𝚊𝚗 𝚊𝚕𝚜𝚘 𝚋𝚎 𝚏𝚘𝚞𝚗𝚍 𝚒𝚗 𝚝𝚑𝚎 𝚜𝚌𝚒𝚎𝚗𝚌𝚎 𝚜𝚝𝚛𝚎𝚊𝚖 𝚘𝚛 𝚊𝚛𝚝𝚜 𝚜𝚝𝚛𝚎𝚊𝚖. </Text>
           <Text style={styles.minfo3}>
           𝚃𝚑𝚎𝚛𝚎 𝚊𝚛𝚎 𝚖𝚊𝚗𝚢 𝚙𝚛𝚘𝚏𝚎𝚜𝚜𝚒𝚘𝚗𝚊𝚕 𝚓𝚘𝚋 𝚙𝚛𝚘𝚜𝚙𝚎𝚌𝚝𝚜 𝚢𝚘𝚞 𝚌𝚊𝚗 𝚎𝚡𝚙𝚕𝚘𝚛𝚎 𝚊𝚏𝚝𝚎𝚛 𝙼𝙴𝙲 𝚜𝚞𝚌𝚑 𝚊𝚜 𝙵𝚒𝚗𝚊𝚗𝚌𝚒𝚊𝚕 𝙼𝚊𝚗𝚊𝚐𝚎𝚛, 𝙵𝚒𝚗𝚊𝚗𝚌𝚒𝚊𝚕 𝙰𝚗𝚊𝚕𝚢𝚜𝚝, 𝚂𝚝𝚊𝚝𝚒𝚜𝚝𝚒𝚌𝚒𝚊, 𝙴𝚌𝚘𝚗𝚘𝚖𝚒𝚜𝚝, 𝙴𝚗𝚝𝚛𝚎𝚙𝚛𝚎𝚗𝚎𝚞𝚛, 𝚂𝚘𝚏𝚝𝚠𝚊𝚛𝚎 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛, 𝚎𝚝𝚌.
</Text>
          

           
           
              
         <TouchableOpacity style = {{marginLeft:20,marginRight:24, marginTop:20}} onPress={() =>
              this.props.navigation.navigate("HecInfo")}>
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
      marginLeft:10,
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
