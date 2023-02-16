import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { IUser } from "../../interfaces/user";
import { login } from "../../services/apiAuth";
import { authorization } from "../../actions";

const FormSignIn: FunctionComponent = () => {
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setError(""), 5000);
  }, [error]);

  const click = async (body: Pick<IUser, "email" | "password">) => {
    try {
      const data = await login(body);
      console.log(data);
      if (data) {
        dispatch(authorization(data, true));
        setTimeout(() => navigate("/"), 3000);
      }
    } catch (e) {
      setError(e as string);
    }
  };

  return (
    <div className="sign__content">
      <h2 className="sign__title">Sign In</h2>
      <div className="sign__text">
        To Keep connected with us please login with your personal info.
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Incorrect email")
            .required("Required field"),
          password: Yup.string()
            .min(4, "Minimum 4 symbols")
            .max(10, "Maximum 10 symbols")
            .required("Required field"),
        })}
        onSubmit={(values) => {
          click(values);
        }}
      >
        <Form className="form">
          <Field
            className="field"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage className="error" name="email" component="div" />
          <Field
            className="field"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage className="error" name="password" component="div" />
          <button className="sign__button" type="submit">
            Sign In
          </button>
          {error && <div className="error-tooltip">{error}</div>}
        </Form>
      </Formik>
      <div className="sign__text-link">
        Create an Account{" "}
        <Link className="text-link" to="/sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default FormSignIn;
