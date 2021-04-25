const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };


  export const carFeatureReducer =( state = initialState,action) =>{
      switch(action.type){
          case("ADD_FEATURE"):
            const newFeature = {name: action.payload,price:0 }
            switch(newFeature.name){
                case('V-6 engine'):
                  newFeature.price = 1500;
                  break;
                case('Racing detail package'):
                  newFeature.price = 1500;
                  break;
                case('Premium sound system'):
                  newFeature.price = 500;
                  break;
                case('Rear spoiler'):
                  newFeature.price = 250;
            }
            return {...state,additionalFeatures:[...state.additionalFeatures,newFeature]};
            default:
                return state;
      }
  }