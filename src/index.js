import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';


import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from "redux";
import {carFeatureReducer} from './reducer/carReducer'
import { Provider } from "react-redux";



import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const store=createStore(carFeatureReducer)

const App = () => {
  
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total  />
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, rootElement
  );
