import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from "react-native-dynamic-search-bar";

const Items = () => {
  return (
    <View>
        <View>
        <Image source={require('../assets/akar-icons_search.png')} style={styles.search}></Image>
      </View>

      <View>
        <Image source={require('../assets/Group 3.png')} style={styles.menu}></Image>
      </View>

      <Text style={styles.text1}>Animal Wiki</Text>

    <View style={styles.container}>

    <View style={styles.container1}>
    <Image source={require('../assets/lion 2.png')} style={styles.image}></Image>
    
    </View>
    <View style={styles.container2}>
    <Image source={require('../assets/lion 3.png')} style={styles.image}></Image>
    </View>
    <View style={styles.container3}>
    <Image source={require('../assets/lion 4.png')} style={styles.image}></Image>
    </View>

    </View>

    </View>
  )
}

export default Items

const styles = StyleSheet.create({
    search:{
        marginTop:'14%',
        marginLeft:'4%'
    },
    menu:{
        marginLeft:'90%',
        marginBottom:'10%'
    },
    container:{
        height:700,
        width:400,
        backgroundColor:'#44BFCF',
        marginTop:'20%'
    },
    text1:{
        marginTop:'10%',
        marginLeft:20,
        fontSize:30,
        fontWeight:'bold',
        color:'#057B8B'
    },
    container1:{
        height:90,
        width:300,
        backgroundColor:'white',
        marginTop:'10%',
        borderRadius:15,
        marginLeft:30
    },
    container2:{
        height:90,
        width:300,
        backgroundColor:'white',
        marginTop:'10%',
        borderRadius:15,
        marginLeft:30
    },
    container3:{
        height:90,
        width:300,
        backgroundColor:'white',
        marginTop:'10%',
        borderRadius:15,
        marginLeft:30
    },
    image:{
        marginLeft:165
    },
    lion:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:60
    }
    
})