import * as React from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import Application from './app/Application';
import { ApplicationProvider } from './providers/ApplicationProvider';
import AppRouter from './routers/AppRouter';
import { observer } from 'mobx-react';
import darkTheme from './themes/darkTheme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [application, setApplicationInstance] = useState();

  useEffect(() => {
    const currentApplication = new Application();
    currentApplication.load().then(() => {
      setApplicationInstance(currentApplication);
    });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {application && application.loaded && (
        <ApplicationProvider application={application}>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <AppRouter />
        </ApplicationProvider>
      )}
    </ThemeProvider>
  );
}

export default observer(App);
