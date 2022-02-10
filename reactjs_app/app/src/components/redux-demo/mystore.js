import { createStore } from 'redux';
import playerReducer from './playerReducer';
import PlayerReducerUsingImmutableJSV2 from './PlayerReducerUsingImmutableJSV2.js';

const store = createStore(
    PlayerReducerUsingImmutableJSV2,
    playerReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;