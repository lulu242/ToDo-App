import axios from 'axios';

export const Read = (data) => {
  return {
    type: 'READ',
    payload: data,
  };
};

export const getData = () => {
  return function (dispatch) {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        const data = res.data.slice(0, 5);
        dispatch(Read(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
