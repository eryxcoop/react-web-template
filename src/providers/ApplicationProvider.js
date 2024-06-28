import React from 'react';

export const ApplicationContext = React.createContext(null);

export const ApplicationProvider = ({ application, children }) => (
  <ApplicationContext.Provider value={application}>{children}</ApplicationContext.Provider>
);

export const useApplication = () => React.useContext(ApplicationContext);
