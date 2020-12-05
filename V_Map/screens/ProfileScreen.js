import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const ProfileScreen = () => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        username: val,
        check_textInputChange: true
      });
    } else {
      setData({
        username: val,
        check_textInputChange: false
      });
    }
  }

  return (
    <View style={styles.header}>
      <View style={styles.action}>
        <FontAwesome
          name="user-o"
          color="#05375a"
          size={20}
        />
        <TextInput
          placeholder="Nume-Prenume"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
      </View>

      <View style={styles.action}>
        <FontAwesome
          name="drivers-license-o"
          color="#05375a"
          size={20}
        />
        <TextInput
          placeholder="CNP"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
      </View>

      <View style={styles.action}>
        <FontAwesome
          name="venus-mars"
          color="#05375a"
          size={20}
        />
        <TextInput
          placeholder="Sex"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
      </View>

      <View style={styles.action}>
        <FontAwesome5
          name="house-user"
          color="#05375a"
          size={20}
        />
        <TextInput
          placeholder="Adresa domiciliu"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
      </View>

      <View style={styles.action}>
        <MaterialIcons
          name="work-outline"
          color="#05375a"
          size={20}
        />
        <TextInput
          placeholder="Loc de munca"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
      </View>

      <View style={styles.action}>
        <MaterialIcons
          name="contact-phone"
          color="#05375a"
          size={20}
        />
        <TextInput
          placeholder="Numar de telefon"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -15,
    paddingLeft: 10,
    color: '#05375a',
    paddingTop: 10
  },
  action: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 50 : -35,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
    justifyContent : "center"
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
});
