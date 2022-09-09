import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfileThunkCreator,
  getStatusThunkCreator,
  getUpdateStatusThunkCreator,
} from "../../redux/reducers/ProfileReducer";
import withRouter from "./HookProfileContainer";
import { AuthHoc } from "../../hoc/AuthNavigate";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 25334;
    }
    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.getUpdateStatusThunkCreator}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.postState.profile,
  status: state.postState.status,
});

export default compose(
  connect(mapStateToProps, {
    getProfileThunkCreator,
    getStatusThunkCreator,
    getUpdateStatusThunkCreator,
  }),
  withRouter
)(ProfileContainer);
