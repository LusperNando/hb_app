import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './AuthContext.jsx';
import { Auth0Provider } from '@auth0/auth0-react'; // Ensure this import is correct

const domain = "dev-8fjby26ahhkdq2tv.us.auth0.com";
const clientId = "L4HLlDKsPg6Gkktjs3Y8hDlPpACwBUHI";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </AuthProvider>
  </StrictMode>
);
