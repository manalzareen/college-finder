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
    Linking,
    KeyboardAwareScrollView
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';
  import { ScreenWidth, ScreenHeight } from 'react-native-elements/dist/helpers';
  export default class Mehdipatnam extends Component {
 constructor(props) {
    super(props)
 }
  
    
    render() {
      function openWebsite(websiteLink:String){
      Linking.openURL(websiteLink)  
    }
      return (

      
      <ScrollView >   
     
         <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />
        
         

    
    <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:170 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/ms.png')}
            style={{width:"80%",height:"30%",marginTop:1,marginRight:-400}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          
           <Text style = {{
            marginTop:70,
           marginLeft:70,
            fontSize:18,
            }}> 𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
           <Image
            source={require('../assets/4.png')}
            style={{ 
              width:"45%",
      height:"19%",
      margin:5,
      marginLeft:150,
      marginTop:-30}}></Image>

          <Text style= {{fontSize:18,
      margin:5,
      marginLeft:70,
      marginTop:-1}}>
          𝙼𝚎𝚑𝚍𝚒𝚙𝚊𝚝𝚗𝚊𝚖, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
      <TouchableOpacity onPress={() => openWebsite("https://mseducationacademy.in/about-us/ms-junior-college/")}>
      <Text style={{fontSize:20,marginTop:-5,marginLeft:70,fontWeight:"bold",color:"#DEA5A5"}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
</View>
      
          </View>
        

          <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:170 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/x.png')}
            style={{width:250,height:60,marginTop:1,marginRight:-400}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          
           <Text style = {{
            marginTop:70,
           marginLeft:80,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
           <Image
            source={require('../assets/3.7.png')}
            style={{ 
              width:"45%",
      height:"13%",
      margin:5,
      marginLeft:160,
      marginTop:-26}}></Image>

          <Text style= {{fontSize:18,
      margin:5,
      marginLeft:80,
      marginTop:3}}>
          𝙼𝚎𝚑𝚍𝚒𝚙𝚊𝚝𝚗𝚊𝚖, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
 <TouchableOpacity onPress={() => openWebsite("https://www.justdial.com/Hyderabad/Vani-College-For-Women-Above-Sbi-Bank-Mehdipatnam-X-Roads-Mehdipatnam/040P3000975_BZDET")}>
      <Text style={{fontSize:20,marginTop:-3,marginLeft:80,color:"#DEA5A5",fontWeight:'BOLD',}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
</View>
      
          </View>

          <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:175 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/stlogo.webp')}
            style={{width:60,height:60,marginTop:10,marginRight:-850}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:65,
      fontSize:20,
      marginLeft:780,fontWeight:"bold"
      }}>𝚂𝚝 𝙰𝚗𝚗𝚜 𝙲𝚘𝚕𝚕𝚎𝚐𝚎 𝚏𝚘𝚛 𝚆𝚘𝚖𝚎𝚗𝚜</Text>
           <Text style = {{
            marginTop:-6,
           marginLeft:800,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐  :</Text>
         <Image
            source={require('../assets/4.2.png')}
            style={{ 
              width:"16%",
      height:"12%",
      margin:5,
      marginLeft:870,
      marginTop:-26}}></Image>

        * <Text style= {{fontSize:18,
      margin:5,
      marginLeft:800,
      marginTop:-17}}>
          𝙼𝚎𝚑𝚍𝚒𝚙𝚊𝚝𝚗𝚊𝚖, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
<TouchableOpacity onPress={() => openWebsite("http://www.stannscollegehyd.com/")}>
      <Text style = {{marginTop:-4,marginLeft:800,fontSize:20 ,color:"#DEA5A5",fontWeight:'BOLD',}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
</View>


      
          </View>
<View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:170 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/jn.jfif')}
            style={{width:80,height:80,marginTop:5,marginRight:-800}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          

            <Text style = {{
            marginTop:80,
           marginLeft:700,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐  :</Text>
         <Image
            source={require('../assets/4.2.png')}
            style={{ 
              width:"20%",
      height:"13%",
      margin:5,
      marginLeft:770,
      marginTop:-22}}></Image>

        * <Text style= {{fontSize:18,
      margin:5,
      marginLeft:700,
      marginTop:-20}}>
          𝙼𝚎𝚑𝚍𝚒𝚙𝚊𝚝𝚗𝚊𝚖, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
</View>
<TouchableOpacity onPress={() => openWebsite("https://www.junaidsjuniorcollege.com/")}>
      <Text style = {{marginTop:130,marginLeft:-260,fontSize:20 ,color:"#DEA5A5",fontWeight:'BOLD',}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>
        
          

         
         

          </ImageBackground>
           </ScrollView>
          
        
          
          
         
      
      
       
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
    keyboard:{
      flex:1,
       height:ScreenHeight,
     width:ScreenWidth,
     borderRadius:"3px",
    }

   
   
    
  });
