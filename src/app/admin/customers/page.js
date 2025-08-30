'use client'
import Layout from '../../../../components/Layout';
import { useRouter } from 'next/navigation';

export default function Customers() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <Layout onLogout={handleLogout}>
      <div className="dashboard-container">
        <h1>Customers Management</h1>
        <div className="dashboard-content">
          <p>Customers content will be displayed here.</p>
          {/* Add your customers table/content here */}
        </div>
      </div>
    </Layout>
  );
}