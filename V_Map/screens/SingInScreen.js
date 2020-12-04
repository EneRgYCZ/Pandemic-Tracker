import React from "react";
import {
    View,
    Text,
    StyleSheet, 
    TextInput,
    L
} from "react-native" 

import FontAwsome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient"
import Feather from "react-native-vector-icons/Feather";
import { color } from "react-native-reanimated";

export default class SinginComponent extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Text style={styles.text_header}>Welcome</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer}>E-Mail</Text>
                    <View style = {styles.action}>
                        <FontAwsome
                            name = "user-o"
                            color = "#05375a"
                            size = {20}
                        />
                        <TextInput
                            placeholder = "Your Email..."
                            style = {styles.text_input}
                        />
                        <Feather
                            name = "check-circle"
                            color = "green"
                            size = {20}
                        />
                    </View>

                    <Text style={[styles.text_footer,{
                        marginTop : 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwsome
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password..."
                            style={styles.text_input}
                        />
                        <Feather
                            name="eye-off"
                            color="gray"
                            size={20}
                        />
                    </View>
                    <Text style = {{color : "#009bd1", marginTop : 15 }}>ForgotPassword</Text>
                    <View style = {styles.button}>
                        <LinearGradient
                            colors = {["#5db8fe", "#39cff2"]}
                            style = {styles.singIn}>
                            <Text>Sign In</Text>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#05375a"
    },
    header : {
        flex : 1,
        justifyContent : "center",
        paddingHorizontal : 20,
        paddingBottom : 50
    },
    footer : {
        flex : 2,
        backgroundColor : "white",
        borderTopEndRadius : 30,
        borderTopRightRadius : 30,
        borderTopLeftRadius: 30,
        paddingHorizontal : 20,
        paddingBottom : 30
    },
    text_header : {
        color : "white",
        fontWeight : "bold",
        fontSize : 30,
    },
    text_footer : {
        paddingTop : 20,
        color: "#05375a",
        fontSize : 18
    }, 
    action : {
        flexDirection : "row",
        marginTop : 10,
        borderBottomWidth : 1,
        borderBottomColor : "#f2f2f2",
        paddingBottom : 5
    },
    text_input : {
        flex : 1,
        paddingLeft : 10,
        color: "#05375a"
    },
    button : {
        alignItems : "center",
        marginTop : 50
    },
    singIn : {
        width : "100%",
        height : "50%",
        justifyContent : "center",
         alignItems : "center",
         borderRadius : 10
    }
})