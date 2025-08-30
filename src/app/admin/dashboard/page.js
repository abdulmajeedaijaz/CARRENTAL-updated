'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../../../components/Layout';
import UserTable from '../../../../components/UserTable';

export default function AdminDashboard() {
  // ... (same dashboard code as before)
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      router.push('/login');
      return;
    }

    // Fetch users data
    const fetchUsers = async () => {
      try {
        // In a real app, this would be an API call to your backend
        const mockUsers = [
          { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer' },
          { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Hoster' },
          { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Customer' },
          { id: 5, name: 'Michael Wilson', email: 'michael@example.com', role: 'Customer' },
        ];
        setUsers(mockUsers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  if (loading) {
    return (
      <Layout onLogout={handleLogout}>
        <div className="loading">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout onLogout={handleLogout}>
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-content">
          <UserTable users={users} />
        </div>
      </div>
    </Layout>
  );
}