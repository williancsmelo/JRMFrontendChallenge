import api from './api'

export async function validateLogin(user){
  const {data, status} = await api.post(
    '/Usuario/ValidaUsuario',
    user
  )
  return {data,status}
}