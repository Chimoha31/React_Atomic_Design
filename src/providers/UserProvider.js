import React, { createContext } from 'react';


export const UserContext = createContext({});


const UserProvider = ( props ) => {
  const { children } = props;
  const contextName = "じゃけぇ";

  return(
    <UserContext.Provider value={{ contextName }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;