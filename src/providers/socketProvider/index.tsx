import React, {FC, useEffect, useState, useMemo} from 'react';
import {initSocketConnection} from '../../utils/sockets';
import SocketProviderContext from './context';

const SocketProvider: FC<any> = ({children}) => {
  const [socketInstance, setSocket] = useState<any>();

  useEffect(() => {
    setSocket(initSocketConnection());
  }, []);

  const contextValue = useMemo(() => {
    return {
      socket: socketInstance,
    };
  }, [socketInstance]);

  return (
    <SocketProviderContext.Provider value={contextValue}>
      {children}
    </SocketProviderContext.Provider>
  );
};

export default SocketProvider;
