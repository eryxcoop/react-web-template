import {useApplication} from '../providers/ApplicationProvider';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFoundScreen from '../screens/NotFoundScreen';
import DashboardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';
import PatientsListScreen from '../screens/GenericScreen';
import CreatePatientScreen from '../screens/CreatePatientScreen';
import LoginScreen from '../screens/LoginScreen';
import * as React from 'react';
import {observer} from 'mobx-react';
import NewMedicalConsultationWizardScreen
  from "../screens/medicalConsultationWizard/NewMedicalConsultationWizardScreen";
import MedicalConsultationScreen from "../screens/MedicalConsultationScreen";

function AppRouter() {
  const application = useApplication();
  const authenticatedRoutes = createBrowserRouter([
    {
      path: '*',
      element: <NotFoundScreen/>,
    },
    {
      path: '/',
      element: <DashboardScreen/>,
      children: [
        {
          path: '',
          element: <HomeScreen/>,
        },
        {
          path: 'patients',
          element: <PatientsListScreen/>,
        },
        {
          path: 'medical_consultations/:id',
          element: <MedicalConsultationScreen/>,
        },
        {
          path: 'patients/new',
          element: <CreatePatientScreen/>,
        },
        {
          path: 'patients/new-consultation',
          element: <NewMedicalConsultationWizardScreen/>,
        },
      ],
    }
  ]);
  const unauthenticatedRoutes = createBrowserRouter([
    {
      path: '*',
      element: <LoginScreen/>,
    }
  ]);


  const routes = application.userIsLoggedIn ? authenticatedRoutes : unauthenticatedRoutes;

  return <RouterProvider router={routes}/>;
}

export default observer(AppRouter);