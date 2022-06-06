<template>
    <Form @submit.prevent="hndlSubmit">
        <CustomInput name="email" v-model="formData.email" :rules="emailRules"/>
        <CustomInput name="password" v-model="formData.password" :rules="passwordRules"/>
        <CustomButton type="submit"/>
    </Form>
</template>

<script>
import Form from '../share/Form.vue';
import CustomInput from '../share/CustomInput.vue';
import CustomButton from '../share/CustomButton.vue';
import {emailValidation, passwordValidation} from '../../utils/validationRules';

    export default {
      name: 'CustomLogin',
      components: {
          Form,
          CustomInput,
          CustomButton
      },
      data(){
          return{
              formData: {
                  email: "",
                  password: "",
              }
          }
      },
      computed: {
          rules(){
              return {
                  emailValidation,
                  passwordValidation
              }
          },
          emailRules(){
              return [this.rules.emailValidation]
          },
          passwordRules(){
              return [this.rules.emailValidation]
          }
      },
      methods: {
          hndlSubmit(){
              console.log(this.formData)
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>