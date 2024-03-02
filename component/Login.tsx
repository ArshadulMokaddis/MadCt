import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'


const HomeScreen = (props:any) => {
  return (
    <View>
        <View>
        <Image source={require('../assets/Group 2.png')} style={styles.image}></Image>
      </View>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>Back!</Text>
      <TextInput
          style={styles.styleText}
          placeholder="    Email"
        />

<TextInput
          style={styles.styleText2}
          placeholder="    Password"
        />
      <TouchableOpacity style={styles.button} onPress={() =>props.navigation.navigate("Items")}>
        <Text style={styles.text4}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1} onPress={() =>props.navigation.navigate("Login")}>
        <Text style={styles.text5}>Get started</Text>
      </TouchableOpacity>

      <Text style={styles.text6}>Forget your password?</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    text1:{
        marginTop:'1%',
        fontSize:30,
        fontWeight:'bold',
        color:'#057B8B',
        marginLeft:20
    },
    text2:{
        marginTop:'1%',
        fontSize:30,
        fontWeight:'bold',
        color:'#057B8B',
        marginLeft:20

        


    },
    image:{
        height:'50%',
        width:'50%',
        marginLeft:'68%',
        marginTop:'10%',
        
        

    },
    text3:{
        alignSelf:'center',
        color:'#057B8B'
    },
    button:{
        height:40,
        width:200,
        backgroundColor:'#2AB8CB',
        alignSelf:'center',
        marginTop:'5%',
        borderRadius:20

    },
    button1:{
        height:40,
        width:200,
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:'1%',
        borderRadius:20,
        borderColor:'#2AB8CB',
        borderWidth:2

    },
    text4:{
        alignSelf:'center',
        marginTop:12,
        color:'white',
        fontSize:16
    },
    text5:{
        alignSelf:'center',
        marginTop:8,
        color:'#2AB8CB',
        fontSize:16
    },
    styleText:{
        height:40,
        width:260,
        backgroundColor:'white',
        alignSelf:'center',
        borderColor:'#2AB8CB',
        borderWidth:2

    },
    styleText2:{
        height:40,
        width:260,
        backgroundColor:'white',
        alignSelf:'center',
        borderColor:'#2AB8CB',
        borderWidth:2,
        marginTop:'1%'

    },
    text6:{
        alignSelf:'center',
        color:'#2AB8CB',
        fontSize:16
    }
})