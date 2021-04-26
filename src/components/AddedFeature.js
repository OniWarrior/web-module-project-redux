
import React, { useState} from 'react';
import { connect } from "react-redux";
import {initialCar} from '../actions/carFeatureAction'

const AddedFeature = props => {
  const[feature] = useState(props)
  console.log(feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">Remove</button>
      {feature.name}
    </li>
  );
};

const mapPropsToState=(state)=>{
  
  return {
    feature: state.car.feature
    
  }

}

const mapDispatchToProps=(dispatch)=>{
  return {
    initialCar: addedFeature => dispatch(initialCar(addedFeature))
  }
}


export default connect(mapPropsToState,mapDispatchToProps)(AddedFeature);
