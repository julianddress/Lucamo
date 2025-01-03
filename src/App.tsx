import "./App.css";
import "./input.css";
import "../src/assets/css/base.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import NotFound from "./pages/404.jsx";
import { AuthProvider  } from "./Context/AuthContext.jsx";
import Loading from "./Components/Loading/Loading.jsx";

function AppContent() {
  
  return (
    <div className="App">
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent /> {/* Aquí es donde usas el contexto de AuthProvider */}
      </AuthProvider>
    </Router>
  );
}

export default App;
