import { useDispatch } from "react-redux";

import { loginUser } from "../../../store/auth/authOperations";
import { useAuth } from "../../../hooks/useAuth";

import { useFormik } from "formik";
import * as Yup from "yup";

import { ErrorDiv, FormButton, Input, Label, StyledForm } from "../Forms.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      try {
        dispatch(loginUser({ email, password }));
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <StyledForm autoComplete="off" onSubmit={formik.handleSubmit}>
      <Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorDiv>{formik.errors.email}</ErrorDiv>
        ) : null}
      </Label>
      <Label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorDiv>{formik.errors.password}</ErrorDiv>
        ) : null}
      </Label>
      <Label>
        <FormButton type="submit">Log In</FormButton>
        {error && <ErrorDiv>{error}</ErrorDiv>}
      </Label>
    </StyledForm>
  );
};

export default LoginForm;
