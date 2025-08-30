'use client'
import Layout from '../../../../components/Layout';
import { useRouter } from 'next/navigation';

export default function Billing() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <Layout onLogout={handleLogout}>
      <div className="dashboard-container">
        <h1>Billing Management</h1>
        <div className="dashboard-content">
          <p>Billing content will be displayed here.</p>
          {/* Add your billing table/content here */}
        </div>
      </div>
    </Layout>
  );
}