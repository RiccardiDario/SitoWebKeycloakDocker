import kc from '../utils/keycloak';
import type { LoaderFunctionArgs } from "react-router-dom";

function PrivateRoute({ request }: LoaderFunctionArgs) {
  if (!kc.authenticated) {
    const options = {redirectUri: 'http://localhost:8080/',};
    kc.login(options);
  }
return null;
}

export default PrivateRoute;
