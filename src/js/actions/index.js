import axios from 'axios';

export function getAllData(callback) {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_ALL_DATA_REQUEST',
    });
    axios.get('https://api.myjson.com/bins/18x6yt')
      .then((response) => {
        dispatch({
          type: 'FETCH_ALL_DATA_SUCCESS',
          payload: response.data,
        });
        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
  };
}
