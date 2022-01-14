import {StyleSheet} from 'react-native'
import {general, colors} from '~/styles'

const styles = StyleSheet.create({
  ...general,

  form: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    flex: 1
  },
  imageLogo: {
    height: 200,
    width: 200,
  },
  welcomeText: {
    fontSize: 30,
    fontFamily: 'Walkway Condensed SemiBold',
    letterSpacing: 8
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
    width: '100%',
    paddingLeft: 20,
    height: 60,
  },
  emailInput: {
    marginTop: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  senhaInput:{
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  recoverText:{
    marginTop: 10,
    alignSelf: 'flex-end',
    marginRight: 10
  },
  login:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.theme,
    height: 60,
    width: '100%',
    borderRadius: 100,
    elevation: 20,
    shadowColor: colors.theme,
    marginTop: 20,
    marginBottom: 40
  },
  loginText:{
    flex: 1,
    fontWeight: 'bold',
    color: colors.background,
    letterSpacing: 0.2,
    textAlign: 'center'
  },
  signInView:{
    alignItems:'center',
    alignSelf:'center',
    marginBottom: 30
  },
  signInText: {
    color: colors.themeSecondary
  }
})

export default styles;