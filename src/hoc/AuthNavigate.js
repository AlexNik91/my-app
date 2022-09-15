import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux/es/exports";
// import { useAuthContext } from "./hook/authHook";

let mapStateToPropsForAuth = (state) => ({
  isAuth: state.authUser.isAuth,
});

export const AuthHoc = (Component) => {
  let WhithAuthNavigate = (props) => {
    const location = useLocation();
    if (props.isAuth == false)
      return <Navigate to={"/login"} state={{ from: location.pathname }} />;
    return <Component {...props} />;
  };
  let AuthNavigateComponent = connect(mapStateToPropsForAuth)(
    WhithAuthNavigate
  );
  return AuthNavigateComponent;
};

// export const Hoc = (children) => {
//   const location = useLocation();
//   const { user } = useAuthContext();
//   if (!user) {
//     return <Navigate to={"/login"} state={{ from: location }} />;
//   }
//   return children;
// };

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
