
import AddedFeature from './AddedFeature';
import React, { useState} from 'react';
import { connect } from "react-redux";
import {initialCar} from '../actions/carFeatureAction'

const AddedFeatures = props => {
  const[addedFeatures] = useState(props)
  
  return (
    <div className="content">
      <h6>Added features:</h6>
      {addedFeatures.length ? (
        <ol type="1">
          {addedFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapPropsToState=(state)=>{
  
  return {
    features: state.car.features
    
  }

}

const mapDispatchToProps=(dispatch)=>{
  return {
    initialCar: addedFeatures => dispatch(initialCar(addedFeatures))
  }
}


export default connect(mapPropsToState,mapDispatchToProps)(AddedFeatures);