
// import store from './store';
// import types from './types';

// const {dispatch, getState, subscribe} = store;
// export const ADD = (message , description) => ({
//   type: types.ADD,
//   message : message , 
//   description: description ,
//   status : "PENDING" ,
//   id:  Math.random() 
// });

// export const DELETE = (id) => ({
//   type: types.DELETE,
//   id
// });

// export const EDIT = () => ({
//   type: types.EDIT,
// });

import store from './store';
import types from './types';

const {dispatch, getState, subscribe} = store;
export const ADD = (message , description) => ({
  type: types.ADD,
  message : message , 
  description: description ,
  status : "PENDING" ,
  id:  Math.random() 
});

export const DELETE = (id) => ({
  type: types.DELETE,
  id : id
});

export const UPDATE = (message , description , id) => ({
  type: types.UPDATE,
  message : message , 
  description: description ,
  status : "PENDING" ,
  id: id 
});

// subscribe(() => {
//   console.log('hi', store.getState());
// });

// dispatch({
//   type: types.INCREMENT,
//   payload: {
//     description: '1',
//   },
// });

// dispatch({
//   type: types.DECREMENT,
//   payload: {
//     description: '1',
//   },
// });

// console.log(getState());