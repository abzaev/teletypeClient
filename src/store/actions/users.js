import axios from 'axios';

export function fetchUsers() {

  return async dispatch => {
    try{
      const response = await axios.get('http://localhost:5000/users', {
        headers:
          {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "*",
          }
      });
      dispatch(fetchUsersSuccess(response.data))
    } catch (e) {
      console.log(e)
    }
  }
}

export function fetchUsersSuccess(users) {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: users
  }
}
