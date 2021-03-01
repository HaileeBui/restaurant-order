import React, {useReducer} from 'react';

const FoodContext = React.createContext();

const initialState = [];
const reducer = ((state, action) => {
  switch(action.type) {
    case "ADD" :
      return [action.payload, ...state];
    case "RESET":
      return initialState;
    default:
      return [];
  }
})

const FoodProvider = (props) => {
  let [state, dispatch] = useReducer(reducer,initialState);

  //add item to list
  const addOrder = (item) => {
    dispatch({
      type: "ADD",
      payload: item
    })
  };

  //reset list to empty array
  const resetOrder = () => {
    dispatch({
      type: "RESET",
      })
  };
  return (
    <FoodContext.Provider value={{orders:state, addOrder, resetOrder}}>
      {props.children}
    </FoodContext.Provider>
  )
}

export {FoodContext, FoodProvider};
