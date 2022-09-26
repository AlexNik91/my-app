import React from "react";
import { useState, useEffect } from "react";

const ProfileStatusWhisHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const DeActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || status || "No status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            value={status}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={DeActivateEditMode}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWhisHooks;
