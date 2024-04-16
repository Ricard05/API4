import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  RegisterPage,
  RegisterProduct,
  RegisterProvider,
  LoginPage,
} from "./pages/Pages.jsx";
import ExampleContextProvider from "./context/ExampleContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <ExampleContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/register/user" element={<RegisterPage />}></Route>
          <Route path="/register/product" element={<RegisterProduct />}></Route>
          <Route
            path="/register/provider"
            element={<RegisterProvider />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ExampleContextProvider>
  );
}

export default App;
