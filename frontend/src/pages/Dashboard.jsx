import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, logout } = useAuth(); // Get user info & logout function
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {user ? (
        <div>
          <p>Welcome, <strong>{user.email}</strong>!</p>

          <h2>Your Rented Items</h2>
          {/* Later, fetch rented items from Firestore */}
          <ul>
            <li>Item 1 - Rent Active</li>
            <li>Item 2 - Rent Expired</li>
          </ul>

          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;
