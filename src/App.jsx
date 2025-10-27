import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import UserCard from "./components/UserCard";
import UserDetails from "./components/UserDetails";
import NotesCard from "./components/NotesCard";
import AnalyticsCard from "./components/AnalyticsCard";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<UserCard />} />
      <Route path="/users/:id" element={<UserDetails />} />{" "}
      <Route path="/notes" element={<NotesCard />} />
      <Route path="/analytics" element={<AnalyticsCard />} />
      <Route path="/weather" element={<WeatherCard />} />
    </Routes>
  );
}

export default App;
