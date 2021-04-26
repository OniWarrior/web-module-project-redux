import React, { useState} from 'react';
import { connect } from "react-redux";
import {initialCar} from '../actions/carFeatureAction'


const Header = (props) => {
  const[newCar] = useState(props);
  
  return (
    <>
      <figure className="image is-128x128">
        <img src={newCar.image} alt={newCar.name} />
      </figure>
      <h2>{newCar.name}</h2>
      <p>Amount: ${newCar.price}</p>
    </>
  );
};

const mapPropsToState=(state)=>{
  return {
    name:state.car.name,
    image:state.car.image,
    price:state.car.price
  }

}

const mapDispatchToProps=(dispatch)=>{
  return {
    initialCar: newCar => dispatch(initialCar(newCar))
  }
}


export default connect(mapPropsToState,mapDispatchToProps)(Header);