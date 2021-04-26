export const INITIAL_CAR = 'INITIAL_CAR';
export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature=(name)=>{
    return {type:ADD_FEATURE, payload:name}
}

export const initialCar = newCar=>{
    return {type:INITIAL_CAR, payload:newCar}
}