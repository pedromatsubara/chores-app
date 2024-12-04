import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/profilePage/ProfilePage";
import UsersPage from "./pages/users/UsersPage";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box sx={{ ml: 250, p: 3 }}>
        <Routes>
          <Route path="/family" element={<UsersPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;