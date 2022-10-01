import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {} from "../../redux/reducers/UsersReducer";

import IsLoader from "../commen/commenFile/loader.jsx";
import { compose } from "redux";
import { AuthHoc } from "../../hoc/AuthNavigate";
import { isFetchingSelector } from "../../redux/reducers/user-selectors";
import NavBar from "./NavBar";

class NavBarContainer extends PureComponent {
  render() {
    return (
      <>
        {/* {this.props.isFetching ? <IsLoader /> : null} */}
        <NavBar id={this.props.id} imgData={this.props.imgData} />
      </>
    );
  }
}

let MapStateToProps = (state) => {
  return {
    isFetching: isFetchingSelector(state),
    id: state.dialogState.messageData,
    imgData: state.friendState.imgData,
  };
};

export default compose(connect(MapStateToProps, {}), AuthHoc)(NavBarContainer);
