import axios from 'axios';

export function fetchUsers() {

  return async dispatch => {
    try{
      const response = await axios.get('https://obscure-atoll-08604.herokuapp.com/users', {
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
