import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
        const token = localStorage.getItem('token');
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.error('Fetch users error:', err.response?.data || err.message);
        setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="border-b py-2">
              <span className="font-medium">{user.username}</span> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;