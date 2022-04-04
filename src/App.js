import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />}></Route>
          <Route exact path="/home" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
