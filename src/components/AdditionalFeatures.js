
import AdditionalFeature from './AdditionalFeature';
import React, { useState} from 'react';
import { connect } from "react-redux";
import {initialCar} from '../actions/carFeatureAction'

const AdditionalFeatures = props => {
  const [additionalFeatures]= useState(props)
  
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapPropsToState=(state)=>{
  
  return {
    additionalFeatures: state.additionalFeatures
    
  }

}

const mapDispatchToProps=(dispatch)=>{
  return {
    initialCar: additionalFeatures => dispatch(initialCar(additionalFeatures))
  }
}


export default connect(mapPropsToState,mapDispatchToProps)(AdditionalFeatures);
