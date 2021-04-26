import React from 'react';
import { addFeature } from "../actions/carFeatureAction";
import { connect } from "react-redux";

class AdditionalFeature extends React.Component {
  state={
    newFeature:{}
  };
  
  handleChanges = e => {
    this.setState({ newFeature: e.target.value });
    
    addFeature(this.state.newFeature)
  };

  render() {
    const features = this.props.feature;
    const addFeature = this.props.addFeature;
    
    
    return(
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={this.handleChanges}>Add</button>
      {features.name} (+{features.price})
    </li>
    )
  }
};

const mapState = (state) => {
  
  return {
    features: state.car.features
  }
}

const mapDispatch = { addFeature }; 

export default connect(mapState, mapDispatch)(AdditionalFeature);
