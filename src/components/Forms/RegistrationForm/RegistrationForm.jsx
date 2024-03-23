import { useDispatch } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { setUser } from "../../../store/auth/authSlice";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const { name, email, password } = values;

    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

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
        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
