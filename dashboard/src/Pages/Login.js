import React from "react";
import { Button, TextField, Snackbar } from "@material-ui/core/";
import { Formik } from "formik";
import { useHistory } from "react-router";
import MuiAlert from "@material-ui/lab/Alert";
import * as yup from "yup";
import "./Login.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Login() {
  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid Email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="Login">
      <h2 className="header"> Login Page</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (
            values.email === "hruday@gmail.com" &&
            values.password === "hruday123"
          ) {
            console.log(values);
            history.push("/dashboard");
          } else {
            setOpen(true);
          }
          setSubmitting(false);
        }}
      >
        {(props) => {
          const {
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
            errors,
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <div className="text-field">
                <TextField
                  fullWidth
                  name="email"
                  placeholder="Enter Email"
                  label="Email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
              <div className="text-field">
                <TextField
                  name="password"
                  fullWidth
                  label="Password"
                  type="password"
                  onBlur={handleBlur}
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </div>
              <div className="submit">
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // message="Invalid Credentials"
      >
        <Alert onClose={handleClose} severity="error">
          Invalid Credentials
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
