
// import types from './types';

// const INITIAL_STATE = {
//     Task : []
// };

// const reducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case types.ADD:
//           return  {
//             ...state , 
//             todo : [ 
//               ...state.todo,
//               {
//                 message: action.message,
//                 description : action.description ,
//                 status:action.status ,
//                 id: action.id 
//               }
//             ]

//            } ;
//         // case types.DELETE:
//         //    return {
//         //       ...state, count: state.count - 1,
//         //    };
//         //    case types.EDIT:
//         //    return {
//         //       ...state, count: state.count - 1,
//         //    };
//          default: return state;
//     }
// };
// export default reducer;




import types from './types';

const INITIAL_STATE = {
    Task : []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD:
          return  {
            ...state , 
            Task : [ 
              ...state.Task,
              {
                message: action.message,
                description : action.description ,
                status:action.status ,
                id: action.id 
              }
            ]

           } ;
        // case types.DELETE:
        //    return {
        //       ...state, count: state.count - 1,
        //    };
        //    case types.EDIT:
        //    return {
        //       ...state, count: state.count - 1,
        //    };
         default: return state;
    }
};
export default reducer;
