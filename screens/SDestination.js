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
    TouchableWithoutFeedback,
    ScrollView,
    SelectList
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';
  import { ScreenWidth, ScreenHeight } from 'react-native-elements/dist/helpers'; 
  import { Entypo } from '@expo/vector-icons';
  import { AntDesign } from '@expo/vector-icons';
  export default class SDestination extends Component {

    constructor() {
         super();
         this.state = {       
             isSelected:false,
              role:''
         }
        
    

         
    }
    render() {
       
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />

          <View style= {{
            width:"90%",
            height:"70%",
            backgroundColor:"white",
            margin:10,
            marginTop:50,
            borderRadius:30
          }}>
          <Text style={styles.select}>𝚂𝚎𝚊𝚛𝚌𝚑 𝚢𝚘𝚞𝚛 𝙳𝚎𝚜𝚝𝚒𝚗𝚊𝚝𝚒𝚘𝚗</Text> 

        

      <View style={{
        width:"90%",
        height:"0.5%",
        marginTop:60,
        marginLeft:10,
        backgroundColor:"#DEE0E0"
      }}>
      <Text style = {{ 
        width:"90%",
        height:"0.5%",
        marginTop:-30,
        marginLeft:10,
        backgroundColor:"#DEE0E0"}}>𝙼𝚎𝚑𝚍𝚒𝚙𝚊𝚝𝚗𝚊𝚖
</Text>
      <TouchableOpacity  style = {{ marginLeft:230,marginTop:-2}}onPress={() =>
            this.props.navigation.navigate("mehdipatnam")}>
          <AntDesign name="rightcircleo" size={24} color="black" />
            
              </TouchableOpacity>
      


          </View>        
          <View style={{
        width:"90%",
        height:"0.5%",
        marginTop:60,
        marginLeft:10,
        backgroundColor:"#DEE0E0"
      }}>
      <Text style = {{ 
        width:"90%",
        height:"0.5%",
        marginTop:-30,
        marginLeft:10,
        backgroundColor:"#DEE0E0"}}>𝚃𝚘𝚠𝚕𝚒𝚌𝚑𝚘𝚠𝚔𝚒
</Text>
      <TouchableOpacity  style = {{ marginLeft:230,marginTop:-2}}onPress={() =>
            this.props.navigation.navigate("Towlichowki")}>
          <AntDesign name="rightcircleo" size={24} color="black" />
            
              </TouchableOpacity>
      


          </View>        
          <View style={{
        width:"90%",
        height:"0.5%",
        marginTop:60,
        marginLeft:10,
        backgroundColor:"#DEE0E0"
      }}>
      <Text style = {{ 
        width:"90%",
        height:"0.5%",
        marginTop:-30,
        marginLeft:10,
        backgroundColor:"#DEE0E0"}}>𝙰𝚖𝚎𝚎𝚛𝚙𝚎𝚝
</Text>
      <TouchableOpacity  style = {{ marginLeft:230,marginTop:-2}}onPress={() =>
            this.props.navigation.navigate("AmeerPet")}>
          <AntDesign name="rightcircleo" size={24} color="black" />
            
              </TouchableOpacity>
      


          </View>        
          <View style={{
        width:"90%",
        height:"0.5%",
        marginTop:60,
        marginLeft:10,
        backgroundColor:"#DEE0E0"
      }}>
      <Text style = {{ 
        width:"90%",
        height:"0.5%",
        marginTop:-30,
        marginLeft:10,
        backgroundColor:"#DEE0E0"}}>𝚂𝚎𝚌𝚞𝚗𝚍𝚛𝚊𝚋𝚊𝚍
</Text>
      <TouchableOpacity  style = {{ marginLeft:230,marginTop:-2}}onPress={() =>
            this.props.navigation.navigate("Secundrebad")}>
          <AntDesign name="rightcircleo" size={24} color="black" />
            
              </TouchableOpacity>
      


          </View>        
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
  
    storyCard: {
      wdth:10,
      height:10,
    margin: RFValue(5),
    backgroundColor: 'white',
    borderRadius: RFValue(5),
    marginTop:30
  },
  select:{
    textAlign: 'center',
      color: "#DEA5A5",
      fontSize: 18,
      fontWeight:'bold',
      marginLeft:-10,
      marginTop:10,
  },
  
  
  });
