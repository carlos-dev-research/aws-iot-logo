import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from "react-oidc-context";
import { cognitoAuthConfig } from './Cognito.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig} >
      <App />
    </AuthProvider>
  </StrictMode>,
)
