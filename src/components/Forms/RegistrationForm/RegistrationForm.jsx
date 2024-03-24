import { useDispatch } from "react-redux";
import { registrationUser } from "../../../store/auth/authOperations";
import { useAuth } from "../../../hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ErrorDiv, FormButton, Input, StyledForm } from "../Forms.styled";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { name, email, password } = values;
      try {
        dispatch(registrationUser({ name, email, password }));
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <ErrorDiv>{formik.errors.name}</ErrorDiv> : null}
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
      <FormButton type="submit">Sign Up</FormButton>
      {error && <ErrorDiv>{error}</ErrorDiv>}
    </StyledForm>
  );
};

export default RegistrationForm;
