import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "../config"

const Auth0ProviderWithHistory = ( {children} : any) => {
    const domain = config.REACT_APP_AUTH0_DOMAIN;
    const clientId = config.REACT_APP_AUTH0_CLIENT_ID;

    const history = useHistory();

    const onRedirectCallback = (appState: any) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;