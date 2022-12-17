import React, { useState, useEffect } from "react";
import EventApi from './eventApi';

export const Context = React.createContext();
export function ContextController({ children }) {
  let intialState = {
    cardData: EventApi,
    search_query :"",
    
  };

  const [state, setState] = useState(intialState);
  return (
  <>
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    </>
  );
}
 