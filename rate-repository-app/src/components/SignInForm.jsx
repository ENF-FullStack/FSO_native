/* eslint-disable no-unused-vars */
import { Text, Pressable, View, StyleSheet } from 'react-native'
import * as yup from 'yup'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'

import theme from '../theme'

const styles = StyleSheet.create({
    credentials: {
        backgroundColor: '#ffffff'
    },
    button: {
        margin: 10,
        borderRadius: 4,
        paddingVertical: 10,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
        color: '#ffffff',
        backgroundColor: theme.colors.primary
    }
})

const initValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must have more than 3 characters')
      .required('Username required!'),
    password: yup
      .string()
      .min(3, 'Password must have more than 3 characters')
      .required('Password required!'),
});

const CheckForm = ({ onSubmit }) => {
    return (
        <View style={styles.credentials}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            <Pressable onPress={onSubmit}>
                <Text style={styles.button}>Sign in</Text>
            </Pressable>
        </View>

    )
}

const SignInForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <CheckForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignInForm;