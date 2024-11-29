import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profilePage/ProfilePage";
import UsersPage from "./pages/users/UsersPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Página de perfil */}
        <Route path="/users" element={<UsersPage />} />
      </Routes>
      <Routes>
        {/* Página de perfil */}
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
