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
    ScrollView,
    Linking
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';
  import { ScreenWidth, ScreenHeight } from 'react-native-elements/dist/helpers';
  export default class Towlichowki extends Component {
    render() {
        function openWebsite(websiteLink:String){
      Linking.openURL(websiteLink)  
    }
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />
          <ScrollView>
    <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/iqbalia.png')}
            style={{width:170,height:70,marginTop:5,marginRight:-400,}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          
           <Text style = {{
            marginTop:80,
           marginLeft:200,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
           <Image
            source={require('../assets/4.png')}
            style={{ 
              width:"35%",
      height:"12%",
      margin:5,
      marginLeft:270,
      marginTop:-23}}></Image>

          <Text style= {{fontSize:20,
      margin:5,
      marginLeft:200,
      marginTop:-1}}>
          𝚃𝚘𝚕𝚒𝚌𝚑𝚘𝚠𝚔𝚒, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
</View>
<TouchableOpacity onPress={() => openWebsite("http://iqbaliajuniorcollege.com/")}>
      <Text style = {{marginTop:140,marginLeft:-270,fontSize:20 ,color:"#DEA5A5",fontWeight:'BOLD',}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>

          <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/sheen.png')}
            style={{width:140,height:90,marginTop:-5,marginRight:-400}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
         
           <Text style = {{
            marginTop:90,
           marginLeft:230,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
           <Image
            source={require('../assets/4.2.png')}
            style={{ 
              width:"40%",
      height:"20%",
      margin:5,
      marginLeft:300,
      marginTop:-30}}></Image>

          <Text style= {{fontSize:18,
      margin:5,
      marginLeft:230,
      marginTop:-10}}>
          𝚃𝚘𝚕𝚒𝚌𝚑𝚘𝚠𝚔𝚒, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
</View>
<TouchableOpacity onPress={() => openWebsite("https://shaheengroup.org/shaheen-junior-college-tolichowki/")}>
      <Text style = {{marginTop:140,marginLeft:-255,fontSize:20 ,color:"#DEA5A5",fontWeight:'BOLD',}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>
    
          <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/joseph.png')}
            style={{width:"60%",height:"40%",marginTop:10,marginRight:-700}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:70,
      fontSize:20,
      marginLeft:530,
      fontWeight:"bold"
      }}>𝚂𝚝 𝙹𝚘𝚜𝚎𝚙𝚑'𝚜  𝙹𝚞𝚗𝚒𝚘𝚛 𝚌𝚘𝚕𝚕𝚎𝚐𝚎 :</Text>
           <Text style = {{
            marginTop:-2,
           marginLeft:540,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
         <Image
            source={require('../assets/3.7.png')}
            style={{ 
              width:"20%",
      height:"13%",
      margin:5,
      marginLeft:620,
      marginTop:-25}}></Image>

        * <Text style= {{fontSize:18,
      margin:5,
      marginLeft:540,
      marginTop:-20}}>
          𝚃𝚘𝚕𝚒𝚌𝚑𝚘𝚠𝚔𝚒, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
</View>
<TouchableOpacity onPress={() => openWebsite("https://yellowpages.fullhyderabad.com/st-joseph-junior-college/toli-chowki/telephone-email-address-reviews/colleges-6239-1.html")}>
      <Text style = {{marginTop:150,marginLeft:-300,fontSize:20 ,color:"#DEA5A5",fontWeight:'BOLD',}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>
<View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/globe.png')}
            style={{width:70,height:70,marginTop:1,marginRight:-1600}}></Image>
            
           {} <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:80,
      fontSize:20,
      marginLeft:1400
      }}>𝙶𝚕𝚘𝚋𝚎 𝚓𝚞𝚗𝚒𝚘𝚛 𝚌𝚘𝚕𝚕𝚎𝚐𝚎 :
      </Text>
      

            <Text style = {{
            marginTop:10,
           marginLeft:1420,
            fontSize:18}}>5 :</Text>
         <Image
            source={require('../assets/5.png')}
            style={{ 
              width:"10%",
      height:"10%",
      margin:5,
      marginLeft:1440,
      marginTop:-25}}></Image>

        * <Text style= {{fontSize:20,
      margin:5,
      marginLeft:1400,
      marginTop:-10}}>
          𝚃𝚘𝚕𝚒𝚌𝚑𝚘𝚠𝚔𝚒, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
</View>
      
          </View>
        
          

         
          </ScrollView>
      
      
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
   
   
    
  });
