import { useFormik } from "formik";
import * as Yup from "yup";

import { useAuth } from "../../../hooks/useAuth";

import { ErrorDiv, FormButton, Input, Label, StyledForm } from "../Forms.styled";
import {
  Content,
  ImageWrapper,
  Options,
  RadioWrapper,
  StyledRadioButton,
  TeacherWrapper,
  TrialWrapper,
} from "./TrialForm.styled";

const TrialForm = ({ teacher }) => {
  const { avatar_url, name, surname } = teacher;

  const { error } = useAuth();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\+(?:[0-9]){6,14}[0-9]$/, "Invalid phone number. Please use format: +1234567890")
      .required("Phone is required"),
    reason: Yup.string().required("Please select a reason for learning English"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      reason: "Career and business",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { name, email, phone, reason } = values;

      console.log("values", values);
      try {
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <TrialWrapper>
      <TeacherWrapper>
        <ImageWrapper>
          <img src={avatar_url} alt={`avatar of ${name} ${surname}`} />
        </ImageWrapper>
        <Content>
          <p>Your teacher</p>
          <h3>{`${name} ${surname}`}</h3>
        </Content>
      </TeacherWrapper>

      <Options>
        <h3>What is your main reason for learning English?</h3>

        <RadioWrapper>
          <div>
            <StyledRadioButton
              id="career"
              name="reason"
              value="Career and business"
              checked={formik.values.reason === "Career and business"}
              onChange={formik.handleChange}
            />
            <label htmlFor="career">Career and business</label>
          </div>
          <div>
            <StyledRadioButton
              id="lesson"
              name="reason"
              value="Lesson for kids"
              checked={formik.values.reason === "Lesson for kids"}
              onChange={formik.handleChange}
            />
            <label htmlFor="lesson">Lesson for kids</label>
          </div>
          <div>
            <StyledRadioButton
              id="abroad"
              name="reason"
              value="Living abroad"
              checked={formik.values.reason === "Living abroad"}
              onChange={formik.handleChange}
            />
            <label htmlFor="abroad">Living abroad</label>
          </div>
          <div>
            <StyledRadioButton
              id="exam"
              name="reason"
              value="Exams and coursework"
              checked={formik.values.reason === "Exams and coursework"}
              onChange={formik.handleChange}
            />
            <label htmlFor="exam">Exams and coursework</label>
          </div>
          <div>
            <StyledRadioButton
              id="culture"
              name="reason"
              value="Culture, travel or hobby"
              checked={formik.values.reason === "Culture, travel or hobby"}
              onChange={formik.handleChange}
            />
            <label htmlFor="culture">Culture, travel or hobby</label>
          </div>
        </RadioWrapper>
      </Options>

      <StyledForm onSubmit={formik.handleSubmit}>
        <Label>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorDiv>{formik.errors.name}</ErrorDiv>
          ) : null}
        </Label>
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
            type="tel"
            name="phone"
            placeholder="Phone"
            pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <ErrorDiv>{formik.errors.phone}</ErrorDiv>
          ) : null}
        </Label>
        <FormButton type="submit">Book</FormButton>
        {error && <ErrorDiv>{error}</ErrorDiv>}
      </StyledForm>
    </TrialWrapper>
  );
};

export default TrialForm;
