import { View } from 'react-native'
import React from 'react'
import TextInputWithLabel from '../components/TextInputWithLabel'
import Button from '../components/Button'

export default function Login() {
  return (
    <View>
      <TextInputWithLabel 
      label='Username'
      secureTextEntry={false}
      />
  
      <TextInputWithLabel 
      label='Channel Name'
      secureTextEntry={false}
      />

      <TextInputWithLabel 
      label='Password'
      secureTextEntry={false}
      />

      <Button title='Submit form' />
      
    </View>
  )
}