import React, { createContext, useState } from 'react';


export const UserContext = createContext({});

const UserProvider = ( props ) => {
  const { children } = props;
  // const contextName = "じゃけぇ";
const [userInfo, setUserInfo] = useState(null);


  return(
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;