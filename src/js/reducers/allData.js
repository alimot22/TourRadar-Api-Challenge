export const allDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_DATA_REQUEST':
      return state;
    case 'FETCH_ALL_DATA_SUCCESS':
      return (action.payload);
    case 'FETCH_ALL_DATA_FAILURE':
      return state;
    default:
      return state;
  }
};
