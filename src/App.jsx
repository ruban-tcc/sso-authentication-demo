
import keycloak from "./keycloak";

function App() {
  const handleLogin = () => {
    keycloak.login();
  };

  return (
    <div className="container">
      <h1>SSO Authentication Demo</h1>

      <button onClick={handleLogin}>
        Login with Keycloak
      </button>
    </div>
  );
}

export default App;
