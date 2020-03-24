import { createStore } from 'redux';
import reducer from "./components/reducers/Counter";

let store = createStore(reducer);

export default store;