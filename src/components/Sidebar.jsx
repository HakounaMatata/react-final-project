import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/users" className="hover:text-blue-400">
            Users
          </Link>
        </li>
        <li>
          <Link to="/notes" className="hover:text-blue-400">
            Notes
          </Link>
        </li>
        <li>
          <Link to="/analytics" className="hover:text-blue-400">
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/weather" className="hover:text-blue-400">
            Weather
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
