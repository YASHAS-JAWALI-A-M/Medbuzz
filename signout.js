import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput,TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

class signout extends Component{
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({
                    email:user.email
                })
            }
            else{
                this.props.navigation.replace('login');
            }
        })
    } 
 
    userSignout(){
        firebase.auth().signOut().catch(error=> {
            Alert.alert(error.message)  
            this.props.navigation.navigate('login'); 
        }) 
    }
   
    render(){
        return(
        <View style={style={justifyContent:'flex-end'}}>
            <TouchableOpacity onPress={()=>this.userSignout()}><Text>Sign out</Text></TouchableOpacity>
        </View>
        )
    }
}


export default signout;