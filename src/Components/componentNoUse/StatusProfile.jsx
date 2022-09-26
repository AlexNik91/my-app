import React from "react";

class ProfileStatus extends React.Component {
  // statusInputRef = React.createRef();

  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  // this.state.editMode = true;
  // this.forceUpdate() -- лучше избегать данный metod
  DeActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
    // this.statusInputRef.current.value
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status)
      this.setState({
        status: this.props.status,
      });
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || this.state.status || "No status"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              // ref={this.statusInputRef}
              onChange={this.onStatusChange}
              onBlur={this.DeActivateEditMode}
              autoFocus={true}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
// import React from "react";
// let state = {
//   editMode: true,
// };

// // let activateEditMode = () => {
// //  let setState = ({
// //     editMode: true,
// //   });
// // };

// // let DeActivateEditMode = () => {
// //   setState({
// //     editMode: false,
// //   });
// // };

// const ProfileStatus = (props) => {
//   debugger;
//   console.log(props);
//   return (
//     <>
//       {state.editMode && (
//         <div>
//           <span>{props.status}</span>
//         </div>
//       )}
//       {state.editMode && (
//         <div>
//           <span>
//             <input
//               // onBlur={DeActivateEditMode}
//               autoFocus={true}
//               value={props.status}
//             />
//           </span>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProfileStatus;
