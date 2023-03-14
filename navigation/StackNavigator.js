import React from 'react';
import Home from "../screens/Home";
import Mehdipatnam from "../screens/mehdipatnam";
import SDestination from "../screens/SDestination";
import Towlichowki from "../screens/Towlichowki";
import AmeerPet from "../screens/AmeerPet";
import Secundrebad from "../screens/Secundrebad";
import MpcInfo from "../screens/MpcInfo";
import BpcInfo from "../screens/BpcInfo";
import CecInfo from "../screens/CecInfo";
import MecInfo from "../screens/MecInfo";
import HecInfo from "../screens/HecInfo";
import MbipcInfo from "../screens/MbipcInfo"
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        backgroundColor:'black' ,
          shadowOpacity: 0,
          elevation: 0,
          height:10,
      }}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown:false}} />
      <Stack.Screen name="SDestination" component={SDestination} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
       <Stack.Screen name="mehdipatnam" component={Mehdipatnam} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
       <Stack.Screen name="Towlichowki" component={Towlichowki} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
       <Stack.Screen name="AmeerPet" component={AmeerPet} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
       <Stack.Screen name="Secundrebad" component={Secundrebad} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
       <Stack.Screen name="MpcInfo" component={MpcInfo} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
       <Stack.Screen name="BpcInfo" component={BpcInfo} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
       <Stack.Screen name="CecInfo" component={CecInfo} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
        <Stack.Screen name="MecInfo" component={MecInfo} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
        <Stack.Screen name="HecInfo" component={HecInfo} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>
        <Stack.Screen name="MbipcInfo" component={MbipcInfo} options={{title:"𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙿𝚘𝚒𝚗𝚝",headerBackTitleStyle:{fontSize:20},headerShown:true}}/>


       
    </Stack.Navigator>
  );
};

export default StackNavigator;