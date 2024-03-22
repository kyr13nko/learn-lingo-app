import { useDispatch } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { setUser } from "../../../store/user/userSlice";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;

    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      console.log("user", user);
      dispatch(
        setUser({
          user: { name: user.displayName, email: user.email },
          token: user.accessToken,
          id: user.uid,
        })
      );
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit"> Log In </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
