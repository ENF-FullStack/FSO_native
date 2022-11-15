/* eslint-disable no-unused-vars */
import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { SignInForm } from '../../components/SignInForm'

describe('SignInTests', () => {
    describe('SignInForm', () => {
        it('call onSubmit with correct args successfully', async () => {
            const onSubmit = jest.fn()

            const { debug, getByPlaceholderText, getByText } = render(
                <SignInForm onSubmit={onSubmit} />
            )

            fireEvent.changeText(getByPlaceholderText('Username'), 'kalle')
            fireEvent.changeText(getByPlaceholderText('Password'), 'password')
            fireEvent.press(getByText('Sign in'))

            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1)

                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password'
                })
            })
        })
    })
})