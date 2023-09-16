import kc from '../utils/keycloak';
import type { LoaderFunctionArgs } from "react-router-dom";

function logoutloader({ request }: LoaderFunctionArgs) {
  if (kc.authenticated) {
    const options = {redirectUri: 'http://localhost:3000/',};
    kc.logout(options);
   
  }
return null;
}

export default logoutloader;