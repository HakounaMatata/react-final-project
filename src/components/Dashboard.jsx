import Sidebar from "./Sidebar";
import UserCard from "./UserCard";
import NotesCard from "./NotesCard";
import AnalyticsCard from "./AnalyticsCard";
import WeatherCard from "./WeatherCard";

const Dashboard = () => {
  const user = localStorage.getItem("user");

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Welcome, {user}</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <UserCard />
          <NotesCard />
          <AnalyticsCard />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
