import * as yup from 'yup'

export default yup.object().shape({
  email: yup
    .string()
    .email('Email inválido')
    .nullable(),
  bothRequired: yup
    .mixed()
    .test(
      'bothRequiredValidation',
      'Ambos os campos são obrigatórios',
      function (){
        return (
          this.parent.email != null && this.parent.email != '' &&
          this.parent.senha != null && this.parent.senha != ''
        )
      }
    )
})