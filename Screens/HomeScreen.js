import React, { Component } from 'react';
import { StyleSheet, Text, View,SafeAreaView, Platform,TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component(){
render(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <SafeAreaView style={styles.SafeArea}/>
            <View style={styles.titleBar}>
        <Text style={styles.titleText}>ISS Track App</Text>
        </View>
        <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>
            ISS Location
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>
                Meteors
            </Text>
        </TouchableOpacity>
        </View>
    )
}

}

const styles=StyleSheet.create({
SafeArea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0    
},
titleBar:{flex:0.5,justifyContent:"center",alignItems:"center"},
titleText:{fontSize:40,fontWeight:"bold",color:"grey"},
routeCard:{flex:0.25,marginLeft:50,marginTop:50,marginRight:50,borderRadius:20,backgroundColor:'white'},
routeText:{fontSize:35,fontWeight:"bold",color:'black',marginTop:75,paddingLeft:30}
})