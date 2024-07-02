import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
