import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { useNavigate } from "react-router-native";

import * as yup from "yup";

import useSignIn from "../hooks/useSignIn";
import useSignUp from "../hooks/useSignUp";

import theme from "../theme";

const styles = StyleSheet.create({
  credentials: {
    backgroundColor: "#ffffff",
  },
  button: {
    margin: 10,
    borderRadius: 4,
    paddingVertical: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: theme.colors.primary,
  },
});

const initValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Username must be >= 1")
    .max(30, "Username must be <= 30")
    .required("Username required"),
  password: yup
    .string()
    .min(5, "Password must be >= 5")
    .max(50, "Password must be <= 50")
    .required("Password required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords should match")
    .required("Password confirmation required"),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.credentials}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirm"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
