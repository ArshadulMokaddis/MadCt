import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const HomeScreen = (props:any) => {
  return (
    <View>
        <View>
        <Image source={require('../assets/Group 2.png')} style={styles.image}></Image>
      </View>
      <Text style={styles.text1}>Animal Wiki</Text>
      <Text style={styles.text2}>What do you know about the</Text>
      <Text style={styles.text2}>Animal Wiki ?</Text>
      <TouchableOpacity style={styles.button} onPress={() =>props.navigation.navigate("Login")}>
        <Text style={styles.text4}>Get started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    text1:{
        marginTop:'10%',
        alignSelf:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'#057B8B'

        


    },
    image:{
        height:'50%',
        width:'50%',
        marginLeft:'68%',
        marginTop:'10%',
        opacity:0.5,
        
        

    },
    text2:{
        alignSelf:'center',
        marginTop:'2%',
        color:'#057B8B'
    },
    text3:{
        alignSelf:'center',
        color:'#057B8B'
    },
    button:{
        height:50,
        width:180,
        backgroundColor:'#2AB8CB',
        alignSelf:'center',
        marginTop:'5%',
        borderRadius:20

    },
    text4:{
        alignSelf:'center',
        marginTop:12,
        color:'white',
        fontSize:16
    }
})