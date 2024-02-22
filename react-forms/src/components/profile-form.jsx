import { useFormik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Values = styled.pre`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: left;
`;

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subscribe: Yup.boolean(),
  role: Yup.string().required("Required"),
});

const ProfileForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "b",
      subscribe: true,
    },
    // isInitialValid: false,
    validateOnMount: true,
    validationSchema: ProfileSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log("render");
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Field>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
        </Field>
        <Field>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
        </Field>
        <Field>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div>{formik.errors.email}</div>
          )}
        </Field>
        <Field>
          <label>
            <input
              type="checkbox"
              checked={formik.values.subscribe}
              name="subscribe"
              onChange={formik.handleChange}
            />
            Notificaciones
          </label>
        </Field>
        <select name="role" onChange={formik.handleChange} defaultValue={"b"}>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      </Form>
      <Values>
        <pre>{JSON.stringify(formik, null, 2)}</pre>
      </Values>
    </>
  );
};

export { ProfileForm };
