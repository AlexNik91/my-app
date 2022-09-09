import React from "react";

import { Navigate } from "react-router-dom";
import { connect } from "react-redux/es/exports";

let mapStateToPropsForAuth = (state) => ({
  isAuth: state.authUser.isAuth,
});

export const AuthHoc = (Component) => {
  let WhithAuthNavigate = (props) => {
    if (props.isAuth == false) return <Navigate to={"/login"} />;
    return <Component {...props} />;
  };
  let AuthNavigateComponent = connect(mapStateToPropsForAuth)(
    WhithAuthNavigate
  );
  return AuthNavigateComponent;
};

// const AuthHoc = (Component) => {
//   class authNavigate extends React.Component {
//     render() {
//       if (!this.props.isAuth) return <Navigate to={"/login"} />;
//       return <Component {...this.props} />;
//     }
//   }
//   return authNavigate;
// };

// let mapStateToPropsWhithNavigate = (state) => ({
//   isAuth: state.authUser.isAuth,
// });

// export default connect(mapStateToPropsWhithNavigate)(AuthHoc);
