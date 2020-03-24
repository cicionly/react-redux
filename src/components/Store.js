import {createStore} from "redux";
import reducer from "./reducers/Counter";
import Counter from '../components/Counter';

let store = createStore(reducer);
let connect = (mapStateToProps,mapDispatchToProps)=>
   (Counter)=>{

   }


export default store;