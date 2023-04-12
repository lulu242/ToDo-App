import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { reducer } from '../Reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
