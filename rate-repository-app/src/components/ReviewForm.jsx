import { View, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import * as yup from "yup";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

import { CREATE_REVIEW } from "../graphql/mutations";

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
  repositoryName: "",
  ownerName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  repositoryName: yup
    .string()
    .min(3, "Repository name must have more than 3 characters")
    .required("Repository name required!"),
  ownerName: yup
    .string()
    .min(3, "Repository owner username must have more than 3 characters")
    .required("Repository owner username required!"),
  rating: yup
    .number("Rating must be a number")
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100")
    .required("Rating is required!"),
  text: yup.string(),
});

const InputReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.credentials}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating" />
      <FormikTextInput name="text" placeholder="Review" />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Create review</Text>
      </Pressable>
    </View>
  );
};

const ReviewForm = () => {
  const navigate = useNavigate();
  const [createReview] = useMutation(CREATE_REVIEW);

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;

    console.log({ values });

    try {
      const { data, error } = await createReview({
        variables: {
          repositoryName,
          ownerName,
          rating: parseInt(rating),
          text,
        },
      });

      if (error) console.log(error);

      navigate(`/${data.createReview.repositoryId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <InputReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ReviewForm;
