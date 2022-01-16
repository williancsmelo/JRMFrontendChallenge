import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  ToastAndroid,
  Animated
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import styles from './styles'
import LoginValidationSchema from './validationSchema'

import {colors} from '~/styles'
import { validateLogin } from '~/services/comunicacao'

export default function (){
  const [title, setTitle] = useState({})
  const [responseHeight] = useState(new Animated.Value(0))
  function showResponse(response){
    setTitle(response)
    Animated.timing(
      responseHeight, {
        toValue: 60, 
        duration: 300,
        useNativeDriver: false
      },
    ).start()
    setTimeout(() => {
      Animated.timing(
        responseHeight, {
          toValue: 0, 
          duration: 300,
          useNativeDriver: false
        }
      ).start()
    }, 2000)
  }
  async function login(values){
    const response = await validateLogin(values)
    if(!response.success){
      ToastAndroid.show('Erro ao se conectar com o servidor', ToastAndroid.SHORT)
      return
    }
    showResponse(response.data)
  }
  const titleColors = {
    101: colors.error,
    100: colors.theme
  }
  return(
    <KeyboardAvoidingView style = {styles.mainView}>
      <ScrollView contentContainerStyle = {styles.mainScrollView}>
        <Formik
          initialValues={{
            email: null,
            senha: null
          }}
          validateOnChange = {false}
          validateOnBlur
          validationSchema={LoginValidationSchema}
          onSubmit={login}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched
          }) => (<>
            <Animated.View 
              style = {[
                styles.titleView, 
                {
                  backgroundColor: titleColors[title.id],
                  height: responseHeight
                }
              ]}
            >
              <Text style = {styles.titleText}>
                {title.mensagem}
              </Text>
            </Animated.View>
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
                value = {values.email}
                onChangeText={handleChange('email')}
                autoCorrect = {false}
                onBlur={handleBlur('email')}
              />
              <TextInput
                placeholder = 'Senha'
                style = {[styles.input, styles.senhaInput]}
                value = {values.senha}
                onChangeText={handleChange('senha')}
                autoCorrect = {false}
                secureTextEntry
                onBlur={handleBlur('senha')}
              />
              <Text style = {styles.errorText}>
                {(
                  errors.email && 
                  touched.email ? 
                  errors.email : null
                ) || (
                  errors.bothRequired && 
                  touched.senha ?
                  errors.bothRequired : null)}
              </Text>
              <Text 
                style = {styles.recoverText}
                onPress={() => console.log(touched)}
              >
                Recuperar senha
              </Text>
              <TouchableOpacity 
                style = {styles.loginButton}
                onPress={handleSubmit}
                activeOpacity={0.6}
              >
                <Text style = {styles.loginText}>
                  ACESSAR
                </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.signInView}>
              <Text>Não tem conta?</Text>
              <Text 
                style = {styles.signInText}
                onPress={() => console.log('Criar nova conta')}
              >
                Crie uma nova agora
              </Text>
            </View>
          </>)}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}