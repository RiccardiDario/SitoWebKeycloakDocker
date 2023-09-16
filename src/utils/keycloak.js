import Keycloak from 'keycloak-js';

const kc = new Keycloak({
    url: "http://localhost:8080",
    realm: "react-keycloak",
    clientId: "myclient",
});

try {
    const authenticated = await kc.init({onLoad: 'check-sso'});
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}

export default kc;