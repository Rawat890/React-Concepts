import { StyleSheet, View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import TextInputWithLabel from '../components/TextInputWithLabel'
import Button from '../components/Button'
import { Controller, useForm } from 'react-hook-form'

export default function Login() {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmitPress = (data: any) => {
    setAlertVisible(true);
    console.log('Form Data:', data);
  };

  return (
    <View style={styles.container}>

      <Controller
        control={control}
        name="userName"
        defaultValue=""
        rules={{
          required: 'Username is required',
          minLength: { value: 3, message: 'Username must be at least 3 characters' },
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInputWithLabel
              label="Username"
              value={value}
              onChangeText={onChange}
              secureTextEntry={false}
            />
            {errors.userName && (
              <Text style={styles.errorText}>{errors.userName.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="channelName"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInputWithLabel
            label="Channel Name"
            value={value}
            onChangeText={onChange}
            secureTextEntry={false}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{
          required: 'Password is required',
          minLength: { value: 6, message: 'Password must be at least 6 characters' },
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInputWithLabel
              label="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </>
        )}
      />

      <Button title='Submit form' onPress={handleSubmit(onSubmitPress)} />

      {isAlertVisible &&
        <Modal
  visible={isAlertVisible}
  transparent={true}
  animationType="fade"
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <Text style={{ color: 'white' }}>Hello</Text>
      <Button title='Close' onPress={() => setAlertVisible(false)} />
    </View>
  </View>
</Modal>

      }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContainer: {
  width: 250,
  padding: 20,
  backgroundColor: 'gray',
  borderRadius: 10,
  alignItems: 'center',
},

  errorText: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
  },
});
