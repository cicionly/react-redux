import React from 'react';
import { INCREASE, DECREASE } from './ActionTypes';
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {number:state.number}
}

let mapDispatchToProps = (dispatch) =>{
    return {
        ADD: ()=>dispatch({type:INCREASE,amount:2}),
        DEL: ()=>dispatch({type:DECREASE,amount:2})
    }
}

class Counter extends React.Component {
    render() {
        return <div className="container">
            <button style={{ marginRight: "5px" }} onClick={this.props.ADD} className="btn btn-primary btn-xs">+</button>
            {this.props.number}
            <button style={{ marginLeft: "5px" }} onClick={this.props.DEL} className="btn btn-primary btn-xs" >-</button>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);