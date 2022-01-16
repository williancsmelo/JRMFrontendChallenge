import api from './api'

export async function validateLogin(user){
  try{
    const {data, status} = await api.post(
      '/Usuario/ValidaUsuario',
      user
    )
    return {
      data,
      success: status == 200
    }
  } catch (e) {
    console.error(e);
    return {data: null, success: false}
  }
}