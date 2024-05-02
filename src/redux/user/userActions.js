// export const fetchUsers = () => () => {};

import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    // dispatch({ type: FETCH_USERS_REQUEST });
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data })
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((err) =>
        // dispatch({ type: FETCH_USERS_FAILURE, payload: err.message })
        dispatch(fetchUsersFailure(err.message))
      );
  };
}

// think => past tense (thought) => delay (middleware)
