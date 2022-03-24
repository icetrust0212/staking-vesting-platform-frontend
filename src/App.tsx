import './App.css';
import AppLayout from './layouts/AppLayout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import Roost from './pages/Roost';
import "./assets/styles/style.css";
import "./assets/styles/fonts.css";

function App() {
  return (
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/roost" element={<Roost />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
  );
}

export default App;
