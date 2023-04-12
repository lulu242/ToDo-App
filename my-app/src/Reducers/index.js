const initialState = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'READ':
      return [...action.payload];

    default:
      return state;
  }
};
