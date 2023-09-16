import {createBrowserRouter} from "react-router-dom";
import PrivateRoute from './PrivateRoute.tsx';
import Homepage from '../pages/Homepage/Homepage.jsx';
import App from '../pages/App/App.jsx'
import logoutloading from './logoutloading.tsx';

let Rotte = createBrowserRouter([
  {
    path: "/",
    Component: Homepage
  },
  { 
    path: "/login",
    Component: Homepage,
    loader: PrivateRoute
   
  },
  { 
    path: "/logout",
    Component: Homepage,
    loader: logoutloading
   
  },
  {
    path: "/room",
    Component: App,
    loader: PrivateRoute
  }]);

export default Rotte;
