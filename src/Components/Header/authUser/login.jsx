import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  requiredField,
  maxLengthCreator,
  minLengthCreator,
} from "../../../utils/validators/validators";
import { Input } from "../../commen/commenFile/Formscontrols/FormsControl";
import { loginThunkCreator } from "../../../redux/reducers/authReducer";
import { Navigate } from "react-router-dom";
import "./../../commen/commenFile/Formscontrols/FormsControl.css";

import { compose } from "redux";
import withRouter from "../../Profile/HookProfileContainer";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="email"
          component={Input}
          name={"email"}
          validate={[requiredField, maxLengthCreator(50), minLengthCreator(5)]}
        />
      </div>
      <div>
        <Field
          placeholder="password"
          component={Input}
          name={"password"}
          type={"password"}
          validate={[requiredField, maxLengthCreator(20), minLengthCreator(5)]}
        />
      </div>
      <div>
        <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
        remember me
      </div>
      {error && <div className="error">{error}</div>}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && <Field component={Input} name={"captcha"} />}
      <div>
        <button type="submit">login</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunkCreator(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) return <Navigate to={"/profile/25334"} />;

  return (
    <div>
      <h1>Login</h1>

      <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isAuth: state.authUser.isAuth, captchaUrl: state.authUser.captcha };
};

export default compose(
  connect(mapStateToProps, {
    loginThunkCreator,
  }),
  withRouter
)(Login);
