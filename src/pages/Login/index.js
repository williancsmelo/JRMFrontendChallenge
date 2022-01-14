import React from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Image,
  Text,
  TextInput
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

export default function (){
  return(
    <KeyboardAvoidingView style = {styles.mainView}>
      <ScrollView contentContainerStyle = {styles.mainScrollView}>
        <View style = {styles.form}>
          <Image
            style={styles.imageLogo}
            source={require('~/assets/images/Logo.png')}
          />
          <Text style = {styles.welcomeText}>
            BEM VINDO
          </Text>
          <TextInput
            placeholder = 'Email'
            style = {[styles.input, styles.emailInput]}
          />
          <TextInput
            placeholder = 'Senha'
            style = {[styles.input, styles.senhaInput]}
          />
          <Text style = {styles.recoverText}>
            Recuperar Senha
          </Text>
          <TouchableOpacity style = {styles.login}>
            <Text style = {styles.loginText}>
              ACESSAR
            </Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.signInView}>
          <Text>Não tem conta?</Text>
          <Text style = {styles.signInText}>Crie uma nova agora</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}