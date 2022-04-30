import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.menu}>
     <Image source={require('./assets/menu.png')} style={styles.searchMenu}/>
      <Text style={styles.menuText}>メニュー</Text>
      <Image source={require('./assets/mountainsun.png')} style={styles.sunMou}/>
      <Text style={styles.popularText}>Popular</Text>
     </View>
     <View style={styles.menuItems}>
      <Image source={require('./assets/sushi.png')} style={styles.menuItemimg}/>
      
      <Text style={styles.menuItemNum}>
       01
      </Text>
      <Text style={styles.menuItemText}>
       Sushi
      </Text>
     </View>

     <View style={styles.menu2}>
     <Image source={require('./assets/sushi.png')} style={styles.menuItemimg}/>
      
      <Text style={styles.menuItemNum}>
       02
      </Text>
      <Text style={styles.menuItemText}>
       Ramen
      </Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    
  },

   menu:{
    fontWeight:"bold",
    paddingBottom:650,
    paddingLeft:40
   },
 searchMenu:{
   height:30,
   width:30,
   marginLeft:-30,
   marginTop:180,
 },
 menuText:{
  color:'white',
  marginTop:-25
  
 },
 sunMou:{
   height:250,
   width:250,
   marginLeft:180,
   marginTop:-140
 },
  popularText:{
  color:'white',
  fontSize:30,
  marginLeft:-30,
  marginTop:-40
 },
 menuItems:{
   flex:1,
  backgroundColor: '#ff3250',
    position: 'absolute',
    left: 20,
    bottom: 160,
    width: '75%',
    height: '40%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    margin:38
 },
 menuItemimg:{
   height:250,
   width:200,
  marginRight:-100,
  marginBottom:-80
 },
 menuItemText:{
  fontSize:35,
  paddingRight:180,
  paddingTop:-10
 },
 menuItemNum:{
  fontSize:35,
  paddingRight:180,
  paddingBottom:100,
  marginRight:30,
  marginTop:-150
 },
 menu2:{
   flex:1,
   backgroundColor: 'blue',
    position: 'absolute',
    left: 45,
    bottom: 18,
    width: 325,
    height: 200,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    marginBottom:-60
 }
});
