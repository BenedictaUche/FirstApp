import { StyleSheet, View, TextInput, Button } from "react-native";
import { useFormik } from "formik";
import Text from "./Text";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "#d73a4a",
    marginBottom: 5,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const [signInFunction] = useSignIn();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { username, password } = values;

      try {
        const response = await signInFunction({ username, password });
        console.log(response)

        if (response && response.data) {
          console.log("Access Token:", response.data.authenticate.accessToken);
        } else if (response.error) {
          console.log("Sign-in error:", response.error.message);
        } else {
          console.log("No data returned from signIn");
        }
      } catch (e) {
        console.log("Sign-in error:", e);
      }
    },
  });

  const getInputStyle = (field) => [
    styles.input,
    formik.touched[field] && formik.errors[field] && { borderColor: "#d73a4a" },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={() => formik.setFieldTouched("username")}
        style={getInputStyle("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={() => formik.setFieldTouched("password")}
        secureTextEntry
        style={getInputStyle("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Button title="Sign In" onPress={formik.handleSubmit} />
    </View>
  );
};

export default SignIn;
