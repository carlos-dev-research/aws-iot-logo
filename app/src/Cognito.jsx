// Cognito.jsx

// Cognito Configuration for Client Auth
export const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_enq2ZXvMP",
  client_id: "jnosjc7pegvm9hsaj4llhmak6",
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
  response_type: "code",
  scope: "phone openid email",
};

// Redirect Main Page on Log out
export const signOutRedirect = () => {
    const clientId = "jnosjc7pegvm9hsaj4llhmak6";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://<user pool domain>";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

