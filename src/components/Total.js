

import React, { useState} from 'react';
import { connect } from "react-redux";
import {initialCar} from '../actions/carFeatureAction'


const Total = props => {
  const [total] = useState(props)
  console.log(total)
  
  return (
    <div className="content">
      <h4>Total Amount: ${total.price + total.additionalPrice}</h4>
    </div>
  );
};

const mapPropsToState=(state)=>{
  
  return {
    price: state.car.price,
    additionalPrice:state.additionalPrice
    
  }

}

const mapDispatchToProps=(dispatch)=>{
  return {
    initialCar: total => dispatch(initialCar(total))
  }
}


export default connect(mapPropsToState,mapDispatchToProps)(Total);
